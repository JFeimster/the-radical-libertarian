# Lightweight internal link audit for static HTML files.
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$HtmlFiles = Get-ChildItem -Path . -Recurse -Filter *.html |
  Where-Object { $_.FullName -notmatch "\\_backup-before-" }

$Missing = @()

foreach ($File in $HtmlFiles) {
  $RelFile = $File.FullName.Replace($Root + '\','')
  $Html = Get-Content $File.FullName -Raw

  $Matches = [regex]::Matches($Html, '(?:href|src)="([^"]+)"')

  foreach ($Match in $Matches) {
    $Link = $Match.Groups[1].Value

    if (
      $Link.StartsWith("http") -or
      $Link.StartsWith("mailto:") -or
      $Link.StartsWith("#") -or
      $Link.StartsWith("data:") -or
      $Link.StartsWith("javascript:")
    ) {
      continue
    }

    $Clean = $Link.Split("#")[0].Split("?")[0]
    if ([string]::IsNullOrWhiteSpace($Clean)) { continue }

    $BaseDir = Split-Path $File.FullName
    $TargetPath = Join-Path $BaseDir $Clean

    if ($Clean.EndsWith("/")) {
      $TargetPath = Join-Path $TargetPath "index.html"
    }

    if (-not (Test-Path $TargetPath)) {
      $Missing += [PSCustomObject]@{
        Source = $RelFile
        Link = $Link
        Expected = $TargetPath.Replace($Root + '\','')
      }
      Write-Host "MISSING $RelFile -> $Link" -ForegroundColor Red
    }
  }
}

if ($Missing.Count -gt 0) {
  $Report = @("# Broken Link Audit", "", "Missing internal links found:", "")
  foreach ($Item in $Missing) {
    $Report += "- Source: `$($Item.Source)` → Link: `$($Item.Link)` → Expected: `$($Item.Expected)`"
  }
  Set-Content -Path "reports/link-audit.md" -Value ($Report -join "`n") -Encoding UTF8
  Write-Host "`nFAILED: $($Missing.Count) missing internal link(s). Report updated: reports/link-audit.md" -ForegroundColor Red
  exit 1
}

Set-Content -Path "reports/link-audit.md" -Value "# Broken Link Audit`n`nNo missing internal links found by local lightweight audit." -Encoding UTF8
Write-Host "`nNo missing internal links found." -ForegroundColor Green

# Launch-readiness checklist runner.
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$RequiredFiles = @(
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest",
  "404.html",
  "search.html",
  "sitemap.html",
  "newsletter.html",
  "podcast.html",
  "essays.html",
  "tools/index.html",
  "resources/index.html"
)

$Missing = @()

foreach ($File in $RequiredFiles) {
  if (Test-Path $File) {
    Write-Host "OK   $File" -ForegroundColor Green
  } else {
    Write-Host "MISS $File" -ForegroundColor Red
    $Missing += $File
  }
}

if ($Missing.Count -gt 0) {
  Write-Host "`nLaunch check failed. Missing $($Missing.Count) required file(s)." -ForegroundColor Red
  exit 1
}

Set-Content -Path "reports/launch-readiness.md" -Value "# Launch Readiness`n`nRequired static files are present. Remaining launch blockers are external URL/form wiring tasks." -Encoding UTF8
Write-Host "`nLaunch check passed." -ForegroundColor Green

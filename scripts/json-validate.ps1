# Validate all JSON files in the repo.
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$JsonFiles = Get-ChildItem -Path . -Recurse -Filter *.json |
  Where-Object { $_.FullName -notmatch "\\_backup-before-" }

$Bad = @()

foreach ($File in $JsonFiles) {
  try {
    Get-Content $File.FullName -Raw | ConvertFrom-Json | Out-Null
    Write-Host "JSON OK  $($File.FullName.Replace($Root + '\',''))" -ForegroundColor Green
  } catch {
    Write-Host "JSON BAD $($File.FullName.Replace($Root + '\',''))" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    $Bad += $File.FullName
  }
}

if ($Bad.Count -gt 0) {
  Write-Host "`nFAILED: $($Bad.Count) invalid JSON file(s)." -ForegroundColor Red
  exit 1
}

Write-Host "`nAll JSON files valid." -ForegroundColor Green

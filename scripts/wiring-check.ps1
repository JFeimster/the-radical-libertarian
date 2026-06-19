$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$Required = @(
  "data/provider-status.json",
  "data/url-wiring.json",
  "data/form-provider-map.json",
  "data/embed-provider-map.json",
  "data/provider-checklist.json",
  "wiring.html",
  "forms.html",
  "embeds.html",
  "provider-status.html"
)

$Missing = @()

foreach ($Path in $Required) {
  if (Test-Path $Path) {
    Write-Host "OK   $Path" -ForegroundColor Green
  } else {
    Write-Host "MISS $Path" -ForegroundColor Red
    $Missing += $Path
  }
}

if ($Missing.Count -gt 0) {
  Write-Host "`nWiring check failed." -ForegroundColor Red
  exit 1
}

Write-Host "`nWiring scaffold is present." -ForegroundColor Green

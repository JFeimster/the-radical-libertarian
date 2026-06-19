$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$Required = @(
  "data/archive-import-queue.json",
  "data/content-expansion-pipeline.json",
  "data/topic-pipeline.json",
  "archive/import-queue.html",
  "archive/youtube-import-queue.html",
  "archive/spotify-import-queue.html",
  "archive/instagram-import-queue.html"
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
  Write-Host "`nImport queue check failed." -ForegroundColor Red
  exit 1
}

Write-Host "`nImport queue scaffold is present." -ForegroundColor Green

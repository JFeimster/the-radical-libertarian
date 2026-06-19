$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$RequiredSlots = @(
  "assets/production/hero/home-hero-slot.svg",
  "assets/production/social/home-og-slot.svg",
  "assets/production/thumbnails/youtube-thumbnail-slot.svg",
  "assets/production/square/profile-slot.svg",
  "assets/production/covers/notion-cover-slot.svg"
)

$Missing = @()

foreach ($Slot in $RequiredSlots) {
  if (Test-Path $Slot) {
    Write-Host "OK   $Slot" -ForegroundColor Green
  } else {
    Write-Host "MISS $Slot" -ForegroundColor Red
    $Missing += $Slot
  }
}

if ($Missing.Count -gt 0) {
  Write-Host "`nMissing required image slot(s)." -ForegroundColor Red
  exit 1
}

Write-Host "`nAll required image slots exist." -ForegroundColor Green

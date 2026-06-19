$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$Images = Get-ChildItem -Path "assets" -Recurse -Include *.svg,*.png,*.jpg,*.jpeg,*.webp -File |
  Where-Object { $_.FullName -notmatch "\\_backup-before-" }

$Report = @("# Asset Inventory", "", "Generated: $(Get-Date)", "", "## Files", "")

foreach ($Image in $Images) {
  $Rel = $Image.FullName.Replace($Root + '\','')
  $Kb = [math]::Round($Image.Length / 1KB, 2)
  $Report += "- `$Rel` — $Kb KB"
}

Set-Content -Path "reports/asset-inventory.md" -Value ($Report -join "`n") -Encoding UTF8
Write-Host "Asset inventory written to reports/asset-inventory.md" -ForegroundColor Green

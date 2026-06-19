$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$Status = Get-Content "data/provider-status.json" -Raw | ConvertFrom-Json
Write-Host "`nProvider Status" -ForegroundColor Cyan

foreach ($Provider in $Status.providers) {
  $Value = if ($Provider.url) { $Provider.url } elseif ($Provider.provider) { $Provider.provider } else { "not set" }
  Write-Host "$($Provider.name): $($Provider.status) — $Value"
}

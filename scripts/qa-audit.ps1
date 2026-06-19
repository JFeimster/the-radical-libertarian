# Run Batch 14 local QA audit.
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

Write-Host "`nRunning site inventory..." -ForegroundColor Cyan
& "$PSScriptRoot\site-inventory.ps1"

Write-Host "`nRunning JSON validation..." -ForegroundColor Cyan
& "$PSScriptRoot\json-validate.ps1"

Write-Host "`nRunning internal link audit..." -ForegroundColor Cyan
& "$PSScriptRoot\link-audit.ps1"

Write-Host "`nQA audit complete." -ForegroundColor Green

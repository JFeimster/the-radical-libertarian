# Generate static site inventory.
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$HtmlCount = (Get-ChildItem -Path . -Recurse -Filter *.html | Where-Object { $_.FullName -notmatch "\\_backup-before-" }).Count
$JsonCount = (Get-ChildItem -Path . -Recurse -Filter *.json | Where-Object { $_.FullName -notmatch "\\_backup-before-" }).Count
$MdCount = (Get-ChildItem -Path . -Recurse -Filter *.md | Where-Object { $_.FullName -notmatch "\\_backup-before-" }).Count
$JsCount = (Get-ChildItem -Path . -Recurse -Filter *.js | Where-Object { $_.FullName -notmatch "\\_backup-before-" }).Count
$SvgCount = (Get-ChildItem -Path . -Recurse -Filter *.svg | Where-Object { $_.FullName -notmatch "\\_backup-before-" }).Count

$Inventory = [ordered]@{
  generated = (Get-Date).ToString("s")
  counts = [ordered]@{
    html = $HtmlCount
    json = $JsonCount
    markdown = $MdCount
    javascript = $JsCount
    svg = $SvgCount
  }
}

$Inventory | ConvertTo-Json -Depth 5 | Set-Content -Path "data/site-inventory.json" -Encoding UTF8

$Report = @"
# Site Inventory

Generated: $(Get-Date)

## Counts

- HTML: $HtmlCount
- JSON: $JsonCount
- Markdown: $MdCount
- JavaScript: $JsCount
- SVG: $SvgCount
"@

Set-Content -Path "reports/qa-report.md" -Value $Report -Encoding UTF8

Write-Host "Inventory updated: data/site-inventory.json" -ForegroundColor Green
Write-Host "Report updated: reports/qa-report.md" -ForegroundColor Green

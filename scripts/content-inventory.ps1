$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$EssayPages = Get-ChildItem "essays" -Filter *.html -ErrorAction SilentlyContinue
$PodcastPages = Get-ChildItem "podcast" -Filter *.html -ErrorAction SilentlyContinue
$ArchivePages = Get-ChildItem "archive" -Filter *.html -ErrorAction SilentlyContinue
$ToolPages = Get-ChildItem "tools" -Filter *.html -ErrorAction SilentlyContinue

$Report = @"
# Content Inventory

Generated: $(Get-Date)

- Essay pages: $($EssayPages.Count)
- Podcast pages: $($PodcastPages.Count)
- Archive pages: $($ArchivePages.Count)
- Tool pages: $($ToolPages.Count)
"@

Set-Content -Path "reports/content-inventory.md" -Value $Report -Encoding UTF8
Write-Host "Content inventory written to reports/content-inventory.md" -ForegroundColor Green

param(
  [Parameter(Mandatory=$true)][string]$Type,
  [Parameter(Mandatory=$true)][string]$Slug,
  [Parameter(Mandatory=$true)][string]$Title
)

$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

switch ($Type.ToLower()) {
  "essay" { $Folder = "essays"; $Template = "templates/essay-template.html" }
  "episode" { $Folder = "podcast"; $Template = "templates/podcast-episode-template.html" }
  "transcript" { $Folder = "podcast"; $Template = "templates/transcript-template.html" }
  "clip" { $Folder = "podcast"; $Template = "templates/clip-template.html" }
  default {
    Write-Host "Unknown type. Use essay, episode, transcript, or clip." -ForegroundColor Red
    exit 1
  }
}

$Path = Join-Path $Folder "$Slug.html"

if (Test-Path $Path) {
  Write-Host "File already exists: $Path" -ForegroundColor Yellow
  exit 1
}

$Html = Get-Content $Template -Raw
$Html = $Html -replace "<title>.*?</title>", "<title>$Title | The Radical Libertarian</title>"
$Html = $Html -replace "<h1>.*?</h1>", "<h1>$Title</h1>"

Set-Content -Path $Path -Value $Html -Encoding UTF8
Write-Host "Created stub: $Path" -ForegroundColor Green

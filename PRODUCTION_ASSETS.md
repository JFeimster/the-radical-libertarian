# Production Assets

Batch 15 creates production asset slots and QA rules.

## Important Rule

Do not inject generated images into `index.html` or other layouts until they have been tested locally.

## Current Production Slot Folders

- `assets/production/hero/`
- `assets/production/social/`
- `assets/production/thumbnails/`
- `assets/production/square/`
- `assets/production/covers/`

## Local Checks

```powershell
& ".\scripts\asset-inventory.ps1"
& ".\scripts\image-slot-check.ps1"
```

# Image Replacement Plan

## Safe Replacement Workflow

1. Generate image externally.
2. Export to the correct size.
3. Save into `assets/production/...`.
4. Run local server.
5. Test image directly.
6. Test page where image will be used.
7. Only then update HTML or metadata.

## Do Not Repeat Past Mistakes

- Do not inject oversized images into homepage sections.
- Do not remove prompt lists or asset TODOs.
- Do not replace all image references blindly.
- Do not use fake official logos/seals.
- Do not use platform logos unless intentional and legally safe.

## Recommended Final Files

- `assets/production/hero/home-hero.webp`
- `assets/production/social/home-og.png`
- `assets/production/thumbnails/youtube-thumbnail.png`
- `assets/production/square/profile.png`
- `assets/production/covers/notion-cover.png`

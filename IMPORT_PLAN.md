# Import Plan

This document tracks recovery of older content from previously used platforms.

## Source Platforms

- YouTube: The Radical Libertarian Podcast
- Spotify: The Radical Libertarian on Spotify
- Instagram: @radicallibertarian
- External resource: Libertarian National / LP.org — https://lp.org/

## Import Goals

1. Recover old content URLs.
2. Capture titles, dates, descriptions, and topic tags.
3. Turn old episodes and posts into static archive pages.
4. Repurpose strong ideas into essays, clips, quote cards, and newsletter material.
5. Route every platform back to the main site.

## YouTube Import Checklist

- [ ] Confirm channel URL
- [ ] Confirm playlist URL
- [ ] Add episode URLs
- [ ] Pull episode titles
- [ ] Pull episode descriptions
- [ ] Identify best clips
- [ ] Add archive entries to `data/archive-imports.json`
- [ ] Add episode metadata to `data/podcast-episodes.json`

## Spotify Import Checklist

- [ ] Confirm Spotify show URL
- [ ] Add episode URLs
- [ ] Pull episode titles
- [ ] Pull summaries
- [ ] Add listen links to `podcast/listen.html`
- [ ] Add episode metadata to `data/podcast-episodes.json`

## Instagram Import Checklist

- [ ] Confirm profile URL
- [ ] Identify old themes and post categories
- [ ] Recover captions where useful
- [ ] Turn strong captions into quote cards
- [ ] Turn recurring themes into essay seeds
- [ ] Update `archive/old-instagram-posts.html`

## Archive Metadata Fields

Recommended fields:

```json
{
  "source": "YouTube",
  "title": "Episode or post title",
  "url": "",
  "date": "",
  "type": "episode",
  "topics": [],
  "status": "needs-review",
  "targetPage": ""
}
```

## Editorial Rule

Archive content should be useful, searchable, and clearly labeled. Do not pretend recovered content is new content. Repurpose it honestly.

# Schemas

JSON schemas for The Radical Libertarian static-site data files.

## Purpose

These schemas keep AI-assisted publishing and manual edits from turning the repo into a junk drawer wearing a trench coat.

## Current Schemas

- `essay.schema.json`
- `podcast-episode.schema.json`
- `resource.schema.json`
- `quote.schema.json`
- `platform-link.schema.json`
- `glossary-term.schema.json`
- `tool.schema.json`
- `manifesto.schema.json`
- `site-page.schema.json`
- `archive-item.schema.json`

## Usage

Use these schemas when creating or validating files in:

- `data/essays.json`
- `data/podcast-episodes.json`
- `data/resources.json`
- `data/quotes.json`
- `data/platform-links.json`
- `data/glossary.json`
- `data/tools.json`
- `data/archive-imports.json`

## Status Values

Prefer controlled status fields:

- `planned`
- `draft`
- `review`
- `active`
- `published`
- `archived`
- `needs-url`
- `needs-review`
- `external-resource`

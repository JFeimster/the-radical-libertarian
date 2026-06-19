# Governance

Operational rules for The Radical Libertarian repo.

## Static First

This site should stay static unless there is a clear reason to add complexity.

Default stack:

- HTML
- CSS
- JavaScript
- JSON
- Markdown

Avoid unnecessary frameworks, build steps, and dependency rituals.

## File Rules

- Use lowercase filenames.
- Use hyphens, not spaces.
- Keep root pages intentional.
- Put topic pages in folders.
- Put structured data in `data/`.
- Put schemas in `schemas/`.
- Put SEO config in `seo/`.
- Put reusable visual assets in `assets/`.

## Content Rules

- Be sharp, not sloppy.
- Be funny, not reckless.
- Be independent, not fake-official.
- Be provocative, not legally stupid.
- Be practical, not performative.

## External Link Rules

- Do not invent URLs.
- Label unknown links as `needs-url`.
- Label external resources clearly.
- Do not imply official affiliation without proof.

## LP.org Boundary

The Radical Libertarian may link to LP.org as an external public resource.

It must not claim to speak for Libertarian National, LP.org, affiliates, candidates, or any party organization unless explicit authorization exists.

## Tool Disclaimer

Interactive tools are satire, education, and self-reflection. They are not legal, financial, political, or professional advice.

## Archive Rules

Older platform content should be labeled as recovered, archived, repurposed, or imported.

Do not pretend old content is new.

## Git Rules

Before pushing:

```bash
git status
git pull origin main --rebase
git add .
git commit -m "Clear commit message"
git push origin main
```

Do not force push unless you know exactly why.

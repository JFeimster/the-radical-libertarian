# TRL Content + JSON Ideas Backlog

Working planning doc for **The Radical Libertarian**.

These are proposed JSON files, Markdown/reference docs, future HTML pages, and interactive feature ideas. They are **not implemented data files yet** unless separately created in `/data/`.

## Recommended storage approach

Use a two-layer system:

```txt
docs/
  content-planning/
    TRL-CONTENT-DATA-IDEAS.md
    SOURCE-REGISTRY-PLAN.md
    JSON-BACKLOG.md
    NON-JSON-CONTENT-BACKLOG.md

data/
  _planned/
    json-file-backlog.json
    content-format-backlog.json
```

Best immediate file to save this list:

```txt
docs/content-planning/TRL-CONTENT-DATA-IDEAS.md
```

Optional machine-readable companion later:

```txt
data/_planned/json-file-backlog.json
```

## Status key

| Status | Meaning |
|---|---|
| `idea` | Proposed but not built |
| `planned` | Approved for future build |
| `draft-data` | File exists with placeholder/draft records |
| `verified-data` | File exists and source-verified |
| `published-page` | Has a visible site page |
| `tool-candidate` | Better as an interactive tool than static data |

---

## 20 JSON / structured content ideas

### 1. `data/lp-platform-sections.json`

Purpose: Structure the LP platform into usable sections for pages, issue maps, glossary links, essay prompts, and TRL commentary.

Best sources:
- `https://lp.org/platform-page/`

Suggested fields:

```json
{
  "section_id": "personal-liberty-1-0",
  "platform_number": "1.0",
  "title": "Personal Liberty",
  "parent_section": null,
  "summary": "",
  "plain_english_translation": "",
  "trl_commentary_angle": "",
  "related_issues": [],
  "related_essays": [],
  "related_tools": [],
  "source_url": "https://lp.org/platform-page/",
  "source_type": "official_lp_platform",
  "last_verified": "",
  "status": "idea",
  "notes": ""
}
```

Best format beyond JSON: `platform.html` landing page and `LP_PLATFORM_NOTES.md`.

---

### 2. `data/lp-issues.json`

Purpose: Build a topic/issue library from LP issue pages with TRL framing and internal links.

Best sources:
- `https://lp.org/the-issues/`
- Individual LP issue pages

Suggested fields:

```json
{
  "issue_id": "property-rights",
  "title": "Property Rights",
  "slug": "property-rights",
  "official_summary": "",
  "trl_plain_english_summary": "",
  "core_principle": "",
  "policy_lane": "",
  "emotional_frame": "",
  "opposing_frame": "",
  "related_platform_sections": [],
  "related_terms": [],
  "content_opportunities": {
    "essay": true,
    "tool": true,
    "podcast": true,
    "quote_card": true
  },
  "source_url": "",
  "source_type": "official_lp_issue_page",
  "last_verified": "",
  "status": "idea"
}
```

Best format beyond JSON: `issues.html` issue-card grid and individual issue pages.

---

### 3. `data/lp-candidates-current.json`

Purpose: Directory of current LP candidates listed by LP National, with state/office/filter metadata.

Best sources:
- `https://lp.org/meet-our-candidates/`
- Official campaign sites
- State election offices for ballot verification

Suggested fields:

```json
{
  "candidate_id": "",
  "name": "",
  "state": "",
  "state_abbr": "",
  "office": "",
  "office_level": "local|state|federal",
  "district": "",
  "cycle": null,
  "profile_url": "",
  "campaign_url": "",
  "donate_url": "",
  "social_links": {
    "website": "",
    "x": "",
    "facebook": "",
    "instagram": "",
    "youtube": ""
  },
  "source_url": "https://lp.org/meet-our-candidates/",
  "verification_status": "needs-profile-review",
  "last_verified": "",
  "notes": ""
}
```

Best format beyond JSON: searchable candidate directory page.

---

### 4. `data/state-affiliates.json`

Purpose: State-by-state affiliate directory.

Best sources:
- LP National state affiliate links
- Official state affiliate sites
- State affiliate social/contact pages

Suggested fields:

```json
{
  "state": "",
  "state_abbr": "",
  "affiliate_name": "",
  "website_url": "",
  "contact_url": "",
  "join_url": "",
  "donate_url": "",
  "volunteer_url": "",
  "candidate_url": "",
  "ballot_access_url": "",
  "local_chapters_url": "",
  "social_links": {
    "x": "",
    "facebook": "",
    "instagram": "",
    "youtube": ""
  },
  "status": "needs-verification",
  "source_urls": [],
  "last_verified": "",
  "notes": ""
}
```

Best format beyond JSON: `state-affiliates.html` with cards or US-map UI.

---

### 5. `data/worldwide-libertarian-orgs.json`

Purpose: Global directory of libertarian parties and organizations.

Best sources:
- `https://lp.org/worldwide-libertarian-organizations/`
- Official org websites

Suggested fields:

```json
{
  "org_id": "",
  "name": "",
  "country": "",
  "region": "",
  "type": "political_party|organization|think_tank|student_group|publication",
  "website_url": "",
  "lp_source_url": "https://lp.org/worldwide-libertarian-organizations/",
  "ideological_lane": "libertarian",
  "status": "needs-url-verification",
  "language": "",
  "social_links": {},
  "notes": "",
  "last_verified": ""
}
```

Best format beyond JSON: worldwide liberty map or atlas page.

---

### 6. `data/lpedia-index.json`

Purpose: Source map for LPedia categories and future import queues.

Best sources:
- `https://lpedia.org/wiki/Main_Page`
- LPedia category pages

Suggested fields:

```json
{
  "entry_id": "",
  "title": "",
  "category": "",
  "lpedia_url": "",
  "content_type": "category|article|list|record",
  "use_case": "resource-directory|timeline|glossary|archive",
  "trl_priority": "high|medium|low",
  "possible_outputs": [],
  "verification_needed": true,
  "notes": ""
}
```

Best format beyond JSON: `LPEDIA_IMPORT_PLAN.md`.

---

### 7. `data/libertarian-organizations.json`

Purpose: Directory of libertarian, liberty-adjacent, civil-liberties, free-market, student, legal, and publication orgs.

Best sources:
- `https://lpedia.org/wiki/Category:Organizations`
- Official organization websites
- LP National worldwide organizations page

Suggested fields:

```json
{
  "org_id": "",
  "name": "",
  "type": "student_org|publication|pac|party|community|think_tank|legal_org|historical_org",
  "ideological_lane": "libertarian|classical_liberal|free_market|civil_liberties|mixed",
  "active_status": "active|historical|unknown",
  "website_url": "",
  "lpedia_url": "",
  "official_source_url": "",
  "country": "",
  "state": "",
  "description": "",
  "trl_use_case": [],
  "verification_status": "needs-verification",
  "last_verified": ""
}
```

Best format beyond JSON: resource directory and later network graph.

---

### 8. `data/liberty-reading-list.json`

Purpose: Books, essays, and reading paths.

Best sources:
- `https://github.com/marcodpt/awesome-libertarianism`
- Publisher pages
- Author pages
- Public-domain/free-text sources where applicable

Suggested fields:

```json
{
  "book_id": "",
  "title": "",
  "author": "",
  "year": null,
  "category": "law|economics|state-theory|money|history|philosophy",
  "difficulty": "beginner|intermediate|advanced",
  "reading_path": "starter|money|state-power|anarchism|austrian-economics",
  "summary": "",
  "why_it_matters": "",
  "trl_take": "",
  "source_url": "",
  "public_domain": null,
  "free_text_url": "",
  "purchase_url": "",
  "tags": [],
  "notes": ""
}
```

Best format beyond JSON: reading-path pages.

---

### 9. `data/argument-conversation-flows.json`

Purpose: Branching argument/conversation flows inspired by “Explore Is Taxation Theft.”

Best sources:
- `https://github.com/bitbutter/ExploreIsTaxationTheft`
- TRL original tool scripts and issue framing

Suggested fields:

```json
{
  "flow_id": "is-taxation-theft",
  "title": "Is Taxation Theft?",
  "format": "branching_conversation",
  "topic": "taxation",
  "opening_prompt": "",
  "positions": ["yes", "no", "depends", "not-sure"],
  "nodes": [
    {
      "node_id": "start",
      "speaker": "system",
      "text": "",
      "choices": [
        {
          "label": "",
          "next_node_id": ""
        }
      ]
    }
  ],
  "source_inspiration": "ExploreIsTaxationTheft",
  "source_url": "https://github.com/bitbutter/ExploreIsTaxationTheft",
  "license_notes": "Review repo license before adapting code/content.",
  "trl_tone": "sharp-but-not-dumb",
  "status": "concept"
}
```

Best format beyond JSON: `tools/is-taxation-theft.html`.

---

### 10. `data/issue-to-tool-map.json`

Purpose: Map issues to tools, essays, podcast topics, glossary terms, quote cards, and CTAs.

Best sources:
- LP platform
- LP issues
- Existing TRL essays/tools
- Future content strategy

Suggested fields:

```json
{
  "issue_id": "",
  "issue_title": "",
  "platform_section_ids": [],
  "pain_point": "",
  "trl_frame": "",
  "recommended_tool": {
    "tool_id": "",
    "title": "",
    "status": "existing|planned"
  },
  "recommended_content": {
    "essay": "",
    "podcast_episode": "",
    "clip_hook": ""
  },
  "cta": "",
  "source_urls": []
}
```

Best format beyond JSON: internal-link engine and issue pages.

---

### 11. `data/libertarian-public-figures.json`

Purpose: Fun/shareable directory of self-described, affiliated, issue-aligned, or libertarian-adjacent public figures.

Best sources:
- Direct interviews
- Official websites/social profiles
- Campaign records
- Reliable profiles/articles

Suggested fields:

```json
{
  "person_id": "",
  "name": "",
  "category": "actor|musician|comedian|author|entrepreneur|athlete|politician|academic|media",
  "connection_type": "self-described|candidate|donor|issue-aligned|quoted-libertarian|disputed|adjacent",
  "evidence_summary": "",
  "evidence_url": "",
  "confidence": "high|medium|low",
  "fun_page_safe": true,
  "tags": [],
  "notes": "",
  "last_verified": ""
}
```

Best format beyond JSON: “Libertarian-ish Public Figures” page with caveat.

---

### 12. `data/liberty-memes-and-slogans.json`

Purpose: Social captions, stickers, quote cards, homepage rotations, prompt fuel.

Best sources:
- Original TRL lines
- Existing essays/podcast clips
- Approved copy bank

Suggested fields:

```json
{
  "slogan_id": "",
  "text": "",
  "category": "state|taxation|privacy|speech|money|bureaucracy",
  "tone": "satirical|serious|hostile|funny|philosophical",
  "safe_for_homepage": true,
  "safe_for_social": true,
  "related_issue_ids": [],
  "related_tool_ids": [],
  "image_prompt_hint": "",
  "notes": ""
}
```

Best format beyond JSON: `stickers.html`, `social-ammo.html`, image prompt pack.

---

### 13. `data/libertarian-terms-battlefield.json`

Purpose: A “battlefield dictionary” with normal definition, libertarian translation, and regime translation.

Best sources:
- LP platform/issues
- LPedia issues/definitions
- Existing glossary docs

Suggested fields:

```json
{
  "term_id": "",
  "term": "",
  "plain_definition": "",
  "libertarian_translation": "",
  "regime_translation": "",
  "common_misuse": "",
  "related_terms": [],
  "example_sentence": "",
  "source_urls": [],
  "content_links": []
}
```

Best format beyond JSON: `tools/regime-translator.html`.

---

### 14. `data/ballot-access-obstacle-map.json`

Purpose: State-by-state ballot-access friction map.

Best sources:
- State election offices
- LP ballot access resources
- Candidate/affiliate sources

Suggested fields:

```json
{
  "state": "",
  "state_abbr": "",
  "office_type": "president|us_senate|us_house|statewide|state_legislature|local",
  "party_status": "recognized|minor_party|independent|write_in|unknown",
  "signature_requirement": "",
  "filing_deadline": "",
  "filing_fee": "",
  "official_election_source_url": "",
  "plain_english_summary": "",
  "difficulty_rating": "low|medium|high|brutal",
  "last_verified": "",
  "notes": "Educational summary only. Verify with election office."
}
```

Best format beyond JSON: gamified “Ballot Access Boss Fight” map.

---

### 15. `data/civic-action-recipes.json`

Purpose: Concrete civic action cards that are practical and non-boring.

Best sources:
- LP action pages
- State affiliates
- Local-government meeting pages
- Public-records resources

Suggested fields:

```json
{
  "action_id": "",
  "title": "",
  "difficulty": "easy|medium|hard",
  "time_required": "",
  "cost": "",
  "impact_type": "local-awareness|candidate-support|ballot-access|public-records|community-building",
  "steps": [],
  "what_to_bring": [],
  "trl_warning": "",
  "related_resources": [],
  "source_urls": []
}
```

Best format beyond JSON: `civic-action.html` cards and printable checklist.

---

### 16. `data/liberty-projects.json`

Purpose: “Build instead of beg” project directory.

Best sources:
- TRL original ideas
- Civic action docs
- Local organizing guides
- Reading group/community-building examples

Suggested fields:

```json
{
  "project_id": "",
  "title": "",
  "category": "local|media|education|privacy|mutual-aid|candidate-support",
  "difficulty": "easy|medium|hard",
  "materials_needed": [],
  "steps": [],
  "success_metric": "",
  "related_books": [],
  "related_issues": [],
  "template_files": [],
  "notes": ""
}
```

Best format beyond JSON: “Parallel Systems Builder” page.

---

### 17. `data/lp-action-links.json`

Purpose: Canonical action-link registry from LP National and TRL commentary/action routing.

Best sources:
- `https://lp.org/`
- LP join/donate/run/vote/ballot-access links

Suggested fields:

```json
{
  "action_id": "",
  "label": "",
  "category": "candidate|membership|donation|ballot-access|legal|historical|affiliate",
  "official_url": "",
  "trl_explainer": "",
  "who_it_is_for": "",
  "friction_level": "low|medium|high",
  "best_next_step": "",
  "source_url": "https://lp.org/",
  "last_verified": ""
}
```

Best format beyond JSON: action dashboard page.

---

### 18. `data/libertarian-history-timeline.json`

Purpose: Timeline of LP/libertarian history, platform milestones, candidates, conventions, court cases, publications, and ballot-access battles.

Best sources:
- LPedia
- LP history resources
- Official election data
- Candidate archives

Suggested fields:

```json
{
  "event_id": "",
  "title": "",
  "date": "",
  "year": null,
  "category": "party-history|candidate|ballot-access|court-case|publication|convention|milestone",
  "people": [],
  "organizations": [],
  "place": "",
  "summary": "",
  "source_urls": [],
  "confidence": "high|medium|low",
  "visual_treatment": "timeline-card|map-pin|quote-card"
}
```

Best format beyond JSON: timeline page or brutalist case-file cards.

---

### 19. `data/liberty-media-library.json`

Purpose: Broader media library: podcasts, videos, lectures, essays, PDFs, documentaries, courses.

Best sources:
- Awesome Libertarianism repo
- LPedia publications
- YouTube/podcast source lists
- Publisher/creator pages

Suggested fields:

```json
{
  "media_id": "",
  "title": "",
  "creator": "",
  "format": "book|podcast|video|lecture|essay|pdf|course|documentary",
  "topic_lane": "",
  "difficulty": "beginner|intermediate|advanced",
  "source_url": "",
  "free_access": true,
  "summary": "",
  "why_it_belongs": "",
  "content_warning": "",
  "notes": ""
}
```

Best format beyond JSON: upgraded `library.html` with filters.

---

### 20. `data/libertarian-quiz-bank.json`

Purpose: Gamified quiz data for personality/ideology/pathway tools.

Best sources:
- LP platform/issues
- Existing TRL tools
- Original TRL quiz prompts

Suggested fields:

```json
{
  "question_id": "",
  "question": "",
  "answers": [
    {
      "label": "",
      "scores": {
        "civil_libertarian": 0,
        "minarchist": 0,
        "anarchist": 0,
        "classical_liberal": 0
      }
    }
  ],
  "topic": "",
  "related_issue_id": "",
  "source_inspiration": "",
  "notes": ""
}
```

Best format beyond JSON: `tools/liberty-type-quiz.html`.

---

## Non-JSON content formats to add

| Format | Suggested file/page | Why it fits TRL |
|---|---|---|
| Landing page | `platform.html` | Turns the LP platform into a stylized TRL explainer instead of a dry policy wall. |
| Landing page | `issues.html` | Creates a navigable issue-card grid with TRL framing and links to tools/essays. |
| Directory | `state-affiliates.html` | Useful civic resource; helps visitors find state-level action. |
| Directory | `worldwide-liberty.html` | Makes the movement feel global and visually interesting. |
| Tool | `tools/is-taxation-theft.html` | Branching argument/conversation UX inspired by ExploreIsTaxationTheft. |
| Tool | `tools/regime-translator.html` | Converts bureaucratic language into plain English / TRL framing. |
| Tool | `tools/ballot-access-boss-fight.html` | Gamified state-by-state ballot access difficulty. |
| Tool | `tools/liberty-type-quiz.html` | Shareable personality/ideology quiz. |
| Markdown | `docs/content-planning/LP_PLATFORM_NOTES.md` | Editorial notes before turning LP platform into site content. |
| Markdown | `docs/content-planning/SOURCE_REGISTRY.md` | Tracks source credibility, update cadence, and verification rules. |
| Markdown | `docs/content-planning/JSON_BACKLOG.md` | Human-readable backlog before actual JSON files are created. |
| Notion DB | `TRL Source Library` | Best place for ongoing source capture/review before committing JSON. |
| Google Sheet | `State Affiliate Verification Sheet` | Easier manual verification for state affiliate/contact data. |
| HTML feature | `library.html` upgrade | Filterable media/reading library powered by structured data. |
| HTML feature | `timeline.html` upgrade | History timeline from LPedia/LP history data. |
| HTML feature | `social-ammo.html` | TRL slogans, hooks, quotes, and meme-ready copy cards. |
| GitHub doc | `docs/content-planning/LPEDIA_IMPORT_PLAN.md` | Prevents messy scraping/importing before source strategy is clear. |
| GitHub doc | `docs/content-planning/CONTENT_DATA_DECISIONS.md` | Records which ideas were accepted, deferred, or rejected. |

## Recommended build order later

1. `lp-platform-sections.json`
2. `lp-issues.json`
3. `issue-to-tool-map.json`
4. `state-affiliates.json`
5. `liberty-reading-list.json`
6. `libertarian-organizations.json`
7. `worldwide-libertarian-orgs.json`
8. `argument-conversation-flows.json`
9. `libertarian-public-figures.json`
10. `libertarian-quiz-bank.json`

# Daily Refresh Runbook — PH Warm-up Desk

**Schedule:** every day at **1:00 PM IST** (PH's day resets 12:30 PM IST, so products are live and gaining votes).
**Status:** ✅ Live in production. CLI logged in as team@mindcase.co — ready to automate.
**Launcher account being warmed up:** Kritish (@kritish).
**Site:** `mindcase-ph-launch` · id `64afc9b1-7a95-4d18-b24a-a540e2823c9c` · team@mindcase.co · https://mindcase-ph-launch.netlify.app

## Steps (run each day)

1. **Pull** Product Hunt's Top Products of the Day from https://www.producthunt.com/ — capture name, tagline, PH rank, and product href for the top ~20. **Exclude the "Promoted" slots** (those are paid ads, not ranked).
2. **Filter to Kritish's lane:** AI coding agents, dev tooling, voice/dictation, agent infrastructure. Drop anything clearly off-topic (fashion, video gen, consumer apps).
3. **Shuffle** the filtered set, then **triage to the 5 strongest** — most relevant to the audience Mindcase wants on launch day.
4. **Draft 3 comment options per pick** — see "How to comment" in the Playbook. Two modes only: a genuine **validation** ("this was needed — congrats on the launch") or a **real, non-obvious question** (architecture / edge case / tradeoff) that is NOT already answered on the launch page. Give each pick a mix (e.g. option 1 = validation, option 2 = question, option 3 = validation) so Kritish can pick a validation if the question turns out to be answered on the page. Short, real voice. **Do NOT** ask what the page already answers, faff, describe how it helps Mindcase, or pitch. Never pitch Mindcase.
5. **Add a new dated entry to `boards.js`** — a new `"YYYY-MM-DD": { label, picks:[...] }` key (3 comment options per pick). Do NOT delete old dates — the Warm-up date filter reads history from here.
6. **Deploy:** `netlify deploy --dir=/Users/kanupriya/Mindcase/ph-warmup-dashboard --prod --site 64afc9b1-7a95-4d18-b24a-a540e2823c9c`
7. **Notify Kritish/team:** "Warm-up board ready for <date> — <permanent URL>/warmup.html"

## Site structure (multi-tab)
`index.html` Playbook · `warmup.html` Warm-up (functional, reads `boards.js`) · `communities.html` · `assets.html` · `audience.html` · `launch-day.html` · `post-launch.html`. Shared: `style.css`, `nav.js`, `boards.js`. Only `boards.js` changes daily.

## Guardrails
- Pure value only — the moment a comment reads like a Mindcase ad, it backfires.
- Personalize / vary comments — identical phrasing across accounts is a detectable footprint.
- 5 genuine comments/day beats 20 in one sitting. Consistency is the whole game.
- Keep everything in the Mindcase monochrome theme; the PH orange logo is the only color.

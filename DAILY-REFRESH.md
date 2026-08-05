# Daily Refresh Runbook — PH Warm-up Desk

**Schedule:** every day at **1:00 PM IST** (PH's day resets 12:30 PM IST, so products are live and gaining votes).
**Status:** ✅ Live on **GitHub Pages** (free, no card). Push to `main` auto-deploys — no build minutes, no throttle.
**Automation:** ✅ AUTOMATED via cloud routine `trig_01YBRYbeHgbE5p3ywLBhq2j3` (daily 07:30 UTC / 13:00 IST) — runs steps 1–7 below on its own and pushes. Manage: https://claude.ai/code/routines/trig_01YBRYbeHgbE5p3ywLBhq2j3. The steps below are the same recipe, kept for manual runs / reference.
**Launcher account being warmed up:** Kritish (@kritish).
**Host:** GitHub Pages · repo `kanupriya-mindcase/mindcase-ph-launch` (public, branch `main`, root) · **https://kanupriya-mindcase.github.io/mindcase-ph-launch/**
**(Netlify retired** — free tier demanded payment; moved off it 2026-08-03.)

## Steps (run each day)

1. **Pull** Product Hunt's Top Products of the Day from https://www.producthunt.com/ — capture name, tagline, PH rank, and product href for the top ~20. **Exclude the "Promoted" slots** (those are paid ads, not ranked).
2. **Filter to Kritish's lane:** AI coding agents, dev tooling, voice/dictation, agent infrastructure. Drop anything clearly off-topic (fashion, video gen, consumer apps).
3. **Shuffle** the filtered set, then **triage to the 5 strongest** — most relevant to the audience Mindcase wants on launch day.
4. **Draft 4 comment options per pick** — see "How to comment" in the Playbook. Three modes: a genuine **validation** ("this was needed, congrats on the launch"), a **real, non-obvious question** (architecture / edge case / tradeoff) that is NOT already answered on the launch page, and a **knowledgeable-with-intrigue** take (name the real hard part of the problem, then get curious how they solved it). A good mix per pick: 1 validation, 2 questions, 1 knowledgeable-with-intrigue. Each option **2–3 lines, in-depth via substance not padding**. **Do NOT** ask what the page already answers, faff, describe how it helps Mindcase, use em-dashes, or pitch. Never pitch Mindcase.
5. **Add a new dated entry to `boards.js`** — a new `"YYYY-MM-DD": { label, picks:[...] }` key (4 comment options per pick). Do NOT delete old dates — the Warm-up date filter reads history from here.
6. **Validate + deploy:** `node --check boards.js`, then commit and `git push origin main`. GitHub Pages auto-builds and publishes within ~1 min — no Netlify, no build minutes.
7. **Notify Kritish/team:** "Warm-up board ready for <date> — https://kanupriya-mindcase.github.io/mindcase-ph-launch/warmup.html"

## Site structure (multi-tab)
`index.html` Playbook · `warmup.html` Warm-up (functional, reads `boards.js`) · `communities.html` · `assets.html` · `audience.html` · `launch-day.html` · `post-launch.html`. Shared: `style.css`, `nav.js`, `boards.js`. Only `boards.js` changes daily.

## Guardrails
- Pure value only — the moment a comment reads like a Mindcase ad, it backfires.
- Personalize / vary comments — identical phrasing across accounts is a detectable footprint.
- 5 genuine comments/day beats 20 in one sitting. Consistency is the whole game.
- Keep everything in the Mindcase monochrome theme; the PH orange logo is the only color.

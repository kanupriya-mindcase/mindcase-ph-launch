# Product Hunt Launch Cockpit

Warm-up comment desk + launch playbook for Mindcase's Product Hunt launch.

**Live:** https://mindcase-ph-launch.netlify.app

## How it works
- Static site (no build step). Deployed via Netlify continuous deployment — every push to `main` auto-deploys.
- `boards.js` holds the daily warm-up boards, keyed by date. A scheduled agent updates it every day at **1 PM IST**: pulls Product Hunt's top ~20, triages 5 in Mindcase's lane, drafts comment options (per the "How to comment" rules in the Playbook), commits, and pushes — which auto-deploys.
- See `DAILY-REFRESH.md` for the daily runbook.

## Structure
- `index.html` — Playbook (strategy, timeline, workstreams)
- `warmup.html` — daily Comment Desk (To post / Posted tabs, date filter)
- `communities/assets/audience/launch-day/post-launch.html` — workstream pages
- `style.css`, `nav.js` — shared design system + tab nav
- `boards.js` — daily warm-up data (the only file the daily routine changes)

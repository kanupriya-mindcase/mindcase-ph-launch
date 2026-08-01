/* ============================================================
   WARM-UP BOARDS — one entry per day, newest anywhere (sorted at render).
   The daily 2 PM IST routine ADDS a new dated key here each day.
   Voice = grounded technical peer. 3 options per pick. Never pitch Mindcase.
   ============================================================ */
window.BOARDS = {
  "2026-08-01": {
    label: "Saturday, August 1, 2026",
    picks: [
      { phrank: 9, name: "Port22", tagline: "Claude Code, Codex & more on your phone", href: "/products/port22",
        comments: [
          "Running coding agents from your phone is a surprisingly big unlock for reviewing and approving on the go. Congrats on the launch.",
          "How does the session work — your own machine over SSH, or a hosted sandbox? That changes a lot about what it can touch.",
          "Mobile access to Claude Code is one of those things I didn't expect to want. Cool build."
        ] },
      { phrank: 8, name: "SyncStaq", tagline: "Stripe billing data, always current in Google Sheets", href: "/products/syncstaq",
        comments: [
          "Keeping Stripe data live in Sheets kills a whole category of manual exports — genuinely useful. Congrats on shipping.",
          "How do you keep it 'always current' — webhooks, or polling? Curious how that holds up against Stripe's rate limits at scale.",
          "Finance teams that live in Sheets will get a lot out of this. Nice one."
        ] },
      { phrank: 2, name: "DeepSeek-V4-Flash", tagline: "Frontier agent intelligence at Flash prices", href: "/products/deepseek",
        comments: [
          "Frontier-level agentic performance at Flash pricing is exactly the trade-off everyone's chasing. Congrats on the release.",
          "Where does it land on long-horizon agent tasks vs. raw benchmarks? That gap is usually where the cheaper tiers fall short.",
          "The price-to-capability curve on these keeps bending fast. Impressive drop."
        ] },
      { phrank: 12, name: "AgentMicro", tagline: "Live Codex task status in your macOS menu bar", href: "/products/agentmicro",
        comments: [
          "A menu-bar glance for whether your agent is still working or stuck is more useful than it sounds. Nice little tool — congrats.",
          "Does it read Codex status locally, or through an API? Wondering how it stays live without polling hard.",
          "Ambient agent status in the menu bar is a clean idea. Well done."
        ] },
      { phrank: 3, name: "Basedash Audit Logs", tagline: "Every action in your BI tool, on the record", href: "/products/basedash",
        comments: [
          "Audit trails in BI tools are one of those things nobody misses until compliance asks. Timely add — congrats.",
          "Does it capture read access (who viewed what), or just mutations? Read logging is usually the harder, more valuable half.",
          "Good to see audit logging treated as first-class in a BI tool. Nice."
        ] }
    ]
  },
  "2026-07-31": {
    label: "Friday, July 31, 2026",
    picks: [
      { phrank: 2, name: "Cleanlist AI", tagline: "Natural-language prospecting: find, enrich and sync leads", href: "/products/cleanlist-ai",
        comments: [
          "Prospecting tools live or die on data quality — if the enrichment holds up in the wild, this is a real time-saver. Congrats on the launch.",
          "How fresh is the underlying contact data — continuously refreshed, or snapshotted? That's usually what separates these.",
          "The natural-language layer is the right bet for prospecting. Nice ship."
        ] },
      { phrank: 8, name: "witr", tagline: "Why is this running? Trace process, port, container or file", href: "/products/witr",
        comments: [
          "Everyone's lost ten minutes to 'what's holding this port.' Genuinely handy — congrats on shipping.",
          "Does it correlate host processes and containers in one view? That's normally the painful part to line up.",
          "One of those tools you don't realise you want until it exists. Nice one."
        ] },
      { phrank: 11, name: "TraceLLM", tagline: "OpenTelemetry for production AI applications", href: "/products/tracellm",
        comments: [
          "Building on OpenTelemetry instead of a proprietary format is the right call. Congrats on the launch.",
          "Do you follow the GenAI semantic conventions for spans, or a custom schema?",
          "Good to see LLM observability on an open standard rather than another silo."
        ] },
      { phrank: 9, name: "Screencap", tagline: "Turn your team's real workflows into AI training data", href: "/products/screencap",
        comments: [
          "The demo-vs-reality gap is exactly the training-data problem — sharp wedge. Congrats on shipping.",
          "How do you handle PII scrubbing before a capture becomes a dataset? Feels like the make-or-break for teams.",
          "Smart angle on the data-collection bottleneck. Nice launch."
        ] },
      { phrank: 6, name: "DepthData", tagline: "The system of record for your company's AI spend", href: "/products/depthdata",
        comments: [
          "AI spend has quietly gotten big enough to need a system of record — timely. Congrats on the launch.",
          "Do you capture usage through a proxy or provider APIs? The accuracy-vs-setup tradeoff there is interesting.",
          "Finance teams are about to start asking these questions — good timing."
        ] }
    ]
  },
  "2026-07-30": {
    label: "Thursday, July 30, 2026",
    picks: [
      { phrank: 7, name: "Greplica", tagline: "Self-updating wiki for coding agents", href: "/products/greplica",
        comments: [
          "Stale docs are a big reason agents misread repo structure, so keeping the wiki current is the right problem to go after. What triggers a rebuild — every commit, or on a schedule?",
          "Curious where you draw the line between what lives in the wiki vs. what the agent should just read from source. That split seems like the hard part.",
          "How do you stop noisy feature branches from thrashing the wiki? Seems easy for it to churn on WIP commits."
        ] },
      { phrank: 1, name: "SKI", tagline: "Free voice coding for Claude Code, Codex & more", href: "/products/ski",
        comments: [
          "Voice input I've tried; the agent answering out loud is the new part. Does it interrupt cleanly if you start talking mid-response?",
          "Latency on the spoken reply is usually what makes or breaks these for me — where does SKI land on that?",
          "Does the back-and-forth stay useful over a long session, or does hearing every response start to get in the way?"
        ] },
      { phrank: 3, name: "Memmy Agent", tagline: "Let every AI remember the same you", href: "/products/memmy",
        comments: [
          "Shared memory across tools is a real gap right now. How do you handle conflicts when two tools learn different things about the same user?",
          "What's the storage model — one canonical profile, or per-tool memories that sync? Curious how you keep it consistent.",
          "How do you decide what's worth remembering vs. noise? Most memory systems drown in low-signal context."
        ] },
      { phrank: 2, name: "AI Search Console", tagline: "Prompt analytics & citation mapping for AI search", href: "/products/ai-search-console",
        comments: [
          "Citation mapping is the useful half — most people have zero visibility into whether they're actually cited in AI answers. Point-in-time, or do you track it as models change?",
          "How do you attribute a citation to a specific source when the model paraphrases? That seems hard to pin down.",
          "What's the data source — model APIs directly, or scraping answer surfaces? Wondering how you keep it current across model updates."
        ] },
      { phrank: 4, name: "Claude Code cost tracking · LangWatch", tagline: "See what your Claude Code sessions actually cost", href: "/products/langwatch",
        comments: [
          "Per-session cost visibility is genuinely useful — easy to lose track mid-task. Does it attribute cost per run, or just aggregate?",
          "Does this break cost down by task, or only total per session? Per-run attribution is the part I'd actually use.",
          "How does it hook into Claude Code — a wrapper, or reading logs? Curious how much setup it needs."
        ] }
    ]
  }
};

/* ============================================================
   WARM-UP BOARDS — one entry per day, newest anywhere (sorted at render).
   The daily 1 PM IST routine ADDS a new dated key here each day.
   Voice = grounded technical peer. 4 options/pick (validation, 2 questions, 1 knowledgeable-with-intrigue), 2-3 lines each. Never pitch Mindcase. Never use em-dashes.
   ============================================================ */
window.BOARDS = {
  "2026-08-05": {
    label: "Wednesday, August 5, 2026",
    picks: [
      { phrank: 7, name: "ngrok AI Gateway", tagline: "One private gateway for every AI model", href: "/products/ngrok-ai-gateway",
        comments: [
          "One private gateway for every model is the right abstraction: routing, keys, and policy in one place beats scattering config across a dozen SDKs. Congrats on shipping.",
          "How does routing work when one agent run needs different models per step: one endpoint with rules, or per-request model selection at the gateway? Curious how you keep that predictable for callers.",
          "Does the gateway terminate and inspect payloads, or act as a pure forward proxy? Where you draw the line on what it sees versus what stays client-side changes the trust model a lot.",
          "The hard part with a unified AI gateway isn't picking models, it's making policy portable. The same agent should behave identically whether it's hitting OpenAI or Anthropic through you, and most gateways leak provider-specific quirks at the edges. Curious how you normalized that without flattening what makes each model useful."
        ] },
      { phrank: 3, name: "Aegisora", tagline: "The narrow control plane for AI agent tool and API calls.", href: "/products/aegisora",
        comments: [
          "A narrow control plane for agent tool calls is exactly the layer that's been missing. Most teams bolt auth on after the fact. Open-sourcing it is a strong move. Congrats on the launch.",
          "When you block a tool call, does the agent get a structured rejection it can reason about, or does it just fail opaque? That feedback loop usually decides whether guardrails feel helpful or random.",
          "How do you catch semantic prompt injection that tries to smuggle tool args through natural language: static rules, or something closer to intent classification at the boundary?",
          "Runtime security for agents is deceptively asymmetric. Blocking bad calls is easy compared to not blocking good ones when the agent is mid multi-step plan and the same API call is legitimate in one context and dangerous in another. That context sensitivity is where most control planes get brittle. Really curious how you scoped 'narrow' to keep it usable."
        ] },
      { phrank: 8, name: "npm i -g hotcell", tagline: "Local sandboxes for AI agents on your Mac, Linux, bare metal", href: "/products/npm-i-g-hotcell",
        comments: [
          "Local sandboxes for AI agents on bare metal is the right default. Giving agents filesystem and network without a containment layer is how you get the horror stories. Nice ship.",
          "What's the isolation model: containers, lightweight VMs, or something custom? Curious how heavy it feels on a laptop running a coding agent alongside the sandbox.",
          "Can agents share artifacts across sandboxes, or is every session fully walled off? That tradeoff matters a lot for multi-step coding workflows where you want isolation but not starting from zero each time.",
          "The interesting tension with local agent sandboxes is that the agent needs enough access to be useful but any persistent state becomes an exfil path the moment the model goes sideways. Deciding what survives between runs versus what gets wiped is basically the whole security story. Would love to know where hotcell drew that line."
        ] },
      { phrank: 5, name: "Kiro Crew", tagline: "Open source agentic development workspace", href: "/products/kiro",
        comments: [
          "An open-source agentic development workspace fills a real gap. Most of the good tooling here is either closed or tied to one vendor. Congrats on launching it in the open.",
          "How does it hook into the agents underneath: native support for Claude Code and Codex, or a harness-agnostic layer you plug providers into?",
          "Is the workspace file-based so you can commit project state to git, or is everything in an internal store? That choice shapes whether teams actually adopt it day to day.",
          "Agentic dev workspaces live or die on session continuity, not just chat history but which files changed, which tool calls are in flight, and whether two people can pair on the same agent without corrupting context. Most tools pick one of those and punt the rest. Curious which problem Kiro Crew optimized for first."
        ] },
      { phrank: 6, name: "BackEngine MCP", tagline: "Make private company knowledge usable for AI", href: "/products/backengine-mcp",
        comments: [
          "Making private company knowledge usable for AI through MCP is a clean wedge. The hard part was never connecting the model, it was getting trustworthy retrieval without leaking the wrong doc. Congrats on shipping.",
          "How do you handle access control at query time: does MCP inherit the user's existing permissions, or do you maintain a separate ACL layer for what the agent can see?",
          "When source docs update, how quickly does the agent's view refresh: live sync, scheduled re-index, or on-demand pull? Freshness is usually where these setups quietly fail.",
          "Company knowledge for agents usually fails on freshness and provenance, not retrieval quality. The agent cites a policy from six months ago with full confidence because nothing in the stack told it the doc was superseded. Getting invalidation right is quietly harder than the RAG pipeline itself. Curious how BackEngine handles that."
        ] }
    ] },
  "2026-08-04": {
    label: "Tuesday, August 4, 2026",
    picks: [
      { phrank: 1, name: "MOTHER", tagline: "A terminal built for Claude Code w/ one-click session resume", href: "/products/mother-claude-code-terminal",
        comments: [
          "One-click session resume is the kind of small thing that quietly changes how much you lean on an agent day to day. Losing context on a dropped session is a tax nobody really talks about, so building the terminal around fixing it is a sharp focus. Congrats on shipping.",
          "How does resume rebuild state, does it replay the full session or snapshot the working context and pick up from there? Curious where you draw the line on what actually survives a resume.",
          "The interesting problem with a Claude Code specific terminal is that a session isn't just scrollback, it's the working tree, open files, and half-finished tool calls. Deciding what's worth resuming versus what you rebuild fresh is the real design call, and I'd love to know how you drew that boundary.",
          "Does it stay in lockstep with Claude Code's own updates, or is there a translation layer so you don't break every time the underlying tool ships? That coupling usually decides how maintainable these wrappers stay."
        ] },
      { phrank: 15, name: "SpeakoFlow", tagline: "Open-source local voice assistant for your desktop", href: "/products/speakoflow",
        comments: [
          "Local plus open-source is the right combination for a desktop voice assistant, since an always-on mic is exactly what people don't want phoning home. Doing it in the open so anyone can verify that is the trust move that matters here. Nice work.",
          "What's running speech-to-text under the hood, a local Whisper variant or something lighter you built for latency? Curious where you landed on the accuracy versus speed tradeoff on consumer hardware.",
          "The hard part with a local voice assistant isn't transcription, it's keeping the wake-and-intent loop responsive without a GPU while not draining the battery. That balance is where most on-device assistants quietly fall back to the cloud, so I'm genuinely curious how you kept it fully local and still snappy.",
          "How extensible is it, can people wire in their own commands or skills, or is the action set fixed for now? Open-source voice tends to live or die on how easy that is."
        ] },
      { phrank: 13, name: "Atlaso", tagline: "One memory for every AI you use", href: "/products/atlaso",
        comments: [
          "A single memory layer across every AI tool sounds obvious and is brutally hard to actually pull off. If it holds up, never re-explaining yourself to each new tool is a real quality-of-life jump. Congrats on the launch.",
          "How do you handle conflicting memories across tools, if one assistant learns something that contradicts another, what wins? That reconciliation is usually where shared-memory ideas get messy.",
          "The genuinely interesting question with 'one memory for every AI' is trust direction: you become the source every tool reads and writes, which is powerful but also the single point where one stale or wrong fact propagates everywhere. Curious how you think about correcting or expiring memories before they spread.",
          "Is the memory portable and inspectable, can a user actually see and edit what's stored, or is it a black box the models manage? For something this central, that visibility tends to matter a lot."
        ] },
      { phrank: 14, name: "space ocr", tagline: "OCR that checks its own answers, as an app or an API", href: "/products/space-ocr",
        comments: [
          "OCR that verifies its own output is the right instinct, because the failure people hate isn't a wrong character, it's confidently wrong text you can't tell is wrong. Building the self-check in rather than bolting it on later is a smart call. Nice.",
          "What does the self-check actually compare against, a second pass with a different model, or a confidence signal from the same one? Curious how you stop it from just agreeing with its own mistake.",
          "The subtle thing here is that checking its own answers only helps if the checker fails differently from the reader, otherwise you're just doubling the same blind spots. Getting genuine independence between the two passes is the whole game, and it's the part most self-verifying OCR skips. Really curious how you approached it.",
          "How does it hold up on the ugly inputs, handwriting, low-contrast scans, dense tables, versus clean printed text? That gap is usually where OCR reliability actually gets decided."
        ] },
      { phrank: 19, name: "Karve", tagline: "The API client for developers on Windows", href: "/products/karve",
        comments: [
          "A genuinely native API client built for Windows first is overdue, most of the good ones treat Windows as an afterthought port. Betting on the platform the rest of the field ignores is a clean wedge. Congrats on shipping.",
          "What makes it Windows-native beyond the UI, are you leaning on platform APIs for things like secure credential storage and system proxies? Those integrations are usually what separate native from just running there.",
          "The interesting tension for a new API client is that the category is crowded but everyone's frustrated with the incumbents for the same reasons: bloat, forced accounts, and cloud sync they didn't ask for. Which of those you deliberately refuse to do says more about the product than any feature list, so I'm curious what you're consciously leaving out.",
          "How do you handle collections and environments across a team, local files you can commit to git, or a sync layer? For dev tools that choice tends to decide whether teams actually adopt it."
        ] }
    ] },
  "2026-08-03": {
    label: "Monday, August 3, 2026",
    picks: [
      { phrank: 7, name: "yapyap", tagline: "Own your voice again. Local-first voice & meeting recorder", href: "/products/yapyap-3",
        comments: [
          "Local-first for meeting audio is the right instinct — it's some of the most sensitive data on anyone's machine, and 'we process it in the cloud but promise to delete it' never really reassured anyone. Shipping it on-device from day one is the harder path and the correct one. Congrats.",
          "Curious where the on-device model tops out — does speaker diarization run locally too, or is that the piece that's still hard to pull off offline? That's the wall most local-first recorders seem to hit.",
          "The quiet tension with local-first voice is that the best transcription models keep getting bigger, not smaller, so 'runs on your laptop' and 'state-of-the-art accuracy' are always pulling against each other. Whichever side you're optimizing for says a lot about who this is really for — would love to know how you framed that call.",
          "How are you handling long recordings — streaming transcription as the meeting runs, or a batch pass at the end? The memory-vs-latency tradeoff there tends to quietly shape the whole UX."
        ] },
      { phrank: 11, name: "mpai", tagline: "Make existing Codex and Claude Code sessions multiplayer", href: "/products/mpai",
        comments: [
          "Building multiplayer on top of existing Claude Code and Codex sessions instead of a whole new client is the smart wedge — nobody has to switch tools to get the value, and you ride whatever the underlying agents ship next. Open-source on top of that is a nice touch. Congrats on the launch.",
          "When two people are in one session, what actually gates the agent's file writes — is there a single driver at a time, or can anyone approve an edit? Curious how you keep it from turning into a race.",
          "The genuinely hard part here isn't the presence layer, it's shared context: two people prompting one agent means two mental models colliding in a single context window, and agents get confused fast when the 'why' keeps shifting under them. One canonical thread vs. per-person branches that merge is basically the whole ballgame — really curious which way you went.",
          "Does everyone share one agent context, or does each collaborator get their own view that syncs back? That choice changes a lot about how it behaves once people are working in parallel."
        ] },
      { phrank: 1, name: "AgentSky", tagline: "Any harness, any LLM — cloud-hosted agents on demand", href: "/products/agentsky",
        comments: [
          "'Any harness, any LLM' is the hard promise to actually keep — most of these quietly lock you into one stack the moment you're past the demo. Building it as neutral infra you point at whatever you're already running is the right call. Congrats on shipping.",
          "How do you keep state across runs — is each invocation stateless, or is there a persistent workspace that survives between calls? That distinction tends to decide what people can actually build on top of it.",
          "The quietly hard problem behind 'any harness' is that each one has its own idea of what a tool call, a turn, even a context reset actually is — normalizing across that without flattening what makes each harness good is genuinely tricky. Curious whether you translate everything to a common schema or run each natively and reconcile at the edges.",
          "What does cold-start look like for on-demand agents — warm pools, or spun up fresh each time? For anything interactive, that latency floor usually makes or breaks the experience."
        ] },
      { phrank: 8, name: "Snapdown", tagline: "Turn anything on your Mac screen into clean Markdown", href: "/products/snapdown-2",
        comments: [
          "This is one of those small tools you end up reaching for ten times a day without noticing — getting a clean Markdown table straight out of a screenshot alone justifies it, and the tight scope is refreshing. Nice build.",
          "Is it pure OCR, or are you reading the macOS accessibility tree where it's exposed? Curious how you keep tables and code blocks structured rather than collapsing them into flat text.",
          "The subtle thing about screen-to-Markdown is that 'clean' is really a structure problem, not a text problem — anyone can OCR the words, but rebuilding hierarchy (this is a heading, that's a nested list, this is a code block) from pixels is where these usually fall apart. Curious how far you push that vs. leaving it flat.",
          "How does it handle nested layouts — a table inside a card, or a code block inside a callout? That's the case where most of these quietly give up and flatten everything."
        ] },
      { phrank: 4, name: "Qwen3.8-Max", tagline: "Qwen's most capable model for coding and cowork", href: "/products/qwen3",
        comments: [
          "Qwen's coding models have been quietly closing the gap for a while, so a Max tier aimed squarely at coding is a logical and welcome step — good to see the open ecosystem pushing at the top end. Congrats on the release.",
          "Where does this land on agentic use vs. one-shot completion — does it hold together over long tool-calling runs, or is it tuned more for single strong completions? That gap is where a lot of 'great at coding' models actually struggle.",
          "The interesting question with any new coding model isn't the benchmark number, it's how gracefully it degrades — most are fine on a clean function and fall apart once the context is a messy 40-file repo with half-broken state. Curious how it behaves at the ugly end, because that's where the real work lives.",
          "What's the context window here, and how does quality hold up as it fills? For 'cowork' the practical ceiling on how much repo it can reason over at once tends to matter more than the headline length."
        ] }
    ] },
  "2026-08-02": {
    label: "Sunday, August 2, 2026",
    picks: [
      { phrank: 3, name: "Termexo", tagline: "A local Windows workbench for Claude Code and Codex", href: "/products/termexo",
        comments: [
          "A proper Windows-native workbench for Claude Code and Codex fills a real gap — most of this tooling is Mac-first. Congrats on shipping.",
          "Does it run the agents against your real filesystem, or sandbox them? Curious how you handle approvals for file writes.",
          "Good to see the Codex/Claude Code workflow get first-class Windows treatment. Nice one."
        ] },
      { phrank: 1, name: "Bolcho AI", tagline: "Build Voice AI agents that actually speak India", href: "/products/bolcho-ai",
        comments: [
          "Voice agents that actually handle Indian languages and accents is a genuinely underserved space. Congrats on the launch.",
          "How many languages/dialects do you cover at launch, and how do you handle code-switching mid-sentence? That's usually where Indian-language voice breaks.",
          "The India-first voice angle is sharp — most stacks treat it as an afterthought. Well done."
        ] },
      { phrank: 4, name: "Lumichats", tagline: "A Claude Code alternative for people who avoid the terminal", href: "/products/lumichats-offline",
        comments: [
          "A GUI for people who bounce off the terminal is a smart wedge — the CLI is a real barrier for a lot of capable folks. Congrats on the launch.",
          "How much of the underlying agent's power do you expose in the GUI vs. abstract away? That balance is usually the hard design call.",
          "Nice — lowering the terminal barrier opens this up to a much wider crowd."
        ] },
      { phrank: 12, name: "Zen Whisper", tagline: "On-device Mac dictation that types into any app", href: "/products/zen-whisper",
        comments: [
          "On-device dictation that types into any app is the privacy-friendly combo a lot of people want. Congrats on shipping.",
          "Which model are you running on-device, and how's latency on Apple Silicon vs. the cloud tools? That trade-off is the whole game here.",
          "Local-first dictation is the right default — good to see it done natively on Mac."
        ] },
      { phrank: 10, name: "Wispr Flow", tagline: "Dictation that works everywhere — 4x faster", href: "/products/wisprflow",
        comments: [
          "The 'works everywhere' part is exactly what makes dictation stick — most tools nail one app and fall apart elsewhere. Congrats on the momentum.",
          "How's accuracy holding up on technical/code terms and mixed-language input these days? That's usually the last mile.",
          "Cross-app dictation that actually works is deceptively hard. Nicely done."
        ] }
    ]
  },
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

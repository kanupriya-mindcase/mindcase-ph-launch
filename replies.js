/* ============================================================
   INBOUND REPLIES — comments left on Mindcase's OWN launch page.
   Keyed by launch day. Each comment carries 3 reply drafts.
   Voice = the maker replying: warm, specific, adds something the
   launch post did not already say. Never use em-dashes.
   Source: https://www.producthunt.com/products/mindcase/launches/mindcase
   ============================================================ */
window.REPLIES = {
  "2026-08-21": {
    label: "Thursday, August 21, 2026 · launch day",
    launchHref: "/products/mindcase/launches/mindcase",
    makers: [
      {
        id: "maker-kanupriya",
        author: "Kanupriya Chhabra",
        drafts: [
          "Kanupriya here, the other half of Mindcase. The thing that pushed us into building this was noticing how much of our own week went into work nobody could see. Not shipping anything new, just keeping last month's pipeline breathing after a layout shifted overnight, a proxy pool went bad, or a parser started returning half the fields silently. None of that is interesting engineering, and none of it is what we raised our hands to do. What made it worse is that the breakage is rarely loud. You do not get an error, you get fewer rows, and you find out days later when a number in a dashboard looks wrong. So we drew a hard line: collection, rotation, retries, anti-bot and parsing sit on our side of the API, and you get a clean structured response or an honest failure. If you are running data infrastructure today, I would genuinely like to know what breaks most often for you, because that list is how we pick what to harden next.",
          "Cofounder here. We spent longer than I would like to admit arguing about whether Mindcase should be a platform or an API, and the API won for a boring reason: that is how people actually want to consume this. Nobody wants another dashboard to log into, another seat to justify, another tool their team has to be trained on. They want a call inside the pipeline they already have, returning the same shape every time. The pricing followed from the same logic. Web data work is spiky, you pull hard for two weeks and then go quiet for a month, so a subscription charges you most for the months you use it least. We went prepaid wallet instead, no seats, no minimums, and you pay for rows you actually collect at $0.06 to $20 per 1,000 depending on the agent. Happy to get into any of those tradeoffs today, including the ones we are still not sure we got right."
        ]
      },
      {
        id: "maker-kritish",
        author: "Kritish Puri",
        drafts: [
          "Kritish again, following up on my post above with the one thing I actually want out of today. We have 75+ agents live across LinkedIn, Amazon, Google, Instagram, TikTok and YouTube, and almost none of that list was planned in a roadmap meeting. It came from people telling us which source was blocking them, and us building it. So if there is a platform you have been putting off because writing and maintaining the scraper is not worth the trouble, say it in this thread. Even if it is niche. When something is not in the catalogue we build it as a custom API for that use case rather than handing you a template and wishing you luck, so a comment here is a genuinely useful signal and not just a nice thing to say. Tell me the source and roughly what you need out of it, and I will tell you honestly whether it is straightforward, hard, or a bad idea.",
          "Kritish here again. If you are looking at this next to something you already pay for, I would much rather you tell me where we fall short than quietly close the tab. We are a small team and the most useful thing we have ever gotten from a launch is somebody explaining precisely why they did not switch. So push on it today. Ask about the sources you actually need rather than the ones in our screenshots, ask what happens when a site changes, ask what a failed run costs you. The 100% bonus credits run for 24 hours and your first call is free, which is mostly so you can test the reliability claims yourself rather than take my word for them in a launch post. I am in the comments all day, and I will give you a straight answer even when it is that we are not the right fit for what you are doing."
        ]
      },
      {
        id: "maker-sanjay",
        author: "Sanjay Khan",
        drafts: [
          "Sanjay from the Mindcase team. The part of this problem that never makes it into a demo is that the web does not tell you when it changes. A site quietly reorders a block, drops a field, or starts serving a slightly different page to some traffic, and your pipeline does not throw. It just returns fewer rows, or the same count with a field that is now always empty. That silence is the actual enemy, because by the time somebody notices, you are debugging a week of bad data rather than one broken run. So a large share of our engineering goes into noticing before you do: watching parsers for drift, health checking pools continuously, pulling bad routes automatically, and retrying on our side before anything reaches your code. It is unglamorous work and it is most of the value. If you have been bitten by silent drift, I am curious how you caught it, because everyone seems to have a different painful story here.",
          "Sanjay here. My favourite moment building this was deleting our own retry logic. Before Mindcase we were the team writing the backoff loop at 2am because a source started rate limiting mid run, then the proxy handling, then the queue to replay failures, then the alerting to tell us the replay had also failed. Every one of those was written under pressure, none of it was the product we were trying to build, and all of it needed maintaining forever. Now that logic sits behind one call and we do not think about it. That is the whole pitch honestly. You send inputs, you get structured rows back, and the collection, rotation, anti-bot handling, retries and parsing are our problem. If you have written that 2am backoff loop yourself, this was built for exactly that night, and I would be glad to hear which part of it hurt most."
        ]
      },
      {
        id: "maker-saurabh",
        author: "Saurabh Shubham",
        drafts: [
          "Saurabh here, cofounder at Mindcase. Straight question for this thread, since you are the people who would actually use it: what should we build next? We have 75+ agents live across LinkedIn, Amazon, Google, Instagram, TikTok and YouTube, and almost every one of them exists because somebody asked for it, not because we planned it. So tell me the source you need, the two or three fields you actually care about, and roughly how many rows a month. I will reply in this thread with whether it is straightforward, hard, or honestly a bad idea, and what it would cost you per 1,000 rows. Niche is fine. Some regional marketplace or an industry directory nobody outside that industry has heard of is usually more useful to us than another big platform.",
          "Saurabh here, cofounder. If a source you need is not in our 75+, we build it as a custom API for your use case, and I would rather do that today while everyone is in the thread than have you find out in a docs page next month. Concretely: name the site, tell me what a row should look like for you, and I will tell you if it is feasible and how long it takes. You end up calling it exactly like linkedin/profiles, same request shape, same structured response, so nothing in your pipeline changes when you add it. The thing I do not want is anyone leaving today thinking the catalogue is the whole product. What is the source you gave up on?"
        ]
      }
    ],
    comments: [
      {
        id: "jagbir-singh-1",
        answered: true,   // maker reply already posted on PH
        author: "Jagbir Singh",
        role: "",
        when: "7m ago",
        addressed: "",
        body: "The one API across completely different data sources is what caught my attention. Not having to rebuild the pipeline every time you need a new source is huge.",
        drafts: [
          "Thanks Jagbir, that was the exact pain that started this. Every source has its own auth quirks, pagination, and rate limits, so we normalised all of it behind one call shape. Swapping linkedin/profiles for amazon/products is a one line change, same request, same structured response.",
          "Appreciate that. Keeping the interface identical across 75+ agents was the hardest constraint to hold, but it is the thing that makes it compound: every new source you add costs you nothing in pipeline work. Which two sources would you be stitching together first?",
          "Thank you. Honestly the boring part is the win here. Nobody wants a bespoke parser per site, they want the same shape of data back no matter where it came from, so that is what we optimised for. Happy to walk you through the schema if it is useful."
        ]
      },
      {
        id: "brent-vardy-1",
        answered: true,   // maker reply already posted on PH
        author: "Brent Vardy",
        role: "",
        when: "7m ago",
        addressed: "@kanupriya_chhabra1",
        body: "@kanupriya_chhabra1 I can see so many potential use cases for @Mindcase and I love the pay-as-you-go model rather than an ongoing subscription. Best of luck with the launch.",
        drafts: [
          "Thank you Brent. Subscriptions felt wrong for something this bursty. Most teams pull hard for a week, then go quiet, and paying for idle months makes no sense. Prepaid wallet, no seats, no minimums, you pay for rows you actually collect.",
          "Really appreciate this Brent. The pricing was a deliberate call, usage is spiky and seats punish exactly the teams experimenting the most. Curious which use case is top of mind for you, happy to point you at the right agent.",
          "Thanks Brent, that means a lot on day one. We wanted the cost to track the work, not the calendar, so it is $0.06 to $20 per 1,000 rows depending on the agent and nothing when you are idle. Do give it a spin and tell us where it creaks."
        ]
      },
      {
        id: "felix-1",
        author: "Felix",
        role: "",
        when: "2m ago",
        addressed: "@kanupriya_chhabra1",
        body: "@kanupriya_chhabra1 great work! I already worked with different scrapers such as Apify or bright data but also ScrapingBee. How do you make sure you don't get blocked by LinkedIn?",
        drafts: [
          "Thanks Felix, and good question from someone who has actually run these. Short version: we treat blocking as a reliability problem, not a trick. Pools are health checked continuously, bad routes get pulled automatically, and anything that fails is retried on our side before it ever reaches you. You see a completed row or an honest error, never a silent half result.",
          "Appreciate it. The honest answer is that nobody is never blocked at scale, so the metric we actually watch is what share of requests come back complete without you doing anything. Retries are on us and you only pay for rows you actually collect, so a bad hour costs us and not you. Coming from Apify and Bright Data, what volume are you running?",
          "Thank you Felix. The difference from the tools you have used is mostly about where the work sits. With those you still own orchestration, retry logic, and fixing the parser every time a layout shifts. We hold all of that behind the call, including monitoring parsers for drift so a change gets caught by us rather than by your pipeline going quiet. Happy to go deeper if you want specifics for your use case."
        ]
      },
      {
        id: "ashish-khandelwal-1",
        author: "Ashish Khandelwal",
        role: "",
        when: "6m ago",
        addressed: "",
        body: "Congrats on the launch! Does it have a router based on the scrapping that has to be done or do we have to assign each scrapper different path ? Also is there cli available ?",
        drafts: [
          "Thanks Ashish. Today it is the explicit path, you name the agent you want, so linkedin/profiles or amazon/products, and that call is deterministic. We went that way on purpose because a router that guesses is lovely in a demo and painful in production when it silently picks the wrong source. On CLI, the SDKs are Python and Node.js right now. Is a CLI something you would reach for in your workflow or would the SDK cover it?",
          "Appreciate it. You assign the path explicitly per agent, which keeps the call predictable and cheap to reason about, and the request shape stays identical across all of them so a router on top would be a thin thing to build for your own use case if you wanted one. Python and Node.js SDKs are what ship today. Tell me what you would want a CLI to do and it genuinely helps us prioritise.",
          "Thank you. Short answers: explicit path per agent rather than automatic routing, and Python plus Node.js SDKs today. The reason for explicit is that with web data you usually care which source a row came from, since provenance matters when something looks off later. Curious whether you are orchestrating this from code or from scripts, because that changes what we should build next."
        ]
      },
      {
        id: "kisekiya-1",
        author: "Kisekiya",
        role: "",
        when: "7m ago",
        addressed: "",
        body: "This is such a great tool and i have been looking for my internal project, would love to see how it works in practical. if you can reveal, how do you handle X platform especially? using official API behind the scenes?",
        drafts: [
          "Thank you, and the practical part is easy to solve: your first call is free, so you can point an agent at a real input from your project and see the actual response rather than a screenshot. On sourcing, the rule we hold to is that where a source has an official API that genuinely serves the use case we use it, and where it does not we collect and structure it ourselves. What we will not do is dress one up as the other, because you should know what you are depending on. Tell me what you need out of X specifically, fields and rough volume, and I will give you a straight answer on where it stands today.",
          "Appreciate that. Rather than answer in the abstract, what is the internal project pulling? If you tell me the fields you need and roughly how many rows a month, I can tell you exactly which agent covers it, what the response looks like, and what it would cost you at our per 1,000 row pricing. On the official API question, we are happy to be specific per source rather than hand wave, since the answer genuinely differs between platforms and it affects what you can rely on. Ask me about X directly and I will not dodge it.",
          "Thanks Kisekiya. Two things worth saying. First, we would rather you test it than trust the post, so the first call is free and the 100% bonus credits run for 24 hours if you want to push real volume through it. Second, on how any given source is handled, the honest position is that it varies by platform and we will tell you per source rather than give one blanket answer that would be wrong somewhere. If X is central to your project, say what you need from it and I will tell you whether we cover it well, cover it partly, or not at all."
        ]
      }
    ]
  }
};

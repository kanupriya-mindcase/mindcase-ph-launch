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
          "Kanupriya here, the other half of Mindcase. The thing that surprised me most building this is how much of a data team's week goes into maintenance nobody ever sees. Not building anything new, just keeping yesterday's pipeline alive after a layout changed overnight. If that is your week too, I would love to hear what breaks most often for you.",
          "Cofounder here. We went back and forth for a long time on whether to sell a platform or an API, and the API won because that is how people actually want to consume this. No dashboard to live in, no seats to buy, just a call sitting inside your own pipeline. Happy to get into the tradeoffs, I am in the comments today."
        ]
      },
      {
        id: "maker-kritish",
        author: "Kritish Puri",
        drafts: [
          "Kritish again. One thing I would genuinely like out of this launch beyond signups: tell us which platform to build an agent for next. We have 75+ live and the roadmap is mostly shaped by what people ask for in threads exactly like this one.",
          "Kritish here again. If you are weighing this against something you already use, I would much rather you tell me where we fall short than quietly bounce. We are around all day, and the 100% bonus credits run for 24 hours if you want to actually stress test it rather than take our word for it."
        ]
      },
      {
        id: "maker-sanjay",
        author: "Sanjay Khan",
        drafts: [
          "Sanjay from the Mindcase team. The unglamorous truth of this problem is that sites change quietly and your pipeline does not announce it, it just starts returning fewer rows. A lot of our engineering goes into noticing that before a customer does. Happy to talk about drift if it is something you have been bitten by.",
          "Sanjay here. My favourite part of building this was deleting retry logic out of our own products once the API absorbed it. If you have ever written a backoff loop at 2am because a source started rate limiting you, that night is the reason this exists."
        ]
      },
      {
        id: "maker-saurabh",
        author: "Saurabh Shubham",
        drafts: [
          "Saurabh here. One thing not really covered in the post: the custom agents. If the source you need is not among the 75+, we build it as an API for your use case instead of telling you to go write a scraper. Drop the source in the comments and we will tell you honestly whether it is feasible.",
          "Saurabh from Mindcase. The design goal we kept returning to was that adding a new source should cost you one line, not one sprint. Same request shape, same structured response, whichever agent you call. Curious which sources people here are fighting with most right now."
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
      }
    ]
  }
};

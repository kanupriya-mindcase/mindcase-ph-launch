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
    comments: [
      {
        id: "jagbir-singh-1",
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
      }
    ]
  }
};

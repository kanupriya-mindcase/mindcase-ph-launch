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
          "Kanupriya here, cofounder at Mindcase. Here is a question I keep asking people and rarely get a boring answer to: what did you decide not to build because getting the data was too much trouble? Not the thing you built and now maintain, the one you quietly shelved. An enrichment step dropped from the roadmap, a competitor tracking feature that never shipped, a lead flow abandoned after the third parser rewrite. Tell me the idea and the source it needed. Between the agents live today and the custom ones we build for specific use cases, a fair number of those shelved ideas turn out to be an afternoon of work now rather than a quarter. And if yours is genuinely still hard, I will tell you that honestly instead of selling you on it.",
          "Kanupriya here, cofounder. If you are trying to work out whether this is actually cheaper than what you run today, give me three things and I will do the maths in the thread: the sources you pull, roughly how many rows a month, and whether you are paying for infrastructure, for people to maintain it, or both. Our pricing is $0.06 to $20 per 1,000 rows depending on the agent, prepaid, no seats and no minimums, so the comparison is usually simpler than people expect once maintenance time is counted honestly. I will give you a real number even when that number says stay where you are."
        ]
      },
      {
        id: "maker-kritish",
        answered: true,   // option 2 posted on PH by Kanupriya
        author: "Kritish Puri",
        drafts: [
          "Kritish again, following up on my post above with the one thing I actually want out of today. We have 75+ agents live across LinkedIn, Amazon, Google, Instagram, TikTok and YouTube, and almost none of that list was planned in a roadmap meeting. It came from people telling us which source was blocking them, and us building it. So if there is a platform you have been putting off because writing and maintaining the scraper is not worth the trouble, say it in this thread. Even if it is niche. When something is not in the catalogue we build it as a custom API for that use case rather than handing you a template and wishing you luck, so a comment here is a genuinely useful signal and not just a nice thing to say. Tell me the source and roughly what you need out of it, and I will tell you honestly whether it is straightforward, hard, or a bad idea.",
          "Kritish here again. If you are looking at this next to something you already pay for, I would much rather you tell me where we fall short than quietly close the tab. We are a small team and the most useful thing we have ever gotten from a launch is somebody explaining precisely why they did not switch. So push on it today. Ask about the sources you actually need rather than the ones in our screenshots, ask what happens when a site changes, ask what a failed run costs you. The 100% bonus credits run for 24 hours and your first call is free, which is mostly so you can test the reliability claims yourself rather than take my word for them in a launch post. I am in the comments all day, and I will give you a straight answer even when it is that we are not the right fit for what you are doing."
        ]
      },
      {
        id: "maker-sanjay",
        answered: true,   // option 3 posted on PH
        author: "Sanjay Khan",
        drafts: [
          "Sanjay from the Mindcase team. A practical question for anyone running collection today: what is the last thing that broke on you, and how long was the gap between it breaking and you noticing? Reply with the source and that gap. I am asking because the gap is the number that actually costs money. A run that fails loudly gets fixed in an hour. A parser that quietly drops one field poisons a week of data before anyone looks. Tell me your worst example and I will tell you exactly how we try to catch that class of thing, and where we would still miss it.",
          "Sanjay here. Offer for this thread: if you have a source that keeps failing on you, paste it below with what you are actually seeing. Empty fields where there used to be data, partial pages, rate limits kicking in after a few hundred requests, blocks that only appear at scale. I will tell you what usually causes that pattern and whether our agent for that source handles it, including when the answer is that it does not. Free diagnosis, no signup, even if you never use Mindcase. I have debugged enough of these that it costs me nothing and it might save you a weekend.",
          "Sanjay here. If you are evaluating any web data vendor, us included, these are the three questions I would ask, because they separate a good demo from production. One, what happens when a page only partly loads, do I get a row with quietly empty fields or a failure I can actually see? Two, am I charged for attempts or for rows that came back? Three, who notices when the site changes, you or me? Our answers are honest error, rows collected, and us. Where a vendor gets vague on any of those three is usually where the pain shows up in month two. Ask us the same three and hold us to it.",
          "Sanjay here, with an unpopular opinion for a launch thread: if you need one stable source, at low volume, with fields that rarely move, go write your own scraper. It is a weekend and you will not think about it again for months. The maths changes when one of three things happens. The source starts actively defending itself, or you add a second and third source each with their own pagination and auth, or somebody other than you starts depending on the data being fresh. That is when maintenance stops being a weekend and becomes a standing tax on every week. Tell me your source and volume and I will tell you which side of that line you are on, including when the answer is do it yourself.",
          "Sanjay here. The part people underestimate is not the collecting, it is deciding what a row should look like once you have it. Every source has its own idea of an identifier, its own nulls, its own way of distinguishing a field that is missing from one that is empty. Leave that raw and you have pushed the mess downstream into whatever consumes it. So we normalise on our side and keep the response shape identical across every agent, which is the only reason swapping a source does not ripple through your pipeline. If you have ever written a mapping layer to make two sources agree on what a company or a product is, I would like to hear where it hurt most. That layer is exactly what we are trying to delete."
        ]
      },
      {
        id: "maker-saurabh",
        answered: true,   // posted on PH (option 1)
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
          "Thanks Felix, and coming from someone who has run Apify, Bright Data and ScrapingBee that is a fair thing to ask first. The specifics of how we keep collection working are the part we do not discuss publicly, for reasons I suspect you already understand. What I can commit to is the outcome: you get complete rows or an honest error, never a silent partial result, retries happen on our side, and you only pay for rows that actually came back. Try it on the source you care about and judge us on the success rate rather than on a claim in a comment.",
          "Appreciate you asking directly. I am not going to detail our collection setup in a public thread, and I would be a little wary of any vendor who did. What I will put my name to is this: a bad hour costs us rather than you, because retries sit on our side and billing follows rows actually collected. If you want to pressure test it, your first call is free and the bonus credits are live today. Point it at whatever has burned you before.",
          "Thank you Felix. Rather than give you an answer I would have to be vague about anyway, the useful thing is probably a comparison you can run yourself. You already know what Apify and Bright Data feel like at your volume, so run the same job through us and look at the completion rate and what you were charged. If it does not hold up against what you use today, tell me here and I will take the feedback straight rather than argue with it."
                ]
      },
      {
        id: "ashish-khandelwal-1",
        answered: true,   // answered on PH: separate endpoint per API, no CLI, MCP available
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
          "Thank you, and the practical part is easy to solve: your first call is free, so you can point an agent at a real input from your project and see the actual response rather than a screenshot. If you want to poke at it without writing any code first, there is an MCP you can connect and just ask it for the data. On sourcing, the rule we hold to is that where a source has an official API that genuinely serves the use case we use it, and where it does not we collect and structure it ourselves. What we will not do is dress one up as the other, because you should know what you are depending on. Tell me what you need out of X specifically, fields and rough volume, and I will give you a straight answer on where it stands today.",
          "Appreciate that. Rather than answer in the abstract, what is the internal project pulling? If you tell me the fields you need and roughly how many rows a month, I can tell you exactly which agent covers it, what the response looks like, and what it would cost you at our per 1,000 row pricing. On the official API question, we are happy to be specific per source rather than hand wave, since the answer genuinely differs between platforms and it affects what you can rely on. Ask me about X directly and I will not dodge it.",
          "Thanks Kisekiya. Two things worth saying. First, we would rather you test it than trust the post, so the first call is free and the 100% bonus credits run for 24 hours if you want to push real volume through it. Second, on how any given source is handled, the honest position is that it varies by platform and we will tell you per source rather than give one blanket answer that would be wrong somewhere. If X is central to your project, say what you need from it and I will tell you whether we cover it well, cover it partly, or not at all."
        ]
      },
      {
        id: "jaiditya-nair-1",
        author: "Jaiditya Nair",
        role: "",
        when: "20m ago",
        addressed: "@kanupriya_chhabra1",
        body: "@kanupriya_chhabra1 @fmbaechle yeah would like to know that too (a +1 on Felix's question about not getting blocked by LinkedIn)",
        drafts: [
          "@jaiditya_nair @fmbaechle answering you both here. The specifics of how we keep collection running are not something we discuss publicly, and honestly a vendor who does detail it is telling you something about how long it will keep working. What we will commit to is the outcome: complete rows or an honest error, retries on our side, and billing only for rows that actually came back.",
          "@jaiditya_nair @fmbaechle since you both asked the same thing, one answer for both. We keep the how to ourselves, but the part you can actually hold us to is the result. A bad hour costs us rather than you, because you pay for rows collected and not for attempts. That alignment is deliberate, since a vendor charging per attempt has no reason to improve their success rate.",
          "@jaiditya_nair @fmbaechle thank you both for pressing on it. This is the one area we stay quiet about publicly, so instead of a vague answer, here is a concrete offer. Run a job you already know the shape of, at whatever volume is realistic for you, and compare the completion rate against what you use today. First call is free. If the numbers do not hold up, say so here and we will take it on the chin."
                ]
      },
      {
        id: "raunak-singh-1",
        author: "Raunak Singh",
        role: "",
        when: "1m ago",
        addressed: "@kritishpuri",
        body: "@kritishpuri Congratulations on launch, this seems like a great product replacing apify for me, but i have some questions: 1. How we compare this to composio why this is better? 2. If i fetch a reddit or twitter post and got charged for it today example 1$ then will i be charged for the same exact fetch if i call the same posts twice in a day? Second question is the one im bent on",
        drafts: [
          "Thanks Raunak, taking the second one first since that is what you care about. Yes, a second call is a second collection. The thinking behind it is that when you pull the same post twice in a day you are usually after two points on a timeline rather than the same row again, since the upvotes, comment count and sometimes the text itself have moved between the two calls. If we charged you once and quietly served you the morning copy at 6pm, we would be handing you stale data at exactly the moment you asked for fresh, and you would have no way to tell. So yes, a second call is a second collection, because it is genuinely a second observation. On Composio, different layer, they connect agents to apps that already have APIs and we go after the web where one does not exist.",
          "Appreciate the direct question. The way we think about it is that you are not buying a row, you are buying a snapshot at a moment in time. For anything with engagement metrics that distinction is the entire product, since the value of a post fetched now versus six hours ago is completely different. Caching is a decision only you can make, because only you know how stale is too stale for your use case, and it is genuinely cheap to do on your side with whatever window fits. What we will not do is make that call for you invisibly. Tell me the freshness you actually need for reddit and twitter and I will tell you the cheapest way to run it, even if the answer is call us less often.",
          "Thank you Raunak. Straight answer: a repeat fetch is a repeat collection and is billed as one, and the reason is timeline rather than accounting. If you are tracking how a post performs, twice a day is the point, not an accident, and each of those calls is a real measurement you would not want served from a cache. If you are just re-reading something static you already pulled, that is a caching problem worth solving on your side and I would rather tell you that than sell you the extra call. Give me your actual pattern, how often and how fresh, and I will tell you what it costs and where you can trim it. On Composio, we sit at a different layer, so most people comparing us are looking at Apify and Bright Data."
                ]
      },
      {
        id: "shabnam-katoch-1",
        answered: true,   // option 2 posted on PH
        author: "Shabnam Katoch",
        role: "",
        when: "1m ago",
        addressed: "",
        body: "Reliable web data is still one of the biggest bottlenecks for AI applications. Simplifying extraction without teams having to maintain complex scraping setups feels like a valuable infrastructure layer. Great launch!",
        drafts: [
          "Thank you Shabnam. Bottleneck is the right word, and the sharp edge of it is that the failure is usually quiet. An agent does not announce that it reasoned over stale or half collected data, it just gives you a confidently wrong answer. That is the part we care most about getting right, so a call returns a clean structured row or an honest error rather than something in between.",
          "Appreciate that. What surprised us building it is how much of the bottleneck is maintenance rather than the first extraction. Getting data out of a site once is a fun afternoon. Keeping it correct across layout changes, rate limits and anti-bot for a year is the actual job, and that is the part teams underestimate when they decide to keep it in house.",
          "Thanks Shabnam. If you are working on anything in this space I would be curious which part is the real bottleneck for you, the collection itself or making different sources agree on the same schema afterwards. We hear both, and the second one gets far less attention than it deserves."
        ]
      },
      {
        id: "rajat-kapoor-1",
        author: "Rajat Kapoor",
        role: "",
        when: "13m ago",
        addressed: "",
        body: "This is actually pretty useful. Keeping scrapers working is such a pain, so having it all behind one API makes a lot of sense. Nice launch",
        drafts: [
          "Thanks Rajat. The bit that gets underestimated is that the pain does not grow in a straight line. One scraper is a weekend. Five sources break independently of each other, so there is almost always one of them down, and you go from writing scrapers to running a small unplanned operations rota. That crossover is where most teams start looking for something like this.",
          "Appreciate it. What usually rots a scraper is not the code, it is the ownership. Whoever wrote it knows the quirks, then they move to another team and it becomes a file nobody wants to touch until it breaks loudly. Putting it behind an API is partly a technical decision and mostly a way of making sure that knowledge is not sitting with one person.",
          "Thank you. Out of curiosity, how many sources are you keeping alive at the moment? The answer changes what I would recommend. At one or two stable sources you are honestly fine as you are, and it is somewhere past that where the maintenance stops being occasional and starts being a standing item on someone's week."
        ]
      },
      {
        id: "ryan-keller-1",
        answered: true,   // option 1 posted on PH
        author: "Ryan Keller",
        role: "",
        when: "8m ago",
        addressed: "",
        body: "Curious to see how this handles websites that constantly change layouts or add new restrictions. If the reliability holds up, this could become a useful foundation for many data-driven products.",
        drafts: [
          "Good thing to be sceptical about Ryan. The structural advantage is not that we are cleverer about layout changes, it is that when a site changes it breaks for everyone using that agent at once, so we hear about it immediately and fix it once for all of them. Maintaining it in house means you find out alone, usually late, and fix it alone every time. We are not going to claim we never break. We are claiming you are not the one who has to notice or repair it.",
          "Thanks Ryan. Concretely, responses are validated against the shape that agent is supposed to return, so a field that quietly vanishes after a redesign surfaces as an error rather than as a null that flows happily into your database. That is the difference between finding out in minutes and finding out when someone questions a number next week. Which sources are you thinking of? Some are far more volatile than others and I would rather tell you which ones we are genuinely solid on.",
          "Appreciate the framing, and I would push it one step further. The useful question for any vendor here is not whether things break, because at this scale they will, it is how long recovery takes and who is doing the work during it. That is the number we hold ourselves to and I am happy to be held to it publicly. If you do try it, tell us when something looks off rather than quietly walking away, because a specific report is worth more to us than a good review."
        ]
      },
      {
        id: "gal-dayan-1",
        author: "Gal Dayan",
        role: "",
        when: "6m ago",
        addressed: "",
        body: "answering Saurabh's question directly - we're a B2B SaaS and the source I'd actually pay for is G2/Capterra review pages for our competitors: review text, star rating, and reviewer company size band. Maybe 500-1000 rows a month, nothing crazy. Every competitive intel tool I've tried treats review sites as an afterthought behind the \"big\" platforms. Also curious about the pricing question Raunak asked above - if I fetch the same post twice in a day, am I paying twice or is there any caching on the backend?",
        drafts: [
          "Gal, this is exactly the kind of answer Saurabh was asking for, thank you. Review text, star rating and reviewer company size band is a clean spec, and 500 to 1,000 rows a month is a small, very manageable volume. You are also right that review sites get treated as second class next to the big platforms, which is odd given how much competitive signal sits in them. On your pricing question, each call collects fresh so a repeat call bills again, but reviews behave differently to social posts. Existing reviews rarely change, what you actually want is the new ones, so the cheap pattern is a scheduled pull with a dedupe on review id at your end. At your volume the cost of that is not going to be what decides this for you.",
          "Thank you Gal, this is genuinely useful and specific enough to act on. The company size band is the interesting part of your ask, because that is the field that turns a pile of reviews into something you can actually segment by, and it is usually the one that gets dropped. On the caching question, a repeat fetch is a repeat collection, but I would not run it that way for reviews. Reviews accumulate rather than change, so pulling on a schedule and keying on review id gives you new ones without paying for the same text twice. Tell me how fresh you need it, daily or weekly, and I will tell you what that actually costs you.",
          "Appreciate you answering the question properly Gal, most people say the source and stop. Review text, rating and reviewer size band across G2 and Capterra at around 1,000 rows a month is a well shaped request and we will come back to you in this thread with a straight yes or no on both sites rather than a maybe. On pricing, you pay per collection, so calling the same page twice bills twice. For competitor review tracking that is rarely the right pattern anyway. A scheduled pull plus dedupe on your side is cheaper and gives you the same picture, and I would rather tell you that than sell you the extra calls."
        ]
      }
    ]
  }
};

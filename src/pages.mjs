export const site = {
  name: "Bodycam Guide",
  url: "https://bodycam.website",
  description: "Independent Bodycam game guides for Zombies, Trenches, updates, and multiplayer modes.",
  lastModified: "2026-09-11",
  lastCheckedLabel: "September 11, 2026",
  currentFocusLabel: "Current update topics",
  footerUpdateLabel: "Updated with major changes",
  nav: [
    { label: "Zombies Guide", href: "/zombies-guide/" },
    { label: "Trenches Map", href: "/trenches-map/" },
    { label: "Latest Update", href: "/latest-update/" },
    { label: "Game Modes", href: "/game-modes/" }
  ]
};

const sourceNote = `<p class="source-note">Status notes are written from official Bodycam Steam news checked on September 11, 2026. This site is independent and does not mirror official patch notes word for word.</p>`;

const related = {
  zombiesGuide: {
    href: "/zombies-guide/",
    kicker: "P1 Guide",
    title: "Bodycam Zombies Guide",
    description: "Gameplay-focused guide to how Zombies works and what is confirmed."
  },
  zombiesMode: {
    href: "/zombies-mode/",
    kicker: "Mode Status",
    title: "Zombies Mode Availability",
    description: "Dedicated page for live Zombies access and mode notes."
  },
  trenches: {
    href: "/trenches-map/",
    kicker: "P1 Map",
    title: "Trenches Map Guide",
    description: "Confirmed map overview, pacing notes, and safe practical tips."
  },
  locked: {
    href: "/locked-and-loaded/",
    kicker: "Version Hub",
    title: "Locked & Loaded Update",
    description: "Major additions in the v0.8 update and links to detailed guides."
  },
  latest: {
    href: "/latest-update/",
    kicker: "Update Hub",
    title: "Latest Bodycam Update",
    description: "A maintainable hub for current patches and next-update notes."
  },
  modes: {
    href: "/game-modes/",
    kicker: "Mode Hub",
    title: "Bodycam Game Modes",
    description: "PvP modes, Zombies status, and how current playlists fit together."
  }
};

export const pages = [
  {
    path: "/",
    title: "Bodycam Guide - Zombies, Maps, Updates & Game Modes",
    description: "Unofficial Bodycam guide site focused on Zombies, Trenches, Locked & Loaded, latest updates, and multiplayer game modes.",
    h1: "Bodycam Guide",
    kicker: "Unofficial tactical FPS guide",
    lede: "Fast, careful Bodycam guides for players catching up on Zombies, the Trenches map, Locked & Loaded, latest updates, and game modes.",
    layout: "home",
    homeSections: [
      {
        id: "latest-guides",
        kicker: "Start here",
        title: "Latest Guides",
        text: "Start with the pages that help you understand what changed, what to play, and which guide to read next.",
        cards: [
          {
            href: "/zombies-guide/",
            label: "P1",
            title: "Bodycam Zombies Guide",
            text: "Use this for Zombies gameplay questions, preparation notes, and careful answers around maps or endings."
          },
          {
            href: "/trenches-map/",
            label: "P1",
            title: "Trenches Map",
            text: "Confirmed overview of the new map, including close trench fights, exposed areas, and update context."
          },
          {
            href: "/locked-and-loaded/",
            label: "Hub",
            title: "Locked & Loaded",
            text: "The version hub for the major Bodycam update that added Trenches and rebuilt several systems."
          }
        ]
      },
      {
        id: "zombies",
        kicker: "Zombies",
        title: "Zombies Guide And Mode Status",
        text: "Use the Zombies Guide for how-to questions, and use Zombies Mode Status when you only need availability or maintenance information.",
        cards: [
          {
            href: "/zombies-mode/",
            label: "Status",
            title: "Is Zombies Available?",
            text: "Check whether Zombies is available, limited, disabled, or under maintenance on the dedicated status page."
          },
          {
            href: "/zombies-guide/",
            label: "Guide",
            title: "How To Approach Zombies",
            text: "Read gameplay context, preparation tips, and careful notes about what is confirmed."
          }
        ]
      },
      {
        id: "maps",
        kicker: "Maps",
        title: "Maps: Trenches First",
        text: "Learn what makes Trenches different before jumping into its tight corridors, outdoor sightlines, and update-specific changes.",
        cards: [
          {
            href: "/trenches-map/",
            label: "Map",
            title: "Trenches Map Overview",
            text: "What the map is, how its close and long-range areas change match rhythm, and what not to assume yet."
          },
          {
            href: "/locked-and-loaded/",
            label: "Update",
            title: "Why Trenches Matters",
            text: "Trenches is part of the larger Locked & Loaded update alongside systems and mode changes."
          }
        ]
      },
      {
        id: "latest-update",
        kicker: "Updates",
        title: "Latest Update Tracking",
        text: "Use the update hub to catch up on major changes, recent patches, and what to watch for next.",
        cards: [
          {
            href: "/latest-update/",
            label: "Current",
            title: "Latest Bodycam Update",
            text: "Current major update, recent patch notes summary, next-update watchlist, and links to detailed pages."
          },
          {
            href: "/locked-and-loaded/",
            label: "Major",
            title: "Locked & Loaded Details",
            text: "The main version hub for the September 2026 overhaul."
          }
        ]
      },
      {
        id: "game-modes",
        kicker: "Modes",
        title: "Game Modes",
        text: "A compact hub for Bodycam multiplayer modes, competitive changes, and where Zombies fits.",
        cards: [
          {
            href: "/game-modes/",
            label: "Hub",
            title: "Bodycam Game Modes",
            text: "Deathmatch, Team Deathmatch, Gun Game, Hardpoint, Wingman, Versus, and the Zombies status link."
          },
          {
            href: "/zombies-mode/",
            label: "Linked",
            title: "Zombies Mode",
            text: "Go here when your main question is whether Zombies can be played or why it may not appear."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Is Bodycam Guide an official site?",
        answer: "<p>No. Bodycam Guide is an independent fan-made guide site and is not affiliated with Reissad Studio or the official Bodycam game.</p>"
      },
      {
        question: "What should I read first?",
        answer: "<p>If you are here for Zombies, start with the Zombies Mode Status page for availability, then read the Zombies Guide for gameplay context. If you are returning after the latest major update, start with Locked & Loaded or Latest Update.</p>"
      },
      {
        question: "Does this site use official Bodycam images?",
        answer: "<p>No. The launch design avoids official logos, screenshots, and copyrighted promotional art.</p>"
      }
    ]
  },
  {
    path: "/zombies-guide/",
    title: "Bodycam Zombies Guide - Mode Status, How To Play & FAQ",
    description: "A careful Bodycam Zombies guide answering whether Zombies is playable, what the mode means, how to approach it, and what is not confirmed.",
    h1: "BODYCAM ZOMBIES GUIDE",
    breadcrumb: "Zombies Guide",
    kicker: "P1 Zombies guide",
    lede: "Use this as a gameplay guide for Bodycam Zombies: what the mode is, how to think about survival, how maps and objectives can shape a run, and what ending information should be treated as reliable.",
    status: `<strong>Guide note:</strong> For live Zombies access, check <a href="/zombies-mode/">Zombies Mode Status</a>. This page focuses on gameplay guidance.`,
    related: [related.zombiesMode, related.locked, related.latest, related.modes],
    sections: [
      {
        id: "quick-answer",
        title: "Quick Answer",
        html: `<p>Bodycam Zombies is the game's zombie-focused mode, separate from standard PvP matches. Treat this page as the guide for how the mode should be approached: surviving pressure, reading objectives, learning map flow, and avoiding outdated route claims.</p>
        <ul class="check-list">
          <li><strong>Does Bodycam have Zombies?</strong> Yes. Use this guide for gameplay context and the status page for live access.</li>
          <li><strong>What is Bodycam Zombies?</strong> A Zombies mode for players who want PvE-style pressure instead of a normal multiplayer PvP round.</li>
          <li><strong>How does Bodycam Zombies work?</strong> Follow the current in-game prompts, manage space carefully, and treat waves or objectives as patch-sensitive until confirmed in the live build.</li>
          <li><strong>Can you play Zombies right now?</strong> Check <a href="/zombies-mode/">Zombies Mode Status</a> for the live status.</li>
          <li><strong>Is there a confirmed Zombies ending?</strong> Only trust ending steps when they match the current build and come from reliable confirmation.</li>
        </ul>
        <p>This guide avoids claiming exact routes, objectives, wave counts, Easter eggs, or endings unless they can be tied to reliable current information.</p>`
      },
      {
        id: "version-safe-notes",
        title: "Version-Safe Guide Notes",
        html: `<p>If Zombies does not appear in your game, check <a href="/zombies-mode/">Zombies Mode Status</a> before troubleshooting your install. For gameplay, the important point is that Zombies rules can change between builds, so old videos, routes, and ending claims may not match the version you see in-game.</p>`
      },
      {
        id: "how-to-play",
        title: "How Bodycam Zombies Works",
        html: `<p>When you enter Zombies through the official in-game menus, play the first minutes as an information check. Look for objective text, listen for spawn pressure, learn where your team can fall back, and avoid assuming that an older route still works.</p>
        <p>Think of the mode as a survival problem first. Your job is to understand how enemies apply pressure, whether the run is using waves or objective steps, and when the map is asking you to hold, rotate, or search.</p>
        <h3>First checks inside a run</h3>
        <ul>
          <li>Read any objective prompt before moving too far from spawn.</li>
          <li>Identify where close-range pressure can trap you.</li>
          <li>Pick a fallback direction before committing to a narrow area.</li>
          <li>Watch whether the match uses waves, objective steps, extraction-style goals, or event-specific rules.</li>
        </ul>
        <h3>Waves and objectives</h3>
        <p>Do not assume every Zombies build uses the same wave count, objective chain, or ending trigger. If the game presents a prompt, timer, interactable, or route marker, trust the live match information before a checklist from an older version.</p>`
      },
      {
        id: "survival-principles",
        title: "Practical Survival Principles",
        html: `<p>These principles are useful in Bodycam's bodycam-perspective gunplay without pretending to know the final wave rules, enemy values, objective chain, or map-specific route for every build.</p>
        <ul>
          <li><strong>Move with sound in mind.</strong> Bodycam heavily rewards listening, so panic sprinting can make a bad situation worse.</li>
          <li><strong>Keep lanes simple.</strong> In dark interiors or tight spaces, hold angles you can explain to a teammate rather than drifting alone.</li>
          <li><strong>Conserve attention, not just ammo.</strong> Reloads, checks, and turns all cost awareness in a bodycam-perspective shooter.</li>
          <li><strong>Reload before transitions.</strong> Crossing from cover into open space is a bad time to discover you are empty.</li>
          <li><strong>Do not chase every sound.</strong> Let threats come through angles you can control instead of splitting the team.</li>
          <li><strong>Respect version changes.</strong> Old route memory may be less useful than reading the live objective prompts.</li>
        </ul>`
      },
      {
        id: "maps-and-ending",
        title: "Zombies Map And Ending Notes",
        html: `<p>Map and ending information should be handled carefully. A real Zombies guide needs current confirmation before naming rooms, claiming item locations, listing wave triggers, describing Easter eggs, or promising a specific ending route.</p>
        <p>If you find an older video or checklist, use it as historical context until the same steps can be verified in the current Bodycam build. This page will stay cautious rather than inventing objectives, routes, or endings.</p>`
      },
      {
        id: "related-update",
        title: "How Locked & Loaded Changes The Context",
        html: `<p>Locked & Loaded is not just a content patch. It includes a new loadout and weapon-customization system, game-mode logic refactoring, UI changes, match-flow updates, and the new Trenches map. That means Zombies advice should be checked against the current systems instead of treated as permanent.</p>
        <p>For update context, read the <a href="/locked-and-loaded/">Locked & Loaded hub</a> and the <a href="/latest-update/">latest update hub</a>.</p>`
      }
    ],
    faq: [
      {
        question: "Does Bodycam have Zombies?",
        answer: "<p>Yes. Bodycam has a Zombies mode topic, and this page focuses on how players should approach it. For live access, use the Zombies Mode Status page.</p>"
      },
      {
        question: "How does Bodycam Zombies work?",
        answer: "<p>Exact rules can change by build, but the safe approach is to follow in-game objectives, manage space, listen carefully, and avoid relying on outdated route claims.</p>"
      },
      {
        question: "Where do I check if Zombies is playable now?",
        answer: "<p>Use the <a href='/zombies-mode/'>Zombies Mode Status</a> page for the live status.</p>"
      },
      {
        question: "Is there a Bodycam Zombies ending?",
        answer: "<p>Only trust ending steps when they are confirmed for the current build. This guide does not invent objectives, Easter eggs, item locations, or ending routes.</p>"
      }
    ]
  },
  {
    path: "/trenches-map/",
    title: "Bodycam Trenches Map Guide - Overview, Tips & Update Context",
    description: "Confirmed Bodycam Trenches map guide covering what Trenches is, close and long-range pacing, practical tips, and Locked & Loaded context.",
    h1: "BODYCAM TRENCHES MAP GUIDE",
    breadcrumb: "Trenches Map",
    kicker: "P1 map guide",
    lede: "Trenches is the new Bodycam map added with Locked & Loaded, built around tight trench fighting and longer sightlines across exposed outdoor areas.",
    status: `<strong>Player note:</strong> Specific spawns, routes, and match details can shift with updates, so use this as a practical overview of how the Bodycam Trenches map plays.`,
    related: [related.locked, related.latest, related.modes, related.zombiesGuide],
    sections: [
      {
        id: "what-is-trenches",
        title: "What Is The Trenches Map?",
        html: `<p>Trenches is a new Bodycam map introduced in the Locked & Loaded update. The official description frames it as a larger battlefield with intense close-quarters fights inside trench networks and longer-range engagements across the open areas around them.</p>
        <p>That contrast is the important part for players. Bodycam Trenches is not just an indoor CQB map, and it should not be approached like a pure long-range map either.</p>`
      },
      {
        id: "map-overview",
        title: "Trenches Map Overview",
        html: `<p>Official notes confirm flooded and dry trench networks, underground galleries and tunnel systems, forest environments, ruined compounds, observation posts, a central church point of interest, and multiple tactical routes across the battlefield.</p>
        <p>In play, that means you should expect frequent shifts between covered movement, tight corners, darker interior pressure, and exposed outdoor crossings. Learn the rhythm first, then refine callouts with your own squad.</p>`
      },
      {
        id: "gameplay-characteristics",
        title: "Gameplay Characteristics",
        html: `<p>Trenches asks players to switch rhythm quickly. A short, noisy fight in the trench network can turn into an exposed crossing a few seconds later. The Locked & Loaded update also added a lighting and weather scenario system, so visibility may vary by match or round depending on the selected scenario.</p>
        <h3>What this means in practice</h3>
        <ul>
          <li>Expect close-range pressure inside trench corridors and underground spaces.</li>
          <li>Expect more dangerous repositioning when moving across open ground.</li>
          <li>Use audio carefully; Bodycam's latest audio pass was designed to improve spatial readability.</li>
          <li>Do not assume every weapon setup works equally well across both halves of an engagement.</li>
        </ul>`
      },
      {
        id: "range-zones",
        title: "Close-Range And Long-Range Areas",
        html: `<p>The confirmed design contrast is simple: trench networks create confined fights, while surrounding outdoor areas create longer sightlines. This does not mean every outdoor angle is safe or every trench corner is a guaranteed close fight, but it does mean loadout choices should account for both extremes.</p>
        <p>If you are learning the map, spend early matches identifying where you repeatedly lose vision or sound information. Those weak spots tell you where to slow down, regroup, or take a different angle next round.</p>`
      },
      {
        id: "tips",
        title: "Practical Tips",
        html: `<ul class="tip-list">
          <li><strong>Slow down before transitions.</strong> The danger point is often the move from trench cover into open exposure.</li>
          <li><strong>Pair your angle with an exit.</strong> A long sightline is only useful if you can leave when the fight collapses.</li>
          <li><strong>Use the new loadout system thoughtfully.</strong> A setup built only for tight rooms may struggle when the map opens up.</li>
          <li><strong>Read patch notes after hotfixes.</strong> Map list order, mode support, and match rules can change quickly after a major update.</li>
        </ul>`
      },
      {
        id: "locked-loaded-context",
        title: "Related Locked & Loaded Update",
        html: `<p>Trenches is one piece of Locked & Loaded. The same update also brought the new loadout and weapon-customization system, new optics work, audio changes, a Shooting Range hub, game-mode updates, and broader technical reworks.</p>
        <p>For the wider patch context, read the <a href="/locked-and-loaded/">Locked & Loaded update hub</a>.</p>`
      }
    ],
    faq: [
      {
        question: "When did Trenches release in Bodycam?",
        answer: "<p>Trenches was added with the Locked & Loaded major update released on September 2, 2026.</p>"
      },
      {
        question: "Is Trenches a close-range map?",
        answer: "<p>Partly. Official notes describe close-quarters combat in the trench network and longer-range engagements in surrounding open areas.</p>"
      },
      {
        question: "Are exact routes or weapon locations confirmed?",
        answer: "<p>Specific routes, spawns, and weapon-location details can change with updates. This page focuses on the reliable way Trenches plays: tight trench pressure, exposed outdoor movement, and careful transitions between the two.</p>"
      }
    ]
  },
  {
    path: "/zombies-mode/",
    title: "Bodycam Zombies Mode - Availability, Maintenance & Disabled Status",
    description: "Bodycam Zombies Mode status page explaining whether Zombies is available, why it may be disabled, and how to track maintenance.",
    h1: "BODYCAM ZOMBIES MODE AVAILABILITY",
    breadcrumb: "Zombies Mode",
    kicker: "Mode status",
    lede: "This page is about availability and maintenance. For gameplay advice, use the Zombies guide; for status, start here.",
    status: `<strong>Current status:</strong> Official notes describe Zombie Mode as temporarily disabled after Locked & Loaded.`,
    related: [related.zombiesGuide, related.latest, related.locked, related.modes],
    sections: [
      {
        id: "is-zombies-available",
        title: "Is Zombies Available In Bodycam?",
        html: `<p>Not as a normal current playlist according to the latest official notes. The important wording is temporary: Zombies is not treated as deleted, but it is disabled while the mode is reworked and prepared for a future return.</p>
        <p>If Zombies is missing from your playlist, the reason is that the mode is temporarily disabled rather than permanently removed.</p>`
      },
      {
        id: "why-disabled",
        title: "Why Zombies Is Disabled",
        html: `<p>The studio linked the decision to two issues: regressions caused while reworking the rest of the game, and the feeling that the mode had become too stagnant. Instead of keeping it live, the plan is to bring it back stronger later.</p>
        <p>That means reinstalling the game, changing regions, or hunting for unofficial downloads should not be your first reaction. Check current notes first.</p>`
      },
      {
        id: "maintenance-meaning",
        title: "What Maintenance Means For Players",
        html: `<p>Maintenance or disablement usually means the mode is being held back at the live-service level, not that each player has a broken local file. In this case, official notes also mention reintegrating Zombies into the new systems introduced by Locked & Loaded.</p>
        <h3>What you can do</h3>
        <ul>
          <li>Keep the game updated.</li>
          <li>Watch official update posts for a return window or event details.</li>
          <li>Use current PvP modes while Zombies is unavailable.</li>
          <li>Be cautious with outdated Zombies walkthroughs from older builds.</li>
        </ul>`
      },
      {
        id: "return-window",
        title: "When Could Zombies Return?",
        html: `<p>Official wording points toward a possible event window around Halloween, but it does not confirm a Zombies return date. Treat that as a possible window, not a scheduled event.</p>
        <p>For the latest confirmed changes, read the <a href="/latest-update/">latest update page</a>.</p>`
      },
      {
        id: "guide-difference",
        title: "Looking For Zombies Gameplay Help?",
        html: `<p>For gameplay, objectives, survival tips, maps, or ending information, use the <a href="/zombies-guide/">Bodycam Zombies Guide</a>.</p>`
      }
    ],
    faq: [
      {
        question: "Why is Zombies not available in Bodycam?",
        answer: "<p>Official notes say Zombie Mode is temporarily disabled while the team fixes regressions and improves the mode for a later return.</p>"
      },
      {
        question: "Is Bodycam Zombies gone forever?",
        answer: "<p>No official note says Zombies is permanently removed. The current wording points to a future return.</p>"
      },
      {
        question: "Is there a confirmed Zombies return date?",
        answer: "<p>No exact date is confirmed on this page. Official notes mention a future event around Halloween, but that should be treated as a tentative window until dated patch notes appear.</p>"
      }
    ]
  },
  {
    path: "/locked-and-loaded/",
    title: "Bodycam Locked & Loaded Update - Trenches, Loadouts & Zombies",
    description: "Version hub for the Bodycam Locked & Loaded update covering Trenches, loadout changes, weapon customization, Zombies status, and related guides.",
    h1: "BODYCAM LOCKED & LOADED UPDATE",
    breadcrumb: "Locked & Loaded",
    kicker: "Major update guide",
    lede: "Locked & Loaded is Bodycam's September 2026 major update, adding Trenches and rebuilding major pieces of loadouts, modes, UI, audio, and match flow.",
    status: `<strong>Major update:</strong> Locked & Loaded v0.8 released on September 2, 2026, with fast follow-up patch notes in the days after launch.`,
    related: [related.trenches, related.zombiesMode, related.zombiesGuide, related.latest, related.modes],
    sections: [
      {
        id: "what-is-it",
        title: "What Is Locked & Loaded?",
        html: `<p>Quick answer: Bodycam Locked & Loaded is the major update released on September 2, 2026. The Locked & Loaded update added the Trenches map and changed how players think about loadouts, weapon customization, optics, equipment, game modes, audio, UI, and match flow.</p>
        <p>If you are returning after a break, expect Bodycam to feel different. The biggest player-facing changes are learning Trenches, rebuilding your loadouts, understanding the new competitive mode direction, and checking the current Zombies status before looking for that mode in-game.</p>`
      },
      {
        id: "major-additions",
        title: "Major Additions",
        html: `<div class="feature-list">
          <div><h3>Trenches</h3><p>A new map built around trench networks, underground spaces, outdoor areas, and longer sightline pressure.</p></div>
          <div><h3>Loadout and weapon customization</h3><p>A new loadout flow with a large attachment system, compatibility rules, and gameplay-affecting stats.</p></div>
          <div><h3>Optics and weapon feel</h3><p>Magnified optics, scope work, first-person animation changes, weapon handling updates, and new weapon additions.</p></div>
          <div><h3>Tools and equipment</h3><p>Drones, RC cars, knives, grenades, and supporting audio or handling updates were added or reworked.</p></div>
          <div><h3>Lobby and UI</h3><p>The update introduced a Shooting Range hub, tablet-based UI direction, server browser, loadout screen, and refreshed match screens.</p></div>
          <div><h3>Modes and match flow</h3><p>Wingman 2v2 replaces Bodybomb as the default competitive mode, while Gun Game, Hardpoint, and match flow received updates.</p></div>
        </div>`
      },
      {
        id: "trenches",
        title: "Trenches In Locked & Loaded",
        html: `<p>Trenches is the headline map addition. It creates a different learning problem from tighter indoor maps because players must handle both close trench pressure and more exposed outdoor movement.</p>
        <p>Read the detailed <a href="/trenches-map/">Bodycam Trenches map guide</a> for map pacing, close-range pressure, exposed crossings, and practical tips.</p>`
      },
      {
        id: "loadout-customization",
        title: "Loadout And Weapon Customization",
        html: `<p>The update introduces a new loadout and weapon-customization flow, including a large attachment pool and attachment effects such as aim speed, reload speed, recoil, spread, kick, and magazine capacity. Because compatibility and balance can change quickly after a major update, treat exact best builds as patch-sensitive.</p>`
      },
      {
        id: "zombies",
        title: "Zombies Changes",
        html: `<p>Zombies is affected by the broader systems work around Locked & Loaded, so players should separate two questions: whether the mode is currently accessible, and how the mode should be approached when it is playable.</p>
        <p>Use <a href="/zombies-mode/">Zombies Mode availability</a> for status and <a href="/zombies-guide/">Bodycam Zombies Guide</a> for gameplay questions.</p>`
      },
      {
        id: "who-should-read",
        title: "What Changed After Locked & Loaded?",
        html: `<p>Returning players should re-check the basics after Locked & Loaded: learn Trenches, rebuild loadouts around the new customization system, expect mode and match-flow changes, and review Zombies separately before trying to queue for it.</p>`
      }
    ],
    faq: [
      {
        question: "When did Bodycam Locked & Loaded release?",
        answer: "<p>Locked & Loaded v0.8 released on September 2, 2026.</p>"
      },
      {
        question: "Did Locked & Loaded add Trenches?",
        answer: "<p>Yes. Trenches is the new map addition highlighted in the update.</p>"
      },
      {
        question: "Did Locked & Loaded make Zombies playable?",
        answer: "<p>No. Locked & Loaded did not make Zombies the main new playable addition. Use <a href='/zombies-mode/'>Zombies Mode availability</a> for current status and <a href='/zombies-guide/'>Bodycam Zombies Guide</a> for gameplay questions.</p>"
      }
    ]
  },
  {
    path: "/latest-update/",
    title: "Bodycam Latest Update - Current Patch, What's New & Next Update",
    description: "Bodycam latest update coverage with the current major update, recent patch changes, what's new for players, and confirmed next-update news.",
    h1: "BODYCAM LATEST UPDATE",
    breadcrumb: "Latest Update",
    kicker: "Current update notes",
    lede: "Find the current Bodycam update, the latest follow-up patch changes, what players need to know now, and whether a next update date has been confirmed.",
    status: `<strong>Current update:</strong> Locked & Loaded v0.8 with follow-up patch changes.`,
    related: [related.locked, related.trenches, related.zombiesMode, related.zombiesGuide, related.modes],
    sections: [
      {
        id: "quick-answer",
        title: "Quick Answer",
        html: `<p><strong>Latest major update:</strong> Locked & Loaded v0.8 is the current major Bodycam update covered here. Read the <a href="/locked-and-loaded/">Locked & Loaded update guide</a> for the full breakdown.</p>
        <p><strong>Latest patch:</strong> The latest follow-up patch listed here is V0.8 #3 from September 8, 2026. It addressed a session-host crash exploit, restored private-lobby currency earnings at a reduced rate, and reduced attachment prices.</p>
        <p><strong>Another update:</strong> No official release date has been confirmed for the next Bodycam update.</p>`
      },
      {
        id: "current-major-update",
        title: "Current Major Update",
        html: `<p>Locked & Loaded v0.8 is the current major update. It added the Trenches map and changed loadouts, modes, UI, audio, and match flow. Read the <a href="/locked-and-loaded/">full Locked & Loaded guide</a> for the detailed version breakdown.</p>`
      },
      {
        id: "latest-changes",
        title: "Latest Changes",
        html: `<p>V0.8 #3, dated September 8, 2026, addressed a session-host crash exploit, restored private-lobby currency earnings at a reduced rate, and reduced attachment prices.</p>
        <p>Earlier follow-up patches adjusted progression rewards, fixed crash and visual issues, increased Deathmatch and Team Deathmatch score limits, and moved Trenches to the front of the map list. For current Zombies availability, see the <a href="/zombies-mode/">Zombies Mode status page</a>.</p>`
      },
      {
        id: "whats-new",
        title: "What's New For Players",
        html: `<ul class="check-list">
          <li><strong>Map:</strong> Trenches is the new map to learn first. Use the <a href="/trenches-map/">Trenches map guide</a> for its close-range and long-range play.</li>
          <li><strong>Loadouts:</strong> Attachments and weapon setup changed, while exact balance may keep moving.</li>
          <li><strong>Modes:</strong> Wingman is the default competitive mode. Check <a href="/zombies-mode/">Zombies Mode</a> for current availability.</li>
          <li><strong>Match flow:</strong> Host migration, UI, server browser, score limits, and mode flow have all changed around the update.</li>
        </ul>`
      },
      {
        id: "next-update",
        title: "Next Update Watchlist",
        html: `<p><strong>No official release date has been confirmed</strong> for the next Bodycam update. Current update notes leave Zombies availability, progression and economy tuning, and further fixes as the main items to watch.</p>`
      }
    ],
    faq: [
      {
        question: "What is the latest major Bodycam update?",
        answer: "<p>Locked & Loaded v0.8 is the current major update. See the <a href='/locked-and-loaded/'>Locked & Loaded update guide</a> for its main additions.</p>"
      },
      {
        question: "What is the latest Bodycam patch?",
        answer: "<p>The latest follow-up patch listed here is V0.8 #3 from September 8, 2026. It addressed a session-host crash exploit and made progression and attachment-price changes.</p>"
      },
      {
        question: "Is another Bodycam update announced?",
        answer: "<p>No official release date has been confirmed for the next Bodycam update.</p>"
      }
    ]
  },
  {
    path: "/game-modes/",
    title: "Bodycam Game Modes - PvP Modes, Wingman, Zombies & Multiplayer",
    description: "Bodycam game modes hub covering multiplayer PvP modes, Wingman changes, Zombies availability, and mode-related update notes.",
    h1: "BODYCAM GAME MODES",
    breadcrumb: "Game Modes",
    kicker: "Mode hub",
    lede: "Bodycam is primarily a multiplayer PvP game, with Deathmatch, Team Deathmatch, Gun Game, Hardpoint, Versus, and Wingman 2v2 as its main competitive modes. Zombies is also part of the lineup, but its availability can change with the current update state.",
    status: `<strong>Mode note:</strong> Bodybomb has been retired, Wingman 2v2 is the default competitive mode, and Zombie Mode is temporarily disabled according to the current update notes.`,
    related: [related.zombiesMode, related.zombiesGuide, related.locked, related.latest, related.trenches],
    sections: [
      {
        id: "quick-answer",
        title: "Quick Answer",
        html: `<p>Bodycam's main game modes are Deathmatch, Team Deathmatch, Gun Game, Hardpoint, Versus, and Wingman 2v2. Zombie Mode is also part of the game's mode lineup, but its availability can change with the current version and update status.</p>
        <p>For current Zombies access, see the <a href="/zombies-mode/">Zombies Mode status page</a>.</p>`
      },
      {
        id: "mode-overview",
        title: "Mode Overview",
        html: `<p>The current mode lineup includes Deathmatch, Team Deathmatch, Gun Game, Hardpoint, Versus, Wingman 2v2, and Zombie Mode. Zombie Mode is temporarily disabled according to the current update notes. Locked & Loaded also refactored game-mode logic, so mode behavior and rewards may continue to shift through follow-up patches.</p>`
      },
      {
        id: "pvp-modes",
        title: "PvP Multiplayer Modes",
        html: `<div class="feature-list">
          <div><h3>Deathmatch</h3><p>Free-for-all style PvP. A follow-up patch increased the score limit from 30 to 40 kills.</p></div>
          <div><h3>Team Deathmatch</h3><p>Team-based kill race. A follow-up patch increased the score limit from 50 to 75 kills.</p></div>
          <div><h3>Gun Game</h3><p>A progression-through-weapons mode. Locked & Loaded follow-ups adjusted weapon pools and fixed pistol-heavy behavior.</p></div>
          <div><h3>Hardpoint</h3><p>Objective control mode. The update added Hardpoint support to Trenches and CQB and rebalanced capture points across maps.</p></div>
          <div><h3>Versus</h3><p>A competitive PvP mode affected by progression and exploit fixes in early follow-up patches.</p></div>
          <div><h3>Wingman 2v2</h3><p>The new default competitive mode replacing Bodybomb 5v5, designed for smaller, faster rounds and focused teamplay.</p></div>
        </div>`
      },
      {
        id: "wingman",
        title: "Wingman Replaces Bodybomb",
        html: `<p>Locked & Loaded retires Bodybomb and replaces it with Wingman 2v2 as the default competitive mode. Official notes describe Wingman as faster and more focused, with compatible maps receiving bombsite support and adjusted round flow.</p>
        <p>One important limitation in the launch notes: Wingman is solo queue for now, with duo queue planned later. Ranks and ELO are gained through Wingman 2v2 in the current system described by the update.</p>`
      },
      {
        id: "zombies",
        title: "Zombies Mode",
        html: `<p>Zombie Mode is a separate part of Bodycam's lineup, but official notes say it is temporarily disabled while the team reworks it for a later return.</p>
        <p>For availability and maintenance, read <a href="/zombies-mode/">Bodycam Zombies Mode</a>. For Zombies gameplay questions, read the <a href="/zombies-guide/">Bodycam Zombies Guide</a>.</p>`
      },
      {
        id: "playing-with-friends",
        title: "Can You Play Bodycam With Friends?",
        html: `<p>You can play with friends through custom games or by joining the same server separately, depending on the current build options. The party system was not included in the Locked & Loaded launch state, and official notes say Quick Play and the Server Browser can only be used solo for now.</p>`
      },
      {
        id: "mode-tips",
        title: "Choosing A Mode",
        html: `<ul class="tip-list">
          <li><strong>Learning aim and audio:</strong> Start with Deathmatch or Team Deathmatch.</li>
          <li><strong>Learning objectives:</strong> Use Hardpoint or Wingman once you understand maps and pacing.</li>
          <li><strong>Learning competition:</strong> Wingman is the current ranked/competitive focus.</li>
          <li><strong>Want to play Zombies?</strong> Check the <a href="/zombies-mode/">status page</a> first, because the mode is currently disabled.</li>
        </ul>`
      }
    ],
    faq: [
      {
        question: "What game modes does Bodycam have?",
        answer: "<p>Bodycam includes Deathmatch, Team Deathmatch, Gun Game, Hardpoint, Versus, Wingman 2v2, and Zombie Mode. Zombie Mode is temporarily disabled according to the current update notes.</p>"
      },
      {
        question: "Is Bodybomb still in Bodycam?",
        answer: "<p>No. Locked & Loaded retired Bodybomb and replaced it with Wingman 2v2 as the default competitive mode.</p>"
      },
      {
        question: "Is Zombies a PvP mode?",
        answer: "<p>No. Zombies is a separate mode from the PvP playlists, and it is temporarily disabled according to the current update notes.</p>"
      }
    ]
  }
];

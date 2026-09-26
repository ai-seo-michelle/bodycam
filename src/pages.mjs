export const site = {
  name: "Bodycam Guide",
  url: "https://bodycam.website",
  description: "Independent Bodycam game guides for Zombies, Trenches, updates, and multiplayer modes.",
  lastModified: "2026-09-26",
  lastCheckedLabel: "September 26, 2026",
  currentFocusLabel: "Current update topics",
  footerUpdateLabel: "Updated with major changes",
  nav: [
    { label: "Zombies Guide", href: "/zombies-guide/" },
    { label: "Trenches Map", href: "/trenches-map/" },
    { label: "Latest Update", href: "/bodycam-update/" },
    { label: "Game Modes", href: "/game-modes/" }
  ]
};

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
    href: "/bodycam-update/",
    kicker: "Update Hub",
    title: "Bodycam Update",
    description: "Latest patch, release-date status, and confirmed next-update notes."
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
            href: "/bodycam-update/",
            label: "Current",
            title: "Bodycam Update",
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
        <p>For update context, read the <a href="/locked-and-loaded/">Locked & Loaded hub</a> and the <a href="/bodycam-update/">latest update hub</a>.</p>`
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
    title: "Bodycam Trenches Map Guide - Layout, Key Areas & Tips",
    description: "Bodycam Trenches map guide covering layout, confirmed key areas, close and long-range combat, night visibility, loadouts, and practical tips.",
    h1: "BODYCAM TRENCHES MAP GUIDE",
    breadcrumb: "Trenches Map",
    kicker: "Map guide",
    lede: "Trenches is the Bodycam map added with Locked & Loaded, built around trench networks, underground spaces, exposed outdoor movement, and visibility shifts.",
    status: `<strong>Map note:</strong> Spawns, routes, and mode support can change after patches. This guide focuses on confirmed map structure and practical play. Last updated: ${site.lastCheckedLabel}.`,
    related: [related.locked, related.latest, related.modes, related.zombiesMode],
    sections: [
      {
        id: "what-is-trenches",
        title: "Trenches Map Overview",
        html: `<p>Trenches arrived with the Locked & Loaded update. It is built around a battlefield mix of flooded and dry trench networks, underground galleries, tunnel systems, forested areas, ruined compounds, observation posts, and a central church point of interest.</p>
        <p>The main thing to understand is contrast. One fight may happen in a narrow trench or underground route, while the next move can expose you to longer sightlines outside.</p>`
      },
      {
        id: "map-layout",
        title: "Map Layout",
        html: `<p>The confirmed layout centers on trench routes and underground passages, with outdoor terrain and structures creating pressure around them. You should expect movement to alternate between covered trench travel, darker interior pressure, and risky open transitions.</p>
        <ul class="check-list">
          <li><strong>Trench networks:</strong> tight lanes, quick audio reads, and frequent close-range contact.</li>
          <li><strong>Underground galleries and tunnels:</strong> darker movement paths where angles can collapse quickly.</li>
          <li><strong>Forest and outdoor areas:</strong> more open repositioning with longer sightlines.</li>
          <li><strong>Ruined compounds, observation posts, and church area:</strong> major structures that can anchor fights without needing invented callout names.</li>
        </ul>`
      },
      {
        id: "key-areas",
        title: "Important Key Areas",
        html: `<p>When learning Bodycam Trenches, sort the map into practical zones instead of memorizing unconfirmed callouts. The important areas are trench routes, underground connections, exposed outdoor crossings, and the larger structures that help teams regroup or hold angles.</p>
        <p>If your squad uses custom callouts, keep them simple: trench, tunnel, outside, compound, observation, church. Clear communication matters more than a perfect name during a loud round.</p>`
      },
      {
        id: "gameplay-characteristics",
        title: "Gameplay Characteristics",
        html: `<p>Trenches asks players to switch rhythm quickly. A short fight inside the trench network can turn into an exposed crossing a few seconds later. The Locked & Loaded update also added a lighting and weather scenario system, so visibility may vary by match or round.</p>
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
        title: "Close-Range And Long-Range Combat",
        html: `<p>The confirmed design contrast is simple: trench networks create confined fights, while surrounding outdoor areas create longer sightlines. This does not mean every outdoor angle is safe or every trench corner is a guaranteed close fight, but it does mean your loadout should account for both extremes.</p>
        <p>If you are learning the map, spend early matches identifying where you repeatedly lose vision or sound information. Those weak spots tell you where to slow down, regroup, or take a different angle next round.</p>`
      },
      {
        id: "night-vision",
        title: "Night Vision And Visibility",
        html: `<p>Players often search for Bodycam night vision on Trenches because visibility can be a major part of the map. Confirmed update notes point to lighting and weather scenarios, brighter night scenarios through increased moonlight, and improvements to how tactical gear reads in dark areas.</p>
        <p>Use that as a visibility reminder rather than assuming a new Trenches-only night-vision mechanic. In darker rounds, slow down before transitions, check silhouettes, and avoid sprinting from a dark tunnel into an exposed lane without a teammate watching the angle.</p>`
      },
      {
        id: "playstyle-loadout",
        title: "Recommended Playstyle And Loadout Considerations",
        html: `<p>The safest playstyle is controlled movement: clear the trench or tunnel in short steps, then pause before crossing open ground. A setup built only for tight corners may feel weak outside, while a setup built only for longer sightlines may punish you in tunnels.</p>
        <ul class="tip-list">
          <li><strong>Balance your setup.</strong> Trenches can ask for close control and outdoor reach in the same round.</li>
          <li><strong>Do not overcommit alone.</strong> Underground routes can split a team before anyone notices.</li>
          <li><strong>Use sound before speed.</strong> Audio gives early warning when a trench fight is about to collapse.</li>
          <li><strong>Recheck loadouts after patches.</strong> Attachment costs, compatibility, and tuning can shift after major updates.</li>
        </ul>`
      },
      {
        id: "tips",
        title: "Practical Map Tips",
        html: `<ul class="tip-list">
          <li><strong>Slow down before transitions.</strong> The danger point is often the move from trench cover into open exposure.</li>
          <li><strong>Pair your angle with an exit.</strong> A long sightline is only useful if you can leave when the fight collapses.</li>
          <li><strong>Clear underground spaces as a pair.</strong> A teammate watching the return angle can prevent a quick collapse.</li>
          <li><strong>Use the church and larger structures as orientation points.</strong> They help you describe where pressure is coming from without overcomplicated callouts.</li>
          <li><strong>Read the latest patch notes.</strong> Map list order, mode support, and match rules can change quickly after a major update.</li>
        </ul>`
      },
      {
        id: "locked-loaded-context",
        title: "Related Locked & Loaded Update",
        html: `<p>Trenches is one piece of Locked & Loaded. The same update also brought the loadout and weapon-customization system, new optics work, audio changes, a Shooting Range hub, game-mode updates, and broader technical reworks.</p>
        <p>For the wider patch context, read the <a href="/locked-and-loaded/">Locked & Loaded update hub</a>. For current patch status, read the <a href="/bodycam-update/">latest Bodycam update</a>.</p>`
      }
    ],
    faq: [
      {
        question: "When did Trenches release in Bodycam?",
        answer: "<p>Trenches was added with the Locked & Loaded major update released on September 2, 2026.</p>"
      },
      {
        question: "What areas are on the Trenches map?",
        answer: "<p>Confirmed map structure includes flooded and dry trench networks, underground galleries and tunnels, forest areas, ruined compounds, observation posts, and a central church point of interest.</p>"
      },
      {
        question: "Is Trenches a close-range map?",
        answer: "<p>Partly. The trench and underground areas create close-range pressure, while outdoor areas create longer sightlines and exposed movement.</p>"
      },
      {
        question: "Does Trenches use night vision?",
        answer: "<p>Current confirmed notes support changing visibility through lighting and weather scenarios, including brighter night conditions. Do not assume a Trenches-only night-vision mechanic unless it appears in the live build or official notes.</p>"
      }
    ]
  },
  {
    path: "/zombies-mode/",
    title: "Bodycam Zombies Mode - Status, Maintenance, Return Date & Guide",
    description: "Bodycam Zombies Mode guide with current status, maintenance notes, return-date information, gameplay basics, co-op questions, and FAQ.",
    h1: "Bodycam Zombies Mode Guide",
    breadcrumb: "Zombies Mode",
    kicker: "Zombies status and guide",
    lede: "Check whether Bodycam Zombies Mode is available now, why it may be unavailable, what is confirmed about its return, and how the mode works when it is playable.",
    status: `<strong>Current Status:</strong> Zombies Mode is not available as a normal current playlist in the Locked & Loaded update. <strong>Return date:</strong> no confirmed return date. <strong>Last updated:</strong> ${site.lastCheckedLabel}.`,
    related: [related.latest, related.locked, related.zombiesGuide, related.trenches, related.modes],
    sections: [
      {
        id: "current-status",
        title: "Current Status",
        html: `<p><strong>Zombies Mode is currently unavailable in the normal live playlist.</strong> Official Locked & Loaded notes say Zombie Mode was disabled for the update while the team fixes regressions and works on bringing the mode back in a stronger form.</p>
        <ul class="check-list">
          <li><strong>Available now?</strong> No, not as a normal current playlist according to the latest official update notes used here.</li>
          <li><strong>Removed forever?</strong> No. The wording points to a planned return, not permanent removal.</li>
          <li><strong>Confirmed return date?</strong> No confirmed return date has been announced.</li>
          <li><strong>Last updated:</strong> ${site.lastCheckedLabel}.</li>
        </ul>`
      },
      {
        id: "is-zombies-available",
        title: "Is Zombies Mode Available Now?",
        html: `<p>No. If Zombies does not appear in your Bodycam playlists, that matches the current update situation. It is better to check the latest official patch notes before reinstalling, changing regions, or assuming your game files are broken.</p>
        <p>For broader patch tracking, see the <a href="/bodycam-update/">latest Bodycam update</a>.</p>`
      },
      {
        id: "why-unavailable",
        title: "Why Is Zombies Mode Unavailable?",
        html: `<p>The studio explained that Zombies was disabled because regressions appeared while the rest of the game was being reworked, and because the mode had become too stagnant. The stated direction is to reintroduce Zombies later instead of keeping an unstable or outdated version live.</p>`
      },
      {
        id: "maintenance-status",
        title: "Zombies Mode Maintenance And Status",
        html: `<p>For players, maintenance means the mode can be held back from normal access even if the game itself is working. It is a live update status, not a personal account setting.</p>
        <h3>What to do now</h3>
        <ul>
          <li>Keep Bodycam updated through Steam.</li>
          <li>Watch the <a href="/bodycam-update/">latest update page</a> for confirmed patch changes.</li>
          <li>Use PvP modes while Zombies is unavailable.</li>
          <li>Treat old Zombies videos as older-build context until the mode returns.</li>
        </ul>`
      },
      {
        id: "return-date",
        title: "When Will Zombies Mode Return?",
        html: `<p>There is no confirmed Bodycam Zombies return date. Official wording has pointed toward a future Halloween or event window, but that is not the same as a dated release announcement.</p>
        <p>Until a dated announcement appears, avoid treating countdowns, reposted clips, or old videos as confirmation.</p>`
      },
      {
        id: "how-it-works",
        title: "How Zombies Mode Works",
        html: `<p>Zombies Mode is the zombie-focused side of Bodycam, separate from standard PvP matches. When it is playable, the safest way to approach it is to follow in-game objective prompts, manage space, listen carefully, and avoid relying on outdated route or ending claims.</p>
        <p>Because the mode is being reworked, exact wave rules, objective chains, item locations, endings, and event rules should be checked against the live version when it returns.</p>`
      },
      {
        id: "player-count-coop",
        title: "Player Count And Co-op",
        html: `<p>Players often ask whether Bodycam Zombies is co-op and how many people can play. The current return build has not been dated or fully detailed, so exact player count and co-op rules should not be treated as confirmed for the future version.</p>
        <p>When Zombies returns, check the in-game lobby rules and official patch notes before relying on older player-count information.</p>`
      },
      {
        id: "basic-objectives",
        title: "Basic Objectives",
        html: `<p>Do not assume every Zombies build uses the same objective chain. In a live match, read objective text first, identify safe fallback routes, keep teammates within recoverable distance, and verify any claimed ending route against the current version.</p>
        <p>For deeper gameplay help, use the <a href="/zombies-guide/">Bodycam Zombies Guide</a>.</p>`
      }
    ],
    faq: [
      {
        question: "Does Bodycam have Zombies Mode?",
        answer: "<p>Yes. Bodycam has a Zombies Mode topic, but it is currently unavailable as a normal live playlist according to the current update notes used here.</p>"
      },
      {
        question: "Why is Zombies not available in Bodycam?",
        answer: "<p>Official notes say Zombie Mode was disabled while the team fixes regressions and prepares a stronger version for a later return.</p>"
      },
      {
        question: "Is Bodycam Zombies under maintenance?",
        answer: "<p>Yes in the practical player sense: the mode is unavailable while it is being reworked and reintegrated with the current update direction.</p>"
      },
      {
        question: "When will Bodycam Zombies be back?",
        answer: "<p>No confirmed return date has been announced. Official wording has pointed toward a possible Halloween or event window, but not a specific date.</p>"
      },
      {
        question: "Can you play Bodycam Zombies with friends?",
        answer: "<p>The future return build has not confirmed exact player-count or co-op rules on this page. Check the live lobby and current patch notes when Zombies returns.</p>"
      }
    ]
  },
  {
    path: "/locked-and-loaded/",
    title: "Bodycam Locked & Loaded Update Hub - Trenches, Zombies & Game Modes",
    description: "Bodycam Locked & Loaded update hub covering the major v0.8 update, Trenches, loadouts, Zombies status, game modes, and latest patch links.",
    h1: "BODYCAM LOCKED & LOADED UPDATE",
    breadcrumb: "Locked & Loaded",
    kicker: "Major update hub",
    lede: "Locked & Loaded is Bodycam's September 2026 major update, adding Trenches and rebuilding major pieces of loadouts, modes, UI, audio, and match flow.",
    status: `<strong>Major update:</strong> Locked & Loaded v0.8 released on September 2, 2026. For the latest follow-up patch, use the <a href="/bodycam-update/">Bodycam update page</a>.`,
    related: [related.latest, related.trenches, related.zombiesMode, related.modes, related.zombiesGuide],
    sections: [
      {
        id: "quick-answer",
        title: "Quick Answer",
        html: `<p>Bodycam Locked & Loaded is the major v0.8 update. It introduced the Trenches map, a new loadout and weapon-customization direction, optics and equipment changes, UI and audio updates, game-mode changes, and a new competitive focus around Wingman 2v2.</p>
        <p>If you are returning after a break, start with the <a href="/bodycam-update/">latest Bodycam update</a>, then use this page to jump into the detailed guides.</p>`
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
        <p>Read the detailed <a href="/trenches-map/">Bodycam Trenches map guide</a> for layout, confirmed key areas, night visibility, and practical tips.</p>`
      },
      {
        id: "loadout-customization",
        title: "Loadout And Weapon Customization",
        html: `<p>The update introduces a new loadout and weapon-customization flow, including a large attachment pool and attachment effects such as aim speed, reload speed, recoil, spread, kick, and magazine capacity. Because compatibility and balance can change after a major update, treat exact best builds as patch-sensitive.</p>`
      },
      {
        id: "zombies",
        title: "Zombies Changes",
        html: `<p>Zombies is affected by the broader systems work around Locked & Loaded, so players should separate two questions: whether the mode is currently accessible, and how the mode should be approached when it is playable.</p>
        <p>Use <a href="/zombies-mode/">Zombies Mode</a> for status and <a href="/zombies-guide/">Bodycam Zombies Guide</a> for gameplay questions.</p>`
      },
      {
        id: "game-modes",
        title: "Game Modes After Locked & Loaded",
        html: `<p>Locked & Loaded retired Bodybomb and made Wingman 2v2 the default competitive direction. Deathmatch, Team Deathmatch, Gun Game, Hardpoint, Versus, Wingman, and Zombies are covered on the <a href="/game-modes/">Bodycam game modes</a> page.</p>`
      },
      {
        id: "what-changed",
        title: "What Changed After Locked & Loaded?",
        html: `<p>Returning players should re-check the basics after Locked & Loaded: learn Trenches, rebuild loadouts around the customization system, expect mode and match-flow changes, and review Zombies separately before trying to queue for it.</p>
        <p>For the newest patch notes and release-date status, go to the <a href="/bodycam-update/">Bodycam update page</a>.</p>`
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
        answer: "<p>No. Locked & Loaded did not make Zombies the main new playable addition. Use <a href='/zombies-mode/'>Zombies Mode</a> for current status and <a href='/zombies-guide/'>Bodycam Zombies Guide</a> for gameplay questions.</p>"
      },
      {
        question: "Where should I check the latest Bodycam patch?",
        answer: "<p>Use the <a href='/bodycam-update/'>Bodycam update page</a> for the latest patch, release-date status, and next-update notes.</p>"
      }
    ]
  },
  {
    path: "/bodycam-update/",
    title: "Bodycam Update - Latest Patch, Release Date & What's New (2026)",
    description: "Bodycam update hub for the latest patch, release date, what changed in 2026, Zombies status, Trenches updates, and confirmed next-update information.",
    h1: "Bodycam Latest Update",
    breadcrumb: "Bodycam Update",
    kicker: "Latest patch and release date",
    lede: "Track the latest confirmed Bodycam update, current patch notes, release-date status, major changes, Zombies information, and what is not officially confirmed yet.",
    status: `<strong>Latest confirmed patch tracked here:</strong> V0.8 #6 in the Locked & Loaded update line. <strong>Last updated:</strong> ${site.lastCheckedLabel}. <strong>Next update release date:</strong> no official release date has been confirmed.`,
    related: [related.locked, related.zombiesMode, related.trenches, related.modes, related.zombiesGuide],
    sections: [
      {
        id: "latest-bodycam-update",
        title: "Latest Bodycam Update",
        html: `<p>The current major Bodycam update is Locked & Loaded v0.8, released on September 2, 2026. The latest confirmed patch visible in Steam news is V0.8 #6 in the same update line.</p>
        <ul class="check-list">
          <li><strong>Confirmed information:</strong> Locked & Loaded is the current major update family tracked here.</li>
          <li><strong>Confirmed information:</strong> V0.8 #6 is the latest official patch entry currently covered on this page.</li>
          <li><strong>Not yet officially confirmed:</strong> a dated next major update release.</li>
        </ul>`
      },
      {
        id: "current-version",
        title: "Current Version / Latest Patch",
        html: `<p>The latest confirmed patch label tracked here is <strong>V0.8 #6</strong>. It followed the Locked & Loaded v0.8 release and focuses on stability fixes, host migration player-limit issues, weapon-state behavior, Film Grain settings, progression/UI changes, and smaller polish fixes.</p>
        <p>Use the confirmed patch label as the safest reference instead of inventing a future version number that has not been announced.</p>`
      },
      {
        id: "release-date",
        title: "Release Date",
        html: `<p><strong>Locked & Loaded v0.8 release date:</strong> September 2, 2026.</p>
        <p><strong>Latest confirmed patch tracked here:</strong> V0.8 #6 in the Locked & Loaded update line.</p>
        <p><strong>Next update release date:</strong> No official release date has been confirmed.</p>`
      },
      {
        id: "what-changed",
        title: "What Changed",
        html: `<p>Recent V0.8 follow-up patches have focused on crash fixes, exploit fixes, progression and currency adjustments, attachment prices, map and mode flow, interface polish, and stability.</p>
        <p>V0.8 #6 focuses on stability and quality-of-life fixes, including host migration player-limit issues, weapon-state behavior, Film Grain settings, progression/UI changes, and smaller polish fixes. Earlier follow-ups addressed SCAR sizing, keybinding behavior, team balance, loadout polish, map and material fixes, a session-host crash exploit, private-lobby currency earnings, attachment prices, progression rewards, score limits, and Trenches map ordering.</p>`
      },
      {
        id: "major-features",
        title: "Major Features",
        html: `<div class="feature-list">
          <div><h3>Trenches</h3><p>The major map addition from Locked & Loaded, with trenches, underground routes, outdoor areas, and key battlefield structures.</p></div>
          <div><h3>Loadouts</h3><p>Weapon customization and attachments became a much larger part of how players prepare for matches.</p></div>
          <div><h3>Modes</h3><p>Wingman 2v2 replaced Bodybomb as the default competitive direction, while other PvP modes received flow updates.</p></div>
          <div><h3>UI, audio, and systems</h3><p>The update line changed menus, server browsing, match flow, audio behavior, stability, and supporting tools.</p></div>
        </div>`
      },
      {
        id: "zombies-update",
        title: "Zombies Status / Update",
        html: `<p>Zombies Mode is the biggest status question for many players. Current official wording says Zombies is disabled while it is reworked, with no confirmed return date.</p>
        <p>For status, maintenance, return-date wording, co-op questions, and basic mode help, use <a href="/zombies-mode/">Bodycam Zombies Mode</a>.</p>`
      },
      {
        id: "trenches-update",
        title: "Trenches Update-Related Content",
        html: `<p>Trenches remains the main map topic from Locked & Loaded. It combines trench networks, underground spaces, forest and outdoor movement, ruined compounds, observation posts, and a central church point of interest.</p>
        <p>For layout, key areas, visibility, loadout considerations, and practical tips, read the <a href="/trenches-map/">Bodycam Trenches map guide</a>.</p>`
      },
      {
        id: "whats-next",
        title: "What's Next",
        html: `<p>Confirmed official notes point to ongoing work around Zombies, party features, progression and economy tuning, exploit fixes, and further stability work. That does not confirm a release date or final feature list for the next update.</p>
        <ul class="check-list">
          <li><strong>Confirmed information:</strong> these areas have been mentioned as ongoing or affected by the current update cycle.</li>
          <li><strong>Not yet officially confirmed:</strong> exact launch date, final version number, countdown, and full patch contents.</li>
        </ul>`
      },
      {
        id: "next-update-release-date",
        title: "Next Update / Release Date",
        html: `<p>No official Bodycam next update release date has been confirmed. Do not treat countdown pages, reposted clips, or speculation as a confirmed release schedule.</p>
        <p>When a dated patch or major update is confirmed, this page should be updated instead of creating a new update URL.</p>`
      }
    ],
    faq: [
      {
        question: "What is the latest Bodycam update?",
        answer: "<p>The current major Bodycam update is Locked & Loaded v0.8, released on September 2, 2026. The latest confirmed patch tracked here is V0.8 #6 in the same update line.</p>"
      },
      {
        question: "What is the latest Bodycam patch?",
        answer: "<p>The latest confirmed patch tracked here is V0.8 #6 in the Locked & Loaded update line.</p>"
      },
      {
        question: "When is the next Bodycam update coming?",
        answer: "<p>No official release date has been confirmed for the next Bodycam update.</p>"
      },
      {
        question: "Is there a Bodycam update countdown?",
        answer: "<p>No official countdown is confirmed on this page. Treat countdowns as unofficial unless they are tied to an official dated announcement.</p>"
      },
      {
        question: "Did the latest update bring Zombies back?",
        answer: "<p>No. Current notes still treat Zombies as unavailable while it is being reworked. Use the <a href='/zombies-mode/'>Zombies Mode</a> page for status details.</p>"
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

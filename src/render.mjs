import { site } from "./pages.mjs";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stripHtml(value) {
  return String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function absoluteUrl(path) {
  return `${site.url}${path === "/" ? "/" : path}`;
}

function renderNav(currentPath) {
  const items = site.nav
    .map((item) => {
      const active = item.href === currentPath ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${active}>${escapeHtml(item.label)}</a>`;
    })
    .join("");

  return `<nav class="site-nav" aria-label="Primary">${items}</nav>`;
}

function renderBreadcrumb(page) {
  if (page.path === "/") return "";
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li aria-current="page">${escapeHtml(page.breadcrumb ?? page.h1)}</li>
      </ol>
    </nav>
  `;
}

function renderSchema(page) {
  const schema = [];

  if (page.path === "/") {
    schema.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "en"
    });
    schema.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.h1,
      description: page.description,
      url: absoluteUrl(page.path),
      isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
      inLanguage: "en"
    });
  } else {
    schema.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site.url}/`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.breadcrumb ?? page.h1,
          item: absoluteUrl(page.path)
        }
      ]
    });
    schema.push({
      "@context": "https://schema.org",
      "@type": page.schemaType ?? "Article",
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: absoluteUrl(page.path),
      dateModified: site.lastModified,
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url
      },
      inLanguage: "en"
    });
  }

  if (page.faq?.length) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: stripHtml(item.answer)
        }
      }))
    });
  }

  return schema
    .map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`)
    .join("\n");
}

function renderHead(page) {
  const canonical = absoluteUrl(page.path);
  const robots = page.noindex ? '<meta name="robots" content="noindex,follow">' : "";
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    ${robots}
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="stylesheet" href="/assets/site.css">
    <meta property="og:type" content="${page.path === "/" ? "website" : "article"}">
    <meta property="og:site_name" content="${escapeHtml(site.name)}">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${canonical}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
    ${renderSchema(page)}
  `;
}

function renderFooter() {
  const year = new Date().getUTCFullYear();
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <strong>${escapeHtml(site.name)}</strong>
          <p>Independent fan-made guide site.<br>Not affiliated with Reissad Studio or the official Bodycam game.</p>
        </div>
        <div class="footer-links">
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/robots.txt">Robots</a>
          <span>${escapeHtml(site.footerUpdateLabel)}</span>
          <span>&copy; ${year}</span>
        </div>
      </div>
    </footer>
  `;
}

function renderSections(sections = []) {
  return sections
    .map((section) => {
      return `
        <section class="content-section" id="${section.id}">
          <h2>${escapeHtml(section.title)}</h2>
          ${section.html}
        </section>
      `;
    })
    .join("");
}

function renderFaq(faq = []) {
  if (!faq.length) return "";
  const items = faq
    .map((item) => {
      return `
        <details class="faq-item">
          <summary>${escapeHtml(item.question)}</summary>
          <div>${item.answer}</div>
        </details>
      `;
    })
    .join("");

  return `
    <section class="content-section faq-section" id="faq">
      <h2>FAQ</h2>
      ${items}
    </section>
  `;
}

function renderToc(page) {
  const toc = page.sections?.map((section) => ({ id: section.id, label: section.title })) ?? [];
  if (page.faq?.length) toc.push({ id: "faq", label: "FAQ" });
  if (!toc.length) return "";

  return `
    <aside class="toc" aria-label="Page contents">
      <p>Contents</p>
      ${toc.map((item) => `<a href="#${item.id}">${escapeHtml(item.label)}</a>`).join("")}
    </aside>
  `;
}

function renderRelated(page) {
  if (!page.related?.length) return "";
  return `
    <section class="related-panel" aria-label="Related Bodycam guides">
      <h2>Related Guides</h2>
      <div class="related-grid">
        ${page.related
          .map(
            (item) => `
              <a class="related-card" href="${item.href}">
                <span>${escapeHtml(item.kicker)}</span>
                <strong>${escapeHtml(item.title)}</strong>
                <em>${escapeHtml(item.description)}</em>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderArticle(page) {
  return `
    <main class="page-shell">
      <div class="content-wrap">
        ${renderBreadcrumb(page)}
        <article class="article">
          <header class="article-header">
            ${page.kicker ? `<p class="eyebrow">${escapeHtml(page.kicker)}</p>` : ""}
            <h1>${escapeHtml(page.h1)}</h1>
            <p class="lede">${escapeHtml(page.lede ?? page.description)}</p>
            ${page.status ? `<div class="status-note">${page.status}</div>` : ""}
          </header>
          ${renderSections(page.sections)}
          ${renderFaq(page.faq)}
          ${renderRelated(page)}
        </article>
      </div>
      ${renderToc(page)}
    </main>
  `;
}

function renderHome(page) {
  return `
    <main>
      <section class="home-hero">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(page.kicker)}</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="lede">${escapeHtml(page.lede)}</p>
          <div class="hero-actions">
            <a class="button primary" href="/zombies-guide/">Read Zombies Guide</a>
            <a class="button ghost" href="/latest-update/">Check Latest Update</a>
          </div>
        </div>
        <div class="briefing-panel" aria-label="Current Bodycam topics">
          <div class="panel-topline">
            <span>Current focus</span>
            <strong>${escapeHtml(site.currentFocusLabel)}</strong>
          </div>
          <a href="/zombies-mode/" class="briefing-row urgent">
            <span>Zombies</span>
            <strong>Mode status and maintenance notes</strong>
          </a>
          <a href="/trenches-map/" class="briefing-row">
            <span>Trenches</span>
            <strong>New map overview and practical tips</strong>
          </a>
          <a href="/locked-and-loaded/" class="briefing-row">
            <span>Locked & Loaded</span>
            <strong>Version hub for the major update</strong>
          </a>
        </div>
      </section>
      <section class="site-position">
        <h2>Independent Bodycam Guides For Recent Updates</h2>
        <p>Bodycam Guide is a fan-made, unofficial guide site for players catching up on Zombies, the Trenches map, Locked & Loaded, latest update notes, and multiplayer modes.</p>
      </section>
      ${page.homeSections
        .map(
          (section) => `
            <section class="home-section" id="${section.id}">
              <div class="section-heading">
                <p class="eyebrow">${escapeHtml(section.kicker)}</p>
                <h2>${escapeHtml(section.title)}</h2>
                <p>${escapeHtml(section.text)}</p>
              </div>
              <div class="card-grid">
                ${section.cards
                  .map(
                    (card) => `
                      <a class="guide-card" href="${card.href}">
                        <span>${escapeHtml(card.label)}</span>
                        <h3>${escapeHtml(card.title)}</h3>
                        <p>${escapeHtml(card.text)}</p>
                      </a>
                    `
                  )
                  .join("")}
              </div>
            </section>
          `
        )
        .join("")}
      ${renderFaq(page.faq)}
    </main>
  `;
}

export function renderPage(page) {
  return `<!doctype html>
<html lang="en">
  <head>
    ${renderHead(page)}
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <a class="brand" href="/" aria-label="Bodycam Guide home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>${escapeHtml(site.name)}</span>
      </a>
      ${renderNav(page.path)}
    </header>
    <div id="main-content">
      ${page.path === "/" ? renderHome(page) : renderArticle(page)}
    </div>
    ${renderFooter()}
  </body>
</html>`;
}

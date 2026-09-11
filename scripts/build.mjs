import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages, site } from "../src/pages.mjs";
import { renderPage } from "../src/render.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const srcDir = path.join(root, "src");
const publicDir = path.join(root, "public");

async function copyDirectory(from, to) {
  try {
    const entries = await fs.readdir(from, { withFileTypes: true });
    await fs.mkdir(to, { recursive: true });

    for (const entry of entries) {
      const source = path.join(from, entry.name);
      const target = path.join(to, entry.name);
      if (entry.isDirectory()) {
        await copyDirectory(source, target);
      } else {
        await fs.copyFile(source, target);
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

function routeOutputPath(routePath) {
  if (routePath === "/") return path.join(distDir, "index.html");
  const clean = routePath.replace(/^\/|\/$/g, "");
  return path.join(distDir, clean, "index.html");
}

function renderSitemap() {
  const urls = pages
    .map((page) => {
      const loc = `${site.url}${page.path === "/" ? "/" : page.path}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${site.lastModified}</lastmod>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    ""
  ].join("\n");
}

function renderRobots() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${site.url}/sitemap.xml`,
    ""
  ].join("\n");
}

function render404() {
  const notFound = {
    path: "/404/",
    title: "Page Not Found | Bodycam Guide",
    description: "The requested Bodycam Guide page could not be found.",
    h1: "Page Not Found",
    layout: "article",
    schemaType: "WebPage",
    noindex: true,
    sections: [
      {
        id: "return",
        title: "Return To The Guide",
        html: `<p>This page is not part of the current Bodycam Guide launch set. Start from the <a href="/">homepage</a>, or jump to the <a href="/zombies-guide/">Zombies guide</a>, <a href="/trenches-map/">Trenches map</a>, or <a href="/latest-update/">latest update hub</a>.</p>`
      }
    ]
  };

  return renderPage(notFound);
}

export async function build(options = {}) {
  const log = options.log ?? true;

  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(path.join(distDir, "assets"), { recursive: true });

  await copyDirectory(publicDir, distDir);
  await fs.copyFile(path.join(srcDir, "styles.css"), path.join(distDir, "assets", "site.css"));

  for (const page of pages) {
    const outputPath = routeOutputPath(page.path);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, renderPage(page), "utf8");
  }

  await fs.writeFile(path.join(distDir, "sitemap.xml"), renderSitemap(), "utf8");
  await fs.writeFile(path.join(distDir, "robots.txt"), renderRobots(), "utf8");
  await fs.writeFile(path.join(distDir, "404.html"), render404(), "utf8");

  if (log) {
    console.log(`Built ${pages.length} pages to ${path.relative(root, distDir)}`);
  }
}

if (process.argv[1] === __filename) {
  build().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "./build.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".svg", "image/svg+xml"]
]);

function getSafeFilePath(requestUrl) {
  const url = new URL(requestUrl, "http://localhost");
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith("/")) pathname += "index.html";
  if (!path.extname(pathname)) pathname = `${pathname}/index.html`;

  const filePath = path.normalize(path.join(distDir, pathname));
  if (!filePath.startsWith(distDir)) return null;
  return filePath;
}

async function fileExists(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

async function serveFile(response, filePath, statusCode = 200) {
  const ext = path.extname(filePath);
  const contentType = mimeTypes.get(ext) ?? "application/octet-stream";
  const body = await fs.readFile(filePath);
  response.writeHead(statusCode, {
    "content-type": contentType,
    "cache-control": "no-store"
  });
  response.end(body);
}

async function startServer(initialPort) {
  let port = initialPort;

  while (port < initialPort + 20) {
    const server = createServer(async (request, response) => {
      try {
        const filePath = getSafeFilePath(request.url ?? "/");
        if (filePath && (await fileExists(filePath))) {
          await serveFile(response, filePath);
          return;
        }
        await serveFile(response, path.join(distDir, "404.html"), 404);
      } catch (error) {
        response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
        response.end(`Internal server error\n${error.message}`);
      }
    });

    const started = await new Promise((resolve, reject) => {
      server.once("error", (error) => {
        if (error.code === "EADDRINUSE") {
          resolve(false);
        } else {
          reject(error);
        }
      });
      server.listen(port, () => resolve(true));
    });

    if (started) {
      return { server, port };
    }

    port += 1;
  }

  throw new Error(`No available port found from ${initialPort} to ${port - 1}`);
}

await build({ log: false });

const requestedPort = Number.parseInt(process.env.PORT || "5173", 10);
const { port } = await startServer(Number.isFinite(requestedPort) ? requestedPort : 5173);

console.log(`Bodycam Guide dev server running at http://localhost:${port}/`);
console.log("Press Ctrl+C to stop.");

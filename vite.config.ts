import { defineConfig, loadEnv, type Plugin } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

/** Local `/api/github-stats` during `vite` (mirrors Vercel serverless). */
function githubStatsApi(env: Record<string, string>): Plugin {
  return {
    name: "github-stats-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/github-stats") return next();

        try {
          if (!process.env.GITHUB_TOKEN && env.GITHUB_TOKEN) {
            process.env.GITHUB_TOKEN = env.GITHUB_TOKEN;
          }
          if (!process.env.GITHUB_TOKEN_KORVEN && env.GITHUB_TOKEN_KORVEN) {
            process.env.GITHUB_TOKEN_KORVEN = env.GITHUB_TOKEN_KORVEN;
          }

          const { buildGithubStats } = await import("./api/github-stats");
          const stats = await buildGithubStats();
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "no-store");
          res.end(JSON.stringify(stats));
        } catch (err) {
          res.statusCode = 502;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              error: "Failed to load GitHub stats",
              detail: err instanceof Error ? err.message : "Unknown error",
            }),
          );
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      figmaAssetResolver(),
      react(),
      tailwindcss(),
      githubStatsApi(env),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    assetsInclude: ["**/*.svg", "**/*.csv"],
  };
});

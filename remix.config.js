/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_meta: true,
  },
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  serverDependenciesToBundle: ["@google/model-viewer", "email-providers"],
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
};

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_meta: true,
  },
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  serverDependenciesToBundle: ["@google/model-viewer", "email-providers"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};

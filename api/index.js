const { createRequestHandler } = require("@remix-run/vercel");
const build = require("@remix-run/dev/server-build");

module.exports = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

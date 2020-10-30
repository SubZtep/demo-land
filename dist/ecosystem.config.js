/**
 * For startup run the command from `dist` folder:
 *
 * $ pm2 start ecosystem.config.js
 */

module.exports = {
  name: "demoland",
  script: "serve",
  env: {
    PM2_SERVER_PATH: ".",
    PM2_SERVE_PORT: 3000
  }
}

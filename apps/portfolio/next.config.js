const withTM = require("next-transpile-modules")(["ui"]);
const withPWA = require("next-pwa");

module.exports = withPWA(
  withTM({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
    reactStrictMode: true,
    i18n: {
      defaultLocale: "es",
      locales: ["en", "es"],
    },
    images: {
      format: ["image/webp", "image/png", "image/jpeg"],
    },
  })
);

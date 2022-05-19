const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
});

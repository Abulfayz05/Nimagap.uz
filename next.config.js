module.exports = {
  reactStrictMode: true,

  i18n: {
    // providing the locales supported by your application
    locales: ["uz-UZ", "en-US", "ru-RU"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "uz-UZ",
    localeDetection: false,
  },

  images: {
    domains: ["admin.nimagap.uz"],
  },

  publicRuntimeConfig: {
    url: process.env.DIRECTUS_URL,
  },
  serverRuntimeConfig: {
    email: process.env.DIRECTUS_EMAIL,
    password: process.env.DIRECTUS_PASSWORD,
    // token: process.env.DIRECTUS_STATIC_TOKEN,
  },
};

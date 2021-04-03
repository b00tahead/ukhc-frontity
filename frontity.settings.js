const settings = {
  name: "ukhc-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "ukhc",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://ukhc-wp-frontity-demo.lndo.site/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;

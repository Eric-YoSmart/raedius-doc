// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Raedius",
  tagline: "Raedius Web Console",
  url: "https://raedius.yosmart.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yosmart", // Usually your GitHub org/user name.
  projectName: "raedius", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/YoSmart-Inc/raedius-doc/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Raedius",
        logo: {
          alt: "raedius logo",
          src: "img/favicon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "YoSmart",
            items: [
              {
                label: "Official WebSite",
                href: "http://www.yosmart.com/",
              },
              {
                label: "Shop",
                href: "https://shop.yosmart.com/",
              },
            ],
          },
          {
            title: "Follow US",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/YoLinkbyYoSmart",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/c/YoLinkbyYoSmart",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Raedius, YoSmart Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

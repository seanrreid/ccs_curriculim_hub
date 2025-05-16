// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Build Carolina Academy Curriculum Hub",
  tagline: "Take charge of your career.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://build-carolina-web-dev.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "seanrreid", // Usually your GitHub org/user name.
  // projectName: "ccs_curriculum_hub", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Build Carolina Academy Program",
        logo: {
          alt: "Build Carolina",
          src: "img/build_carolina_logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "customSidebar",
            position: "left",
            label: "Curriculum Hub",
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //     title: 'More',
          //     items: [
          //         {
          //             label: 'Blog',
          //             to: '/blog',
          //         },
          //     ],
          // },
        ],
        copyright: `Build Carolina Academy is a program of BC Corp., a South Carolina not-for-profit corporation and a registered 501(c)3 organization. &copy; ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.synthwave84,
        darkTheme: prismThemes.synthwave84,
      },
      // algolia: {
      //     appId: 'GHPIGFN134',
      //     apiKey: '1278fcca2d56250a2da260e399846d65',
      //     indexName: 'ccs-full-stack-web-dev',
      //     contextualSearch: true,
      //     searchPagePath: 'search',
      // },
    }),
};

export default config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PayNow Doc',
  tagline: 'The document of PayNow.',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/paynow-guideline/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OwlTing', // Usually your GitHub org/user name.
  projectName: 'paynow-guideline', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'zh-TW']
  // },

  presets: [
    // [
    //   'classic',
    //   /** @type {import('@docusaurus/preset-classic').Options} */
    //   ({
    //     // docs: {
    //     //   sidebarPath: require.resolve('./sidebars.js'),
    //     //   // Please change this to your repo.
    //     //   // Remove this to remove the "edit this page" links.
    //     //   editUrl:
    //     //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
    //     // },
    //     docs: false,
    //     // blog: {
    //     //   showReadingTime: true,
    //     //   // Please change this to your repo.
    //     //   // Remove this to remove the "edit this page" links.
    //     //   editUrl:
    //     //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
    //     // },
    //     blog: false,
    //     theme: {
    //       customCss: require.resolve('./src/css/custom.css'),
    //     },
    //   }),
    // ],
    [
      'docusaurus-preset-openapi',
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        api: {
          path: 'docs/api',
          routeBasePath: '/api',
        },
        docs: {
          path: 'docs/current',
          routeBasePath: 'docs'
        },
        blog: {
          path: 'docs/release-note',
          routeBasePath: 'release-note'
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss')
          ],
        },
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    // [
      // '@docusaurus/plugin-content-docs',
      // {
      //   id: 'guide',
      //   path: 'current/guide',
      //   routeBasePath: 'guide',
      //   sidebarPath: require.resolve('./sidebars/guide.js'),
      // },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'tutorial',
    //     path: 'current/tutorial',
    //     routeBasePath: 'tutorial',
    //     sidebarPath: require.resolve('./sidebars/tutorial.js'),
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'payment-service',
    //     path: 'current/payment-service',
    //     routeBasePath: 'payment-service',
    //     sidebarPath: require.resolve('./sidebars/payment-service.js'),
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'payment-admin',
    //     path: 'current/payment-admin',
    //     routeBasePath: 'payment-admin',
    //     sidebarPath: require.resolve('./sidebars/payment-admin.js'),
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'logistics-admin',
    //     path: 'current/logistics-admin',
    //     routeBasePath: 'logistics-admin',
    //     sidebarPath: require.resolve('./sidebars/logistics-admin.js'),
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'invoice-admin',
    //     path: 'current/invoice-admin',
    //     routeBasePath: 'invoice-admin',
    //     sidebarPath: require.resolve('./sidebars/invoice-admin.js'),
    //   },
    // ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'release-note',
        path: 'current/release-note',
        blogTitle: 'Release Note',
        routeBasePath: 'release-note',
        blogSidebarTitle: 'Version'
        // sidebarPath: require.resolve('./sidebars/release-note.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'PayNow Doc',
        // logo: {
        //   alt: 'PayNow Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'docSidebar',
          //   docsPluginId: 'tutorial',
          //   sidebarId: 'default',
          //   position: 'left',
          //   label: 'Tutorial'
          // },
          {
            to: 'docs/api-reference/',
            label: 'API 技術文件',
            position: 'right'
          },
          {
            to: 'docs/payment-service/',
            label: '金流服務',
            position: 'left'
          },
          {
            to: 'docs/payment-admin/',
            label: '金流後台',
            position: 'left'
          },
          {
            to: 'docs/logistics-admin/',
            label: '物流後台',
            position: 'left'
          },
          {
            to: 'docs/invoice-admin/',
            label: '發票後台',
            position: 'left'
          },
          // {
          //   type: 'docSidebar',
          //   docsPluginId: 'payment-admin',
          //   sidebarId: 'default',
          //   position: 'left',
          //   label: '金流後台'
          // },
          // {
          //   type: 'docSidebar',
          //   docsPluginId: 'logistics-admin',
          //   sidebarId: 'default',
          //   position: 'left',
          //   label: '物流後台'
          // },
          // {
          //   type: 'docSidebar',
          //   docsPluginId: 'invoice-admin',
          //   sidebarId: 'default',
          //   position: 'left',
          //   label: '發票後台'
          // },
          // {
          //   to: '/payment-service/online-payment/',
          //   label: 'Test',
          //   position: 'left'
          // },
          // {
          //   type: 'docSidebar',
          //   docsPluginId: 'guide',
          //   sidebarId: 'default',
          //   position: 'left',
          //   label: 'Guide',
          // },
          // { to: '/api', label: 'API' , position: 'left'},
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'search',
            position: 'right',
          },
          { to: '/release-note', label: 'Release Note', position: 'right' },
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'tutorial',
          //   position: 'right',
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'right'
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Community',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'Facebook',
          //       href: 'https://www.facebook.com',
          //     },
          //     {
          //       type: 'docSidebar',
          //       docsPluginId: 'guide',
          //       sidebarId: 'default',
          //       label: 'Guide',
          //     },
          //     // ... more items
          //   ],
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `©2023 OBOOK Holdings Inc. or its affiliates`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: 'rgba(255,255,255,.75)',
          scrollOffset: 160,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '7248NN2JAA',
        // Public API key: it is safe to commit it
        apiKey: '2753da723d7091bf6b515584ffdffad4',
        indexName: 'paynow-guideline',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        //... other Algolia params
      },
    }),
};

module.exports = config;


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
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OwlTing', // Usually your GitHub org/user name.
  projectName: 'paynow-guideline', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW']
  },

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
          path: 'api',
          routeBasePath: '/api',
        },
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   routeBasePath: '/',
        // },
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guide',
        path: 'guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./sidebars/guide.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebars/tutorial.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'release-note',
        path: 'release-note',
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
        logo: {
          alt: 'PayNow Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            docsPluginId: 'tutorial',
            sidebarId: 'default',
            position: 'left',
            label: 'Tutorial'
          },
          {
            type: 'docSidebar',
            docsPluginId: 'guide',
            sidebarId: 'default',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
              },
              {
                type: 'docSidebar',
                docsPluginId: 'guide',
                sidebarId: 'default',
                label: 'Guide',
              },
              // ... more items
            ],
          },
          { to: '/api', label: 'API' , position: 'left'},
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/release-note', label: 'Release Note', position: 'left' },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'tutorial',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;

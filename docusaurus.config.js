module.exports = {
  title: 'pencyclopedia.ink',
  tagline: 'Collect, Contribute, Connect',
  url: 'https://docs.pencyclopedia.ink',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'pencyclopedia.ink',
      logo: {
        alt: 'pencyclopedia.ink',
        src: 'img/favicon.svg',
      },
      items: [ ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/B46aEDT',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/pencyclopedia',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'pencyclopedia.ink',
              href: 'https://pencyclopedia.ink',
            },
            {
              label: 'Backlog',
              href: 'https://tree.taiga.io/project/bd-pencyclopedia/issues',
            },
            {
              label: 'Blog',
              href: 'https://blog.pencyclopedia.ink',
            },
            {
              label: 'Changelog',
              href: 'https://pencyclopedia.changelogfy.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cyberdeck LLC Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = {
  title: 'Shunya Face',
  tagline: 'Face detection and recognition library',
  url: 'https://shunyaos.gitlab.io',
  baseUrl: '/shunyaface/',
  favicon: 'img/favicon.ico',
  organizationName: 'shunyaos', // Usually your GitHub org/user name.
  projectName: 'shunyaface', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Shunya Face',
      logo: {
        alt: 'Shunyaface Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/get-started/first-app', label: 'Get Started', position: 'right'},
        {to: 'docs/demos/face-recognition', label: 'Demo', position: 'right'},
        {
          href: 'https://github.com/shunyaos/shunyaface',
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
              label: 'Getting Started',
              to: 'docs/get-started/first-app',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/shunyaface',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/shunyaos/shunyaface',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shunya OS, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/shunyaos/shunyaface',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

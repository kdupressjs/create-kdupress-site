const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://kdupress.web.app/config/#title
   */
  title: 'Kdupress Docs Boilerplate',
  /**
   * Ref：https://kdupress.web.app/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://kdupress.web.app/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#03a9f4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for KduPress.
   *
   * ref：https://kdupress.web.app/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config'
      },
      {
        text: 'KduPress',
        link: 'https://kdupress.web.app'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-kdu',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://kdupress.web.app/plugin/
   */
  plugins: [
    '@kdupress/plugin-back-to-top',
    '@kdupress/plugin-medium-zoom',
  ]
}

const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    title: 'multi-level-table',
    description: '基于element-ui封装的业务组件',
    plugins: [
      'demo-container'
    ],
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    chainWebpack(config) {
      config.resolve.alias.set('@', '../../src')
    },
    base: isProd ? '/multi-level-table/' : '/',
    dest: 'docs/.vuepress/dist/multi-level-table/',
    markdown: {
      lineNumbers: true
    },
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    themeConfig : {
      editLinks: false,
      docsDir: 'docs',
      nav: [
        { text: 'Home', link: '/', icon: 'reco-home' },
        { text: 'GitHub', link: 'http://baidu.com'},
      ],
      sidebar: {
        '/':  [
          {
            title: '指南',
            collapsable: false,
            children: [
              '',
              'started',
              '/componentDocs/multi-level-table'
            ]
          }
        ]

      },
      // 搜索设置
      search: true,
      searchMaxSuggestions: 10,
      // 最后更新时间
      lastUpdated: 'Last Updated',
      // 作者
      author: 'lihuan',
      mode: 'light', 
      modePicker: false,
      type: 'Home'
    }
}
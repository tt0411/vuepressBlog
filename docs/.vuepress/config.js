module.exports = {
  title: "袋鼠空间",
  description: '扫码下载袋鼠空间App',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: 'reco',
  themeConfig: {
    huawei: false,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '介绍', link: '/introduce/', icon: 'reco-document' },
      { text: 'GitHub', link: 'https://github.com/jack12345666', icon: 'reco-github' },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/introduce/': [
        {
          title: '袋鼠空间用户端',
          collapsable: false,
          children: [
            'kangaroo/效果图',
            'kangaroo/使用介绍',
            'kangaroo/技术说明',
          ]
        },
        {
          title: '袋鼠空间管理端',
          collapsable: false,
          children: [
            'kangarooAdmin/效果图',
            'kangarooAdmin/使用介绍',
            'kangarooAdmin/技术说明',
          ]
        },
        {
          title: '袋鼠空间管理移动端',
          collapsable: false,
          children: [
            'kangarooMadmin/效果图',
            'kangarooMadmin/使用介绍',
            'kangarooMadmin/技术说明',
          ]
        }
      ]
    },
    // 最后更新时间
    // lastUpdated: 'Last Updated',
    // 作者
    author: '梦涛',
    // 项目开始时间
    startYear: '2020',

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: 'dCPNcqkp8xxIGT9aMxNFVM0U-gzGzoHsz',// your appId
    //   appKey: 'gCvAC4wXEqsCzgBsIYWmqMjS', // your appKey
    //   placeholder: '说点什么吧...',
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
  ['@vuepress/medium-zoom', 'flowchart'],  
   require('./plugins/notification/index')
]
}  
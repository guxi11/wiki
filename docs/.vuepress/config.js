module.exports = {
  base: '/wiki/',
  title: 'Guxi11 的知识库',
  description: '',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        ariaLabel: 'FE Menu',
        items: [
          { text: 'HTML', link: '/fe/html/' },
          { text: 'CSS', link: '/fe/css/' },
          { text: 'JavaScript', link: '/fe/javascript/' },
          { text: '网络', link: '/fe/network/' },
          { text: '浏览器', link: '/fe/browser/' },
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/hbhde/wiki' },
    ],
    sidebar: {
      '/fe/html/': [
        {
          title: 'HTML',
          children: [
            '',
          ]
        }
      ],
      '/fe/css/': [
        {
          title: 'CSS',
          children: [
            '',
            'concepts',
          ]
        }
      ],
      '/fe/javascript/': [
        {
          title: 'JavaScript',
          children: [
            '',
            'data types',
            'inherit',
          ]
        }
      ],
      '/fe/network/': [
        {
          title: '网络',
          children: [
            '',
          ]
        }
      ],
      '/fe/browser/': [
        {
          title: '浏览器',
          children: [
            '',
          ]
        }
      ]
    }
  }
}
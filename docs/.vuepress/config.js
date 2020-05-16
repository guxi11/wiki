module.exports = {
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
          { text: '浏览器', link: '/fe/browser/' },
        ]
      },
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
            'inherit',
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
      ],

      // fallback
      '/': [
        '',
        'contact',
        'about'
      ]
    }
  }
}
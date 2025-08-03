import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '项目展示',
      href: getPermalink('/#projects'),
    },
    {
      text: '服务',
      links: [
        {
          text: '远程刷机',
          href: getPermalink('/remote-flash'),
        },
        {
          text: '技术支持',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: '关于我们',
      href: getPermalink('/#about'),
    },
    {
      text: '联系我们',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: '支持我们', href: getPermalink('/donate'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: '服务',
      links: [
        { text: '远程刷机', href: getPermalink('/remote-flash') },
        { text: '技术支持', href: getPermalink('/contact') },
        { text: '项目展示', href: getPermalink('/#projects') },
        { text: '关于我们', href: getPermalink('/#about') },
      ],
    },
    {
      title: '联系方式',
      links: [
        { text: '邮箱联系', href: 'mailto:admin@lacs.cc' },
        { text: 'QQ联系', href: 'https://qm.qq.com/q/9myAkzwVY4' },
        { text: '微信联系', href: 'tencent://message/?uin=2935278133' },
        { text: '官方群聊', href: '#' },
      ],
    },
    {
      title: '支持我们',
      links: [
        { text: '捐赠支持', href: getPermalink('/donate') },
        { text: '分享推荐', href: '#' },
        { text: '反馈建议', href: getPermalink('/contact') },
        { text: '技术贡献', href: '#' },
      ],
    },
    {
      title: '友情链接',
      links: [
        { text: '领创工作室', href: 'https://lacs.cc' },
        { text: '远程刷机', href: 'https://lacs.cc/yc' },
        { text: 'GitHub', href: 'https://github.com/lacs-studio' },
        { text: '更多项目', href: getPermalink('/#projects') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '服务条款', href: '#' },
    { text: '隐私政策', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'QQ', icon: 'tabler:brand-qq', href: 'https://qm.qq.com/q/9myAkzwVY4' },
    { ariaLabel: 'WeChat', icon: 'tabler:brand-wechat', href: '#' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:admin@lacs.cc' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/lacs-studio' },
  ],
  footNote: `
    <span class="text-sm">© 2024 领创工作室 (Lead And Create Studio) · 保留所有权利</span>
  `,
};

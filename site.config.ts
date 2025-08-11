import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://kinsey973.github.io/',  //你网站的URL
  favicon: "https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202411051423199.svg",	// 网页图标链接
  lang: 'zh-CN',  //默认语言
  title: "北沐城歌",  //网站标题
  subtitle: '北沐城歌|北歌的技术分享',//网站副标题
  author: {
    name: '北歌',//博主名称
    avatar: "https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202410261321057.png",	//头像链接
    status: {
      emoji: '💛'	// 头像旁边的emoji
    },
  },
  
  description: '山行野宿，孤身万里',  //简介
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=3954596483',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: 'QQ 2409101203',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },

    {
      name: 'GitHub',
      link: 'https://github.com/kinsey973',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Travelling',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'white',
    },

  ],

  search: {
    enable: true,
  },
    comment: {
      enable: true
    },
    statistics: {
      enable: true,
      readTime: {
        /**
         * 阅读速度
         */
        speed: {
          cn: 300,
          en: 200,
        },
      },
    },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202406212045089.png', //这里填写你的支付宝收款码图片链接
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: 'https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202406212045283.png',//这里填写你的微信收款码图片链接
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
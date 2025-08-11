/*
 * @Author: kinsey973 2409101203@qq.com
 * @Date: 2025-08-11 11:50:36
 * @LastEditors: kinsey973 2409101203@qq.com
 * @LastEditTime: 2025-08-11 15:17:15
 * @FilePath: \blog\valaxy.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
//import { addonMeting } from 'valaxy-addon-meting'  //添加Meting音乐播放器
// add icons what you will need

const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '北沐城歌',
    },
    pages: [
      {
        name: '网络世界的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',  //这里的icon是Valaxy自带的图标，你可以在https://icones.js.org/找到你需要的图标，然后复制到icon字段中
        //这里的ico我踩过坑，所以多说两句，这里的ICO复制名字即可，但是你需要在前面添加i-ri-【ICO名字】
        color: 'hotpink',
      },
      {
        name: '分类',
        url: '/categories/',
        icon: 'i-ri-apps-line',
        color: 'dodgerblue',
      },
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-bookmark-3-line',
        color: 'dodgerblue',
      },
    ],
    colors: {
      primary: "#D69B54",
    },
    //页脚
    footer: {
      since: 2023,
      powered: true, //这里是显示Valaxy驱动信息的，尊重作者劳动成果，我选择开启
      beian: {
        enable: false,
        icp: '',  //这里是备案号，如果你不需要备案号，可以将上面的enable改为false即可
      },
    },
    
    //背景图,这里为我自己添加的字段
    bg_image: {
      enable: true,  //这里是背景图的设置，你可以设置白日模式和夜间模式的背景图，如果你不需要背景图，可以将上面的enable改为false即可
      url: "https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409241626185.jpeg",	// 白日模式背景
      dark: "",	// 夜间模式背景
    },

     //鼠标点击烟花特效
    fireworks: {  
      enable: true,
      colors: ['#FFE57D', '#FFCD88', '#E6F4AD']
    },

  },
  unocss: { safelist },
  siteConfig: {
    // 启用评论
    comment: {
      enable: true  //这里是评论的设置，如果你不需要评论，可以将enable改为false即可
    },
  },
  addons: [
    addonWaline({
      serverURL: 'https://waline-seven-green.vercel.app/',
      comment: true,
      emoji: [
        'https://fastly.jsdelivr.net/gh/walinejs/emojis@latest/bilibili/',
        'https://fastly.jsdelivr.net/gh/walinejs/emojis@latest/weibo/',
        'https://fastly.jsdelivr.net/gh/walinejs/emojis@latest/qq/'
      ],
      locale: {
        placeholder: '填写邮箱，可以收到回复通知哦～',
      },
      requiredMeta: ['nick'],
    }),
  ],

})
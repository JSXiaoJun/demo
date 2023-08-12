/*
 * @Author: your name
 * @Date: 2023-07-14 15:59:37
 * @LastEditTime: 2023-08-12 09:44:26
 * @LastEditors: BG1659
 * @Description: In User Settings Edit
 * @FilePath: \demo\docs\.vuepress\config.js
 */
const moment = require("moment")

module.exports = {
  base: "/demo/",
  title: "JS小军",
  description: "JS小军",
  head: [
    ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/icon-192x192.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/img/jiazaishibai.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/icon-192x192.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["meta", { name: "author", content: "JS小军" }],
    [
      "meta",
      { name: "keyword", content: "vuepress介绍，vuepress说明，JS小军" },
    ],
  ],
  themeConfig: {
    lastUpdated: "更新时间", // string | boolean
    logo: "./assets/img/hero.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "javasciprt", link: "/javasciprt/js1.md" },
      {
        text: "Languages",
        items: [
          {
            text: "Chinese",
            items: [
              { text: "Home", link: "/" },
              { text: "about", link: "/about" },
              { text: "about1", link: "/about1" },
            ],
          },
          {
            text: "Japanese",
            items: [
              { text: "Home", link: "/" },
              { text: "about", link: "/about" },
              { text: "about1", link: "/about1" },
            ],
          },
        ],
      },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: {
      "/css/": ["", "css1", "css2"],
      "/javasciprt/": ["", "js1", "js2"],
    },
  },
  plugins: {
      "@vuepress/last-updated":{
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require("moment")
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        },
      },
      "@vuepress/pwa":{
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
      "@vssue/vuepress-plugin-vssue":{
        // 设置 `platform` 而不是 `api`
        platform: "github-v4",
        // 其他的 Vssue 配置
        owner: "JSXiaoJun", //github名字
        repo: "demo", //项目名字
        clientId: "8f2511f39bbc2f317d8a",
        clientSecret: "7e5f276f6bd0d59581ef93b007c32df0ada56c6e",
        autoCreateIssue: true,
      },
  }
}

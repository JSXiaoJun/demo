/*
 * @Author: your name
 * @Date: 2023-07-14 15:59:37
 * @LastEditTime: 2023-07-27 11:31:15
 * @LastEditors: BG1659
 * @Description: In User Settings Edit
 * @FilePath: \demo\docs\.vuepress\config.js
 */
const moment = require("moment")

module.exports = {
  base:"/demo/",
  title: "JS小军",
  description: "JS小军",
  head: [
    ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
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
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require("moment")
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        },
      },
    ],
  ],
}

/*
 * @Author: your name
 * @Date: 2023-07-14 15:59:37
 * @LastEditTime: 2023-08-24 13:46:52
 * @LastEditors: BG1659
 * @Description: In User Settings Edit
 * @FilePath: \demo\docs\.vuepress\config.js
 */
const moment = require("moment")
const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf")
const navConf = require("./config/navConf")
const sidebarConf = require("./config/sidebarConf")

module.exports = {
  base: "/demo/",
  title: "JS小军",
  description: "JS小军",
  head: headConf,
  themeConfig: {
    lastUpdated: "文件最后更新时间", // string | boolean
    logo: "./assets/img/hero.png",
    nav: navConf,
    sidebar: sidebarConf,
  },
  plugins: pluginsConf,
}

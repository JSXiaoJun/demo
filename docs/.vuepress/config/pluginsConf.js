/*
 * @Author: your name
 * @Date: 2023-08-24 13:34:48
 * @LastEditTime: 2023-08-27 13:50:20
 * @LastEditors: BG1659
 * @Description: In User Settings Edit
 * @FilePath: \demo\docs\.vuepress\config\pluginsConf.js
 */
module.exports = {
    "@vuepress/last-updated": {
      transformer: (timestamp) => {
        // 不要忘了安装 moment
        const moment = require("moment")
        moment.locale("zh-cn")
        return moment(timestamp).format("LLLL")
      },
    },
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新",
      },
    },
    "@vssue/vuepress-plugin-vssue": {
      // 设置 `platform` 而不是 `api`
      platform: "github-v4",
      // 其他的 Vssue 配置
      owner: "JSXiaoJun", //github名字
      repo: "demo", //项目名字
      clientId: "8f2511f39bbc2f317d8a",
      clientSecret: "7e5f276f6bd0d59581ef93b007c32df0ada56c6e",
      autoCreateIssue: true,
    },
    "@vuepress/back-to-top": true,
    "@vuepress/google-analytics": {
      ga: "G-JYTLJD42XF", // UA-00000000-0
    },
    "vuepress-plugin-auto-sidebar":{
      nav:true
    }
  }
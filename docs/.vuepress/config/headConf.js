/*
 * @Author: your name
 * @Date: 2023-08-24 13:30:52
 * @LastEditTime: 2023-08-24 13:40:41
 * @LastEditors: BG1659
 * @Description: In User Settings Edit
 * @FilePath: \demo\docs\.vuepress\config\headConf.js
 */
module.exports =  [
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
  ]
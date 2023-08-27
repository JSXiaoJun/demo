/*
 * @Author: your name
 * @Date: 2023-08-24 13:40:21
 * @LastEditTime: 2023-08-24 14:27:12
 * @LastEditors: BG1659
 * @Description: In User Settings Edit
 * @FilePath: \demo\docs\.vuepress\config\navConf.js
 */
module.exports = [
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
            { text: "quanxue", link: "/quanxue" },
            { text: "countup", link: "/countup" },
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
  ]
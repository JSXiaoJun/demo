/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b983332957b8a0dc617a1799c75c731f"
  },
  {
    "url": "about.html",
    "revision": "d3e7e037e31744164679989e8361f4f1"
  },
  {
    "url": "about1.html",
    "revision": "6cf1b05fd9b4bda3e95326516c426d2d"
  },
  {
    "url": "about2/index.html",
    "revision": "af1d88299e2c184106d583e746995681"
  },
  {
    "url": "assets/css/0.styles.e1e96fc8.css",
    "revision": "be183765adc5dee63788ef48ad0d89fd"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/jiazaishibai.svg",
    "revision": "762d1965ffaf32b544142ed7dfc145ab"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8ceb43f7.js",
    "revision": "e3012ef3b9e6de2f884ef6ea39f7d7e6"
  },
  {
    "url": "assets/js/11.9d528284.js",
    "revision": "8b15d678e68929e4d584fad7de98be25"
  },
  {
    "url": "assets/js/12.13980c86.js",
    "revision": "a702166227c2ea7411a06331c1ebf9b4"
  },
  {
    "url": "assets/js/13.5981f4d9.js",
    "revision": "ddf7df73f99f054a39c825c7641ecb12"
  },
  {
    "url": "assets/js/14.eb292164.js",
    "revision": "d947e8164068f2a81c4328b494aea38c"
  },
  {
    "url": "assets/js/15.a65b942f.js",
    "revision": "b239605165bf289d3892503ea0171018"
  },
  {
    "url": "assets/js/16.94a4129a.js",
    "revision": "2b271dee6a9366c00e959caae1fcdc8a"
  },
  {
    "url": "assets/js/17.c8b549a2.js",
    "revision": "2ee9f2dfa309731047eb9165b07f54a4"
  },
  {
    "url": "assets/js/18.96b35402.js",
    "revision": "ced28e13af3960bee371f61bd9efd39c"
  },
  {
    "url": "assets/js/19.86fed8e2.js",
    "revision": "9acf82fa9fa7dc3b01af99ffc52d81e9"
  },
  {
    "url": "assets/js/2.3bece48d.js",
    "revision": "94232845ad9544b10633003a91a202d9"
  },
  {
    "url": "assets/js/20.530ead7d.js",
    "revision": "a6a1da26357bfe563df108d6cb58c42e"
  },
  {
    "url": "assets/js/3.47e22a64.js",
    "revision": "271c30224092a6741dfda72488050a38"
  },
  {
    "url": "assets/js/4.22b1177d.js",
    "revision": "17f9e8c8cb5cd19cc77926d30341c5b6"
  },
  {
    "url": "assets/js/5.37f8618c.js",
    "revision": "bf4afcadf446d8da3d873ba1f4d50936"
  },
  {
    "url": "assets/js/6.287ed1ab.js",
    "revision": "3af14352fce9f99123eb0274abd7e7db"
  },
  {
    "url": "assets/js/7.d0c9ab25.js",
    "revision": "c050a59041d6d439cfdb9233d10770f4"
  },
  {
    "url": "assets/js/8.cec8fc5c.js",
    "revision": "5ff6e65cb12d0e78fa1ee7bce96c4dd2"
  },
  {
    "url": "assets/js/9.652c5505.js",
    "revision": "3eb7b6ebb0ea8ba86bb17073b4df94c2"
  },
  {
    "url": "assets/js/app.fd7db347.js",
    "revision": "c857800307e2af31da7caa7092f5b0d5"
  },
  {
    "url": "css/css1.html",
    "revision": "af87973e64586a14fc75293eff3798d2"
  },
  {
    "url": "css/css2.html",
    "revision": "432c43c9a1746381e0745ecbb445ef1a"
  },
  {
    "url": "css/index.html",
    "revision": "775e8783aaca3809406b5f89305119b3"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "e84241c91b68a152b5d555b6a8c78dea"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "ad75c046a1ad45143fc64af80ebb6af4"
  },
  {
    "url": "index.html",
    "revision": "bb25c9642ac9a36bd1bb5e30cf9e4456"
  },
  {
    "url": "javasciprt/index.html",
    "revision": "8528ee23bb2704c4606876f2011cc580"
  },
  {
    "url": "javasciprt/js1.html",
    "revision": "7ba1b178cd24c45d7367c8c397fdf1ca"
  },
  {
    "url": "javasciprt/js2.html",
    "revision": "245ed22ba26d208357922a33611f14dc"
  },
  {
    "url": "quanxue.html",
    "revision": "4d79bd5329065e1efefa15992cf4d298"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "96dd677aa66b8dc33f20e9e677f52cb9"
  },
  {
    "url": "assets/css/0.styles.f74ea337.css",
    "revision": "3d6f4b4d607d03149a867bf6c80e5954"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ca7559a1.js",
    "revision": "1958d0b6377fdecfdc04b833dbf09ab6"
  },
  {
    "url": "assets/js/10.26997d0a.js",
    "revision": "cc9722be8811cd0e1b082e65ee25e521"
  },
  {
    "url": "assets/js/11.8813cf29.js",
    "revision": "2776ad4d41ccd229e39300a2ef25c2bd"
  },
  {
    "url": "assets/js/12.40a54ec7.js",
    "revision": "5cc4478664a0e97631fc6c10dbf8637b"
  },
  {
    "url": "assets/js/13.a1cc2f11.js",
    "revision": "6292ea885bdbed837abd757cf5eb7004"
  },
  {
    "url": "assets/js/14.963de280.js",
    "revision": "9ec0c350725146d892ec54f09ef36697"
  },
  {
    "url": "assets/js/15.231e5db5.js",
    "revision": "2dd43267a9c5a92b40b908b368d61b82"
  },
  {
    "url": "assets/js/16.13350e5b.js",
    "revision": "d19cadf063ff87971f9c26ddfcbf5caa"
  },
  {
    "url": "assets/js/17.6543a57f.js",
    "revision": "707ba8a1c09943ce0bf0340ecfe91110"
  },
  {
    "url": "assets/js/18.a6285d60.js",
    "revision": "92cb8321009968ec0e72043dfcce50ee"
  },
  {
    "url": "assets/js/19.e2ce22bc.js",
    "revision": "3a1e3e8c360d32a913833022a007721c"
  },
  {
    "url": "assets/js/2.dc37de11.js",
    "revision": "dcc795ecbae13344352ab9545e43adeb"
  },
  {
    "url": "assets/js/20.ebf02fd9.js",
    "revision": "f9a5e79c86d6dcea653b9bc2037e4c80"
  },
  {
    "url": "assets/js/21.924e68e8.js",
    "revision": "a2ad35c53c986212fb14528c321aeeeb"
  },
  {
    "url": "assets/js/22.b447a82a.js",
    "revision": "c25a6d97d09909ba6868f4c555970b69"
  },
  {
    "url": "assets/js/23.a6ef514a.js",
    "revision": "e63beebb4d6aa8b023c612ce0bb7119e"
  },
  {
    "url": "assets/js/24.bb4f6e94.js",
    "revision": "fd277feaca3889daf1ed95054ec486c7"
  },
  {
    "url": "assets/js/25.98c1a454.js",
    "revision": "5763fc7c5cfd7f612ebec182cac08b26"
  },
  {
    "url": "assets/js/26.0625b07f.js",
    "revision": "7dbc5a0b09af00f2f2244aa6401d0d6c"
  },
  {
    "url": "assets/js/27.652d12bb.js",
    "revision": "4491e8069ac58ac0557e0349429ef3ae"
  },
  {
    "url": "assets/js/28.04e22090.js",
    "revision": "9e8a2c5f2abd693d9dbd685f1e5fdfbf"
  },
  {
    "url": "assets/js/3.d36a6136.js",
    "revision": "9729890d0084b8f626189050141a7cfe"
  },
  {
    "url": "assets/js/4.99a1529f.js",
    "revision": "63115fd62573bd2a0af52c571beb72cf"
  },
  {
    "url": "assets/js/5.6c522cce.js",
    "revision": "659c5a205338053795d69d9a805c0301"
  },
  {
    "url": "assets/js/6.ffa85375.js",
    "revision": "99cd6d3a6593f5479b04fefd886f7ccf"
  },
  {
    "url": "assets/js/7.dc95b8ab.js",
    "revision": "c90db2622e0b9b91ba4515cbc00da502"
  },
  {
    "url": "assets/js/8.a107f34c.js",
    "revision": "86aee79d8e647bed5f10d9c58558d31e"
  },
  {
    "url": "assets/js/9.439e0fd1.js",
    "revision": "c10c762e50939c05be9a15f9d4b6f990"
  },
  {
    "url": "assets/js/app.c0713c52.js",
    "revision": "2063193f894f140ca975c5936511334e"
  },
  {
    "url": "config/index.html",
    "revision": "1aa54e5b7d2ecd0fb409d0f3b3a0d579"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "f0a347d878df03cdf4b2928c53e33b9f"
  },
  {
    "url": "guide/assets.html",
    "revision": "2f7ace941231cf26005984d5743ec55b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "998ebe1fab549bfa58ba765cc59eacf6"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "1cfdaaedf81ec535e24e9eeee64cda82"
  },
  {
    "url": "guide/deploy.html",
    "revision": "0ec1500e027a2f3873e8661e0435638a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8a95d501f08a9e33415ac0216917eff8"
  },
  {
    "url": "guide/i18n.html",
    "revision": "cc0dbdb64f6a6c198d21c491a09af793"
  },
  {
    "url": "guide/index.html",
    "revision": "a9318ab39a69cbde0d758af4cf952697"
  },
  {
    "url": "guide/markdown.html",
    "revision": "1da0e7691fd794720270a6d3ea91d79d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7f71f567d1f42b7fce93f85fffa821e4"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "be0f0dc2ecf09b6ccfc806dec1b694ca"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "f252a02c0c469534129d8599a7029ae1"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "9eafdff6be462cfaedc4d55eaf7e436c"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "0cc005930c1a18ec2ede7eb51dc85e19"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "4877a51f6dc3b19df14a019197be88b9"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "90aad4d9f67cdb509f546da92ba5e0fa"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "cb40016487a5b57a6a1900413e36cbec"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "e227ec52a2127b36c5f8ebcb14377fbd"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "3d5bd1cc465844edc02777cd78b06a0a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ff21847279e5073d778c8898e3fbeb76"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "22780735458c382c84ba63b9c5f00761"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "bcc7a82c17c9ca4803ad5bafb7188d9d"
  },
  {
    "url": "zh/index.html",
    "revision": "611d6e9ce5ee3fef0d9d3cd89696f5db"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

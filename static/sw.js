importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08e5dbcedc75872c1d1d.js",
    "revision": "8f902007e6bb86a23697ec602b1657ca"
  },
  {
    "url": "/_nuxt/0a62a6c0af7b888f9da1.js",
    "revision": "fe08842994a754bc139d6cf68398625f"
  },
  {
    "url": "/_nuxt/0ef86ab8e6c80aac5eb4.js",
    "revision": "1c667ca237f00740b4f83d3f3696d9c2"
  },
  {
    "url": "/_nuxt/101f79b463ef1bcf0e7e.js",
    "revision": "7801dcdd6bf840dd8d5d28b39d119140"
  },
  {
    "url": "/_nuxt/1147cf51572848301132.js",
    "revision": "f0b37ea4132123f16d91bbd7df159904"
  },
  {
    "url": "/_nuxt/15edf8b756abca62c244.js",
    "revision": "8101633ff01d4b92cb9af5c8564f70a3"
  },
  {
    "url": "/_nuxt/1787acf853dc0617c0b1.js",
    "revision": "17675599ce9d1e11cd25984d6d54eac3"
  },
  {
    "url": "/_nuxt/292e6ff69230eb1b8d97.js",
    "revision": "87aa4efe8f3612b8742495ef37abaafc"
  },
  {
    "url": "/_nuxt/2ce5895ada66ccd31cc6.js",
    "revision": "2b15956690f9d8e8a0ca8025b846fe5b"
  },
  {
    "url": "/_nuxt/2ee0fb5bc6a4388a3095.js",
    "revision": "d7c410e94665290a699b01d4f9c62b42"
  },
  {
    "url": "/_nuxt/33219dee9aacd36d4976.js",
    "revision": "adb27ca18ad3f2eb24880fefbbe6261f"
  },
  {
    "url": "/_nuxt/39fdb11593a3375e658b.js",
    "revision": "14038811bcb8eb277dd4cd7d3b878eef"
  },
  {
    "url": "/_nuxt/416606134f89fb1430d0.js",
    "revision": "01e0a967c8fda61dbfbdf0a249df990d"
  },
  {
    "url": "/_nuxt/42aeab882dc666342d84.js",
    "revision": "d9f913d899726efa6b8b13624559a6cd"
  },
  {
    "url": "/_nuxt/4899eca237040601b20e.js",
    "revision": "1deb29c94f189c3c53b9b0baff4389aa"
  },
  {
    "url": "/_nuxt/5a8af1293637efa6a508.js",
    "revision": "091f0ee2a93bea065724c332ee61d514"
  },
  {
    "url": "/_nuxt/5cc32b76074d5b1f5db8.js",
    "revision": "1d19d69f2676b6e550411153a1611da5"
  },
  {
    "url": "/_nuxt/5e0d540fef3ab79721cb.js",
    "revision": "93281e1e05ba22d830b932773646d6ae"
  },
  {
    "url": "/_nuxt/5f91de1a8c053783211c.js",
    "revision": "d85c252610c52e67cab6cb6bc5b3911e"
  },
  {
    "url": "/_nuxt/60435b88ba44ff163482.js",
    "revision": "69e00373a2f2d0c0ea52eb8cb3c45ecb"
  },
  {
    "url": "/_nuxt/61ad55f6db60349904d9.js",
    "revision": "cbff46a6999d4548545430cbce50c50e"
  },
  {
    "url": "/_nuxt/67213a0d21b50653765b.js",
    "revision": "65977556e55e7bc150080e22eeb8a894"
  },
  {
    "url": "/_nuxt/83577b7aaeef08d7aedb.js",
    "revision": "5b362a47d2a4f7a2e1c5930beda940fd"
  },
  {
    "url": "/_nuxt/915ffaf5b77d649e3fac.js",
    "revision": "535d53ef40a8fda5b415035f2f4118c1"
  },
  {
    "url": "/_nuxt/9406cac46e2d2ad107dc.js",
    "revision": "3b04140bfb1f3a51310e2e14ee76f0ab"
  },
  {
    "url": "/_nuxt/a07a20be6dd667b11948.js",
    "revision": "12c16c9ed0835b1a443b38b9a95e68df"
  },
  {
    "url": "/_nuxt/a684cfa4f1f4b1c9a984.js",
    "revision": "7dcd7ea9a33120ffa6c58760ca7f9f94"
  },
  {
    "url": "/_nuxt/ad7e8c78c15a287b1430.js",
    "revision": "db292e5f31fa170bb8421e0f9318dc1f"
  },
  {
    "url": "/_nuxt/b0b2e4853097f05c623c.js",
    "revision": "9b5ebdd504318ea731d1784ebd2e2050"
  },
  {
    "url": "/_nuxt/d99acae5c58e0bdcf926.js",
    "revision": "729adecbbaa30d5a2adfc0ddbe7ddd57"
  },
  {
    "url": "/_nuxt/e246389a51d196eed820.js",
    "revision": "09bbf274e242d71b6ff3550493c7eec9"
  },
  {
    "url": "/_nuxt/e26480796ab8acd8c236.js",
    "revision": "ffece5ac210b959bac737561dcbe8acc"
  },
  {
    "url": "/_nuxt/fd6141f701d8024c1a84.js",
    "revision": "f1fce531cdf9ee605f59de63c0532864"
  }
], {
  "cacheId": "cityjsconf",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

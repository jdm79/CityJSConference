importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ffb198ebf08132769d5.js",
    "revision": "6774182541360c86b3dbc15d46117a47"
  },
  {
    "url": "/_nuxt/113782deb3066bdf8944.js",
    "revision": "1039ac882715b7e758500de19ba56db2"
  },
  {
    "url": "/_nuxt/12f6c82ab0b6780532e3.js",
    "revision": "1fa78de11aca1b6477da17c1f9424a02"
  },
  {
    "url": "/_nuxt/1c002283daa80e3c9bca.js",
    "revision": "c774f4b780d124d4a16e85e6dfa9eed9"
  },
  {
    "url": "/_nuxt/1dbd7447985fc4e651d3.js",
    "revision": "f07da7cb6a4311ba07c526d7422465b2"
  },
  {
    "url": "/_nuxt/214de14438b5416e2fa0.js",
    "revision": "e5646e456c3bd08cef10eae581601078"
  },
  {
    "url": "/_nuxt/22d11b0217d68590cc10.js",
    "revision": "6ba53c896894d5409ac2612e0852fdb0"
  },
  {
    "url": "/_nuxt/240cf5471a610eff8943.js",
    "revision": "b5306fdda714876e779f56f626c05759"
  },
  {
    "url": "/_nuxt/247e5c407ddb22e0e973.js",
    "revision": "53f1dc61d962dc062d64550c144595d5"
  },
  {
    "url": "/_nuxt/3458e1435b7a57a4e879.js",
    "revision": "c649fffe1339151ae43bf54083707c49"
  },
  {
    "url": "/_nuxt/34849e00700adaa25c1f.js",
    "revision": "146c441683058048daa1a5bcd552f1df"
  },
  {
    "url": "/_nuxt/3b41001525f3effb2e16.js",
    "revision": "c30c08149112b51790d01961d540e9ae"
  },
  {
    "url": "/_nuxt/55df061e1167330bc70b.js",
    "revision": "5e956df56a20111f67837b3bf958268a"
  },
  {
    "url": "/_nuxt/5964467515c5d114df42.js",
    "revision": "0a38ab0d1bfc663976d9caad4e8c0b73"
  },
  {
    "url": "/_nuxt/6c067aaf1c93eb0338e4.js",
    "revision": "db8e2d626f691d0bd38c25f1c21508b1"
  },
  {
    "url": "/_nuxt/82f61eada2228b92a80c.js",
    "revision": "b8bbf91ee4b9288cacf0c6f3120c7b14"
  },
  {
    "url": "/_nuxt/86aca3ab6c56f45b7e1b.js",
    "revision": "a3813e363f7e6a0200f3ed6170c88987"
  },
  {
    "url": "/_nuxt/92f10b18d591a2986bdb.js",
    "revision": "5eb68db4ea94da7ac9ce9ad4522c1460"
  },
  {
    "url": "/_nuxt/9f92125cb4b4800924f1.js",
    "revision": "6bae737510bb9b507b38d80f646c58d9"
  },
  {
    "url": "/_nuxt/9fd90c27c59dd1c6cd55.js",
    "revision": "032b892772e73a41f028bd1aa0d80f99"
  },
  {
    "url": "/_nuxt/a1ef4f43b420d7791c73.js",
    "revision": "0719e8888003cefac68b0a4985c81070"
  },
  {
    "url": "/_nuxt/b2448de484b861ec16a1.js",
    "revision": "e5e3a8ec0645ea6014369163fd17d358"
  },
  {
    "url": "/_nuxt/b28429e4b3f1c44b9620.js",
    "revision": "7ee668b68ac85c509fb5a12b8520bab9"
  },
  {
    "url": "/_nuxt/bcf4700d8ccc8c009d39.js",
    "revision": "6e114c73c69a223041b66bf25e8aa691"
  },
  {
    "url": "/_nuxt/c16f4902e2aea9caf746.js",
    "revision": "2fcd340f5c7b36a49e44fc4136bb8b0c"
  },
  {
    "url": "/_nuxt/d1b11a886b24ead2ddf1.js",
    "revision": "21f3639f8e5b837544678b9fec3c62ea"
  },
  {
    "url": "/_nuxt/d7b17b12b242cff46712.js",
    "revision": "ba67df464902f1e6ff77cf8fa196ff92"
  },
  {
    "url": "/_nuxt/dea545f57daa2545b57d.js",
    "revision": "8fe05607087d6dce3eab4b7887d4c6aa"
  },
  {
    "url": "/_nuxt/e97d71a2dc734c2f9411.js",
    "revision": "7fa5b0d577cfbcce45f10ef97488fd49"
  },
  {
    "url": "/_nuxt/e9c81d51e9fac097321d.js",
    "revision": "e35cfbdd2e8b78993fb4babaa1a817cd"
  },
  {
    "url": "/_nuxt/f0f792c2e0834f33583f.js",
    "revision": "f41341534a458fb27d5e75c231ecc278"
  },
  {
    "url": "/_nuxt/f68ef950869234ba9c49.js",
    "revision": "69ac8f58019e2c0c690f3f3231c6c92e"
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

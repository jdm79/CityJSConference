importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/020218ea2057b4b7a491.js",
    "revision": "06c51e84ac1caf19e72581246a23abf9"
  },
  {
    "url": "/_nuxt/0bad7fc1169d77f11098.js",
    "revision": "cacebb92534c28ddd0dd1bf60aa9163b"
  },
  {
    "url": "/_nuxt/13db16ce6ce39b194296.js",
    "revision": "134359b719f9fa3d4279d4a7e7499f51"
  },
  {
    "url": "/_nuxt/18d361e5e7bd66279124.js",
    "revision": "59f0f24cb524f71f5d1328fb00740ae9"
  },
  {
    "url": "/_nuxt/22ef435acf146cd37963.js",
    "revision": "8ccf843ad91b40cd9673ce0e00e2d510"
  },
  {
    "url": "/_nuxt/3b7db37ed727fc0fc8bd.js",
    "revision": "daed0597843f6f548666da0320a9092a"
  },
  {
    "url": "/_nuxt/4704a497a4b911bc15fc.js",
    "revision": "dd16ba3f60bac3f9468d1bc5a5d18aeb"
  },
  {
    "url": "/_nuxt/4837bcf990b918e6e8a4.js",
    "revision": "729d230b257b954a4f82cd66c351327a"
  },
  {
    "url": "/_nuxt/49caf5d1f9941d9b1a10.js",
    "revision": "f7758ef99d04e0c4bf48a2f79e0b0a88"
  },
  {
    "url": "/_nuxt/54e8af347b84f7727a10.js",
    "revision": "fc6d52a614e6e5a700957426552c6e87"
  },
  {
    "url": "/_nuxt/5904662ec30f55d0b995.js",
    "revision": "bd9f04176f059509fc35c2452fc53998"
  },
  {
    "url": "/_nuxt/591eb95791d8a6b9a800.js",
    "revision": "d6cecc232a668c370f5103d9f8c277a1"
  },
  {
    "url": "/_nuxt/603a75c658416146eaf3.js",
    "revision": "3444d6a91b89f50caaf18815d7fcf696"
  },
  {
    "url": "/_nuxt/671f1f18c68faf9efc96.js",
    "revision": "2cc542c30fbfeb5d7fa0ba48b717e48d"
  },
  {
    "url": "/_nuxt/6cd0635befa364c1a755.js",
    "revision": "3c779a25c9e7d9de564d5eb68868aceb"
  },
  {
    "url": "/_nuxt/7463a8e774dd8009db76.js",
    "revision": "f8832e3d8bc59733ebac6dab2d19c5df"
  },
  {
    "url": "/_nuxt/76193fc1655b7f871c67.js",
    "revision": "2e579fda8ca5e0f0bb8b00cfc266ef0a"
  },
  {
    "url": "/_nuxt/7ceb01844ebf82229d4c.js",
    "revision": "809d593f90195ca60807c97f810a9c33"
  },
  {
    "url": "/_nuxt/85b961a604daf004bf1d.js",
    "revision": "da1213f11480ba43137c5f126c89b338"
  },
  {
    "url": "/_nuxt/a9d6175566643fd12192.js",
    "revision": "07fb08a0cf1d346236f5f01f3eae66f7"
  },
  {
    "url": "/_nuxt/b2d80b398446cdb8d8ac.js",
    "revision": "36eed1c40c651fe638ee1094620d503f"
  },
  {
    "url": "/_nuxt/b78173509f893b81f49a.js",
    "revision": "81db7982ee424ede0a5a88f88d4dfe81"
  },
  {
    "url": "/_nuxt/b8de877be6ad35d28a23.js",
    "revision": "d84cfa2f113eb758493deeb4515e8e8c"
  },
  {
    "url": "/_nuxt/bb3e50905924183c12d3.js",
    "revision": "446e7137b5d0429b717031f2ed391f3f"
  },
  {
    "url": "/_nuxt/c40ca5e716bf9a2e469a.js",
    "revision": "7d35dfbb549764734fcdd453d56c88e8"
  },
  {
    "url": "/_nuxt/c604e14ef9be2a1b0468.js",
    "revision": "8b20711326e1bcc9252f1c95652ef5be"
  },
  {
    "url": "/_nuxt/d2ebd21a4b54e9962a9f.js",
    "revision": "ddf7ad6fc574e4d9947885a3822dd5de"
  },
  {
    "url": "/_nuxt/db215fc445fc078de63a.js",
    "revision": "a9ce204dd0c8fdd8b325966aa505f71e"
  },
  {
    "url": "/_nuxt/dfbee4535924eb87944c.js",
    "revision": "628d5790897ae8b39f391ab626fc18e3"
  },
  {
    "url": "/_nuxt/e299470dce0f2fe6b47b.js",
    "revision": "662ac473f529a647ff07f2631f37da3a"
  },
  {
    "url": "/_nuxt/f3070c952504cd185533.js",
    "revision": "ffef2354bf6f783f76fdf2fc0806cf20"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e35ee1e82bd49b18aa5.js",
    "revision": "8a1d2b3868c1a8a6090fadb1224bd993"
  },
  {
    "url": "/_nuxt/22ef435acf146cd37963.js",
    "revision": "8ccf843ad91b40cd9673ce0e00e2d510"
  },
  {
    "url": "/_nuxt/269b4bbe8b3092280159.js",
    "revision": "e6d5111a8dbba6a9c3823d81112e3cd1"
  },
  {
    "url": "/_nuxt/279fd05c494606ec9275.js",
    "revision": "042aa35b64199481e3f1927e129c291c"
  },
  {
    "url": "/_nuxt/2ae486508a8a6cac4a60.js",
    "revision": "044d7df6f4b5dc3407ac08efb3246371"
  },
  {
    "url": "/_nuxt/2bbcc21b91a0bb5331de.js",
    "revision": "1f038eec4cfc64b7cf96ca83c48d1815"
  },
  {
    "url": "/_nuxt/3659567a947c6073a77a.js",
    "revision": "b05e67f5874d1ada90724926c8597fa6"
  },
  {
    "url": "/_nuxt/369eaab895f83576485b.js",
    "revision": "3ed05d15bf70e45e88110f4a7051d391"
  },
  {
    "url": "/_nuxt/39595e7c8d594dbd40b1.js",
    "revision": "622cfdf19a1acf73ce17024d5ecca732"
  },
  {
    "url": "/_nuxt/44b3311382768df91915.js",
    "revision": "32565e7a4182366265fbd9cd09a9bf34"
  },
  {
    "url": "/_nuxt/462cd1f9443c568d9ab3.js",
    "revision": "e151d7a0b43220e44c660ae711e1e7da"
  },
  {
    "url": "/_nuxt/4a4d25a0a94039b6b676.js",
    "revision": "aa58fb2f408986e10edcdd38100b968e"
  },
  {
    "url": "/_nuxt/52d145a43ab7804fa7b3.js",
    "revision": "04f43d5998d86039b7b8ecde9eb36462"
  },
  {
    "url": "/_nuxt/54e8af347b84f7727a10.js",
    "revision": "fc6d52a614e6e5a700957426552c6e87"
  },
  {
    "url": "/_nuxt/5888510e22e8d095d625.js",
    "revision": "49d3f5802c546f208fbc696fd17cb7ab"
  },
  {
    "url": "/_nuxt/68c99a5ba5ffd25a7897.js",
    "revision": "36e89890696bf44e3b1156f58d47f261"
  },
  {
    "url": "/_nuxt/6af6d19fc1a2b505e428.js",
    "revision": "34a4cb3bfebe1ec7b680b7c064a89930"
  },
  {
    "url": "/_nuxt/6d038c671ff47dcb81f5.js",
    "revision": "175ae195c5f3222015ed5a9c36a66f22"
  },
  {
    "url": "/_nuxt/7730ffcc614852614103.js",
    "revision": "2b3bbb7a69a9411784e4e66dfd90be61"
  },
  {
    "url": "/_nuxt/7834de056a8fc9eda39d.js",
    "revision": "31ea475464def294a5b61ee7ad24600b"
  },
  {
    "url": "/_nuxt/85f63d6173b78f181550.js",
    "revision": "af38102261d8cd5f717910e3111da72d"
  },
  {
    "url": "/_nuxt/98fd738c30c8bb576f42.js",
    "revision": "7a2c1fdfdb111fba2305ab1d8e5d4cf5"
  },
  {
    "url": "/_nuxt/9917ea9a16cdd8170929.js",
    "revision": "e7a9d9e30bf9f6b6f24dd507cbfc0200"
  },
  {
    "url": "/_nuxt/995c6c8d58b990184e69.js",
    "revision": "ce420c6a2beae268d97f7653a04c4a98"
  },
  {
    "url": "/_nuxt/aa4ade06d56f8d129985.js",
    "revision": "2a93c224e571c2022635cd78ffad9bd2"
  },
  {
    "url": "/_nuxt/aa8f4f6fad3d4b1e6472.js",
    "revision": "969fb6ed9cbfe5d84b1e64f0974b9ccb"
  },
  {
    "url": "/_nuxt/b5564980248285480a16.js",
    "revision": "1a071311eeece56c7f5a72e05b55918d"
  },
  {
    "url": "/_nuxt/c604e14ef9be2a1b0468.js",
    "revision": "8b20711326e1bcc9252f1c95652ef5be"
  },
  {
    "url": "/_nuxt/caf1ef1bdbdea0167bad.js",
    "revision": "ac91e00de95c6a20c91acd07ef7ef3f6"
  },
  {
    "url": "/_nuxt/e324ba3790c60a211e98.js",
    "revision": "b73f76ff5df9c2c4218992c139024025"
  },
  {
    "url": "/_nuxt/ffdbaeabebfadc76d23c.js",
    "revision": "7ffc0290badc612728d60ea9e71f405c"
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

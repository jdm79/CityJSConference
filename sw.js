importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/19227b6711c45af02646.js",
    "revision": "0bbb1d1e0c6bcedd0f1096804e5f0201"
  },
  {
    "url": "/_nuxt/222095ae938f83203dfb.js",
    "revision": "10785d01d00ff81db4b7cabace95190e"
  },
  {
    "url": "/_nuxt/273524da2763e327dbc9.js",
    "revision": "edc8613242b0ba8078ce420337857eb2"
  },
  {
    "url": "/_nuxt/28635f409e2d00f4e76b.js",
    "revision": "981bca946f216d92f1172d379af74b65"
  },
  {
    "url": "/_nuxt/300ad130c1ea8547f3ee.js",
    "revision": "aa5a08f48fc2d6e29e7d44841e57e5df"
  },
  {
    "url": "/_nuxt/313342365699a457d854.js",
    "revision": "3b2716aa2d17575a6b0e3841e86b0c1d"
  },
  {
    "url": "/_nuxt/4812744c3d8dfd74654d.js",
    "revision": "353b73d4affa4c9d4a1e3d82f8a81cea"
  },
  {
    "url": "/_nuxt/538d085d4ed6c7da428b.js",
    "revision": "278064ec1412afe2dbe401a34322f977"
  },
  {
    "url": "/_nuxt/5720d5e52c4a30088b12.js",
    "revision": "f96bde3845dc8862d1cdb6fd0543cb88"
  },
  {
    "url": "/_nuxt/5a14cf69330f7ad5ec6c.js",
    "revision": "cb4e679a9bf8c66f290a3bafab327bcb"
  },
  {
    "url": "/_nuxt/5e7f24e2df6b9869293f.js",
    "revision": "61dbc200a7f0ae7271ca166b5e23e7da"
  },
  {
    "url": "/_nuxt/65d43cbcb40d407f1b63.js",
    "revision": "f77933ac9a6bb57a005a47d7a74aab46"
  },
  {
    "url": "/_nuxt/67f986757cee3cb15bfa.js",
    "revision": "05b4787226948c56ecfc9e8698dd319f"
  },
  {
    "url": "/_nuxt/6a5261fd8a935de5af52.js",
    "revision": "ce119d1ea22f2c95d2130e1dcc2cf182"
  },
  {
    "url": "/_nuxt/7b845272eb12ed9df425.js",
    "revision": "107cef10f328a97687e64679d86fa64a"
  },
  {
    "url": "/_nuxt/8f981fe183839ad1b5be.js",
    "revision": "7919cc3f4afb56486ddedd67210e2edd"
  },
  {
    "url": "/_nuxt/953dc25649c7ea7766b4.js",
    "revision": "d60e6ae49ba721cfdb980a361f4635b4"
  },
  {
    "url": "/_nuxt/9a072a64c7383ef58e28.js",
    "revision": "d37284f041ffb8e6d8a7cf70abecdf98"
  },
  {
    "url": "/_nuxt/bc5061e438183b7c5ca3.js",
    "revision": "69125bac32440a1772adafdf38b8569e"
  },
  {
    "url": "/_nuxt/c18b00bf4c2ae227cda2.js",
    "revision": "2f7136bb67e2c6130abd6055505cec9e"
  },
  {
    "url": "/_nuxt/c60ff6b4bf2038fcbadf.js",
    "revision": "d7dc71dd4c95a491abd418f891991124"
  },
  {
    "url": "/_nuxt/c6926d36ec818c10cb82.js",
    "revision": "29fd9e3e02e9359ec30a4eca522f4935"
  },
  {
    "url": "/_nuxt/cb490a07c250121ddca9.js",
    "revision": "506d0ac8ddfa199bf12aec95cf6b66b4"
  },
  {
    "url": "/_nuxt/cdf48ef642d918565fad.js",
    "revision": "3699359675c05c360194190a396a9f42"
  },
  {
    "url": "/_nuxt/d4e475c832de68521c25.js",
    "revision": "ee0cd5eeb94caf8d33ec50c03bcc3c55"
  },
  {
    "url": "/_nuxt/ddb912b993e1a90e8b39.js",
    "revision": "5512e222ba175ed1f344899dfe71f866"
  },
  {
    "url": "/_nuxt/de4fb81071c69fdcbd1d.js",
    "revision": "55eaa60e2012ebffe7d29fb71ec1d4fc"
  },
  {
    "url": "/_nuxt/e9362b82ed4799a70ff6.js",
    "revision": "d8ffe608857e687e576ed9616b16f999"
  },
  {
    "url": "/_nuxt/ea88e596ba170e6918ca.js",
    "revision": "7a8ebff90994a94721b9f19cf5bd2a2d"
  },
  {
    "url": "/_nuxt/eba2c43494288bb6f953.js",
    "revision": "19c2664c4c4301880fe94dd675f88dff"
  },
  {
    "url": "/_nuxt/f101791b8d76e35e97e5.js",
    "revision": "be7568da539237f7f39e25c2e94760d7"
  },
  {
    "url": "/_nuxt/f5a93c40540aeb9f2edb.js",
    "revision": "ee08174873688832dade9650104b464f"
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

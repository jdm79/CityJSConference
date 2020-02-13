importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/050b7ca4fa294b7fdcdd.js",
    "revision": "2b5da5d2fef61c298a80dfbc68ede5ac"
  },
  {
    "url": "/_nuxt/0e11fd7ca55161014cc4.js",
    "revision": "efe942c0f1778231f9ebece9b2edafbf"
  },
  {
    "url": "/_nuxt/11ac3cf83216bf37df02.js",
    "revision": "aa267afaddf832b23ed1978cbe6dd7a4"
  },
  {
    "url": "/_nuxt/13f6486c05fa79c2f20f.js",
    "revision": "71ef56e911e9c2932a49101868e076c0"
  },
  {
    "url": "/_nuxt/1ce11840d90b86ce58d7.js",
    "revision": "2f46b516c8396e06d1c2962d3c3d8c23"
  },
  {
    "url": "/_nuxt/1efe0c1b67c546a35fbf.js",
    "revision": "f57fbeb7d2a4951d636a38468310ceea"
  },
  {
    "url": "/_nuxt/32e59ccf089c9e73bfa2.js",
    "revision": "8c3dc2b4d74ae5a73dd91c899a1434fa"
  },
  {
    "url": "/_nuxt/3312526400cc88adebb2.js",
    "revision": "5e6df94480db1a21a3afe481cb06a97f"
  },
  {
    "url": "/_nuxt/3458e1435b7a57a4e879.js",
    "revision": "c649fffe1339151ae43bf54083707c49"
  },
  {
    "url": "/_nuxt/58013fdf3448f7fdca58.js",
    "revision": "c2be80ceb4e82d3d09d34f7dfd04362d"
  },
  {
    "url": "/_nuxt/61c68fd1c481d6e42455.js",
    "revision": "14736740f13eb990177ff0337801e614"
  },
  {
    "url": "/_nuxt/6ee8388425d67efdcae5.js",
    "revision": "c46a8b21f780e6589561f9f173f3ddb6"
  },
  {
    "url": "/_nuxt/70b52d4913c4607c4ad0.js",
    "revision": "70cc21f8051c9235f0a9dc1690c68eca"
  },
  {
    "url": "/_nuxt/726fd4f9c8d34e7289d6.js",
    "revision": "0867a50a18e4f4d8fd7db764202ffa4c"
  },
  {
    "url": "/_nuxt/72793739db71bbce6ab3.js",
    "revision": "ab94770c10975ddf1d53aad62daf0f4f"
  },
  {
    "url": "/_nuxt/74141c64a1f97b331551.js",
    "revision": "3e4285634e4d589afb6361a4e87710e6"
  },
  {
    "url": "/_nuxt/74ca0dbde40df8374297.js",
    "revision": "1384b4624c3dd03be63cc20b114b824b"
  },
  {
    "url": "/_nuxt/8a7a40b5c32f87280c25.js",
    "revision": "7039f1e1755da95980a2db22f010e559"
  },
  {
    "url": "/_nuxt/8d2ae3398e67adf87031.js",
    "revision": "21a1603a88ae6a267db52c82a1fa6656"
  },
  {
    "url": "/_nuxt/90dd61d576d74b8ac332.js",
    "revision": "c76930c49829c4d6321e17ecd467a740"
  },
  {
    "url": "/_nuxt/a6b0c704b00bac60d039.js",
    "revision": "22bb2ee80585c8bc606e807f8993aaad"
  },
  {
    "url": "/_nuxt/a70c2708673ae2fe501b.js",
    "revision": "387987e5c4f2048c459ed1563ad76bde"
  },
  {
    "url": "/_nuxt/ac38d1c518058c9e968b.js",
    "revision": "4892d2fe0a5d93954b5b339ef42ef7fd"
  },
  {
    "url": "/_nuxt/b65e490385c818811692.js",
    "revision": "95100008b5f6844bf90ebe60c0384290"
  },
  {
    "url": "/_nuxt/bb07f190d435886c4499.js",
    "revision": "1a16cfff5e020d598e26dcdcd184aa2c"
  },
  {
    "url": "/_nuxt/c54428d5116c22d7a452.js",
    "revision": "cbb5ce8e0355321f79fb79da40b4d60b"
  },
  {
    "url": "/_nuxt/c8de046746ba4c5879c5.js",
    "revision": "85e40f0242f8e3b696bd8bee3cd72cc3"
  },
  {
    "url": "/_nuxt/dba18f2eff841c5871c0.js",
    "revision": "7cf0233f1cf1331bd9bbfd3297a9e457"
  },
  {
    "url": "/_nuxt/eb11f1d599790177a82e.js",
    "revision": "0634a3a1d50c987746628666ec67b4bc"
  },
  {
    "url": "/_nuxt/eb9d1a9e29166597623d.js",
    "revision": "3e01525072d137f3abd770e418977028"
  },
  {
    "url": "/_nuxt/f8eab178a063b09c4692.js",
    "revision": "c64bb06cd68abe65003921c52a2fa1e6"
  },
  {
    "url": "/_nuxt/fd108351e328a2c2f806.js",
    "revision": "07623992a9d124ccbca3a5e57dc06f65"
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

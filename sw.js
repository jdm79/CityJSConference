importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/096f3c6ff575e1f43470.js",
    "revision": "ce8beeef28b84e2df2e9a93bced55dc0"
  },
  {
    "url": "/_nuxt/13294d23db5d1e1fe90d.js",
    "revision": "5f8ef92099bcc0752c411655b3b8d7b7"
  },
  {
    "url": "/_nuxt/1792445332a3e3a3a16e.js",
    "revision": "c2fd0f26cf8a6ab9372970e6bd659ef2"
  },
  {
    "url": "/_nuxt/1b1c7624112142e72d42.js",
    "revision": "d73db2cb1175f6779fe251fbd34f26a6"
  },
  {
    "url": "/_nuxt/2aa7e631737e3a317be6.js",
    "revision": "25cf277657ced469feab057fc48d04fe"
  },
  {
    "url": "/_nuxt/2d6bfcf7eb0dce0f1b15.js",
    "revision": "66980667806bf2a3b27a2b478598daa2"
  },
  {
    "url": "/_nuxt/3074b1ddf18c206f2d06.js",
    "revision": "59b3aaac11a68c328d5df11f85a3c343"
  },
  {
    "url": "/_nuxt/3c84480e4abe2ad3651c.js",
    "revision": "f949a952bd440dc149616db0516bb53c"
  },
  {
    "url": "/_nuxt/4449dcd07eefd00d672a.js",
    "revision": "2c6ca874f35863896aa80a21ea156c5c"
  },
  {
    "url": "/_nuxt/48bde34cfacd6468feff.js",
    "revision": "6149e7580b254a8434de604bb2115b9b"
  },
  {
    "url": "/_nuxt/4cf67c0ab9cac2b9e3cc.js",
    "revision": "50a91bf18681c961a0e912074fca45b9"
  },
  {
    "url": "/_nuxt/50fc6f761de7089fdd8e.js",
    "revision": "6f414bb9e34bfcd6c86bc317ce276436"
  },
  {
    "url": "/_nuxt/555f0ee4d354badf735c.js",
    "revision": "033d9fe900b4395b4434914777778385"
  },
  {
    "url": "/_nuxt/5d2fedab0df373b768ef.js",
    "revision": "01ff60ba196dcf59cca5f2ffac06603f"
  },
  {
    "url": "/_nuxt/6774b54580635ef636e3.js",
    "revision": "683e28cd12030afef545b564df69c893"
  },
  {
    "url": "/_nuxt/70af5f81b35be54cef13.js",
    "revision": "56849e52480cb347062b4d1819014502"
  },
  {
    "url": "/_nuxt/7c3503fa6c6ddf5ab290.js",
    "revision": "de6a9d5567d3dae551a06237c1fd94ab"
  },
  {
    "url": "/_nuxt/8572c26019ee9a1a6ef1.js",
    "revision": "9da6794f3214956025d0943bf9837662"
  },
  {
    "url": "/_nuxt/8abaeb03a7e1c27d193a.js",
    "revision": "32f76310f546090bad432358dbc073b8"
  },
  {
    "url": "/_nuxt/8c6080dda4521920ae31.js",
    "revision": "c64b1bf10ef936a11963d72a20cb5603"
  },
  {
    "url": "/_nuxt/951f60df40be8aa1b586.js",
    "revision": "7d98828de154caa35b3b66a091ab5df4"
  },
  {
    "url": "/_nuxt/a203fc0db85e10ec6f31.js",
    "revision": "39600e73b6d7169b270cc7e34ddaf42f"
  },
  {
    "url": "/_nuxt/a618c6e36863e387faee.js",
    "revision": "d46170e7e9480628a663855d1863c426"
  },
  {
    "url": "/_nuxt/a7c3f3e4e6b45cda8a75.js",
    "revision": "8844ef7d96a5df14917d2834dca94b46"
  },
  {
    "url": "/_nuxt/cdcd9993b0bed7e31230.js",
    "revision": "301edc6bbb58453db43475e0dd619b80"
  },
  {
    "url": "/_nuxt/d46020d986c5a98da250.js",
    "revision": "214359c95dcac22b50201985d10829e8"
  },
  {
    "url": "/_nuxt/e62049af4e5603f9660c.js",
    "revision": "398cff1c476df4118489e72a62f3621e"
  },
  {
    "url": "/_nuxt/eb163b8f70645ecd670d.js",
    "revision": "f0e7ba201b061aec884b780d675b4498"
  },
  {
    "url": "/_nuxt/ed2e92aba00e68f3808b.js",
    "revision": "6967ba89173c220c77b1bbb94c0ed30b"
  },
  {
    "url": "/_nuxt/f8f19f4c8f3c6f0d4af4.js",
    "revision": "de3cec7ed14ba88f6d90aa739b90bc66"
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

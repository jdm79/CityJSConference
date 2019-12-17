importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a34822b85923dd3ed7b.js",
    "revision": "aef7af5e7f5236fc63d075da5672a48b"
  },
  {
    "url": "/_nuxt/2c03a06347787ddcb021.js",
    "revision": "fd8077a4dae271450a855bf0a715e25b"
  },
  {
    "url": "/_nuxt/2cfb4a3c34aa52ec3efd.js",
    "revision": "d4276439e2634899fb24bd27f3872725"
  },
  {
    "url": "/_nuxt/30b1ea5dbf1f0f30cff0.js",
    "revision": "3359c2b92d3a73e1e3ae71df9963fedd"
  },
  {
    "url": "/_nuxt/43d466167d24c5469791.js",
    "revision": "97d8355f33d1fda923c929a27ca4bce4"
  },
  {
    "url": "/_nuxt/43f0ece92689d549beff.js",
    "revision": "0d3bd15c3f3cd28c76f8a9a8f9f90250"
  },
  {
    "url": "/_nuxt/4a652b6b6b6ce1d09355.js",
    "revision": "74eab94e781f79173c00dcb6a05b081b"
  },
  {
    "url": "/_nuxt/4be2c3150a8ca9128b4b.js",
    "revision": "7c3259f123cd3df452418f34780a56d4"
  },
  {
    "url": "/_nuxt/4bf18d599d14c7c83775.js",
    "revision": "35dddd1d22d7570b0016f6e3dbca8c66"
  },
  {
    "url": "/_nuxt/6017ab983942f773b289.js",
    "revision": "842012869e935a159bd7c8259edc5728"
  },
  {
    "url": "/_nuxt/70b24d43fc8addb4d6cc.js",
    "revision": "d867cfcc14cfd0f4d33593eba2f71bf3"
  },
  {
    "url": "/_nuxt/7317cb1511ed3202d07b.js",
    "revision": "3f79789da36045fb56eebc2b3c068415"
  },
  {
    "url": "/_nuxt/7ace281d18bc4089ea70.js",
    "revision": "e811a2044f7b237255ff77bbc51e9ac4"
  },
  {
    "url": "/_nuxt/7f38b1b7e39937c59563.js",
    "revision": "55f3db7a7fc217335cff9a7dda8fb849"
  },
  {
    "url": "/_nuxt/82483204ad8e00c3d7a9.js",
    "revision": "f9ed86737b778274120fb00a394131af"
  },
  {
    "url": "/_nuxt/911ab0490f16c8744c73.js",
    "revision": "12268621fdfec1e80fdf7e6ded6f71fc"
  },
  {
    "url": "/_nuxt/965cdf263407d8955cba.js",
    "revision": "e18f0cabe4a59ebc5004a815b8fd9838"
  },
  {
    "url": "/_nuxt/9ddf794b6f6ed9e283e6.js",
    "revision": "3961d46d1eafccff41807497fbd9009c"
  },
  {
    "url": "/_nuxt/9e7c4330f22c16bc12cb.js",
    "revision": "4007b1cd52cbe355118f535109b9e689"
  },
  {
    "url": "/_nuxt/9ee3dc1f72f3e74b1a29.js",
    "revision": "47b91cfd139e994b3a41fa5c79e3405d"
  },
  {
    "url": "/_nuxt/a15ff98f860fcfb3c5a0.js",
    "revision": "1faff7382a64bcec33d2615bcab7100f"
  },
  {
    "url": "/_nuxt/a40e1c6514e6fcc8b9bd.js",
    "revision": "f22fa8a2a25104a8891c9cc727d0ee1a"
  },
  {
    "url": "/_nuxt/a4231ca3ee4e5c2a6bb9.js",
    "revision": "70db5c34cac1a727b4551e42ee24aada"
  },
  {
    "url": "/_nuxt/bb85a7455f1c4bc2fbef.js",
    "revision": "6912b9fa2f12016ce042d673b1e96a21"
  },
  {
    "url": "/_nuxt/be883d9a02e9710993c0.js",
    "revision": "d32dfdb6e6dd6e5582fb745ffe380807"
  },
  {
    "url": "/_nuxt/ce745de20bad736b1775.js",
    "revision": "cf0b6eb65c4267f27fef9f94534fa070"
  },
  {
    "url": "/_nuxt/d01cc51a3278a4465306.js",
    "revision": "c335f9d1cbae9832f536f90f80cf1a19"
  },
  {
    "url": "/_nuxt/e02d29d442917793abc6.js",
    "revision": "196425f7c7364c817df7ff10f103e669"
  },
  {
    "url": "/_nuxt/eb8bfd8b53d7e80f3244.js",
    "revision": "dbd0919f87ce568ef0238443a173533c"
  },
  {
    "url": "/_nuxt/f09530205d86e37b956b.js",
    "revision": "ba9e0141f4593e61c65f1dffce7b26fd"
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

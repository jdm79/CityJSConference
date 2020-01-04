importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ff8b6c128c11d26c519.js",
    "revision": "0551cbccfe19a563e6535f55b396f816"
  },
  {
    "url": "/_nuxt/16bbd5db7d7fc4630c45.js",
    "revision": "c684bf15e7a1e2adc26443d8a3d9ca7a"
  },
  {
    "url": "/_nuxt/25107ad3af3783b0c840.js",
    "revision": "6a069253ea829ca361be47a12289a755"
  },
  {
    "url": "/_nuxt/278e04eed84e1af2fef6.js",
    "revision": "2effa340c834bd407e555e7266f3a980"
  },
  {
    "url": "/_nuxt/27cb33666e863b9c9e78.js",
    "revision": "9dd5deb7842d7237ed6b6b2b60376b46"
  },
  {
    "url": "/_nuxt/292c86bd5a05faa2d187.js",
    "revision": "dcbd43a4b62f605524832d549d5b7fa5"
  },
  {
    "url": "/_nuxt/34177de8994f3e7c3e06.js",
    "revision": "ac5669fc1790b7b6d7f41889e9731f43"
  },
  {
    "url": "/_nuxt/3ad85a01db348c2dc040.js",
    "revision": "ef505b6541f2ab2f56925578e557376a"
  },
  {
    "url": "/_nuxt/3cbccb0a246e6cec1931.js",
    "revision": "c241541957d587b5874974e4c6e7043e"
  },
  {
    "url": "/_nuxt/4e27daa1b0ccb5d4a1c8.js",
    "revision": "2f33ecd7f9a081ccf48c3b8c2bc54992"
  },
  {
    "url": "/_nuxt/5aa8dc13535736561b1f.js",
    "revision": "56fc4aa3a37be955dc331a522e2b6081"
  },
  {
    "url": "/_nuxt/603abce4c2bcdceb03d8.js",
    "revision": "dfef036b4a90fe4910e49c4a9618d008"
  },
  {
    "url": "/_nuxt/66e7d4e8a9319c0b3d87.js",
    "revision": "434e22da28e1ec944d05cf3b41830978"
  },
  {
    "url": "/_nuxt/682bf0265b01431bd4bb.js",
    "revision": "29585fa842f235c12ed6c0bb19cf57e9"
  },
  {
    "url": "/_nuxt/6d81c9f119ceac3a451a.js",
    "revision": "5e9b84f49bda54a6676bef5b8d54149f"
  },
  {
    "url": "/_nuxt/71ce352d260a8d2582d9.js",
    "revision": "45f1bb31ffb4b5d0a04d8a9e74a9c7c2"
  },
  {
    "url": "/_nuxt/7c666100742594a9d2eb.js",
    "revision": "d7c65dbd99a24847ba4f8fcc4e0525bf"
  },
  {
    "url": "/_nuxt/889f1aeb9caf4bfd8ba2.js",
    "revision": "627115974859577e2fdf8fd3d3b2dc0a"
  },
  {
    "url": "/_nuxt/92e0d5b309eaa10604d0.js",
    "revision": "6617dae3a32a2dd4bea83f17a19316a4"
  },
  {
    "url": "/_nuxt/944ea9b8dd080a5f5ed9.js",
    "revision": "ffcf404e8431105163698f6c1b57581e"
  },
  {
    "url": "/_nuxt/9a698fd7a37ab1f7aba2.js",
    "revision": "bd6acc0b3e966b3148eba5e28f01c2ea"
  },
  {
    "url": "/_nuxt/a6a2e8eb4f19eaa77b81.js",
    "revision": "2d25c5c9bfa5447258920bbf8ee214b2"
  },
  {
    "url": "/_nuxt/a706f5aaf611a5f39f71.js",
    "revision": "eee7a70c3cef07644dc57601ca9e5d6e"
  },
  {
    "url": "/_nuxt/abf2ac57d2bae7d31e86.js",
    "revision": "e82e43d99045c4989da2129bff159951"
  },
  {
    "url": "/_nuxt/ac6ab3ac21ccedb1c952.js",
    "revision": "457ee6f2ae9a6d9c88e872f956973be1"
  },
  {
    "url": "/_nuxt/b7676d2a3b2ad8186999.js",
    "revision": "a6467e5755f6f0db223d8ecb452e010a"
  },
  {
    "url": "/_nuxt/c8cad98e7946fd2b8b0a.js",
    "revision": "0243b97c921df4887cb45f9d09756bd7"
  },
  {
    "url": "/_nuxt/d99a71c22b1e08c739c0.js",
    "revision": "17800ce9a04d80579f0147c76275d1df"
  },
  {
    "url": "/_nuxt/dd0761f965e47782d482.js",
    "revision": "cddfb68768e092a2ff4ecefa707a6926"
  },
  {
    "url": "/_nuxt/de90b1f8a4cca9d9911e.js",
    "revision": "0b0f38297880a38c5461fcb2eec3a88b"
  },
  {
    "url": "/_nuxt/e2414da0381ee94f591f.js",
    "revision": "9d22e573473da1ba031fe9306154bfeb"
  },
  {
    "url": "/_nuxt/efedb84b1902613b862d.js",
    "revision": "e95be8e2503e83c953568aa08fb1cd8f"
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

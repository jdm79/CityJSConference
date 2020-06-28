importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08c0267e21c767d3ae8d.js",
    "revision": "a5b231d47e238414e0635f9a81d8dd23"
  },
  {
    "url": "/_nuxt/08e5dbcedc75872c1d1d.js",
    "revision": "8f902007e6bb86a23697ec602b1657ca"
  },
  {
    "url": "/_nuxt/09426db4ffcddda88433.js",
    "revision": "3d9f4b99536aa0cc61d0abf7b9bb23d9"
  },
  {
    "url": "/_nuxt/0fab8a1aaa5856cd44fb.js",
    "revision": "9366899aef454b8c7922de570c69c705"
  },
  {
    "url": "/_nuxt/1760046d9b062bf02c61.js",
    "revision": "362656c0c2ce659393f212d2778bde7b"
  },
  {
    "url": "/_nuxt/1cf29567d17c9746b1a8.js",
    "revision": "f91c91a089fba444536e69537ccbd29d"
  },
  {
    "url": "/_nuxt/25fd165d7685f69d822c.js",
    "revision": "d620d1bbb109751e2f16f4368c4e69f6"
  },
  {
    "url": "/_nuxt/2af6d575adb01c47bf40.js",
    "revision": "01f46556d9fa53830d8136e4fd7599d8"
  },
  {
    "url": "/_nuxt/34a6470a68214afc8187.js",
    "revision": "a8146ae23d10c5748d2657ff7d0f073b"
  },
  {
    "url": "/_nuxt/3758143431618f29f14e.js",
    "revision": "70575ba5658a0cd2e521739f71d8b29b"
  },
  {
    "url": "/_nuxt/3ab2bce7785965b56229.js",
    "revision": "05fa0a93c913275a54bcbae1db8e4653"
  },
  {
    "url": "/_nuxt/44a7c3f26411ebd8f9d0.js",
    "revision": "9ab4c29aa7402a8fad690ee4d7d1bb36"
  },
  {
    "url": "/_nuxt/47003f4bb39a031cd2b4.js",
    "revision": "32c37e4810ad026f1027e62d122f847b"
  },
  {
    "url": "/_nuxt/5914bb939c181a64795e.js",
    "revision": "3dacb1e611ab3c58ef1802dcf4315f59"
  },
  {
    "url": "/_nuxt/5a5a56205cd6e69bc7bb.js",
    "revision": "461e057a5bbab3987d4c272943ac54f8"
  },
  {
    "url": "/_nuxt/5a8bb8e10b927c08da30.js",
    "revision": "47b114a9b3d17d1b793546598ccf98e1"
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
    "url": "/_nuxt/61ad55f6db60349904d9.js",
    "revision": "cbff46a6999d4548545430cbce50c50e"
  },
  {
    "url": "/_nuxt/63f0bdc6c62c77554d80.js",
    "revision": "df85a024c5e0a2236eb5a3cc188ab9c9"
  },
  {
    "url": "/_nuxt/6ddd4f1fb75aa53363d0.js",
    "revision": "c62b4665bef51e4664357833f5296181"
  },
  {
    "url": "/_nuxt/6e167454034bf1d4b51d.js",
    "revision": "3d48be745a9d892231907a882a8f39fd"
  },
  {
    "url": "/_nuxt/76060dfebee6092584b2.js",
    "revision": "996efc9d0ce80a8e73dda27beea73600"
  },
  {
    "url": "/_nuxt/85ba3ec870219863379a.js",
    "revision": "fed8591e319f2c949cfc03b62b9d1e46"
  },
  {
    "url": "/_nuxt/9406cac46e2d2ad107dc.js",
    "revision": "3b04140bfb1f3a51310e2e14ee76f0ab"
  },
  {
    "url": "/_nuxt/9c68ff02f27a836bc942.js",
    "revision": "72f5ff81366b49391159a28e2b2a1247"
  },
  {
    "url": "/_nuxt/a0178eaf9254f5b44680.js",
    "revision": "e28f7beaf056d326c9cdf57bd06479c3"
  },
  {
    "url": "/_nuxt/a1c4f7c11312d5525137.js",
    "revision": "42968ab26aa3a824284760536129cdcc"
  },
  {
    "url": "/_nuxt/b112bdfbe6f69dfd8748.js",
    "revision": "a7c871812f03bc2089031beb3650e938"
  },
  {
    "url": "/_nuxt/d99acae5c58e0bdcf926.js",
    "revision": "729adecbbaa30d5a2adfc0ddbe7ddd57"
  },
  {
    "url": "/_nuxt/ea59f69225fb46ee0a9e.js",
    "revision": "80d4463bed4a81c0d68c1c7f22cc959c"
  },
  {
    "url": "/_nuxt/f13edd33cb1df01c1b54.js",
    "revision": "2987fbcef6dbc4da6e2c58f8b59d5b2f"
  },
  {
    "url": "/_nuxt/f1885f3668b9ef5eccee.js",
    "revision": "6876754356f57db361615457930e3612"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/017c7bce31602f076d74.js",
    "revision": "6817066d15a51f04a565a37da5e1fbc3"
  },
  {
    "url": "/_nuxt/052f268a6bb3ea964ad1.js",
    "revision": "732e0c4000821bf76f37f7f86f85d474"
  },
  {
    "url": "/_nuxt/05a9f80167ef0a52eaf4.js",
    "revision": "bf372fd84fd08d556694b6814b5bf0de"
  },
  {
    "url": "/_nuxt/07d1a0487a7a48bceb05.js",
    "revision": "cefc4130dd0f425f0da82a0accbf5f2b"
  },
  {
    "url": "/_nuxt/151389033709970ff6c1.js",
    "revision": "d87bd189822c20f277c57a1abef3e7d1"
  },
  {
    "url": "/_nuxt/16562af860722bf31f67.js",
    "revision": "dad6e87c5aec44c171eded1478db621d"
  },
  {
    "url": "/_nuxt/1e1d35d939b8ba0465e3.js",
    "revision": "99a3780a8548935301b6e2e637a8f345"
  },
  {
    "url": "/_nuxt/2973f8eb1a1a7c13a0c0.js",
    "revision": "3458ebbc1e1146851b9db6775ffd4986"
  },
  {
    "url": "/_nuxt/3a2e8d45e53bd380a559.js",
    "revision": "11f35fb431714539b5ee24d9e0cd3c24"
  },
  {
    "url": "/_nuxt/3e82089611d5232419ff.js",
    "revision": "5a8f80904bb9b921c7fa470943f23bfb"
  },
  {
    "url": "/_nuxt/3f0bc02a09bec7d28bf2.js",
    "revision": "c63e24a1e1e8c6dc7d36d96164c44c27"
  },
  {
    "url": "/_nuxt/421369391f813b45b59c.js",
    "revision": "70ae5e6c40f0f9547b31e0ebed2234f6"
  },
  {
    "url": "/_nuxt/46f5be9e78d122a33921.js",
    "revision": "830bcd2126e3a95bd513f82c0a515110"
  },
  {
    "url": "/_nuxt/49dbff28bdae9b266ade.js",
    "revision": "98ef882e32ba087a5abf0c6df5e60680"
  },
  {
    "url": "/_nuxt/5956780ed3dbd38ac72d.js",
    "revision": "05bf54dc96cbbd1c410a98ee7d033e93"
  },
  {
    "url": "/_nuxt/629134b7e1b4e97f2396.js",
    "revision": "8957bd2c9fc678d5c544c895376c3ddf"
  },
  {
    "url": "/_nuxt/6d29cda1bfc0bd9dcb7d.js",
    "revision": "726147ed28cf5824ddb298d33ef0873f"
  },
  {
    "url": "/_nuxt/6e493ae18a421885bbdd.js",
    "revision": "2a932923910f63084f89a64802369a54"
  },
  {
    "url": "/_nuxt/7342256167bea5e3f292.js",
    "revision": "58f15653eff1a8d8da065ae813c64f06"
  },
  {
    "url": "/_nuxt/94b85025a1d6a2c49b17.js",
    "revision": "60dbf97f2f2fc0b8dfe61cefe697e96c"
  },
  {
    "url": "/_nuxt/98c144e4295cdb2105b0.js",
    "revision": "5a22d1fcfd579ac0c1a5b0c9980b9825"
  },
  {
    "url": "/_nuxt/a04973c26cbced6feb98.js",
    "revision": "d6bb6d9eedc510a80bfb553742f0646c"
  },
  {
    "url": "/_nuxt/a26bc6266a296f18d48c.js",
    "revision": "786d79038f790990aedf12db8856a999"
  },
  {
    "url": "/_nuxt/aea2ad5c3110d326d164.js",
    "revision": "51e8cd5c5ce84d486b5e94aa705e36dd"
  },
  {
    "url": "/_nuxt/bd870feffbad7c13831f.js",
    "revision": "c3327dcdf5d0f3886b75a35470bea746"
  },
  {
    "url": "/_nuxt/c2e4c7cfe6ed4dfdd3b2.js",
    "revision": "52dae47f7c3d531ff5bb356bc1b80230"
  },
  {
    "url": "/_nuxt/c4251e34515e2bb3bd42.js",
    "revision": "f8108c8b6e679acb560b481a33bbc60b"
  },
  {
    "url": "/_nuxt/ce5d8c09fb3ae00642e4.js",
    "revision": "29f61129d6fcd773187e6c8a7a7f0946"
  },
  {
    "url": "/_nuxt/de12c80847c5f439a528.js",
    "revision": "5afc464e6b2e4c6170f842897ed2b641"
  },
  {
    "url": "/_nuxt/e195d599da129e6e19a8.js",
    "revision": "f4c810247f66405679c9bb73203f2b61"
  },
  {
    "url": "/_nuxt/f40846b45ee3699d5066.js",
    "revision": "5085f5ca3d17dc049729f7389f924903"
  },
  {
    "url": "/_nuxt/ff9c05a3aaa6e4727704.js",
    "revision": "56d6d8c2ecfce51d3c6097c61c70660d"
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

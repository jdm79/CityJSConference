importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01e7cc06ba7a8e70f9e9.js",
    "revision": "40f5314ea7de565e38cab733848f92be"
  },
  {
    "url": "/_nuxt/10243dabb2b43e9b351c.js",
    "revision": "fce02cdf627a148fd56f379f7d4c7090"
  },
  {
    "url": "/_nuxt/14688094fb3bf3f242a3.js",
    "revision": "5abddafff167f748ec57058f970e51ef"
  },
  {
    "url": "/_nuxt/17de483b60b5d52c7ae1.js",
    "revision": "a9c41d81ae75a6832df8d89494481beb"
  },
  {
    "url": "/_nuxt/1d88bb655a253ee1cc84.js",
    "revision": "e1f0511c37cd71058ba67d982b14a817"
  },
  {
    "url": "/_nuxt/26513f02470ec54bec02.js",
    "revision": "5def8320a1c840904c0a303d4fa9ab94"
  },
  {
    "url": "/_nuxt/3c2080a7887f5e3f5ca4.js",
    "revision": "e29d6f2dd6c8e8998ea68dedf2539f4f"
  },
  {
    "url": "/_nuxt/3e75c9bd59ab256413ca.js",
    "revision": "d41a9700fb4820ca42782d2637fb242b"
  },
  {
    "url": "/_nuxt/3ff0be1ac0097eaa8322.js",
    "revision": "050e8d2e1be97bf3ea83b72bd1a35cab"
  },
  {
    "url": "/_nuxt/4e2197e7dc93168eef1a.js",
    "revision": "8073c17ea4e496412f692d64993b54bb"
  },
  {
    "url": "/_nuxt/551ec86571d85a3c9812.js",
    "revision": "38f1c5777a1c081421ac028fe011c79a"
  },
  {
    "url": "/_nuxt/56ea2df4b6bc7db396d8.js",
    "revision": "613f2a844174918e1d7ceda3719436e8"
  },
  {
    "url": "/_nuxt/570a94de3b36aff19aff.js",
    "revision": "ceb3884be5159961c67dc75c0375b3f1"
  },
  {
    "url": "/_nuxt/58e941cedb89f308da6d.js",
    "revision": "2153709f21da8011f389401044b2773d"
  },
  {
    "url": "/_nuxt/5ab8dd59f133c0e63337.js",
    "revision": "5ead2bc504669449ff6cd5dd24081619"
  },
  {
    "url": "/_nuxt/5f4714488cb8c4116346.js",
    "revision": "6194ceea94af7c729c342db9d25559ec"
  },
  {
    "url": "/_nuxt/62c751ef8e380b51dca0.js",
    "revision": "da3ff54ff8603c90a552e0c7a53089a6"
  },
  {
    "url": "/_nuxt/6d3403b8bf97a9e27098.js",
    "revision": "c6dfe94013f9472c35359f551182cc62"
  },
  {
    "url": "/_nuxt/74aaade0bb78208956e0.js",
    "revision": "fca2d67d58d2a9cf5610f6f9746ab65f"
  },
  {
    "url": "/_nuxt/74b8d4e8919dda96ef44.js",
    "revision": "e37a09a2398954fbfb29326d06672a95"
  },
  {
    "url": "/_nuxt/7a3927a61c7fc76218e9.js",
    "revision": "7d1fd08ceff980c46b861ed1ae0f7357"
  },
  {
    "url": "/_nuxt/7d0deb15eaec3b2e6776.js",
    "revision": "f291c1306d91fe5b70489cf1098a451c"
  },
  {
    "url": "/_nuxt/9855951437e5e2e12933.js",
    "revision": "8ae6771125fd31c9929a2a533c593546"
  },
  {
    "url": "/_nuxt/aa554ddfd9e953b437cc.js",
    "revision": "2a0138f5a2f4523055f6d2aba40a574c"
  },
  {
    "url": "/_nuxt/af852e8ed194395190f4.js",
    "revision": "54663e9be646ef3d360e313226289d31"
  },
  {
    "url": "/_nuxt/d0a002af327f160657e7.js",
    "revision": "871688efbc1c2610804043da7a51dbda"
  },
  {
    "url": "/_nuxt/d51795ea208c7bd6cbf4.js",
    "revision": "925e78827fbe7452311864fa83bf019c"
  },
  {
    "url": "/_nuxt/d5eea8df64ab1be39327.js",
    "revision": "ced412d903e71f14a451b3db37debc9b"
  },
  {
    "url": "/_nuxt/d6016b4081f6d11b6f81.js",
    "revision": "c20b6cf31b3a5198818772afa1274f23"
  },
  {
    "url": "/_nuxt/dd6faf396584314b03d9.js",
    "revision": "7841541bef1217fb349d4f44e25864ba"
  },
  {
    "url": "/_nuxt/eef4ff40bc1230d29fc5.js",
    "revision": "862465f78662d71b89a47aa6216cca57"
  },
  {
    "url": "/_nuxt/f9d0ebefe6c955a30049.js",
    "revision": "3a5cd8293e97964cf18dc963cde1590a"
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

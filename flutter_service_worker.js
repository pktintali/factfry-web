'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/img/dark-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/light-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/img/light-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/dark-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/dark-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/light-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/light-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/dark-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/style.css": "3f80d51781f907d2597898bb74841ccb",
"favicon.png": "a881651f7aa2c18d2b1bcc8d372a8345",
"assets/NOTICES": "4e8be522111eaef33485e9cf364a0874",
"assets/AssetManifest.json": "9042792e310b26d98a6ddaea2b40d2ae",
"assets/assets/images/avatar5.png": "8e08f5723279cc8bfb2e5280305b4ff9",
"assets/assets/images/avatar15.png": "660ccb6f971f7a3d321e7e728a7ae104",
"assets/assets/images/swipe_logo.png": "05234c2e421c6da8a16e013e9d199fd8",
"assets/assets/images/splash3.png": "560e5f89adb851fac9694689c5b3a102",
"assets/assets/images/avatar10.png": "f79acc4e6604f13f57d6b1d6aced7b5b",
"assets/assets/images/avatar11.png": "842d9edecb53136dc4381a4e2b4e58f6",
"assets/assets/images/avatar14.png": "e3f21314f6c2efa4e547f4a1bf5951a2",
"assets/assets/images/avatar13.png": "addfa3e187adc82b77bda878babd633e",
"assets/assets/images/avatar8.png": "5902c379af5db5411b06fe55ebd83b26",
"assets/assets/images/empty_coupons.png": "7cd26651d3bc9747809a07fb1ea2ebd5",
"assets/assets/images/avatar9.png": "b5d064d98c8f6a0c7913ee2a83332759",
"assets/assets/images/avatar4.png": "2de4675e346f82d720300337dacff237",
"assets/assets/images/avatar2.png": "6ee043ecff2494569dfb21b52c6e162c",
"assets/assets/images/faq.png": "428cd11b33c559a02e7be1b8ec6184f5",
"assets/assets/images/empty.png": "99c43d6047bb43ec8b8335de45347e6d",
"assets/assets/images/first.png": "68c80699c2f8c296101cf57d3237fd43",
"assets/assets/images/avatar6.png": "d494f6af3e87274f82a86e91a711894b",
"assets/assets/images/empty_request.png": "961705d4f86217ae8e60aabd28bf5dbd",
"assets/assets/images/avatar3.png": "85e79442e745037627b0d32adcbedcf3",
"assets/assets/images/avatar12.png": "0c46298e79e11f26c780929592407d5e",
"assets/assets/images/empty_coins.png": "dc0a489ce1ff0009685cbbd1c1f52b04",
"assets/assets/images/avatar1.png": "443109302e3dc4493529a80bd4724166",
"assets/assets/images/avatar7.png": "90a5a5ad3f018f1e265f9a76f6e3eae4",
"assets/assets/images/category_vote.png": "20237f05407ad1e8f764a7fae552e062",
"assets/assets/images/FactJano_Logo_V1.png": "01923d57e6b6ae4b4649008ff32339a3",
"assets/assets/images/report.png": "6c6cc9e9ef0556c17832ddbb726a2a2e",
"assets/assets/images/coin_group.png": "92628ebf5bfcc441fe71fb61339c60dd",
"assets/assets/images/coin_image.png": "77b8696caa4a06f72560ff0e08f77fe4",
"assets/assets/images/coin_new.png": "fe3d7ac846cfd88357de7e69937f886a",
"assets/assets/images/avatar0.png": "1051badcb1f45c197298175e3b5941f2",
"assets/assets/images/premium_icon.png": "5881a0a9769c47f29415a6910c10a2a5",
"assets/assets/images/splash4.png": "557822a45b5800e654e5e6ae3dd54fd4",
"assets/assets/images/splash2.png": "1bb6dca4dc5d8a5804994f515572fb8c",
"assets/assets/images/empty_req.png": "ad75d5102fda159cf93842bb9579120f",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"version.json": "0104aaf6c45ddfcf3ac5bad2f501881e",
"manifest.json": "185b83427f9cba1f8695c0de57119569",
"icons/Icon-192.png": "84e2edc9ff40bae0384c404dcda6aca1",
"icons/Icon-512.png": "9be03a870d3367a4729ca1347f24c867",
"icons/Icon-maskable-192.png": "84e2edc9ff40bae0384c404dcda6aca1",
"icons/Icon-maskable-512.png": "9be03a870d3367a4729ca1347f24c867",
"main.dart.js": "3c77103440e8f57530ccb8864f320b44",
".git/config": "5922894f669c8e66a2a037d1631e4e18",
".git/logs/refs/heads/main": "e9a6f8c479b152064e5720f3d5c32f2b",
".git/logs/refs/remotes/origin/main": "2ebde72cb698f56e8f8fdf3d7abfd271",
".git/logs/HEAD": "d45fd91de97458b41cf38314ccd6c752",
".git/index": "b619e5476052f6f1183699ae475327bd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/refs/heads/main": "fcb5ca8ddcbd70c93cf229bc105ef347",
".git/refs/remotes/origin/main": "fcb5ca8ddcbd70c93cf229bc105ef347",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/56/6235f040a8c41dccd68c3659ff6aa3b2d41283": "503fbbe90aef5288e9adc30d11a86f5c",
".git/objects/c0/a56d1e38126197560ca1770803ec207ee86b20": "56b71fcaf88f46da901188e8f77a074a",
".git/objects/70/3796a92b056d7bd4e0d6188bb0dd0d9a906608": "743a834b53871deda0394e44cd8f279a",
".git/objects/fb/b1de2bec342900805420b81a6bfb24357d847e": "4e312d711d397fc3be95aa24e2111fe4",
".git/objects/96/f9daf916c1e2b7320cb9d1c17b42985ad175b9": "37fa447ff8f1a9caec9382b78409cf39",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/d1/7e6d8cf4582f1c3aa2342f9e09c2430d3def6a": "8d6e961ed65fdf7a9541936b530eefc2",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/88/ce423bb5d00e936c40140996909ee51ab8122b": "feffc6f0cdda2efb1f8f80e7f0570301",
".git/objects/39/dcf160ed996d8f583d91047eaefe0dac8f0f90": "62afb12dd7480fc19a8c7ae5fe8c1ef3",
".git/objects/4e/63d55564d29dca6ca5b2b49bb4b24aeff657db": "7f8b362a9de57fa33678f6f39cf1c368",
".git/objects/46/bd1f8e30c1e09c3006a573fed5290767a89928": "ec1e398e2940fa98ca4cd926e5e37589",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/cf/b319033f3adad204b6c3661fb0bd7c4a917d5e": "d46e6ae02cd89b32e565c88673877e75",
".git/objects/cf/78a5afeaa563e3d2715eb4acfcfefa185d2280": "0db15164a67b2c99b40913068ea12fa2",
".git/objects/f9/5641f2b7554715ef558efac80f37eb1390c4b4": "d69422660850073f06aa62bd992593ff",
".git/objects/67/90b1a9fc13af9c33a958319f45240bff413fd9": "4c7e242e14f82bc99a49885b66c9a4ba",
".git/objects/0e/e9df5d77ea85777265d9ffa420964e1c4239bc": "ab812a90592703b6f1c86ae54574216a",
".git/objects/e8/3270ea38bc3e38da8765faf53eccb211cd61f6": "d1fee3b22a4d6ac637c6506e76642a2b",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/b8/0cf3584c4fb05929274bb21144cdac3173c622": "996b1d7fc35ef5f0587276b09f9f22d4",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/6f/f5bee864b3089f107a3ec75cbce806be2c4089": "c13311aea4328210e6b61c27180681e9",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/142820922ecc79713c8713c4b70ece40f3eacb": "f7b8f5fd086082ca356c00571f736541",
".git/objects/53/d096e81fe1686916596c2473d89ca2ffd9fced": "d3236697764e57f449a40240a96a6a0c",
".git/objects/00/b05151ed5249e39408fbb8bd36137433a04e22": "d8c1ec4b0534593f2b5a7e0b328ec131",
".git/objects/3b/a8a3c5c67d70a2df64e925affae50e3dd39253": "57ccc6b7febfb9d1661131b8645c3833",
".git/objects/a3/62ed631e6e05b0d45833efbfe38322e19ab9b3": "7b8daa4f6c238ad927f3a5f64c0dc207",
".git/objects/95/0cbd5d1d6db049ff2201f57eb91e0ed679a6fd": "ea19c0cb05a7028e96beb393e0ff1ed3",
".git/objects/a4/7ad7aae229e1f5f81053f4d82bd81be9e87ea9": "ef411c962281b9e65feaecb857a0a697",
".git/objects/a4/aed8f78f5b5e233c0ce1dcf9f16e4f99261c44": "e8c425936723647c44b60d1defdad40e",
".git/objects/27/23615f6b61124a846cb72400322c6cb898cd1c": "31bff7c7a91923f58b57736723028a94",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/54/a6b9d8ae598faafd1451b041da9769094ef35c": "cda82d1722b5e135fbcc9b292eb72cda",
".git/objects/54/55bb6c4deed7486fa689a72811784f5ec2b41a": "e357bc7cb72128e8b0b1adb03ef748f4",
".git/objects/f8/0e3915187dd7ee887e9a64227e8e8b2925bdac": "1ac3ed9f9ecd8c9f41db72838f59f66b",
".git/objects/f8/278cfcad7b2113508bedeae939dde2a6b9ca3f": "75e0395403a94dd173c9e19bf2176642",
".git/objects/a6/1b926e06dabc623c5f55d4a808b494d9a2028c": "63e9d82da7adf1bd81f79362031f46ff",
".git/objects/d8/aad40a2eaa8a0e82244649e820ec410e0c8bd9": "b7d72b64b61ac1c2285b15d195f467fe",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/9e/c81c3d43051283b6e65387ebc5a9003fdfac94": "c5b1aca0eb522c7e81aa288681bbab2f",
".git/objects/77/48203ad89c7bd0aa619bf61ff6e03f112c3de4": "571f968f20d67add30e8ca1004d1e66e",
".git/objects/40/c6c3d1edde95d9787feae71b49cce02b55fe86": "12f584942a2d9028e429dcc7c407ee7a",
".git/objects/pack/pack-799867649d8135b49419767685ca08abb9a68175.idx": "99feb1120f99c06af5cc62adeb0f7e0c",
".git/objects/pack/pack-799867649d8135b49419767685ca08abb9a68175.pack": "6c7e2f0bfb0439af0c58ac081a2f1400",
".git/objects/f3/29a0e895d6b96ebc13543917e15bcd8e02d1f2": "de5691681b97f324123b48a42b4ce212",
".git/objects/fd/7cb932411a398fc488abd7ae38328efe36184c": "985a8a894f9f16e8c1aca19cdcae936c",
".git/objects/d0/86083c62dbb3fa3435577e8216720faa5edeb8": "d782534a970fe83889ff395c41ebd81a",
".git/objects/2e/6c1c3c1b610e3eced099b45f2b5282b2b6f172": "e42c3888e92b62739e7fb49b7139ecb4",
".git/objects/09/a34f59b7b046c6be8f247434833e9dbe5e9ea1": "692720a94334a689e1ffd037b0414543",
".git/objects/93/f0f29f87464523c9ec9d6461fcd5d320dc3e15": "e17310cab9b1b9d0c91e7af8a16519d7",
".git/objects/93/31dbaa5caef11fa5ac6b924b6b12b3bb7a2c3e": "191305581a2bf48c8bec645c270c8a81",
".git/objects/db/67d14930b76642d5a60dbe0e7ff08a5260cce5": "063c585c8706e23cc3b8a945d442e3f7",
".git/objects/1b/123609ac84dda71f6027aaf628804a2efb5bc8": "a579bae4dd649db8329723d0a87d98bb",
".git/objects/68/891630bdf32b1e108b6625bff361858bb12591": "6f32769e56c4023b00a5a4025ca64bec",
".git/objects/33/4f3602f3dd9c49dbd0fa87a45505500f8ea3a9": "dd69de4ad0fa642b304b175c316b752a",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/45/de5b3829a9448e3af76569619b4e3dc04be15b": "dd31d9cf9b8eeae1801bba54a7b251a9",
".git/objects/45/23f1622dd56269964067e068dc77f5802d8c63": "32652ea4741d8dc3f749b2010fab63e1",
".git/objects/3a/b3918b4685a0b546616d765e33e073ccec5900": "1c876cadb75b025e664e407eb0c975f8",
".git/objects/b3/07b12da6e3b4bf7f071bc4238a512189de180c": "2daea03fac1e2cc935fb1f648df69b30",
".git/objects/75/2ddf3c3bbecddb9f7c3f9a29a7f8fbbc3be349": "20a44524e5b85e9971c3e2a482648b2e",
".git/objects/6d/7b434f567be5fb03bb514602d55231bf1a12d2": "3b2de91082f10c071dcce87bd896c72b",
".git/objects/0c/fb1c78e793ef1ca2c6ebcab9b74b9196f4828d": "72f8c613e4d9ed9174e276ad17443d20",
".git/objects/34/398dc61a68c982488d2f888be846a6665a7a8e": "9936cdb538d0fe05c1e8112adac90d4a",
".git/objects/5b/6179823f470eb84a0c60766516e025b06269ae": "4a8df141a89e725da9c3adb8053767eb",
".git/objects/5b/fd5d7f717a13155330579e843a8eeed37d8b3a": "402d3f01a2fb3f45be66a42c126bcece",
".git/objects/3d/008e0aac75b49ffef2fe6e2e11e753aa85c004": "bf73ff9d1f84615bbe8f6ea0cbee5197",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/08/a6099d6bba8d7250a158d30c5c7bcf555c1c96": "dd7a0de1f9f699dcba748b76b1172e79",
".git/objects/84/81b82bbf8f11044f151d53dbe4ce1ae2820e74": "8ab452d9f9719d61b6c0e8b081b49c29",
".git/objects/a5/81b3c53c955f8dacdfd28f2d7d4f3ec7253454": "873183a4ac4d193689910f5ed792485d",
".git/objects/b7/56081a0fdb4f6fef45ccea48512d8c9d8fc753": "01f0991f2410669a5b7cf538c9576fb3",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/05/d3ff84b6475baea9dcf400b2490c68fd9d93e9": "84e44499c8a84ef14649d405d1262abc",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/0b/4b902f57d31074e3b68409c6d26d9e474ff5a4": "146cb1261e64d6d790e43e16efadfd59",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/8b/466cb4f008da792b1bb0a1021b4f451ed18f75": "1efaa00e90225bfc3402bf3427e269b5",
".git/objects/85/c69a6bf9df70c6d743f5f504d813c6f6a6b9b4": "90553b3f1dbd11745a9172cc2afeb613",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/07/fd1d94186c723c715b38d9bf0649fe5f41392d": "90596b815c757a6620c769aff223225a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/8a/02052b0399b557dc3958aab373be840380a8b8": "ffe1490b65174247e84f5aa42a8f014b",
".git/objects/7e/e147baa8ec24d558c65b59bdfb97847239b202": "16b05179a41462657d7eaaec7078e15f",
".git/objects/97/98a5a0fa642c22284d7bd35f537606d40db65b": "f9d84186752bf1d8e42a5561e3ce86b1",
".git/objects/63/5c22cbeb6daf9bc4350378a0ca0af94223f793": "a7e1ff31b6897e1b6745faba85fc27e8",
".git/objects/3f/85a099cf7fac35d18dd551561519a05831cf1c": "bf84bf84034a9f74931ed5ea733f9a8e",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/29f76f532fcf5949b1ce2953fed5a20b0d9045": "f4d6d058a2f4ace8da06e1e577368480",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/0a908bdf3941dc66caa2b0d605c027bfb76736": "45e30aea3130c4a7cd5204ea8bce2634",
".git/COMMIT_EDITMSG": "001ff81386427ae7431bed2ab1b4650f",
".git/ORIG_HEAD": "fe15176ef21bec2813327fcc9dfb475e",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "b853b77937426a5ed669bc81b528e48d",
"/": "b853b77937426a5ed669bc81b528e48d",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a5d6db58b1a8d9c4ac34fcf4c15d8e6c",
"splash/img/light-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/img/dark-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/light-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/dark-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/light-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/dark-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/img/dark-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/light-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "3f80d51781f907d2597898bb74841ccb",
"index.html": "1b7504347244ab0bbc2f59a73ab7d3fc",
"/": "1b7504347244ab0bbc2f59a73ab7d3fc",
"main.dart.js": "d330bb44c0981475ad53f28d61e31a68",
".well-known/assetlinks.json": "851651ca09b5b747fd9ff2d8b1015352",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "a881651f7aa2c18d2b1bcc8d372a8345",
"icons/Icon-192.png": "84e2edc9ff40bae0384c404dcda6aca1",
"icons/Icon-maskable-192.png": "84e2edc9ff40bae0384c404dcda6aca1",
"icons/Icon-maskable-512.png": "9be03a870d3367a4729ca1347f24c867",
"icons/Icon-512.png": "9be03a870d3367a4729ca1347f24c867",
"manifest.json": "185b83427f9cba1f8695c0de57119569",
".git/config": "eb3631549cefe6aa480fef855de8ea8d",
".git/objects/61/aa463d30189811cd461be3e71b475ca0de4f2b": "83e56cf572cb57d6dcaaa6a4474fa813",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0c/fb1c78e793ef1ca2c6ebcab9b74b9196f4828d": "72f8c613e4d9ed9174e276ad17443d20",
".git/objects/57/8be68a1ab5de71c234aa1ced5667694eb884cf": "e7758a23e8886600d54b94094d7fd206",
".git/objects/9e/faae2e57e0de31ed5563c1b87413ccfbf6ad2d": "fc4590675482e3e21a24abbe8f89098a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/caa27004f0c7f9ef0c7342a08295f35edc8fe3": "853ebe6bbb910c9be71f3b2a9d270c14",
".git/objects/56/6235f040a8c41dccd68c3659ff6aa3b2d41283": "503fbbe90aef5288e9adc30d11a86f5c",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/3d/008e0aac75b49ffef2fe6e2e11e753aa85c004": "bf73ff9d1f84615bbe8f6ea0cbee5197",
".git/objects/67/90b1a9fc13af9c33a958319f45240bff413fd9": "4c7e242e14f82bc99a49885b66c9a4ba",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/93/31dbaa5caef11fa5ac6b924b6b12b3bb7a2c3e": "191305581a2bf48c8bec645c270c8a81",
".git/objects/5a/89485326790d4dec394d1f5fec5ea55058aa6a": "c68d7249c6ba821a07593130042d9a94",
".git/objects/33/4f3602f3dd9c49dbd0fa87a45505500f8ea3a9": "dd69de4ad0fa642b304b175c316b752a",
".git/objects/05/d3ff84b6475baea9dcf400b2490c68fd9d93e9": "84e44499c8a84ef14649d405d1262abc",
".git/objects/a4/7ad7aae229e1f5f81053f4d82bd81be9e87ea9": "ef411c962281b9e65feaecb857a0a697",
".git/objects/a3/62ed631e6e05b0d45833efbfe38322e19ab9b3": "7b8daa4f6c238ad927f3a5f64c0dc207",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b2/b22edefcf61699423cd08953da9fe6b4b40a34": "6dbf6b2685455159c02d3348d8d8e0d8",
".git/objects/d9/98e2a9d6c99c857e3cf22552bdf97ac97783fc": "186f4972bd06b7702691259242d94817",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/7eba4fdd7c41961b6638c89ea62cfdf01d8fd9": "0e33a10e4292620b15f3061631cd2f24",
".git/objects/d0/86083c62dbb3fa3435577e8216720faa5edeb8": "d782534a970fe83889ff395c41ebd81a",
".git/objects/a5/81b3c53c955f8dacdfd28f2d7d4f3ec7253454": "873183a4ac4d193689910f5ed792485d",
".git/objects/f3/29a0e895d6b96ebc13543917e15bcd8e02d1f2": "de5691681b97f324123b48a42b4ce212",
".git/objects/c7/151c39473848c1e4445bbc07e84c0a205cdd79": "8cdd8ec4952597c1a8c7a1e04b092d28",
".git/objects/c0/a56d1e38126197560ca1770803ec207ee86b20": "56b71fcaf88f46da901188e8f77a074a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/7cb932411a398fc488abd7ae38328efe36184c": "985a8a894f9f16e8c1aca19cdcae936c",
".git/objects/cf/b319033f3adad204b6c3661fb0bd7c4a917d5e": "d46e6ae02cd89b32e565c88673877e75",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/fb/b1de2bec342900805420b81a6bfb24357d847e": "4e312d711d397fc3be95aa24e2111fe4",
".git/objects/4e/63d55564d29dca6ca5b2b49bb4b24aeff657db": "7f8b362a9de57fa33678f6f39cf1c368",
".git/objects/27/23615f6b61124a846cb72400322c6cb898cd1c": "31bff7c7a91923f58b57736723028a94",
".git/objects/89/0f5fe3b2ce5c2e2d0875a033b17c7095abf600": "4ecff27b72984fce884499a1dbe2c394",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/45/23f1622dd56269964067e068dc77f5802d8c63": "32652ea4741d8dc3f749b2010fab63e1",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/8a/02052b0399b557dc3958aab373be840380a8b8": "ffe1490b65174247e84f5aa42a8f014b",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/ce423bb5d00e936c40140996909ee51ab8122b": "feffc6f0cdda2efb1f8f80e7f0570301",
".git/objects/07/fd1d94186c723c715b38d9bf0649fe5f41392d": "90596b815c757a6620c769aff223225a",
".git/objects/38/b75b3d2a7e18840849aa607073daeb173fb610": "d4be1f122d34254abf9f9957d01487f6",
".git/objects/9a/e824c012e79831d1f420f683abdc59f7e4489f": "bfa88f619f18f372035dbc5eba2f5b11",
".git/objects/5c/3ab107cd58db6512187fb8f90e4a2886c83c5a": "c4060b80fe7356d963b53f6ec570c866",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/65/e6c66521ac1c1e5b725c05ac4ce9f9e28d492a": "9b0284ac3ba63284fd917ffe7f466549",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/96/f9daf916c1e2b7320cb9d1c17b42985ad175b9": "37fa447ff8f1a9caec9382b78409cf39",
".git/objects/3a/b3918b4685a0b546616d765e33e073ccec5900": "1c876cadb75b025e664e407eb0c975f8",
".git/objects/3a/0cfa45f296bd9de0622b277cccc561f847ee5f": "5e01dc658c216516a54a04878ae435d8",
".git/objects/54/a6b9d8ae598faafd1451b041da9769094ef35c": "cda82d1722b5e135fbcc9b292eb72cda",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/e4c6097d33243c0e55e331c8c99fa7860bd668": "16cd51c99bdd910b1ce5ebe1ee547e3c",
".git/objects/30/eaf779643c785652a8f1f1da82f36c7fc9ead8": "23df7f19507888578dfac359c66390cc",
".git/objects/5e/0d82c3be531a30628c1dbc5e27d476749762c3": "d648450b95a3c2bbb953d2465c5edc2e",
".git/objects/5e/572728cb5663683ad2b360f9570cc5cb01b451": "31cd2cb998fb6c2d5955b84f16e706eb",
".git/objects/5b/6179823f470eb84a0c60766516e025b06269ae": "4a8df141a89e725da9c3adb8053767eb",
".git/objects/01/0faa524f12ba4e94ec3a1353401110057c9dfc": "89ee75898050905d0e471d4b547a2ec6",
".git/objects/39/dcf160ed996d8f583d91047eaefe0dac8f0f90": "62afb12dd7480fc19a8c7ae5fe8c1ef3",
".git/objects/97/98a5a0fa642c22284d7bd35f537606d40db65b": "f9d84186752bf1d8e42a5561e3ce86b1",
".git/objects/63/5c22cbeb6daf9bc4350378a0ca0af94223f793": "a7e1ff31b6897e1b6745faba85fc27e8",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b1/11692e90e44ffc8e09f71d618910e135858eb8": "7bc61611e7786d916cb0a982f671165b",
".git/objects/dd/e4910f90d233d7383ec14fe4b7310f97c62c57": "d03c07bc00d191903f57aa033178b2c1",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dc/74d7720b28e1fdfe821739b661b896ed95d272": "daedf8a77fca840fb64bf9778ae71b05",
".git/objects/d5/30e3cff6e325e10908cb590751ac0ccd353a32": "a065f73b123a065e6fa517a397ade92b",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/8d89152f94706e7d82028ac0aed09c34a312a8": "b78a2117f61a9608d58a9c2b5902f367",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/21c8a203a17aa4be43960aee091c2a9c23bb39": "7b19c90ff731f022b1b5bd7778c0db37",
".git/objects/c3/6ecf720f9d867fd924932f25b7b57c0f7ee508": "2c2ace9f269800e90108e759a7b95401",
".git/objects/c4/c6c56721e5ad031aa6bd92cf412c1414f69fd8": "146e0be355c421f0da9d67820c64db38",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/ab754dbaf68caff3cb711ad9fc465fe7caa353": "9a8f9fbb2cb9c7c3a1c47e04e68ae121",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/f8/eb9eb1f44ae3813fa4c43e5af00c34e60803e5": "492b0a950feb48229dc3bd00def44d4d",
".git/objects/f8/278cfcad7b2113508bedeae939dde2a6b9ca3f": "75e0395403a94dd173c9e19bf2176642",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/bc031e093271eb2d6386e480d1aec3f7fc55ae": "e810e3d4bf16f087a4cfa8099359b345",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bd1f8e30c1e09c3006a573fed5290767a89928": "ec1e398e2940fa98ca4cd926e5e37589",
".git/objects/41/142820922ecc79713c8713c4b70ece40f3eacb": "f7b8f5fd086082ca356c00571f736541",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/23/fcf9e63ba345a1eed94ac2c013189457013035": "9ba1febfc0b312642e17fa70bd2cc487",
".git/objects/76/f8ba4d840ec8a1e8e3919a0af6da828550fa7b": "2dc6ef18bf808f2d1f3ced2b755ea368",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/29f76f532fcf5949b1ce2953fed5a20b0d9045": "f4d6d058a2f4ace8da06e1e577368480",
".git/objects/8b/466cb4f008da792b1bb0a1021b4f451ed18f75": "1efaa00e90225bfc3402bf3427e269b5",
".git/objects/7a/245e75b62148a8cc1de8bcb628cbdc1c1172be": "fd42ac3d3cac7cbcc10293111b7f0268",
".git/objects/14/217f8bcea1bc8704cbc6ad47738e10e0ddbfc3": "cace77053256e5553d2bd6c05822bc95",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8a132cdce3630cbfa31931d0c09961d",
".git/logs/refs/heads/main": "add98c58780d4764887ae5d9c2a503e9",
".git/logs/refs/remotes/origin/main": "aa33eba3bbd4e90508b1e07d7173c6dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "14be2dde6c377282fd9f26230228a1c1",
".git/refs/remotes/origin/main": "14be2dde6c377282fd9f26230228a1c1",
".git/index": "ccee83cf7a09bb23c10d22c90ae5d60b",
".git/COMMIT_EDITMSG": "9fe6769f2c2d062a328f4d5f20928bfe",
"assets/AssetManifest.json": "05021dbff93a51f30baeba0a3cacac97",
"assets/NOTICES": "3549fad26f7edffb1a2080c7ae896aaf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "74a1e5433cc716f0ef3a93ac35fa4bf1",
"assets/fonts/MaterialIcons-Regular.otf": "49f62e11f6c9beff7aaaed4f7b37a1d6",
"assets/assets/images/coin_new.png": "fe3d7ac846cfd88357de7e69937f886a",
"assets/assets/images/category_vote.png": "20237f05407ad1e8f764a7fae552e062",
"assets/assets/images/coin_group.png": "92628ebf5bfcc441fe71fb61339c60dd",
"assets/assets/images/factjano_logo.png": "94a9eb9c7f0e225ddb19d1f3140c72c0",
"assets/assets/images/premium_icon.png": "5881a0a9769c47f29415a6910c10a2a5",
"assets/assets/images/splash3.png": "560e5f89adb851fac9694689c5b3a102",
"assets/assets/images/coin_image.png": "77b8696caa4a06f72560ff0e08f77fe4",
"assets/assets/images/splash2.png": "1d4d8ceae7aecb5ed73a7758c7d44eef",
"assets/assets/images/splash4.png": "557822a45b5800e654e5e6ae3dd54fd4",
"assets/assets/images/play_store.png": "81093610a160faffb417272f9e89d803",
"assets/assets/images/faq.png": "428cd11b33c559a02e7be1b8ec6184f5",
"assets/assets/images/avatars/avatar9.png": "842d9edecb53136dc4381a4e2b4e58f6",
"assets/assets/images/avatars/avatar18.png": "9d82d60ef44a0bbf05c6e10eff34ad0d",
"assets/assets/images/avatars/avatar8.png": "f79acc4e6604f13f57d6b1d6aced7b5b",
"assets/assets/images/avatars/avatar5.png": "90a5a5ad3f018f1e265f9a76f6e3eae4",
"assets/assets/images/avatars/avatar15.png": "953d03e935439f400bd46a13757209ca",
"assets/assets/images/avatars/avatar14.png": "dc1bcece73dedab8467fc1a6e272ec35",
"assets/assets/images/avatars/avatar4.png": "d494f6af3e87274f82a86e91a711894b",
"assets/assets/images/avatars/avatar6.png": "5902c379af5db5411b06fe55ebd83b26",
"assets/assets/images/avatars/avatar16.png": "46e22bfe740087db5d96dab7844baef4",
"assets/assets/images/avatars/avatar17.png": "a975934bb378afc4ca8c133df451f56e",
"assets/assets/images/avatars/avatar7.png": "b5d064d98c8f6a0c7913ee2a83332759",
"assets/assets/images/avatars/avatar3.png": "85e79442e745037627b0d32adcbedcf3",
"assets/assets/images/avatars/avatar13.png": "ebc95a700450f92212d6721647d1db60",
"assets/assets/images/avatars/avatar12.png": "660ccb6f971f7a3d321e7e728a7ae104",
"assets/assets/images/avatars/avatar2.png": "6ee043ecff2494569dfb21b52c6e162c",
"assets/assets/images/avatars/avatar0.png": "1051badcb1f45c197298175e3b5941f2",
"assets/assets/images/avatars/avatar10.png": "0c46298e79e11f26c780929592407d5e",
"assets/assets/images/avatars/avatar11.png": "addfa3e187adc82b77bda878babd633e",
"assets/assets/images/avatars/avatar1.png": "443109302e3dc4493529a80bd4724166",
"assets/assets/images/report.png": "6c6cc9e9ef0556c17832ddbb726a2a2e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

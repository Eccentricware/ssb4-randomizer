"use strict";var precacheConfig=[["/ssb4-randomizer/index.html","e8335db3bd63ff9d525dfd2ba97fc680"],["/ssb4-randomizer/static/css/main.ec30be75.css","a800d9808e716eb43cf828a74535dffe"],["/ssb4-randomizer/static/js/main.b76bf4bd.js","ead310a258b4d2ada2927a2cd83f5bd6"],["/ssb4-randomizer/static/media/Bayonetta.6d821faa.png","6d821faa11d12c23b038ed44525b884b"],["/ssb4-randomizer/static/media/Bowser.4008f988.png","4008f9883830a093b3937bf909cc92c3"],["/ssb4-randomizer/static/media/BowserJr.bd0be5e8.png","bd0be5e8376c81decfa7680529562e1f"],["/ssb4-randomizer/static/media/CaptainFalcon.4552ec37.png","4552ec3786599c332f3acc54df66592f"],["/ssb4-randomizer/static/media/Charizard.b681d073.png","b681d0737fd14cfe56927a8fc434b1f3"],["/ssb4-randomizer/static/media/Cloud.5f8d69b5.png","5f8d69b53d0ae6c2415243e9fb33b4a6"],["/ssb4-randomizer/static/media/Corrin.7dfec19e.png","7dfec19e5a916f2d4b516338e3abd6b6"],["/ssb4-randomizer/static/media/Daciex.722ddd00.png","722ddd00d8d0b9301bbd8a7a3bc5bc71"],["/ssb4-randomizer/static/media/DarkPit.1cc19155.png","1cc19155b05077816fe1d003869fd74c"],["/ssb4-randomizer/static/media/DiddyKong.3f2da705.png","3f2da705c2081e11945a9baea8885e8e"],["/ssb4-randomizer/static/media/DonkeyKong.0482999c.png","0482999cbb0e67bce7a25e57c9589e8a"],["/ssb4-randomizer/static/media/DrMario.ddd70f51.png","ddd70f5131e9620a1a64979c9a278ae7"],["/ssb4-randomizer/static/media/DuckHunt.73a0187b.png","73a0187b1418626aa3543cd2d1994d4f"],["/ssb4-randomizer/static/media/Falco.8c545074.png","8c54507403a7fc51916a9cdb29e86e7d"],["/ssb4-randomizer/static/media/Fox.d777775c.png","d777775cbd07cee445f33159ec3de5d7"],["/ssb4-randomizer/static/media/Ganondorf.cfdd90ec.png","cfdd90ecb5b5beb21e452cd282318772"],["/ssb4-randomizer/static/media/Greninja.5c767f93.png","5c767f930f2ff313a3424daaa078dccf"],["/ssb4-randomizer/static/media/Ike.0a53be34.png","0a53be34361308555836b41739ca2eaa"],["/ssb4-randomizer/static/media/Jigglypuff.dcd025bb.png","dcd025bbb0463fad70fd0defc5d8e9ae"],["/ssb4-randomizer/static/media/KingDedede.022b8383.png","022b8383018a4ae6b4c336a5bc153502"],["/ssb4-randomizer/static/media/Kirby.0012d3a1.png","0012d3a1674c15c542ea2f39e0c2ef6b"],["/ssb4-randomizer/static/media/Link.20f50cba.png","20f50cba33e7e7c0b2451b973a0e0e43"],["/ssb4-randomizer/static/media/LittleMac.2f39d4e1.png","2f39d4e14115d58e9b14e839bdbfd97f"],["/ssb4-randomizer/static/media/Lucario.9497dbd4.png","9497dbd46c8a8629d5f8ca08be70aca7"],["/ssb4-randomizer/static/media/Lucas.c0749151.png","c07491516e42288334f77e1f4cbf1a58"],["/ssb4-randomizer/static/media/Lucina.1600088c.png","1600088c4046660a34c96ff592da67b4"],["/ssb4-randomizer/static/media/Luigi.0f37b641.png","0f37b641701fa970d15e589863644424"],["/ssb4-randomizer/static/media/Mario.3607708f.png","3607708f1844e93d870966320aaa2512"],["/ssb4-randomizer/static/media/Marth.925a426e.png","925a426ed4df80335679f25d8d591eff"],["/ssb4-randomizer/static/media/MegaMan.a76e53dc.png","a76e53dc2853ca3fb75e99f9539620e1"],["/ssb4-randomizer/static/media/MetaKnight.68f5c58e.png","68f5c58ecd8eb01ad54729b9578e78cd"],["/ssb4-randomizer/static/media/MewTwo.461b9f15.png","461b9f15a63e9a0005351e41e92e8c8a"],["/ssb4-randomizer/static/media/MrGameAndWatch.a8d4824b.png","a8d4824b1ed2fa1d2531d936a68c44c7"],["/ssb4-randomizer/static/media/Ness.0b014c4e.png","0b014c4e129bd62558b56be5c3284f06"],["/ssb4-randomizer/static/media/Olimar.937aa090.png","937aa090df7365fa64d58ee963974871"],["/ssb4-randomizer/static/media/PacMan.7fc45b6d.png","7fc45b6d17a6305a316950430aaa1639"],["/ssb4-randomizer/static/media/Palutena.0540b015.png","0540b0153b7b39c67c303dbce1a36e25"],["/ssb4-randomizer/static/media/Peach.aae4895e.png","aae4895e37a91555ea07cd1a000ff345"],["/ssb4-randomizer/static/media/Pikachu.374472f2.png","374472f2bd373c327d5a97ae777e9114"],["/ssb4-randomizer/static/media/Pit.fa917b06.png","fa917b0636cfbb9b0428e39e6c5acc13"],["/ssb4-randomizer/static/media/Qezox.ce7bd9bf.png","ce7bd9bfa6c0e9e194704dabeee463f6"],["/ssb4-randomizer/static/media/ROB.88983288.png","8898328855df2dbc71791ad48270a84b"],["/ssb4-randomizer/static/media/RandomButton.b51c6396.png","b51c63965edc2c2996c841d6a563cd27"],["/ssb4-randomizer/static/media/Rosalina.eb7ed2cc.png","eb7ed2cccbc3381841f761b21c136c5d"],["/ssb4-randomizer/static/media/Roy.1f3f96ec.png","1f3f96eca0c2fb7c75946b971ece0b08"],["/ssb4-randomizer/static/media/Ryu.bd53bea5.png","bd53bea52c528337ad59b9460502b36f"],["/ssb4-randomizer/static/media/Samus.5a5fe838.png","5a5fe83865900b0d95a4ea2ce5fe4d98"],["/ssb4-randomizer/static/media/Sheik.92958384.png","92958384f61b985534bc5ca96715a7f7"],["/ssb4-randomizer/static/media/Shulk.a63bb30d.png","a63bb30d757ec12461805d587d1e709f"],["/ssb4-randomizer/static/media/Sonic.23176909.png","23176909d18439b0e0cb33602556945b"],["/ssb4-randomizer/static/media/Tactician.de51c1a4.png","de51c1a4ecf9d16205392c27707cba56"],["/ssb4-randomizer/static/media/ToonLink.f2d71dec.png","f2d71decb79bc980cb13f2edec396a56"],["/ssb4-randomizer/static/media/Villager.d444eba5.png","d444eba50cac0cd5f13e959db2ed753f"],["/ssb4-randomizer/static/media/Wario.6e3712d2.png","6e3712d27a65dabfdb0a1b6f4fe5db8e"],["/ssb4-randomizer/static/media/WiiFitTrainer.d81f28e0.png","d81f28e07de126881fae2a6b0b788402"],["/ssb4-randomizer/static/media/Yoshi.f06e296e.png","f06e296e6a7e261d5c9fc4e6df66b6e9"],["/ssb4-randomizer/static/media/ZSS.4a3283c3.png","4a3283c362f8e496ab6d103a510c97a4"],["/ssb4-randomizer/static/media/Zelda.d199bc1e.png","d199bc1e6af9245d8e85252bb7e11429"],["/ssb4-randomizer/static/media/Zeldark.90e6d5ed.png","90e6d5eddbe02c425de275b9de88814c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var d=new URL(e);return"/"===d.pathname.slice(-1)&&(d.pathname+=a),d.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,d,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(d)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var d=new URL(a).pathname;return e.some(function(e){return d.match(e)})},stripIgnoredUrlParameters=function(e,d){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return d.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],d=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,d,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(d){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!d.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var d=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!d.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,d=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(d))||(d=addDirectoryIndex(d,n),e=urlsToCacheKeys.has(d));var c="/ssb4-randomizer/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(d=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(d)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(d)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,o,n)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+i.slice(1)};return Promise.all(o.map((i=>{switch(i){case"exports":return s;case"module":return r;default:return e(i)}}))).then((e=>{const i=n(...e);return s.default||(s.default=i),s}))})))}}define("./sw.js",["./workbox-b710a8b6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dependencies/volodymyrkushnir.com/assets/documents/introduction-letter-to-binary-studio/assets/photos/1244180_457131501071734_1731017764_o.jpg",revision:"e54ff1f81e90b5c8b6caff626cef069b"},{url:"dependencies/volodymyrkushnir.com/assets/documents/introduction-letter-to-binary-studio/assets/stylesheets/base.css",revision:"f2b4617192b349f7eb2a99c9adf8a77d"},{url:"dependencies/volodymyrkushnir.com/assets/documents/introduction-letter-to-binary-studio/index.html",revision:"b934b014e671cc9afe5d791617a88e56"},{url:"dependencies/volodymyrkushnir.com/assets/images/apple-touch-icon.png",revision:"a5f8d5f4a667e65f0c6243c4c16a44b2"},{url:"dependencies/volodymyrkushnir.com/assets/images/avatar-2012.svg",revision:"1aab0b170c4022b1a8c6b7d08be469d9"},{url:"dependencies/volodymyrkushnir.com/assets/images/avatar.svg",revision:"435264b2a9656d605e7610233e52ac05"},{url:"dependencies/volodymyrkushnir.com/assets/images/favicon-192x192.png",revision:"45b49bb32f0901378111d5b7202dc398"},{url:"dependencies/volodymyrkushnir.com/assets/images/favicon-512x512.png",revision:"6d215c3bf0671ac70a8bb01b49ce9a8d"},{url:"dependencies/volodymyrkushnir.com/assets/images/favicon.ico",revision:"c843fb2c0998062b21cf5bd7b9b202e1"},{url:"dependencies/volodymyrkushnir.com/assets/images/og-image.en_US.png",revision:"6f8b2700f912db67395296e9d454a3e6"},{url:"dependencies/volodymyrkushnir.com/assets/images/og-image.ru_RU.png",revision:"5709789673768eb36d1f542eb1abdc4a"},{url:"dependencies/volodymyrkushnir.com/assets/images/og-image.uk_UA.png",revision:"8c3dc1b47fec793eff21f28d0fa32509"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir-2012.jpg",revision:"5e9cde0c38fdd2f1c95f36dbf2a14557"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir-square.jpg",revision:"f1d43fb4e8d7436d909b6fd61d2bcd85"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir-square.png",revision:"6af613f4c199b523be00b6cb433fd5d4"},{url:"dependencies/volodymyrkushnir.com/assets/images/volodymyr.kushnir.jpg",revision:"7cb744ce232603c293c5cc75279697e7"},{url:"dependencies/volodymyrkushnir.com/assets/photos/323856_148624698589084_1191150964_o.jpg",revision:"23205ffa1a41b16a0b12357ba4513e19"},{url:"dependencies/volodymyrkushnir.com/assets/photos/323868_148639808587573_1648505013_o.jpg",revision:"54ebc728f45f2645a32adc022c9bffbb"},{url:"dependencies/volodymyrkushnir.com/assets/photos/324164_148624265255794_446501669_o.jpg",revision:"9c10847e25fe04bb4481836c0bab5986"},{url:"dependencies/volodymyrkushnir.com/assets/photos/327086_148624111922476_1330178874_o.jpg",revision:"da8237b2d9167f0f5836275e2dc4549b"},{url:"dependencies/volodymyrkushnir.com/assets/photos/329642_148624421922445_2060074436_o.jpg",revision:"4db750c0098bea4b9393d8934fcff31d"},{url:"dependencies/volodymyrkushnir.com/assets/photos/331152_148624551922432_1869335234_o.jpg",revision:"3793bb9bb89b62bb62a7db1d079a1d8c"},{url:"dependencies/volodymyrkushnir.com/assets/photos/412746_158114720973415_949035392_o.jpg",revision:"5e1f873f1420195e58be4cc61f963845"},{url:"dependencies/volodymyrkushnir.com/assets/photos/42189774_10155495472086262_2455691218420498432_n.jpg",revision:"334b9c683753e841f693f608c1613ca3"},{url:"dependencies/volodymyrkushnir.com/assets/photos/461737_173999722718248_1691527332_o.jpg",revision:"10c3d6ec0f27df301a9493c979e1db0f"},{url:"dependencies/volodymyrkushnir.com/assets/photos/466052_170309293087291_793458215_o.jpg",revision:"6433e08492057dd33332dad2303f1474"},{url:"dependencies/volodymyrkushnir.com/assets/photos/467536_170309526420601_636909857_o.jpg",revision:"1c9556e4b8ff9da875150aed3b806fe6"},{url:"dependencies/volodymyrkushnir.com/assets/photos/470468_170309399753947_1333978849_o.jpg",revision:"294a4019c2420e475ed4ef0a97523ed8"},{url:"dependencies/volodymyrkushnir.com/assets/photos/471025_173999919384895_1249822733_o.jpg",revision:"42411e3ed7395e48f2633c9cf19a1b7d"},{url:"dependencies/volodymyrkushnir.com/assets/photos/473110_173999982718222_1427466111_o.jpg",revision:"55e0d4bdccd706bb14bf405bf82a743e"},{url:"dependencies/volodymyrkushnir.com/assets/photos/476877_173999862718234_1686531489_o.jpg",revision:"fd27e0acdbcf14033b63235e907fe2b3"},{url:"dependencies/volodymyrkushnir.com/assets/sounds/meh.mp3",revision:"cab8cb281bed323604cd6544eeb4c470"},{url:"dependencies/volodymyrkushnir.com/assets/stylesheets/base.css",revision:"6c610577c9406095e949c5692e5ec074"},{url:"dependencies/volodymyrkushnir.com/favicon.ico",revision:"c843fb2c0998062b21cf5bd7b9b202e1"},{url:"dependencies/volodymyrkushnir.com/index.html",revision:"f6d3f774a861810b40389d1c03a29ab0"},{url:"dependencies/volodymyrkushnir.com/ru-ru/index.html",revision:"f040c56e3174b18dac926794518894d5"},{url:"dependencies/volodymyrkushnir.com/uk-ua/index.html",revision:"99682628cf3b9fe6a78642614a9f7203"},{url:"index.html",revision:"0a98e8324e2e9a805627355fdd7108db"},{url:"infos/audio/58393268_default.mp3",revision:"cb75a4a5436bc5f23fd500aed9ab3ad4"},{url:"infos/audio/8d82b5_MK_vs_DCU_Scorpion_Wins_Sound_Effect.mp3",revision:"5e4e7b4fe7590b36529c62fa96a3c3bd"},{url:"infos/audio/Gerara here you know what I'm saying.mp3",revision:"1ce17fba1bd95f63f6ab9ce7d44e8378"},{url:"infos/audio/scorpion-get-over-here.mp3",revision:"320ea629273d805287a50fff1686169e"},{url:"infos/images/250px-Scorpion_render_by_wildboyz.png",revision:"cd46ad368f032a6e401883f8640d5e03"},{url:"infos/images/28bdd60aa77a07fbf57808d31bec4df1.jpg",revision:"1cfc75e1c0c0356d716f53f7518c1d9c"},{url:"infos/images/85d3803a8fb5cec1dec7d3821ba8d2a3.jpg",revision:"d37995e2851008ff01990d5dd7a75f12"},{url:"infos/images/89726d94df33cefb7aaa67092b1ddc93.png",revision:"7aa368de66eeba29c46a5a6ce6714f96"},{url:"infos/images/ba2ea3593292caf5ddc0f1c02c1ae8cd.png",revision:"23074b2c4f926b09422fcfac7184c24a"},{url:"infos/images/cartoon-character-fiction-joint-yellow.jpg",revision:"89b6c87bd3002cd72defe3706c2a53ae"},{url:"infos/images/fictional-character-ultimate-mortal-kombat-3-drawing-ermac-scorpion.jpg",revision:"9a160fc480fee5ceb21b06c29050ffae"},{url:"infos/images/Headscorpionmk9.png",revision:"be3dc34b1c8f1abdccba07d4e22a1475"},{url:"infos/images/kisspng-scorpion-mortal-kombat-ii-sub-zero-mortal-kombat-x-mortal-kombat-5ac84c9d5c7a72.8901772815230762533788.jpg",revision:"8b8fcc2a6ffb1c99589b390e2f4fad9a"},{url:"infos/images/kisspng-ultimate-mortal-kombat-3-scorpion-liu-kang-cyrax-sub-zero-5b35b05008ec13.2722861715302452000366.jpg",revision:"accc5affd9e94183979d07b811d4df16"},{url:"infos/images/Klassic_Scorpion_Skin.png",revision:"c90454f64992ca89437453d8e09b3fb3"},{url:"infos/images/Ladder2scorpion.png",revision:"a21e6dee65d40af09d8d9462b60bacea"},{url:"infos/images/LadderScorpion.png",revision:"21e12b65d96504b2b56eec0d8b097199"},{url:"infos/images/Mk_11_scorpion_head.png",revision:"a9e8e800569ce214d17975f748cb45f1"},{url:"infos/images/Mk11_scorpion_wallpaper.jpg",revision:"0ec68e150392d9513435f095253a5e6b"},{url:"infos/images/MK3U-04_Scorpion.png",revision:"c515b80b475278609337b301cceaca0c"},{url:"infos/images/MK4-09_Scorpion.png",revision:"6c956e16a600036274d838c0a0a48c00"},{url:"infos/images/Mkda_BODY_SCORPION_ALT.png",revision:"038818f831f7cd20695dd64b2cd0b9d0"},{url:"infos/images/Mkda_BODY_SCORPION.png",revision:"97344157b037149fe953c75027003e59"},{url:"infos/images/MKX_Scorpion_Wallpaper.jpg",revision:"d6200749624f11ea2798e15ab6934dac"},{url:"infos/images/Mortal_kombat_x_ios_scorpion_render_7_by_wyruzzah-d9j69xy.png",revision:"aeb77947e0e21ebd97351846710688b9"},{url:"infos/images/Mortal_kombat_x_ios_scorpion_render_9_by_wyruzzah-dagyud5.png",revision:"f07d98c1a20ace22e073a3ebff820dc2"},{url:"infos/images/Mortal_kombat_x_pc_scorpion_render_5_by_wyruzzah-d8qyw2l-1-.png",revision:"683d8ec8c4e663cf41581c69099390d4"},{url:"infos/images/Scorp_versus.png",revision:"f5a643415ce9678c6801a11a361bf88c"},{url:"infos/images/Scorpion_Deception_Alt.png",revision:"540789558d427e68b5f4e1e218fd6443"},{url:"infos/images/Scorpion_Deception.png",revision:"558e769acc6b298e73cc788975347cfa"},{url:"infos/images/Scorpion_MK-A.png",revision:"8cf361a38ea0afbfcf1289f089f059cf"},{url:"infos/images/Scorpion_MK11_3 (1).png",revision:"5d016afb86cbbd9b343665f522b315d3"},{url:"infos/images/Scorpion_MK11_3.png",revision:"5d016afb86cbbd9b343665f522b315d3"},{url:"infos/images/Scorpion_MK11_Friendship.jpg",revision:"5a0c225162d8218f8614c575b8e56f0a"},{url:"infos/images/Scorpion_MKX_Render (1).png",revision:"191e7dd144a18c9360c28de3d6bd959b"},{url:"infos/images/Scorpion_mkx_Render.png",revision:"b80e204c8439b30c7e813850f519b351"},{url:"infos/images/Scorpion_render01.png",revision:"abb5fbde6abd6c2d946e2b3acc3de917"},{url:"infos/images/Scorpion_vs..png",revision:"cb5ce8be9e84099bb9a05704db7a2d13"},{url:"infos/images/Scorpion-1.png",revision:"2733b602cc3ecf637066c2fdd2c50fc3"},{url:"infos/images/Scorpion-in-Mortal-Kombat-Legacy-2-516x340.jpg",revision:"9a1fa2061b58c47175c38053d84bb4ff"},{url:"infos/images/scorpion-mortal-kombat-x-shao-kahn-ermac-png-favpng-Fdb7Yg2b845DA8nztHptTmtSJ.jpg",revision:"14950d1a2c1c29346885ffa39afa93ce"},{url:"infos/images/Scorpion-Mortal-Kombat.png",revision:"1418ee32bb6baa40638860c9b2b5a7cf"},{url:"infos/images/Scorpion%27s_face.jpg",revision:"79d63c8ca9d079c128ce38bab5ae9e6a"},{url:"infos/images/Scorpion2MK11.png",revision:"d091d639bdea0f5cdae6201a59ed76e1"},{url:"infos/images/Scorpioniconmk9.png",revision:"ea01a60d86c1029a9e3fd61d49b1e4d8"},{url:"infos/images/Scorpionkutie.png",revision:"a6a1e861bae34dbf0b4b8482cb8f68ca"},{url:"infos/images/Scorpionmk11_mid-char-5.png",revision:"0044b115c3899fcd309186dffc07ab3a"},{url:"infos/images/ScorpionMK11-4.png",revision:"3884511824a44c0672e88a9af5b294a5"},{url:"infos/images/ScorpionRender2-1-jpg..png",revision:"56f7a3565a9db0b56e5391e42643ba7d"},{url:"infos/images/Shirai_Ryu_Mask.png",revision:"d0a78d9e9a38e1bd5b71b95bd3cdf3e9"},{url:"infos/images/Versusscorpion.png",revision:"34ce2021bbad78339784fbf55e68c58f"},{url:"infos/intro.html",revision:"ff0e74efa36a5b34679821da8f319238"},{url:"infos/timeline.html",revision:"e689d120d1491bad77badbe83f98e2d1"}],{})}));
//# sourceMappingURL=sw.js.map

import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import { ReactPropTypes } from 'react';

export class News extends Component {
    articles = [
        {
        "source": {
        "id": "wired",
        "name": "Wired"
        },
        "author": "David Nield",
        "title": "What Music Did You Stream in 2022? Here's How to Find Your Recaps",
        "description": "From Spotify Wrapped to Apple Music Replay, these are all the services that will tell you what songs were on the soundtrack of your year.",
        "url": "https://www.wired.com/story/how-to-find-2022-spotify-youtube-apple-music-recaps/",
        "urlToImage": "https://media.wired.com/photos/63a1ff7d458a34a808b82cc2/191:100/w_1280,c_limit/Cul-streamingroundup-1354133617.jpg",
        "publishedAt": "2022-12-25T14:00:00Z",
        "content": "Over on Apple Music, the 2022 year-in-review feature is called Apple Music Replay. The best place to get to your highlights is on the web: Sign in using your Apple ID credentials, then select Get sta… [+1481 chars]"
        },
        {
        "source": {
        "id": "wired",
        "name": "Wired"
        },
        "author": "Simon Hill",
        "title": "How to Use Voice Commands on Your TV (2022): Alexa, Google Assistant, Siri, and Roku TV Voice Commands",
        "description": "Control your television with virtual assistants or the mic on your remote using these handy tips.",
        "url": "https://www.wired.com/story/how-to-use-voice-commands-on-tv/",
        "urlToImage": "https://media.wired.com/photos/63a36b9e2b5612eae8066cc9/191:100/w_1280,c_limit/How-To-Voice-Commands-TV-Gear-1306461345.jpg",
        "publishedAt": "2022-12-25T12:00:00Z",
        "content": "Despite wide availability and vast improvements in speech recognition, most folks rarely use voice assistants. And when we do talk to Alexa, Google Assistant, or Siri, its often just to ask about the… [+3038 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "rhogg@insider.com (Ryan Hogg)",
        "title": "Short-sellers make $15 billion betting against Tesla as shares in Elon Musk's company sink by 70% this year",
        "description": "Bets against Elon Musk's EV maker proved more lucrative than any other US company this year, as the carmaker's value fell by about $800 billion.",
        "url": "https://www.businessinsider.com/short-sellers-made-15-billion-betting-against-tesla-shares-2022-12",
        "urlToImage": "https://i.insider.com/63a0612f0675db0018b36266?width=1200&format=jpeg",
        "publishedAt": "2022-12-25T08:44:36Z",
        "content": "Short-sellers made $15 billion this year betting that shares in Tesla would fall, as about $800 billion was wiped off its value, new research shows.\r\nAnalysis by S3 Partners showed bets against Tesla… [+1882 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Víctor Millán",
        "title": "El año que todos descubrimos el poder de la Inteligencia Artificial: la pregunta es qué viene ahora",
        "description": "Pensábamos que la IA iba a llegar para hacer tareas mecánicas y ha comenzado haciendo mejor las creativas. Así ha sido el año en el que descubrimos su potencial.",
        "url": "http://hipertextual.com/2022/12/inteligencia-artificial-2022",
        "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/12/ai_2.jpeg?fit=1300%2C850&quality=60&strip=all&ssl=1",
        "publishedAt": "2022-12-25T04:08:16Z",
        "content": "Voy a empezar pidiendo ayuda a ChatGPT. Por ejemplo, vamos a probar a pedirle lo siguiente: \"Dime cómo empezarías un artículo periodístico hablando de los avances en Inteligencia Artificial que se va… [+7087 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Lacort",
        "title": "Craft, Notion, Todoist... la Inteligencia Artificial llega a las aplicaciones de productividad",
        "description": "Durante años, la Inteligencia Artificial ha sido orientada incluso desde sus propios precursores como algo más futurista que actual, a menudo sin demasiados enfoques tangibles en el día a día del usuario final. Ha tenido y tiene usos empresariales, pero queda…",
        "url": "https://www.xataka.com/aplicaciones/craft-notion-todoist-inteligencia-artificial-llega-a-aplicaciones-productividad",
        "urlToImage": "https://i.blogs.es/f2f77b/ai2/840_560.jpeg",
        "publishedAt": "2022-12-25T10:00:21Z",
        "content": "Durante años, la Inteligencia Artificial ha sido orientada incluso desde sus propios precursores como algo más futurista que actual, a menudo sin demasiados enfoques tangibles en el día a día del usu… [+5766 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Github.io"
        },
        "author": "Martijn de Vos",
        "title": "Emulating an iPod Touch 1G and iPhoneOS 1.0 using QEMU (Part II)",
        "description": "My personal website.",
        "url": "https://devos50.github.io/blog/2022/ipod-touch-qemu-pt2/",
        "urlToImage": null,
        "publishedAt": "2022-12-25T11:46:45Z",
        "content": "In my previous blog post, I described how I managed to get an iPod Touch 1G up and running using the QEMU emulator. In this follow-up post, I will outline the necessary steps to get the emulator up a… [+8678 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Andygol.co.ua"
        },
        "author": "Andrii Holovin – Blog",
        "title": "What does Overture Map mean for the future of OpenStreetMap",
        "description": "Personal blog of Andriy Holovin. A little about everything.",
        "url": "https://blog.andygol.co.ua/en/2022/12/24/creating-overture-map-and-future-of-osm/",
        "urlToImage": null,
        "publishedAt": "2022-12-25T00:26:11Z",
        "content": "This is my view, the view of an ordinary OpenStreetMap contributor, on the reasons that led to the creation of the Overture Map Foundation.\r\nIts been a week since Overture Map1 was announced.\r\nReliab… [+9889 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Benjamin Mayo",
        "title": "Apple TV+ Guide: Every Apple TV show and movie available now",
        "description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $6.99 per month. Here’s every Apple original television show and movie avai…",
        "url": "https://9to5mac.com/2022/12/25/apple-tv-plus-tv-shows-movies-guide/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-12-25T09:39:37Z",
        "content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $6.99 per month… [+56486 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Sponsored Post",
        "title": "Pick up Amazon’s #1 most wished-for iPad case from ZUGU",
        "description": "Designed with a focus on quality, functionality, and protection, ZUGU has become the #1 most wished-for iPad case on Amazon with over 70,000 5-star reviews. If you’re looking to get the most out of your new iPad while keeping it safe this holiday season, you …",
        "url": "https://9to5mac.com/2022/12/24/zugu-case-ipad-number-1-amazon-case/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/Zuguu-Amazon-wished-for-1.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-12-25T03:39:54Z",
        "content": "Designed with a focus on quality, functionality, and protection, ZUGU has become the #1 most wished-for iPad case on Amazon with over 70,000 5-star reviews. If you’re looking to get the most out of y… [+1955 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Zac Hall",
        "title": "Alexa helps Siri avoid last place in MKBHD smartphone voice assistant test [Video]",
        "description": "Siri isn’t the worst voice assistant on phones today, according to MKBHD. In his latest video, Marques Brownlee conducts are four-way test between Siri and its competitors to see how voice assistants compare in 2022.\n more…\nThe post Alexa helps Siri avoid las…",
        "url": "https://9to5mac.com/2022/12/25/alexa-helps-siri-avoid-last-place-in-mkbhd-smartphone-voice-assistant-test-video/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/siri-mkbhd-test.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-12-25T11:58:10Z",
        "content": "Siri isn’t the worst voice assistant on phones today, according to MKBHD. In his latest video, Marques Brownlee conducts are four-way test between Siri and its competitors to see how voice assistants… [+2383 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (AppleInsider Staff)",
        "title": "Christmas deals: $749 Apple Watch Ultra, $89 Apple Pencil 2, 49% off AirTag Leather Loop & more",
        "description": "Top deals for Dec. 25 include price drops on the M2 iPad Pro, Beats Solo 3 Wireless Headphones and $130 off the 24-inch iMac.Deals valid on ChristmasEach day, the AppleInsider Deals Team searches high and low to bring you the best deals on everything from App…",
        "url": "https://appleinsider.com/articles/22/12/25/christmas-deals-749-apple-watch-ultra-89-apple-pencil-2-49-off-airtag-leather-loop-more",
        "urlToImage": "https://photos5.appleinsider.com/gallery/52126-103654-deals-apple-watch-ultra-airtag-loop-imac-xl.jpg",
        "publishedAt": "2022-12-25T13:13:30Z",
        "content": "Deals valid on Christmas\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nTop deals for Dec. 25 include price drops on the M2 iPad Pro, Beats Solo 3 Wirele… [+2054 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Christine McKee)",
        "title": "These software & streaming deals can still be ordered for Christmas",
        "description": "From TV streaming services to Microsoft Office software, there are a variety of deals to snap up this holiday weekend.Save with these software & streaming deals.Each deal below has been hand curated by the AppleInsider Deals Team to offer an excellent value o…",
        "url": "https://appleinsider.com/articles/22/12/25/these-software-streaming-deals-can-still-be-ordered-for-christmas",
        "urlToImage": "https://photos5.appleinsider.com/gallery/52125-103653-software-streaming-deals-dec-2022-xl.jpg",
        "publishedAt": "2022-12-25T00:17:03Z",
        "content": "Save with these software &amp; streaming deals.\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nFrom TV streaming services to Microsoft Office software, t… [+1088 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yanko Design"
        },
        "author": "Srishti Mitra",
        "title": "Top 10 automotive designs of 2022",
        "description": "Top 10 automotive designs of 2022We’ve been seeing a torrential and exciting downpour of automotive designs at Yanko Design in 2022. Each automotive was innovative, bringing to us something we...",
        "url": "https://www.yankodesign.com/2022/12/25/top-10-automotive-designs-of-2022/",
        "urlToImage": "https://www.yankodesign.com/images/design_news/2022/12/top-10-automotive-designs-of-2022/top_10_automotive_designs_2022_yanko_design_hero.jpg",
        "publishedAt": "2022-12-25T16:20:15Z",
        "content": "Weve been seeing a torrential and exciting downpour of automotive designs at Yanko Design in 2022. Each automotive was innovative, bringing to us something we had never seen nor experienced before. F… [+6787 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Olivier",
        "title": "Apple, Google et Mozilla travaillent ensemble sur un outil de mesure des performances web",
        "description": "Trois des plus importants développeurs de navigateurs web, à savoir Google, Mozilla et Apple, vont mettre leurs ressources en commun pour développer un outil de benchmark.\nApple, Google et Mozilla travaillent ensemble sur un outil de mesure des performances w…",
        "url": "https://www.journaldugeek.com/2022/12/25/apple-google-et-mozilla-travaillent-ensemble-sur-un-outil-de-mesure-des-performances-web/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/12/sans-titre-5-24.jpg",
        "publishedAt": "2022-12-25T15:00:07Z",
        "content": "Trois des plus importants développeurs de navigateurs web, à savoir Google, Mozilla et Apple, vont mettre leurs ressources en commun pour développer un outil de benchmark.Qui est le plus rapide ? Dan… [+2055 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Olivier",
        "title": "HTC va lancer un concurrent du Meta Quest Pro",
        "description": "HTC se prépare à batailler sur le même terrain que le Quest Pro de Meta ! Le constructeur de smartphones, qui s'est lancé à corps perdu dans la réalité virtuelle il y a quelques années, prépare un nouveau casque qui pourrait bien se poser comme un concurrent …",
        "url": "https://www.journaldugeek.com/2022/12/25/htc-va-lancer-un-concurrent-du-meta-quest-pro/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/12/sans-titre-5-22.jpg",
        "publishedAt": "2022-12-25T11:00:15Z",
        "content": "HTC se prépare à batailler sur le même terrain que le Quest Pro de Meta ! Le constructeur de smartphones, qui s'est lancé à corps perdu dans la réalité virtuelle il y a quelques années, prépare un no… [+2209 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Miguel López",
        "title": "Todos los juegos clásicos que puedes encontrar en Apple Arcade, desde Bomberman hasta Tetris",
        "description": "Apple Arcade se ha convertido en una \"isla\" en contra de las compras integradas y plagas de anuncios que se han hecho omnipresentes en la App Store. El servicio ha demostrado que, aunque no sabemos cuánta, hay gente dispuesta a pagar con tal de tener una expe…",
        "url": "https://www.applesfera.com/servicios-apple/todos-juegos-clasicos-que-puedes-encontrar-apple-arcade-bomberman-tetris",
        "urlToImage": "https://i.blogs.es/e2e57c/captura-de-pantalla-2022-12-23-a-las-14.48.07/840_560.jpeg",
        "publishedAt": "2022-12-25T16:00:24Z",
        "content": "Apple Arcade se ha convertido en una \"isla\" en contra de las compras integradas y plagas de anuncios que se han hecho omnipresentes en la App Store. El servicio ha demostrado que, aunque no sabemos c… [+2592 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "David Bernal Raspall",
        "title": "Steve Jobs hizo de soporte técnico de Apple unas Navidades. Se pareció mucho a Papá Noel",
        "description": "Tal día como hoy, hace 24 años, Steve Jobs hizo, más o menos, de representante del soporte técnico para Apple. Una curiosa llamada, unos iMac que se regalaban para Navidad y un Steve Jobs que tenía muy, muy claro cómo tenían que ir las cosas, son los ingredie…",
        "url": "https://www.applesfera.com/curiosidades/steve-jobs-hizo-soporte-tecnico-apple-unas-navidades-se-parecio-mucho-a-papa-noel",
        "urlToImage": "https://i.blogs.es/297a04/hero/840_560.jpeg",
        "publishedAt": "2022-12-25T09:00:25Z",
        "content": "Tal día como hoy, hace 24 años, Steve Jobs hizo, más o menos, de representante del soporte técnico para Apple. Una curiosa llamada, unos iMac que se regalaban para Navidad y un Steve Jobs que tenía m… [+2726 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Christian Zibreg",
        "title": "What Is Clean Energy Charging on iPhone and How Does It Work?",
        "description": "Clean Energy Charging is an iOS feature that aims to reduce the carbon footprint of your iPhone. Here's everything you need to know about it.",
        "url": "https://www.makeuseof.com/apple-clean-energy-charging-explained/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/04/iphone-12-magsafe-charging.jpg",
        "publishedAt": "2022-12-25T14:00:16Z",
        "content": "Clean Energy Charging is a new setting Apple introduced in iOS 16.1, designed to ensure your iPhone is being charged with cleaner energy sources.\r\nWith it turned on, iOS will only recharge the iPhone… [+6144 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The A.V. Club"
        },
        "author": "Saloni Gajjar",
        "title": "What's on TV this week—The Witcher: Blood Origin, Matilda The Musical, and Letterkenny returns",
        "description": "Welcome to What’s On, our weekly picks of must-watch shows. Here’s what you need to watch from Sunday, December 25, to Thursday, December 29. All times are Eastern. [Note: The weekend edition of What’s On drops on Fridays.]Read more...",
        "url": "https://www.avclub.com/whats-on-tv-dec-25-29-the-witcher-blood-origin-mati-1849914911",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2411917194d22b4a54c8d0caa670be34.png",
        "publishedAt": "2022-12-25T14:00:00Z",
        "content": "Welcome to Whats On, our weekly picks of must-watch shows. Heres what you need to watch from Sunday, December 25, to Thursday, December 29. All times are Eastern. [Note: The weekend edition of Whats … [+4721 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "Tammy Rogers",
        "title": "An ode to AppleCare+: why Apple's insurance scheme is a must-have for... well, everyone",
        "description": "I broke my iPhone 13 Pro, and when I was told the repair cost, I fainted. I looked at how much it would've cost with AppleCare+ - and I fainted again.",
        "url": "https://www.imore.com/iphone/an-ode-to-applecare-why-apples-insurance-scheme-is-a-must-have-for-well-everyone",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/qmKTUxtRxdNthE9tz8Lsy4-1200-80.jpg",
        "publishedAt": "2022-12-25T11:30:07Z",
        "content": "Breaking an iPhone is never fun. There’s that moment when your stomach plummets, and you feel like the world has just briefly ended. What are you going to do? Where’s the spare phone? How are you goi… [+8658 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "/FILM"
        },
        "author": "Matthew Bilodeau",
        "title": "The Shawshank Redemption's 'Simplest' Scene Convinced Frank Darabont That The Film Would Work",
        "description": "For nearly three decades, \"The Shawshank Redemption\" has held the coveted position of a Stephen King adaptation that goes above and beyond its source material, in addition to being one of the most renowned films ever made. A poor release strategy ended its th…",
        "url": "https://www.slashfilm.com/1144576/the-shawshank-redemptions-simplest-scene-convinced-frank-darabont-that-the-film-would-work/",
        "urlToImage": "https://www.slashfilm.com/img/gallery/the-shawshank-redemptions-simplest-scene-convinced-frank-darabont-that-the-film-would-work/l-intro-1671579234.jpg",
        "publishedAt": "2022-12-25T03:00:09Z",
        "content": "To celebrate the 25th anniversary of \"Shawshank\" in 2019, Deadline interviewed Frank Darabont, who recalled his memories of making the film during the summer of 1993. When he was asked about which sc… [+1487 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Joe Rossignol",
        "title": "What to Buy With the Apple Gift Card You Unwrapped",
        "description": "Apple gift cards are always a popular gift for Christmas and other holidays, so you might have unwrapped one recently. We've put together a list of products to spend it on, with everything priced under $100 in the United States. \n\n\n\n\n\nApple used to offer two …",
        "url": "https://www.macrumors.com/2022/12/25/what-to-buy-with-an-apple-gift-card/",
        "urlToImage": "https://images.macrumors.com/t/niwhkNXllgzRNiRRvugrKCJRGvA=/1600x/article-new/2021/11/apple-gift-card-pink-holiday.jpg",
        "publishedAt": "2022-12-25T14:00:00Z",
        "content": "Apple gift cards are always a popular gift for Christmas and other holidays, so you might have unwrapped one recently. We've put together a list of products to spend it on, with everything priced und… [+4109 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "Erick Fontaine",
        "title": "Actualité : BMW Digital Key : partagez votre clef numérique d’un iPhone vers un smartphone Android, et vice versa",
        "description": "La numérisation automobile prend un nouveau tournant, notamment chez BMW. Précurseur de la clef numérique à partager, le constructeur allemand permet désormais à des utilisateurs d’iPhone d’envoyer une clef virtuelle à des smartphones Android, et vice versa.",
        "url": "https://www.lesnumeriques.com/voiture/bmw-digital-key-partagez-votre-clef-numerique-d-un-iphone-vers-un-smartphone-android-et-vice-versa-n201399.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/news/20/201399/e2598097-bmw-digital-key-partagez-votre-clef-numerique-d-un-iphone-vers-un-smartphone-android-et-vice-versa__1200_630__0-182-908-658.jpeg",
        "publishedAt": "2022-12-25T12:17:00Z",
        "content": "Assisterait-on à la fin de la clef de contact à lancienne ? Rappelez-vous en 2015, lors du traditionnel Consumer Electronic Show (CES) à Las Vegas, nombre de constructeurs automobiles présentaient le… [+3266 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Álvaro García M.",
        "title": "Liberar más de 15 GB de espacio en el iPhone fue muy fácil. Solo tuve que hacer esto",
        "description": "Si quedarse sin batería es uno de los dramas más comunes en un smartphone, quedarse sin espacio para instalar apps o hacer nuevas fotos es otro de ellos. Y pese a que existen muchas fórmulas para liberar espacio del móvil, a veces basta con recurrir a lo más …",
        "url": "https://www.xatakamovil.com/tutoriales/liberar-15-gb-espacio-iphone-fue-muy-facil-solo-tuve-que-hacer-esto",
        "urlToImage": "https://i.blogs.es/9635c3/iphone/840_560.jpg",
        "publishedAt": "2022-12-25T10:00:21Z",
        "content": "Si quedarse sin batería es uno de los dramas más comunes en un smartphone, quedarse sin espacio para instalar apps o hacer nuevas fotos es otro de ellos. Y pese a que existen muchas fórmulas para lib… [+4245 chars]"
        },
        {
        "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
        },
        "author": "Tyler Conway",
        "title": "Bengals' Eli Apple Calls out Patriots' Mac Jones for 'Dirty' Low Block",
        "description": "Mac Jones may be developing a reputation as a dirty player. Bengals cornerback Eli Apple criticized Jones after the Patriots quarterback was called for a low...",
        "url": "https://bleacherreport.com/articles/10059696-bengals-eli-apple-calls-out-patriots-mac-jones-for-dirty-low-block",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1671981965/uffajrlo4vsrins3ypps.jpg",
        "publishedAt": "2022-12-25T15:32:57Z",
        "content": "Erica Denhoff/Icon Sportswire via Getty Images\r\nMac Jones may be developing a reputation as a dirty player.\r\nBengals cornerback Eli Apple criticized Jones after the Patriots quarterback was called fo… [+481 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "tagesschau.de"
        },
        "author": "tagesschau",
        "title": "Die erfolgreichsten Filme und Serien 2022",
        "description": "Wednesday, Avatar, Top Gun Maverick - ob vor kleinem oder großen Bildschirm, diese Filme und Serien zählen zu den erfolgreichsten des Jahres 2022. <em>Von Antonia Mannweiler.</em>",
        "url": "https://www.tagesschau.de/wirtschaft/erfolgreichsten-filme-serien-2022-kino-streaming-101.html",
        "urlToImage": "https://www.tagesschau.de/multimedia/bilder/amazon-wednesday-101~_v-original.jpg",
        "publishedAt": "2022-12-25T04:30:23Z",
        "content": "Wednesday, Avatar, Top Gun Maverick - ob vor kleinem oder großen Bildschirm, diese Filme und Serien zählen zu den erfolgreichsten des Jahres 2022. \r\nVon Antonia Mannweiler, tagesschau.de\r\nEiner der G… [+11092 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "André Westphal",
        "title": "Immer wieder sonntags KW 51",
        "description": "Heute ist zwar der 1. Weihnachtstag, doch die Technikwelt steht nicht still. Auch wenn es in den letzten Tagen etwas ruhiger gewesen ist, gab es immer noch viel Berichtenswertes. Und so lest ihr auch an diesem Wochenende an dieser Stelle...Zum Beitrag: Immer …",
        "url": "https://stadt-bremerhaven.de/immer-wieder-sonntags-kw-51-11/",
        "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Kaffee-Sonntags.jpg",
        "publishedAt": "2022-12-25T05:30:29Z",
        "content": "Heute ist zwar der 1. Weihnachtstag, doch die Technikwelt steht nicht still. Auch wenn es in den letzten Tagen etwas ruhiger gewesen ist, gab es immer noch viel Berichtenswertes. Und so lest ihr auch… [+2860 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sports Illustrated"
        },
        "author": "Daniel Chavkin",
        "title": "Bengals’ Eli Apple Bashes Patriots’ Mac Jones for ‘Dirty Play’",
        "description": "The Cincinnati defender called out the New England quarterback after the game.",
        "url": "https://www.si.com/nfl/2022/12/25/cincinnati-bengals-eli-apple-calls-out-new-england-patriots-mac-jones-dirty-play",
        "urlToImage": "https://www.si.com/.image/t_share/MTk0Njk1MDY0NTE2MDQzOTM4/eli-apple.jpg",
        "publishedAt": "2022-12-25T15:24:08Z",
        "content": "The Bengals beat the Patriots on Saturday despite a strong second-half effort from New England, making for one of the better games of the day. However, the contest featured more than just heated comp… [+1090 chars]"
        },
        {
        "source": {
        "id": "lenta",
        "name": "Lenta"
        },
        "author": "Андрей Ставицкий",
        "title": "Популярный iPhone подешевел в России",
        "description": "В России подешевел популярный смартфон Apple 2019 года выпуска. Согласно каталогу, стоимость iPhone 11 Pro Max снизилась на 40 процентов. «Его выпустили в конце 2019 года и начали продавать по цене 100 тысяч рублей», — отметили журналисты. На момент написания…",
        "url": "https://lenta.ru/news/2022/12/25/deshevo/",
        "urlToImage": "https://icdn.lenta.ru/images/2022/12/23/11/20221223115850413/share_2c4c5879153b22135610d0f487407773.jpg",
        "publishedAt": "2022-12-25T01:30:25Z",
        "content": "Apple 2019 . Hi-Tech Mail.ru.\r\n , iPhone 11 Pro Max 40 . « 2019 100 », . , 2022 60 .\r\n« , . iOS 16, 6,5- OLED- Super Retina XDR», . Apple A13 Bionic, , 12 , 3969 -.\r\n iPhone 11 Pro Max 2019 . Apple i… [+77 chars]"
        },
        {
        "source": {
        "id": "lenta",
        "name": "Lenta"
        },
        "author": "Юлия Мискевич",
        "title": "Россиянам рассказали о важных деталях при покупке подержанного смартфона",
        "description": "Часто люди предпочитают новым смартфонам покупку подержанного устройства. Специалист Елена Богатырева рассказала о деталях при покупке подержанного телефона. В первую очередь, Богатырева посоветовала проверить смартфон по IMEI. Например, у каждого iPhone есть…",
        "url": "https://lenta.ru/news/2022/12/25/busmart/",
        "urlToImage": "https://icdn.lenta.ru/images/2022/12/25/08/20221225085501402/share_1fbc73301c037b92ac92f9d286143712.jpg",
        "publishedAt": "2022-12-25T05:58:54Z",
        "content": ". RT .\r\n , IMEI. , iPhone 15 . : - , , « », .\r\n , , : F , N , P . M, , .\r\n , « iPhone» . , -, .\r\n Apple . , . , ."
        },
        {
        "source": {
        "id": null,
        "name": "Srad.jp"
        },
        "author": "headless",
        "title": "iPhone 14、起動時やスリープ解除時にランダムな横線が表示される問題",
        "description": "iPhone 14 で起動時やスリープ解除時、画面の横幅いっぱいに横線 (水平線) が表示される問題が報告されている\n(9to5Mac の記事、\nMac Rumors の記事、\nReddit のスレッド、\nApple Community の投稿 [1]、\n[2]、\n[3]、\nMacRumors Forums のスレッド)。\n\n横線はランダムに表示されるようで、本数や色は一定しないようだ。特に iPhone 14 Pro Max での報告が多いという。Apple のサポート担当者や Apple Store スタッフ…",
        "url": "https://apple.srad.jp/story/22/12/25/0518215/",
        "urlToImage": "https://srad.jp/static/topics/iphone_64.png",
        "publishedAt": "2022-12-25T10:27:00Z",
        "content": "iPhone 14 () \r\n(9to5Mac Mac Rumors Reddit Apple Community [1][2][3]MacRumors Forums )iPhone 14 Pro Max Apple Apple Store () \r\niPhone"
        },
        {
        "source": {
        "id": null,
        "name": "01net.com"
        },
        "author": "Gabriel Manceau",
        "title": "Voici les 8 premières choses à faire sur votre nouveau smartphone",
        "description": "Vous avez peut-être eu la chance d'avoir un nouveau smartphone sous le sapin. Pour partir d'un bon pied avec votre « précieux », voici les opérations que l'on vous conseille d'effectuer juste après l’avoir allumé.",
        "url": "https://www.01net.com/astuces/premieres-choses-a-faire-sur-votre-nouveau-smartphone.html",
        "urlToImage": "https://www.01net.com/app/uploads/2022/11/meilleurs-smartphones-300-euros.jpg",
        "publishedAt": "2022-12-25T09:12:47Z",
        "content": "Vous avez peut-être eu la chance d’avoir un nouveau smartphone sous le sapin. Pour partir d’un bon pied avec votre « précieux », voici les opérations que l’on vous conseille d’effectuer juste après l… [+8010 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "GSMArena.com"
        },
        "author": "Ivan",
        "title": "Top stories of 2022: Q1",
        "description": "Welcome to our recap of the top news articles of 2022. We will now be looking back on the most popular stories from the first quarter of the year with each subsequent quarter getting its own story.\n\nIn Q1, we got a few major announcements. Samsung's Galaxy S2…",
        "url": "https://www.gsmarena.com/top_stories_of_2022_q1-news-56973.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/12/top-news-2022/-952x498w6/gsmarena_002.jpg",
        "publishedAt": "2022-12-25T09:51:01Z",
        "content": "Welcome to our recap of the top news articles of 2022. We will now be looking back on the most popular stories from the first quarter of the year with each subsequent quarter getting its own story.\r\n… [+5652 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Leo Sun)",
        "title": "Better Buy: Apple vs. Nvidia",
        "description": "Which tech titan is the better bear market investment?",
        "url": "https://www.fool.com/investing/2022/12/25/better-buy-apple-vs-nvidia/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/713991/woman-laptop-investor.jpg",
        "publishedAt": "2022-12-25T13:10:00Z",
        "content": "Apple(AAPL -0.15%) and Nvidia(NVDA -0.87%) were both beloved tech stocks that lost their luster over the past year. Apple's stock hit an all-time high of $180.96 in January, but it subsequently stumb… [+4944 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Sean Williams)",
        "title": "Which FAANG Stock Will Be the Top Performer in 2023?",
        "description": "Among Meta Platforms (formerly Facebook), Apple, Amazon, Netflix, and Alphabet (formerly Google), there's one company poised to outperform in the new year.",
        "url": "https://www.fool.com/investing/2022/12/25/which-faang-stock-will-be-top-performer-in-2023/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/714126/stock-chart-quote-bear-bull-trading-invest-short-options-getty.jpg",
        "publishedAt": "2022-12-25T10:21:00Z",
        "content": "With less than a week to go before we turn the page on 2022, it's fair to say it's been one of the worst years for investors in a long time. The Dow Jones Industrial Average, S&amp;P 500, and Nasdaq … [+6699 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Selena Maranjian)",
        "title": "Want Unstoppable Stocks for 2023 and Beyond? Focus on Competitive Advantages",
        "description": "Competitive advantages can help companies keep growing while greatly benefiting shareholders.",
        "url": "https://www.fool.com/investing/2022/12/25/unstoppable-stocks-for-2023-competitive-advantages/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/714257/getty-strong-muscles-biceps-learning-invest-in-yourself-smarter.jpg",
        "publishedAt": "2022-12-25T16:14:00Z",
        "content": "Competitive strategy is about being different. It means deliberately choosing a different set of activities to deliver a unique mix of value. -- Michael E. Porter \r\nBusiness students, or at least bus… [+5386 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Jeremy Bowman)",
        "title": "2 Stocks Warren Buffett Should Buy in 2023",
        "description": "You can count on Berkshire going shopping again in 2023. These two stocks should be at the top of Buffett's list.",
        "url": "https://www.fool.com/investing/2022/12/25/2-stocks-warren-buffett-should-buy-in-2023/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/713982/buffett16-tmf.jpg",
        "publishedAt": "2022-12-25T11:01:00Z",
        "content": "Through the first three quarters of 2022, Warren Buffett's Berkshire Hathaway has bought 19 stocks. Those range from surprise picks like Taiwan Semiconductor to upstream oil producer Occidental Petro… [+4329 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Chuck Saletta, Eric Volkman, and Parkev Tatevosian, CFA)",
        "title": "3 Investment Moves to Make Before the Year Ends",
        "description": "2022 may have been a rough year for investors, but there are still a few things you might be able to do to put yourself in a better spot for the future.",
        "url": "https://www.fool.com/investing/2022/12/25/3-investment-moves-to-make-before-the-year-ends/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/713984/2022-to-2023-new-year-gettyimages-1369271743.jpg",
        "publishedAt": "2022-12-25T10:30:00Z",
        "content": "With 2022 rapidly drawing to a close, so are your opportunities to have an impact on your investments and potentially your taxes for the year. Since this time of year is often a time for celebrations… [+6679 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Jade Bryan",
        "title": "EU-Kommission: Die Pflicht zum USB-Port-C war nur der Anfang",
        "description": "Kommt per EU-Gesetz die Pflicht für austauschbare Akkus für Apple- und Samsung-Smartphones? Die EU-Kommission ist schon dran.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
        "url": "https://www.nextpit.de/eu-kommission-pflicht-zum-usb-c-anschluss-war-nur-der-anfang",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7715851/image/swollen_battery_shutterstock_2107712735.jpg",
        "publishedAt": "2022-12-25T07:00:00Z",
        "content": "EU-Kommission verlangt austauschbare Akkus\r\nDer neue Gesetzesentwurf in der EU-Region wurde von \"Pocket Now\" aufgespürt. Darin heißt es, dass alle Hersteller austauschbare Akkus für elektronische Ger… [+1727 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Tech Desk",
        "title": "Tesla announces AirPower-inspired premium wireless charging pad",
        "description": "Tesla wireless charging platform can wirelessly charge up to three devices with up to 15W of power for each device.",
        "url": "https://indianexpress.com/article/technology/tech-news-technology/tesla-wireless-charging-platform-launch-features-price-8343194/",
        "urlToImage": "https://images.indianexpress.com/2022/12/tesla-wireless-charging-pad.jpg",
        "publishedAt": "2022-12-25T06:38:12Z",
        "content": "Tesla has done what Apple couldn’t do. Back in 2017, Apple announced a wireless charging pad called AirPower, capable of wirelessly charging multiple devices at the same time. However, the company sc… [+1416 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "Dann hätten die Menschen nichts mehr zu verlieren – 100 Tage nach dem Tod von Mahsa Amini",
        "description": "Vor 100 Tagen starb die iranische Kurdin Jina Mahsa Amini im Polizeigewahrsam. Ihr Tod erschütterte Menschen weltweit und stürzte die Islamische Republik in die größte politische Krise seit Jahrzehnten. Was haben die Proteste seitdem erreicht?",
        "url": "https://www.welt.de/politik/ausland/article242877087/Iran-Dann-haetten-sie-nichts-mehr-zu-verlieren-100-Tage-nach-dem-Tod-von-Mahsa-Amini.html",
        "urlToImage": "https://img.welt.de/img/politik/ausland/mobile242877089/4191356607-ci16x9-w1200/Ikone-der-iranischen-Proteste-Jina-Mahsa-Amini.jpg",
        "publishedAt": "2022-12-25T04:26:39Z",
        "content": "Als die junge iranische Kurdin Jina Mahsa Amini vor 100 Tagen in einem Krankenhaus im Sterben liegt, haben viele Menschen im Iran bereits einen Verdacht. Ein Foto, das die 22-Jährige mit Beatmungssch… [+4960 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Daniel Zwick",
        "title": "Die riskante Retro-Wette der Autobauer",
        "description": "Klassiker wie der Fiat 500 oder der VW Bulli verkaufen sich als Neuauflage gut. Die Hersteller setzen darauf, dass ihre Kunden emotionaler handeln als bei modernen E-Autos. Zudem sind Retro-Modelle ideal zum Experimentieren. Ein Risiko allerdings schwingt bei…",
        "url": "https://www.welt.de/wirtschaft/article242816175/Manta-Bulli-und-R4-Die-riskante-Retro-Wette-der-Autobauer.html",
        "urlToImage": "https://img.welt.de/img/wirtschaft/mobile242816169/8381351867-ci16x9-w1200/Fiat-500-elektro-3.jpg",
        "publishedAt": "2022-12-25T06:36:32Z",
        "content": "Für Volkswagen war es die wichtigste Produkteinführung des Jahres: Als der damalige Vorstandschef Herbert Diess den elektrischen ID. Buzz Anfang März in Hamburg vorstellte, reiste sogar Niedersachsen… [+6387 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Elmar Krekeler",
        "title": "10 perfekte Serien für die Zeit zwischen den Jahren",
        "description": "Nie kamen mehr Serien heraus als 2022. Niemand hat sie alle gesehen, selbst Erstklassiges fiel unter den Tisch. Doch zwischen den Jahren ist endlich Zeit, das Verpasste nachzuholen. 10 Empfehlungen, die Sie garantiert nicht bereuen werden.",
        "url": "https://www.welt.de/kultur/article242665505/Die-besten-Serien-10-perfekte-Tipps-fuer-die-Zeit-zwischen-den-Jahren.html",
        "urlToImage": "https://img.welt.de/img/kultur/mobile242863003/2801352337-ci16x9-w1200/Barbaren-2-Netflix.jpg",
        "publishedAt": "2022-12-25T06:46:58Z",
        "content": "Im Sommer entflammte eine große Liebe zum Basketball. Da war die tolle WM in Köln und Berlin. Und weil man schon mal dabei war, sahen wir auch The Last Dance, die Netflix-Serie über Michael Jordan un… [+12772 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "Ukraine gibt nach Luftalarm Entwarnung – „Alles, was abhebt, muss unter unserer Kontrolle sein",
        "description": "Die Behörden haben nach dem Luftalarm für alle Regionen in der Ukraine Entwarnung gegeben. In seiner Weihnachtsbotschaft sprach Selenskyj seinen Landsleuten Mut zu und rief sie zum Durchhalten auf. Mehr im Liveticker.",
        "url": "https://www.welt.de/politik/ausland/article242870723/Ukraine-News-Ukraine-gibt-nach-Luftalarm-Entwarnung.html",
        "urlToImage": "https://img.welt.de/img/politik/ausland/mobile242673715/3651356237-ci16x9-w1200/Residents-of-Gorenka-village-Kyiv.jpg",
        "publishedAt": "2022-12-25T07:00:00Z",
        "content": "Nach dem Luftalarm für alle Regionen der Ukraine am Morgen geben die Behörden Entwarnung. Es gebe keine Berichte über neue russische Angriffe. Nach unbestätigten Berichten in den sozialen Medien in d… [+17296 chars]"
        },
        {
        "source": {
        "id": "la-repubblica",
        "name": "La Repubblica"
        },
        "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
        "title": "Le serie più attese del 2023: 25 titoli per l'anno nuovo",
        "description": "I prossimi 12 mesi, sul fronte delle proposte seriali delle piattaforme, saranno molto ricchi fra produzioni italiane e straniere e tanti ritorni. Alcuni show di successo avranno la loro stagione finale: The Crown, Ted Lasso, La fantastica signora Maisel. Sia…",
        "url": "https://www.repubblica.it/serietv/2022/12/25/news/le_serie_piu_attese_del_2023_25_titoli_per_lanno_nuovo-380080162/",
        "urlToImage": "https://www.repstatic.it/content/nazionale/img/2022/12/22/174533648-5443cbb6-4e85-4cec-b1d1-5b0413a54c05.jpg",
        "publishedAt": "2022-12-25T09:18:42Z",
        "content": "La lista è lunga ma potrebbe essere molto più lunga. Abbiamo stilato un elenco di venticinque titoli fra le serie in arrivo che ci incuriosiscono di più e tutto quello che sappiamo di ognuna di loro.… [+15922 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Karapaia.com"
        },
        "author": "garretstyle",
        "title": "電子レンジでできる、簡単おいしい「シリアル焼きリンゴ」のレシピ【ネトメシ】",
        "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
        "url": "https://karapaia.com/archives/52284229.html",
        "urlToImage": "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/7/6/7628dc40.jpg",
        "publishedAt": "2022-12-25T04:30:32Z",
        "content": ""
        },
        {
        "source": {
        "id": null,
        "name": "Karapaia.com"
        },
        "author": "maranda",
        "title": "猫伯父ちゃん「このコピーキャットを何とかして！」何でも真似をしたがる子猫にギブアップ？",
        "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
        "url": "https://karapaia.com/archives/52318819.html",
        "urlToImage": "https://livedoor.blogimg.jp/maranda/imgs/c/b/cb3efc68.jpg",
        "publishedAt": "2022-12-25T12:00:01Z",
        "content": ""
        },
        {
        "source": {
        "id": null,
        "name": "Karapaia.com"
        },
        "author": "parumo_zaeega",
        "title": "クリスマスプレゼントにボールをもらって大喜びの警察犬が駅構内の乗客たちに幸せをもたらす",
        "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
        "url": "https://karapaia.com/archives/52318815.html",
        "urlToImage": "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/2/8/2853045a.jpg",
        "publishedAt": "2022-12-25T14:00:30Z",
        "content": ""
        },
        {
        "source": {
        "id": null,
        "name": "Basicthinking.de"
        },
        "author": "Beatrice Bode",
        "title": "Nervenschoner: Diese Browser-Erweiterung beseitigt nervige Cookie-Banner",
        "description": "Die Verbraucherzentrale Bayern hat eine Browser-Erweiterung vorgestellt, mit der lästige Cookie-Banner künftig der Vergangenheit angehören. Der sogenannte Nervenschoner blockiert die ungeliebten Pop-ups und macht somit seinem Namen alle Ehre. Seinen wir mal e…",
        "url": "https://www.basicthinking.de/blog/2022/12/25/nervenschoner-diese-browser-erweiterung-beseitigt-nervige-cookie-banner/",
        "urlToImage": "https://www.basicthinking.de/blog/wp-content/uploads/2022/10/nervenschoner-verbraucherzentrale-cookie-banner-erweiterung.png",
        "publishedAt": "2022-12-25T07:06:58Z",
        "content": "Die Verbraucherzentrale Bayern hat eine Browser-Erweiterung vorgestellt, mit der lästige Cookie-Banner künftig der Vergangenheit angehören. Der sogenannte Nervenschoner blockiert die ungeliebten Pop-… [+4237 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Karapaia.com"
        },
        "author": "scarletmiddletones18",
        "title": "マクドナルドで「全部抜き」をデリバリーするとどうなるのか？配達員が混乱しながら届けた物は...",
        "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
        "url": "https://karapaia.com/archives/52318789.html",
        "urlToImage": "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/6/b/6b46a8ae.jpg",
        "publishedAt": "2022-12-25T10:00:00Z",
        "content": "Twitter\r\n1220Twitter1.892501\r\nOK let's try this again, ordering a nothing burger from McDonalds. this time nothing else in the order.\r\nwill they cancel it? deliver an empty bag? i am doing this so yo… [+652 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5google.com"
        },
        "author": "Abner Li",
        "title": "How to set up your new Pixel Watch: Top tips, faces, apps, and bands",
        "description": "Customization is one of the best aspects of a smartwatch compared to its mechanical counterparts. Google’s inaugural wearable is no exception, and we want to see your Pixel Watch setup. Meanwhile, here are some tips on getting started.\n more…\nThe post How to …",
        "url": "https://9to5google.com/2022/12/25/google-pixel-watch-setup/",
        "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/10/pixel-watch-two-tone-leather-band-adapter.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-12-25T14:00:00Z",
        "content": "Customization is one of the best aspects of a smartwatch compared to its mechanical counterparts. Google’s inaugural wearable is no exception, and we want to see your Pixel Watch setup. Meanwhile, he… [+5617 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Lana Bortolot, Contributor, \n Lana Bortolot, Contributor\n https://www.forbes.com/sites/lanabortolot/",
        "title": "A Christmas Classics Playlist: Songs and Wine",
        "description": "After two months of Christmas songs, you’ll need a new playlist and the wines to go with it.",
        "url": "https://www.forbes.com/sites/lanabortolot/2022/12/25/a-christmas-classics-playlist-songs-and-wine/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63a869a7787e61a53c8f0744/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2022-12-25T15:23:06Z",
        "content": "After two months of Christmas songs, youll need a new playlist and the wines to go with it. \r\nGather 'round and don't forget the wine! (1957 lithograph). \r\nGetty Images\r\nAll I want for Christmas is a… [+3899 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Phoronix"
        },
        "author": null,
        "title": "Ruby 3.2 Released With WebAssembly Support, Production-Grade YJIT",
        "description": "Ruby programming language developers have issued a Christmas release of the latest iteration of this language focused on simplicity and productivity...",
        "url": "https://www.phoronix.com/news/Ruby-3.2-Released",
        "urlToImage": "https://www.phoronix.net/image.php?id=2022&image=ruby",
        "publishedAt": "2022-12-25T10:12:55Z",
        "content": "Happy Holidays If you have enjoyed reading the new and original content on Phoronix each and every day this year, consider showing your support by the end of year / holiday deal on Phoronix Premium. … [+1655 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "KCRA Sacramento"
        },
        "author": "Heather Waldman",
        "title": "Northern California Christmas forecast: Foggy start then mild temps Sunday; Next week brings rain, gusty winds - KCRA Sacramento",
        "description": "<ol><li>Northern California Christmas forecast: Foggy start then mild temps Sunday; Next week brings rain, gusty winds  KCRA Sacramento\r\n</li><li>Warmer Christmas Day for most of New Mexico  KRQE News 13\r\n</li><li>After a mild Christmas weekend, heavy rain li…",
        "url": "https://www.kcra.com/article/northern-california-forecast-christmas-sacramento-weather-rain-winds-next-week-dec-25-timeline/42335135",
        "urlToImage": "https://kubrick.htvapps.com/vidthumb/4b767a60-d42b-47ac-9999-c5856001eea4/4b767a60-d42b-47ac-9999-c5856001eea4_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2022-12-25T16:02:00Z",
        "content": "Christmas Day in Northern California will bring pleasant weather conditions once the Valley and Delta fog lifts later in the morning. Our next storm system will arrive late Monday night with heavy ra… [+2550 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Espinof.com"
        },
        "author": "Albertini",
        "title": "Hace 17 años 'The Office' estuvo a punto de ser cancelada. Este episodio de Navidad les salvó de la guillotina",
        "description": "Aunque ahora es reverenciada como una de las mejores comedias del siglo XXI (y de la historia), la versión estadounidense de 'The Office' no lo tuvo fácil para sobrevivir en la competitiva parrilla televisiva. De hecho, durante las dos primeras temporadas est…",
        "url": "https://www.espinof.com/series-de-ficcion/milagro-navideno-the-office-serie-estuvo-a-punto-ser-cancelada-este-episodio-les-salvo-guillotina",
        "urlToImage": "https://i.blogs.es/a58105/the-office-christmas-episodes/840_560.jpeg",
        "publishedAt": "2022-12-25T14:00:26Z",
        "content": "Aunque ahora es reverenciada como una de las mejores comedias del siglo XXI (y de la historia), la versión estadounidense de 'The Office' no lo tuvo fácil para sobrevivir en la competitiva parrilla t… [+2173 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Apple reveals teaser for Apple TV+ show ‘Liaison’",
        "description": "Apple today has revealed an official first look image of its upcoming thriller series ‘Liaison’. ‘Liaison’ is a high-stakes thriller that features Hollywood stars ... Read more",
        "url": "https://www.ilounge.com/news/apple-tv/apple-reveals-teaser-for-apple-tv-show-liaison",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Liaison.png",
        "publishedAt": "2022-12-25T12:06:30Z",
        "content": "Apple today has revealed an official first look image of its upcoming thriller series ‘Liaison’.\r\n‘Liaison’ is a high-stakes thriller that features Hollywood stars Eva Green and Vincent Cassel. Apple… [+797 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Free Two-Hour delivery is now available in select Apple Stores",
        "description": "Apple retail stores are now offering a free, two-hour delivery of select Apple products. In select regions, customers can purchase an iPhone, Mac, AirPods, ... Read more",
        "url": "https://www.ilounge.com/news/free-two-hour-delivery-is-now-available-in-select-apple-stores",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Apple-4.png",
        "publishedAt": "2022-12-25T12:42:32Z",
        "content": "Apple retail stores are now offering a free, two-hour delivery of select Apple products.\r\nIn select regions, customers can purchase an iPhone, Mac, AirPods, Apple TV, iPad, and Apple Watch and have i… [+718 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Steve Jobs-Numbered Apple-1 nets $440K auction price",
        "description": "A recent auction of a rare Apple-1 computer reached over $440,000. In 1976, there were only 200 Apple computers produced by Steve Wozniak and Steve Jobs, ...",
        "url": "https://www.ilounge.com/news/steve-jobs-numbered-apple-1-nets-440k-auction-price",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Apple-2.png",
        "publishedAt": "2022-12-25T11:03:40Z",
        "content": "A recent auction of a rare Apple-1 computer reached over $440,000.\r\nIn 1976, there were only 200 Apple computers produced by Steve Wozniak and Steve Jobs, which dwindled down to just 60 or 70. The ra… [+735 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Samsung World Cup ad mocks Apple again",
        "description": "Samsung’s latest ad teases Apple for not having a foldable iPhone. The newest ad is themed around the World Cup. Galaxy Flip phones are gathered around a ...",
        "url": "https://www.ilounge.com/news/samsung-world-cup-ad-mocks-apple-again",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Samsung-World-Cup-Ad.png",
        "publishedAt": "2022-12-25T11:01:02Z",
        "content": "Samsung’s latest ad teases Apple for not having a foldable iPhone.\r\nThe newest ad is themed around the World Cup. Galaxy Flip phones are gathered around a soccer stadium that’s similar to the 2022 Wo… [+710 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Apple reveals MLS match schedules for 2023",
        "description": "Major League Soccer published its upcoming league games ahead of the 2023 season. All the matches in the MLS list will appear on Apple ... Read more",
        "url": "https://www.ilounge.com/news/apple-tv/apple-reveals-mls-match-schedules-for-2023",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/MLS-Match.png",
        "publishedAt": "2022-12-25T12:11:22Z",
        "content": "Major League Soccer published its upcoming league games ahead of the 2023 season.\r\nAll the matches in the MLS list will appear on Apple TV in more than 100 countries, courtesy of a ten-year partnersh… [+693 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "‘Mere Mortals’ Mythic Quest spinoff to arrive on Apple TV+",
        "description": "Popular Apple TV+ show ‘Mythic Quest’ will be getting a spinoff from its episodes. ‘Mere Mortals’ will follow distinctive storytelling, sourced from fan-favorite episodes ... Read more",
        "url": "https://www.ilounge.com/news/apple-tv/mere-mortals-mythic-quest-spinoff-to-arrive-on-apple-tv",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Mythic-Quest.png",
        "publishedAt": "2022-12-25T10:58:49Z",
        "content": "Popular Apple TV+ show ‘Mythic Quest’ will be getting a spinoff from its episodes.\r\n‘Mere Mortals’ will follow distinctive storytelling, sourced from fan-favorite episodes such as ‘A Dark Quiet Death… [+778 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Save $49 on the Apple Watch Series 8",
        "description": "Apple’s latest flagship smartwatch offers good value for your money. Today, the Apple Watch Series 8 45mm GPS model is down to just $379.99 ... Read more",
        "url": "https://www.ilounge.com/news/apple-watch/save-49-on-the-apple-watch-series-8",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Apple-Watch-3.png",
        "publishedAt": "2022-12-25T12:32:34Z",
        "content": "Apple’s latest flagship smartwatch offers good value for your money. Today, the Apple Watch Series 8 45mm GPS model is down to just $379.99 from its original price of $429 on Amazon.\r\nThe Apple Watch… [+677 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Emergency SOS via Satellite to launch in more countries",
        "description": "Apple recently announced in a press release that its satellite feature will be arriving on several more countries in 2023. Emergency SOS via Satellite ... Read more",
        "url": "https://www.ilounge.com/news/emergency-sos-via-satellite-to-launch-in-more-countries",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Emergency-SOS-via-Satellite.png",
        "publishedAt": "2022-12-25T11:06:45Z",
        "content": "Apple recently announced in a press release that its satellite feature will be arriving on several more countries in 2023.\r\nEmergency SOS via Satellite was first launched to the public and for the iP… [+683 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Apple DIY repair program expands to Studio Display and M1-Powered desktop macs",
        "description": "Apple has recently expanded its list of self-service repair program to accommodate Mac desktops with the silicon chip. Repair manuals, parts, and tools can ... Read more",
        "url": "https://www.ilounge.com/news/apple-diy-repair-program-expands-to-studio-display-and-m1-powered-desktop-macs",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Apple-3.png",
        "publishedAt": "2022-12-25T12:12:37Z",
        "content": "Apple has recently expanded its list of self-service repair program to accommodate Mac desktops with the silicon chip.\r\nRepair manuals, parts, and tools can now be received for the Mac mini, the M1 M… [+730 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Apple encourages use of Weather app ahead of Dark Sky shutdown",
        "description": "The Dark Sky app is set to shut down for good on January 1, 2023, and Apple sends a reminder to try the Weather app as an alternative.",
        "url": "https://www.ilounge.com/news/apple-encourages-use-of-weather-app-ahead-of-dark-sky-shutdown",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Dark-Sky.png",
        "publishedAt": "2022-12-25T12:09:55Z",
        "content": "The Dark Sky app is set to shut down for good on January 1, 2023, and Apple sends a reminder to try the Weather app as an alternative.\r\nA new support document has been uploaded, highlighting the feat… [+692 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Shortcuts App gets new Wallpapers and Books addition",
        "description": "Apple recently launched a new update for its Shortcuts app to add new actions. Shortcuts is an app that lets users create iPhone, Mac, ... Read more",
        "url": "https://www.ilounge.com/news/shortcuts-app-gets-new-wallpapers-and-books-addition",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Shortcuts-App.png",
        "publishedAt": "2022-12-25T13:05:27Z",
        "content": "Apple recently launched a new update for its Shortcuts app to add new actions.\r\nShortcuts is an app that lets users create iPhone, Mac, and iPad automation. In macOS 13.1, iPadOS 16.2, and iOS, it ha… [+744 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Tech giants team up to create Speedometer 3",
        "description": "Apple will be doing a collaboration with Mozilla and Google to create an app that can benchmark browser performance. The makers of Google Chrome ... Read more",
        "url": "https://www.ilounge.com/news/tech-giants-team-up-to-create-speedometer-3",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/Speedometer-3.png",
        "publishedAt": "2022-12-25T10:57:38Z",
        "content": "Apple will be doing a collaboration with Mozilla and Google to create an app that can benchmark browser performance.\r\nThe makers of Google Chrome and Mozilla Firefox will be teaming up with Apple to … [+811 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "UK Apple buyer gets dog food instead of a MacBook Pro",
        "description": "A Derbyshire native was shocked to find his Amazon package contained dog food instead of a MacBook Pro. Alan Wood recently ordered a MacBook ... Read more",
        "url": "https://www.ilounge.com/news/uk-apple-buyer-gets-dog-food-instead-of-a-macbook-pro",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/UK-Apple-Buyer-Gets-Dog-Food.png",
        "publishedAt": "2022-12-25T12:07:46Z",
        "content": "A Derbyshire native was shocked to find his Amazon package contained dog food instead of a MacBook Pro.\r\nAlan Wood recently ordered a MacBook Pro to give as a gift to his daughter on Amazon. It was o… [+690 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "YouTube bags NFL Sunday Ticket contract",
        "description": "Video streaming website YouTube has concluded a contract to secure the NFL Sunday Ticket. NFL and Google announced the news today, seemingly after the ... Read more",
        "url": "https://www.ilounge.com/news/youtube-bags-nfl-sunday-ticket-contract",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/NFL-Sunday-Ticket.png",
        "publishedAt": "2022-12-25T12:43:27Z",
        "content": "Video streaming website YouTube has concluded a contract to secure the NFL Sunday Ticket.\r\nNFL and Google announced the news today, seemingly after the Apple-NFL talks fell through. Apple was believe… [+702 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "DaVinci Resolve app launches on iPad",
        "description": "DaVinci Resolve, a video editing software for desktop is now available as an iOS app. The developers announced an iPad release in October, with ... Read more",
        "url": "https://www.ilounge.com/news/ipad/davinci-resolve-app-launches-on-ipad",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2022/12/iPad-1.png",
        "publishedAt": "2022-12-25T12:15:10Z",
        "content": "DaVinci Resolve, a video editing software for desktop is now available as an iOS app.\r\nThe developers announced an iPad release in October, with a promise that the app will be optimized for the lates… [+671 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Mydealz.de"
        },
        "author": null,
        "title": "[iTunes] Top Gun Bundle in 4K (OG + Maverick)",
        "description": "7,99€ - iTunesHeute gönnt uns Apple einen Preisnachlass zu den zwei Top Gun Filmen. Mir wird zwar bei beiden HD angezeigt, jedoch sollte eigentlich Maverick in 4K sein. Ich kann das nicht bestätigen und testen, deshalb auf eigene Gefahr. EDIT: Auf dem Mac hab…",
        "url": "https://www.mydealz.de/deals/itunes-top-gun-bundle-og-maverick-2104087",
        "urlToImage": null,
        "publishedAt": "2022-12-25T00:06:08Z",
        "content": "Hallo zusammen,heute gibt es im iTunes 2022 Countdown Top Gun und Top Gun Maverick als Bundle für 7,99 zu habenWer Amazon Prime hat kann Top Gun dort streamen\r\nPVG:Top Gun in HD für 9,99Top Gun Maver… [+60 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Impress.co.jp"
        },
        "author": null,
        "title": "私はこれを買いました！：M1 Maxのパフォーマンスに驚き！ 動画書き出しが高速に、編集作業も安心に　Apple 16インチMacBook Pro（吉村永）",
        "description": "年末恒例のお買い物企画として、写真家・ライターの皆さんに、2022年に購入したアイテムをひとつだけ紹介していただきました。（編集部）",
        "url": "https://dc.watch.impress.co.jp/docs/review/buy/1465062.html",
        "urlToImage": "https://dc.watch.impress.co.jp/img/dcw/list/1465/062/01.jpg",
        "publishedAt": "2022-12-25T01:30:00Z",
        "content": "Apple MacBook Pro 1520165 \r\n 2020AppleSoCApple SiliconM1M1 PROM1 MaxMAXM1 ULTRA \r\n Adobe Lightroom ClassicDaVinci Resolve Studio6K/RAW15 \r\n HDMIHDMI \r\n Wraplus \r\n M1 Max/64GB/2TB82,100 \r\n 30US"
        },
        {
        "source": {
        "id": null,
        "name": "Jin115.com"
        },
        "author": "jin115x",
        "title": "地下アイドルさんたち、なぜか12月24日に続々と体調不良でお休みしてしまう・・・一体なぜ",
        "description": "地下アイドルさんたち、なぜか12月24日に続々と体調不良でお休みしてしまう・・・一体なぜ - オレ的ゲーム速報の記事",
        "url": "http://jin115.com/archives/52361514.html",
        "urlToImage": "https://livedoor.blogimg.jp/jin115/imgs/c/0/c063d5c0.jpg",
        "publishedAt": "2022-12-25T12:00:15Z",
        "content": "@fever_idol ()12/2428‼️ pic.twitter.com/d9EaYIW8Mx\r\n— (@ats43) December 24, 2022\r\n2022/12/24Bunny La Crew @miho_bunnylahttps://t.co/DS6KaSnQpzpic.twitter.com/DwDzhwQjWL\r\n— (@fever_idol) December 24, … [+1029 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "muniuteinl@gmail.com (Mikeknowsme), Mikeknowsme",
        "title": "Anh em đeo Apple Watch hay ngủ trưa ở văn phòng: nên mở báo thức trên Apple Watch luôn",
        "description": "Bài thủ thuật này đặc biệt dành cho những anh em văn phòng đeo Apple Watch thường ngủ trưa ở công ty và cần mở báo thức nhưng sợ làm phiền đồng nghiệp xung quanh bởi tiếng ồn báo thức từ iPhone. Đơn giản chỉ cần mở báo thức trên Apple Watch và việc…",
        "url": "https://tinhte.vn/thread/anh-em-deo-apple-watch-hay-ngu-trua-o-van-phong-nen-mo-bao-thuc-tren-apple-watch-luon.3616527/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/12/6275680_cover_applewatch.jpg",
        "publishedAt": "2022-12-25T08:14:29Z",
        "content": "Nhng vn có tu chn kích hot thông báo trên Apple Watch khi báo thc c t trên iPhone ch im gi. Bng cách bn vào ng dng Watch trên iPhone chn ng h (Clock) chn gt m M thông báo t iPhone (Push Alerts from i… [+256 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "peacewalker215@yahoo.com (P.W), P.W",
        "title": "Facebook và Google mất vị thế \"độc tôn\" ngành quảng cáo trực tuyến ở Mỹ",
        "description": "Giữa thời điểm Amazon, TikTok, Microsoft lẫn Apple đang có những cải thiện đáng kể về sức mạnh quảng cáo trực tuyến, thì lẽ dĩ nhiên miếng bánh thị phần của Google và Facebook, hay chính xác hơn là hai tập đoàn mẹ Alphabet và Meta đang càng lúc…",
        "url": "https://tinhte.vn/thread/facebook-va-google-mat-vi-the-doc-ton-nganh-quang-cao-truc-tuyen-o-my.3616603/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/12/6275847_Cover_Ad.jpg",
        "publishedAt": "2022-12-25T10:24:51Z",
        "content": "Tt c nhng khó khn trên din ra gia thi im nn kinh t M ang có du hiu suy thoái, vi t l lm phát tng, lãi sut vay tng, chi phí kinh doanh cng tng theo, dn ti vic nhiu n v và doanh nghip ct gim mnh chi ph… [+1934 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "cuhiep+3@gmail.com (cuhiep), cuhiep",
        "title": "iPhone 14 Pro: Smartphone sáng tạo nhất năm",
        "description": "Năm nay anh em Mod dã quyết định chọn iPhone 14 Pro (gồm cả Pro Max) là smartphone sáng tạo nhất của năm. Điều này có được đựa theo các yếu tố như là Dynamic Island, Lock Screen, Always-On display… và công cụ mà Apple trang bị trong camera, app.",
        "url": "https://tinhte.vn/thread/iphone-14-pro-smartphone-sang-tao-nhat-nam.3616482/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/12/6275620_TTBC22_iPhone14Pro_sang_Tao1.jpg",
        "publishedAt": "2022-12-25T14:06:48Z",
        "content": "Phn này không ch có trên iPhone 14 Pro mà còn các iPhone khác chy iOS16 là có. Lock Screen trên iPhone nó l lm. Nó không ch là cái màn hình khoá vi cái ng h và notification chy ln xn hay my cái hình … [+518 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "redmondpie.com"
        },
        "author": "RP Staff",
        "title": "Christmas 2022 Sale Now Live: Get Windows 10 For Only $14, Windows 11 For Just $20, Microsoft Office For $26, More",
        "description": "If you're in the market for Microsoft's biggest PC software releases but don't want to pay the biggest prices, look no further.\nThe post Christmas 2022 Sale Now Live: Get Windows 10 For Only $14, Windows 11 For Just $20, Microsoft Office For $26, More first a…",
        "url": "https://www.redmondpie.com/christmas-2022-sale-now-live-get-windows-10-for-only-14-windows-11-for-just-20-microsoft-office-for-26-more/",
        "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2022/12/Screenshot-2022-12-24-035640.jpg",
        "publishedAt": "2022-12-25T00:14:46Z",
        "content": "If you’re in the market for Microsoft’s biggest PC software releases but don’t want to pay the biggest prices, look no further, thanks to SCDKey.\r\nRight now we can help you get hold of Windows 10, Wi… [+1052 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "redmondpie.com"
        },
        "author": "Oliver Haslam",
        "title": "Save $100 On The Bose S1 Pro Bluetooth Speaker This Christmas",
        "description": "Amazon will now sell you the Bose S1 Pro Bluetooth Speaker for just $599, a price that doesn't ask you to enter any discount codes or clip any on-screen coupons.\nThe post Save $100 On The Bose S1 Pro Bluetooth Speaker This Christmas first appeared on Redmond …",
        "url": "https://www.redmondpie.com/save-100-on-the-bose-s1-pro-bluetooth-speaker-this-christmas/",
        "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2022/12/81CeQuzx-vL._AC_SL1500_.jpg",
        "publishedAt": "2022-12-25T00:04:29Z",
        "content": "Amazon will now sell you the Bose S1 Pro Bluetooth Speaker for just $599, a price that doesn’t ask you to enter any discount codes or clip any on-screen coupons.\r\nThis portable Bluetooth speaker come… [+1357 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "redmondpie.com"
        },
        "author": "Oliver Haslam",
        "title": "CR-Scan Lizard 3D Scanner Lets You Scan And Print 3D Models Of Your Loved Ones As Holiday Gifts",
        "description": "Right now is the perfect time to treat yourself to a portable 3D scanner with the CR-Scan Lizard 3D Scanner Premium Combo now available for just $605 as part of Christmas & 2022 holiday season.\nThe post CR-Scan Lizard 3D Scanner Lets You Scan And Print 3D Mod…",
        "url": "https://www.redmondpie.com/cr-scan-lizard-3d-scanner-lets-you-scan-and-print-3d-models-of-your-loved-ones-as-holiday-gifts/",
        "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2022/12/1-3.jpg",
        "publishedAt": "2022-12-25T00:50:21Z",
        "content": "Right now is the perfect time to treat yourself to a portable 3D scanner with the CR-Scan Lizard 3D Scanner Premium Combo now available for just $605 as part of Christmas &amp; 2022 holiday season.\r\n… [+3430 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Netafull.net"
        },
        "author": "コグレマサト",
        "title": "「Mac整備済製品」MacBook Air・MacBook Pro・Mac mini・Mac Studio【2022年12月25日】",
        "description": "Apple公式サイトの「Mac整備済製品」の情報です。 Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 最新の在庫情報は「Apple整備済製品...\n投稿 「Mac整備済製品」MacBook Air・MacBook Pro・Mac mini・Mac Studio【2022年12月25日】 は ネタフル に最初に表示されました。",
        "url": "https://netafull.net/apple-refurbished/0123952.html",
        "urlToImage": "https://netafull.net/wp-content/uploads/2022/12/apple-refurbished-mac.jpg",
        "publishedAt": "2022-12-25T00:00:00Z",
        "content": "AppleMac\r\nApple1\r\nApple\r\nAmazonApple\r\nMac mini [] 8CPU8GPUApple M174,800\r\nMac mini [] 8CPU8GPUApple M194,800\r\n13.3MacBook Air [] 8CPU7GPUApple M1 – 106,800\r\n13.3MacBook Air [] 8CPU7GPUApple M1 – 106,… [+8938 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Everything-everywhere.com"
        },
        "author": "Gary Arndt",
        "title": "The Christmas Truce of 1914",
        "description": "Podcast Transcript On Christmas Eve, 1914, something remarkable happened on the western front during the First World War.  Soldiers in the trenches on both sides of no man’s land ceased fighting. Not only did they stop fighting, but they came out of their tre…",
        "url": "https://everything-everywhere.com/the-christmas-truce-of-1914/",
        "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-wPZqqPq/0/63a929b1/L/Christmas%20Truce-L.png",
        "publishedAt": "2022-12-25T12:26:21Z",
        "content": "Subscribe Apple | Google | Spotify | Amazon | Player.FM | TuneInCastbox | Stitcher | Podcast Republic | RSS | Patreon | Podvine | Goodpods\r\nOn Christmas Eve, 1914, something remarkable happened on th… [+10459 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "huyenvan96@gmail.com (Lê Huyền Vân), Lê Huyền Vân",
        "title": "Google, Apple và Mozilla hợp tác xây dựng chuẩn trình duyệt tốt hơn",
        "description": "Google, Apple và Mozilla đang hợp tác với một mô hình quản trị chung để chia sẻ công việc nhằm tạo ra một tiêu chuẩn trình duyệt web tốt hơn. \n \nSpeedometer 3 là kết quả của quá trình hợp tác nhằm cải thiện hiệu suất và độ mượt mà trên các trình…",
        "url": "https://tinhte.vn/thread/google-apple-va-mozilla-hop-tac-xay-dung-chuan-trinh-duyet-tot-hon.3616488/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2022/12/6275625_1.jpg",
        "publishedAt": "2022-12-25T08:01:04Z",
        "content": "Google, Apple và Mozilla ang hp tác vi mt mô hình qun tr chung chia s công vic nhm to ra mt tiêu chun trình duyt web tt hn. Speedometer 3 là kt qu ca quá trình hp tác nhm ci thin hiu sut và mt mà trê… [+256 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Cult of Mac"
        },
        "author": "Cult of Mac Deals",
        "title": "Get two drones for less than $150 with this amazing bundle",
        "description": "If you haven’t yet stepped up your photography game with a camera drone, now’s the time to do it. That’s because today, you can grab not one but two 4K dual-camera drones for just $149.99. Whether you keep both or share the fun with a friend is up to you. But…",
        "url": "https://www.cultofmac.com/800031/4k-dual-camera-drones/",
        "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2022/12/COM-Drones.jpeg",
        "publishedAt": "2022-12-25T14:30:40Z",
        "content": "If you havent yet stepped up your photography game with a camera drone, nows the time to do it. Thats because today, you can grab not one but two 4K dual-camera drones for just $149.99.\r\nWhether you … [+1419 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Salt Lake Tribune"
        },
        "author": null,
        "title": "This business has been satisfying cravings for sweets in Utah for ... - Salt Lake Tribune",
        "description": "This business has been satisfying cravings for sweets in Utah for ...  Salt Lake Tribune",
        "url": "https://www.sltrib.com/news/2022/12/25/this-business-has-been/",
        "urlToImage": "https://www.sltrib.com/resizer/lgTLs6Y7PTH2IcEFha_0xHUERi8=/1200x630/cloudfront-us-east-1.images.arcpublishing.com/sltrib/3YLWIXPL6JCNPEFEBDF4E63HTM.jpg",
        "publishedAt": "2022-12-25T13:01:22Z",
        "content": "It may surprise you that one of the oldest Utah businesses still in operation today is a candy company. But its true: Sweet Candy Co.started in 1892 and has been in business in the state since 1900.\r… [+3776 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Pueblo Chieftain"
        },
        "author": "Tracy Harmon",
        "title": "Kennadi's Kookies: 8-year-old Pueblo baker starts a small business ... - Pueblo Chieftain",
        "description": "Kennadi Garcia wanted a new bike so she and her father started baking cookies to raise funds. Now, they're finding a sweet spot with their cottage business.",
        "url": "https://www.chieftain.com/story/business/2022/12/25/kennadis-kookies-is-a-business-started-by-an-8-year-old-pueblo-baker/69740901007/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/12/20/NTPC/331ba4eb-0816-4926-89cf-f1a13605a594-Kennadis_Kookies_1.jpg?crop=2399,1350,x0,y0&width=2399&height=1350&format=pjpg&auto=webp",
        "publishedAt": "2022-12-25T12:01:15Z",
        "content": "A small cottage business that started out as a way for an 8-year-old to earn money for a new bike has made waves in the Pueblo baking scene, garnering a top-three spot in the recent Best of Pueblo co… [+4657 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Beast"
        },
        "author": "The Daily Beast",
        "title": "Patton Oswalt: It’s Hard for ‘Insecure People’ to Say Sorry",
        "description": "Photo Illustration by Erin O'Flynn/The Daily Beast/Getty Images\r\nWhat do veteran comedians think of when they hear the term “cancel culture?” Turns out, a whole lot.Over the past few weeks, Andy Levy, host of The New Abnormal politics podcast, has had a few c…",
        "url": "https://www.thedailybeast.com/patton-oswalt-its-hard-for-insecure-people-to-say-sorry",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1671900362/221224-tna-comedians-cancel-culture-hero_ctzx9i",
        "publishedAt": "2022-12-25T02:30:00Z",
        "content": "What do veteran comedians think of when they hear the term cancel culture? Turns out, a whole lot.\r\nOver the past few weeks, Andy Levy, host of The New Abnormalpolitics podcast, has had a few comics … [+1252 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Seeking Alpha"
        },
        "author": "Fountainhead",
        "title": "Poor Earnings, Shallow Recession To Drag S&P 500 Initially, But I Expect Strong Recovery To 4,151 By Year-End 2023",
        "description": "I expect S&P 500 2024 forward earnings to be $237.2, which in my opinion should fetch 17.5X. Learn more about S&P 500 outlook and my market prediction for 2023.",
        "url": "https://seekingalpha.com/article/4566328-poor-earnings-shallow-recession-s-and-p-500-lower-initially-recover-to-4151-by-year-end-2023",
        "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1404005430/image_1404005430.jpg?io=getty-c-w750",
        "publishedAt": "2022-12-25T13:00:15Z",
        "content": "marrio31\r\nI Expect A Slow Burn with S&amp;P 500 Earnings Dropping to $210 in 2023 \r\n Company management and analysts have not been forthcoming enough in reducing S&amp;P 500 (SP500) earnings estimate… [+17539 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Mauro Notarianni",
        "title": "30 anni di PCalc, la calcolatrice alternativa per Mac",
        "description": "Lo sviluppatore di PCalc, storica utility per Mac, festeggia 30 anni della sua creatura, software presentato per la prima volta il 23 dicembre 1992 e da allora sempre aggiornato e ora disponibile in versione per macOS, iPhone, iPad, tvOS e watchOS.\n- su macit…",
        "url": "https://www.macitynet.it/30-di-pcalc-la-calcolatrice-alternativa-per-mac/",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/12/EsempioPcalc-scaled.jpg",
        "publishedAt": "2022-12-25T06:29:23Z",
        "content": "Lo sviluppatore di PCalc, storica utility per Mac, festeggia 30 anni della sua creatura, software presentato per la prima volta il 23 dicembre 1992 e da allora sempre aggiornato e ora disponibile in … [+4009 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Yuri Di Prodo",
        "title": "Nike Training Club su Netflix a dicembre cade a fagiolo",
        "description": "In arrivo 30 ore di video di allenamento e fitness, giusto in tempo per smaltire la pancetta post-feste\n- su macitynet.it Nike Training Club su Netflix a dicembre cade a fagiolo",
        "url": "https://www.macitynet.it/?p=1174622",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/12/nike-training-club-video-allenamento-netflix-dicembre-3.jpg",
        "publishedAt": "2022-12-25T14:59:00Z",
        "content": "Quest’anno smaltire il panettone sarà più facile grazie ai video degli allenamenti di Nike Training Club in arrivo su Netflix, provvidenzialmente, il 30 dicembre. L’azienda dice di voler caricare olt… [+2009 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Mauro Notarianni",
        "title": "Startup paga gli utenti per ottenere da loro dati utili per la pubblicità",
        "description": "\"Caden\" mira esplicitamente a ottenere dagli utenti degli smartphone vari dati, per capire cosa desiderano o vorrebbero comprare, allo scopo ovviamente di proporre loro pubblicità mirata.\n- su macitynet.it Startup paga gli utenti per ottenere da loro dati uti…",
        "url": "https://www.macitynet.it/?p=1175069",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/04/pubblicita00002.jpg",
        "publishedAt": "2022-12-25T11:29:21Z",
        "content": "Jerry Yang – il cofondatore di Yahoo – mediante la sua AME Cloud Ventures, a novembre di quest’anno ha versato 6 milioni di dollari per finanziare una startup denominata “Caden”, una società che mira… [+3023 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Alexandra Semenova",
        "title": "No Santa Claus rally in sight as stocks round out grim 2022: What to know this week",
        "description": "A four-day trading week will bring investors to the end of what's been a difficult year in the stock market traders won't soon forget.",
        "url": "https://finance.yahoo.com/news/stock-market-short-trading-week-ahead-holidays-rates-recession-120033858.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/BZgqCZt7okbBCCHBP.Pc3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-images/2019-12/041fe240-2012-11ea-a8ff-8ff4a9eed5f7",
        "publishedAt": "2022-12-25T12:00:33Z",
        "content": "This coming holiday-shortened week will round out a brutal year for Wall Street as 2022 comes to an end.\r\nThe U.S. stock and bond markets will be closed on Monday, December 26, in observance of Chris… [+6053 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "TipRanks",
        "title": "TipRanks ‘Perfect 10’ List: These 2 Stock Giants Look Compelling at Current Levels",
        "description": "Recognizing the right stocks is a skill that every investor needs to learn, and the sheer volume of market data, on the main indexes, on individual stocks...",
        "url": "https://finance.yahoo.com/news/tipranks-perfect-10-list-2-093000355.html",
        "urlToImage": "https://media.zenfs.com/en/tipranks_452/33a83d81bf1d6a6ddf907637fb0cd623",
        "publishedAt": "2022-12-25T09:30:00Z",
        "content": "Recognizing the right stocks is a skill that every investor needs to learn, and the sheer volume of market data, on the main indexes, on individual stocks, on and from stock analysts, can present an … [+7255 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Il Natale di Amazon: Nothing Phone (1) - 100, cuffie Bose, iPad Pro, Zeiss, Echo Dot e Fire TV Stick -50%, TV (anche OLED LG) e molto altro, ecco le offerte super!",
        "description": "Offerte pazzesche in questo Natale targato Amazon, con prodotti che non erano mai andati in sconto prima! Ecco la nostra selezione natalizia, utile per qualche consiglio nel caso abbiate trovato dei buoni Amazon sotto l'albero!",
        "url": "https://www.hwupgrade.it/news/multimedia/il-natale-di-amazon-nothing-phone-1-100-cuffie-bose-ipad-pro-zeiss-echo-dot-e-fire-tv-stick-50-tv-anche-oled-lg-e-molto-altro-ecco-le-offerte-super_112818.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/amazon_natale_720.jpg",
        "publishedAt": "2022-12-25T10:53:49Z",
        "content": "100 Euro di sconto per  Nothing \r\nPhone (1) 8GB/128GB!\r\nPer la prima volta in offerta le prestigiose auricolari Bose Quietcomfort Earbuds Ii!\r\nMai così basso il prezzo del super fisso Zeiss 2.8/135 Z… [+7813 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Shutterbean.com"
        },
        "author": null,
        "title": "My Everyday Life Week 51",
        "description": "Here’s what this past week looked like- My Everyday Life Week 51\nMerry Christmas if you celebrate it!! \nKitchen window magic. \n\nDropping Cooper off at basketball early in the AM.  It was 32F out. \n\nThe vase I put plaster on during our Sea Ranch Girls trip mak…",
        "url": "https://www.shutterbean.com/2022/my-everyday-life-week-51-10/",
        "urlToImage": "https://www.shutterbean.com/wp-content/uploads/2022/12/myeverydaylifeweek51-8.jpg",
        "publishedAt": "2022-12-25T09:22:44Z",
        "content": "Here’s what this past week looked like- My Everyday Life Week 51\r\nMerry Christmas if you celebrate it!! \r\nKitchen window magic. \r\nDropping Cooper off at basketball early in the AM.  It was 32F out. \r… [+1786 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sspai.com"
        },
        "author": "宛潼",
        "title": "App+1 | 有声有色有形，为 Android 本地音乐播放增味：椒盐音乐",
        "description": "椒盐音乐或许是一款各个方面都能对你胃口的本地音乐播放器——无论是 UI 设计、使用体验还是丰富的音乐播放功能。查看全文",
        "url": "https://sspai.com/post/77446",
        "urlToImage": "https://cdn.sspai.com/article/615e936a-a067-cb8c-dd0d-7bf6cea5eb55.jpg",
        "publishedAt": "2022-12-25T09:50:14Z",
        "content": "app \r\n 10 iPhone iTunes App 2015 Apple Music \r\n Xperia 1 II Android Poweramp \r\n App\r\nN \r\n Apple Music Apple Android iOS Apple Music \r\nPlay Stellio Oto Apple LosslessPoweramp FiiO \r\n X Apple Music\r\n A… [+345 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sapo.pt"
        },
        "author": "Rui Jorge",
        "title": "iPhone novo? Então conheça as 12 novidades do iOS 16.2",
        "description": "O iOS 16.2 está agora disponível para os modelos do iPhone 8 e posteriores, após dois meses de testes. Com adições de última hora como o Apple Music Sing e a proteção de dados...",
        "url": "https://pplware.sapo.pt/smartphones-tablets/ios/iphone-novo-entao-conheca-as-12-novidades-do-ios-16-2/",
        "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2022/12/ios16_rc_00.jpg",
        "publishedAt": "2022-12-25T10:00:59Z",
        "content": "O iOS 16.2 está agora disponível para os modelos do iPhone 8 e posteriores, após dois meses de testes. Com adições de última hora como o Apple Music Sing e a proteção de dados avançada, a atualização… [+4879 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macotakara.jp"
        },
        "author": "danbo",
        "title": "ShiftCam JapanのMagSafe対応ワイヤレスシャッター付iPhone用カメラグリップ「SnapGrip」を試す",
        "description": "SnapGrip\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nShiftCam Japanが、MagSafe対応ワイヤレスシャッター付iPhone用カメラグリップ「SnapGrip」の出荷を開始しています。\nSnapGripは、iPhoneの写真・動画撮影をもっとカンタン＆楽しくする、組み合わせ自由なMagSafe対応スマートフォンカメラアクセサリーです。\nミッドナイト、ディープブルー、ブルー、シャンパン、ピンクの5色がラインア…",
        "url": "https://www.macotakara.jp/accessories/entry-44079.html",
        "urlToImage": "https://www.macotakara.jp/archives/001/202212/0b8f7abca218c33c.jpg",
        "publishedAt": "2022-12-25T01:26:19Z",
        "content": "SnapGrip\r\nShiftCam JapanMagSafeiPhoneSnapGrip\r\nSnapGripiPhoneMagSafe\r\n5\r\nSnapGrip \r\nSnapGripSnapLight SnapPodSnapGrip \r\nApple StoreiPhoneShiftCam ProGrip Starter KitMagSafeiPhone\r\nSnapGrip\r\niPhoneiPh… [+338 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macmagazine.com.br"
        },
        "author": "Priscila Klopper",
        "title": "“O Menino, a Toupeira, a Raposa e o Cavalo” estreia no Apple TV+",
        "description": "Feliz Natal!!  Que tal comemorar esta data tão especial assistindo à estreia de hoje (sim!) do Apple TV+? Desta vez, o streaming da Maçã trouxe a animação \"O Menino, a Toupeira, a Raposa e o Cavalo\" (\"The Boy, the Mole, the Fox and the Horse\"), baseada …",
        "url": "https://macmagazine.com.br/post/2022/12/25/o-menino-a-toupeira-a-raposa-e-o-cavalo-estreia-no-apple-tv/",
        "urlToImage": "https://macmagazine.com.br/wp-content/uploads/2022/12/09-Trailer_Boy_Mole_Fox_Horse.jpg",
        "publishedAt": "2022-12-25T13:30:00Z",
        "content": "Feliz Natal!! \r\nQue tal comemorar esta data tão especial assistindo à estreia de hoje (sim!) do Apple TV+? Desta vez, o streaming da Maçã trouxe a animação “O Menino, a Toupeira, a Raposa e o Cavalo”… [+2844 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Артём Суровцев",
        "title": "Какая модель iPhone самая продаваемая в мире. Удивитесь, когда узнаете",
        "description": "Какой айфон считается самым продаваемым за всю историю гаджетов",
        "url": "https://www.iphones.ru/iNotes/kakaya-model-iphone-samaya-populyarnaya-udivites-kogda-uznaete-12-25-2022",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F12%2F1236.20123.04.jpg",
        "publishedAt": "2022-12-25T15:00:12Z",
        "content": "Apple 1.2 . 4-5 .\r\n : iPhone 2022 \r\n, , . , , . \r\n iPhone \r\niPhone 1- :6,1 iPhone 3G:25 iPhone 3GS:35,6 \r\n , . 100% . 16 , .\r\niPhone 2007 , . - . \r\n , . App Store, . \r\niPhone 5c:24,6 iPhone SE 1- :30… [+900 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Павел",
        "title": "Он не может столько стоить. Обзор первого ноутбука TECNO MEGABOOK T1",
        "description": "Мы выпускали несколько обзоров на смартфоны TECNO, в России компания минимум два года. Бренд аккуратно закрепляется в России своими ценами и качеством и, видимо, накопил запас прочности расширить портфолио. Сегодня посмотрим на TECNO MEGABOOK T1. Лёгкий 15,6-…",
        "url": "https://www.iphones.ru/iNotes/on-ne-mozhet-stolko-stoit-obzor-pervogo-noutbuka-tecno-megabook-t1-12-22-2022",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F12%2Ftecno-megabook-review-iphonesru-7.jpg",
        "publishedAt": "2022-12-25T06:30:58Z",
        "content": "TECNO, . , , .\r\n TECNO MEGABOOK T1. 15,6- , , . \r\n, «» «». , TECNO , .\r\n , - , -.\r\n, . , Apple MacBook Air, «», TECNO . \r\nNEGABOOK T1 , . «» , . \r\n . , , , , , ( ) .\r\n . 15,6 1,48 1,48 . MBP 2018 , «… [+823 chars]"
        }
        ];
    constructor(){
        super();
        // console.log("Hello I am constructor")
        this.state={
            articles:this.articles,
            loading:false
        }
            }
  render() {
    
    
   
    return (
      <div>
        <div className="container">
            <h2 className='my-3'>NewsMonkey - Top Headings</h2>
            <div className="row my-2">
            {this.state.articles.map((elem)=>{
                return <div className="col-md-4 my-2 " key={elem.url}>
                <NewsItem  title={elem.title} desc={elem.description} imageUrl={elem.urlToImage} newsUrl ={elem.url}/>
                </div>;

            })}
                {/* <div className="col-md-4 my-2">
                <NewsItem title="My title" desc="my description" imageUrl="https://media.wired.com/photos/63a1ff7d458a34a808b82cc2/191:100/w_1280,c_limit/Cul-streamingroundup-1354133617.jpg"/>
                </div>
                <div className="col-md-4 my-2">
                <NewsItem title="My title" desc="my description" imageUrl="https://media.wired.com/photos/63a1ff7d458a34a808b82cc2/191:100/w_1280,c_limit/Cul-streamingroundup-1354133617.jpg"/>
                </div> */}
            </div>
        </div>
      </div>
    )
  }
}

export default News

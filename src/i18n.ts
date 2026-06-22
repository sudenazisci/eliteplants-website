export type Language = 'tr' | 'en' | 'es' | 'fr' | 'de' | 'ru';

export interface TranslationDict {
  // Nav
  navProducts: string;
  navVarieties: string;
  navAbout: string;
  navContact: string;

  // Hero
  heroTitlePrefix: string;
  heroCursive: string;
  heroTitleSuffix: string;
  heroDesc: string;
  heroExplore: string;
  heroStatBahceTitle: string;
  heroStatBahceDesc: string;
  heroStatCesitTitle: string;
  heroStatCesitDesc: string;
  heroStatYilTitle: string;
  heroStatYilDesc: string;

  // Products
  productsCursive: string;
  productsSub: string;
  productsExplore: string;
  productsKaraberryDesc: string;
  productsAlberryDesc: string;
  productsGokberryDesc: string;

  // About
  aboutTitle: string;
  aboutCursive: string;
  aboutDesc1: string;
  aboutDesc2: string;
  aboutSub: string;
  aboutStoryTab: string;
  aboutOrganicTab: string;
  aboutStoryTitle: string;
  aboutOrganicTitle: string;
  aboutOrganicDesc: string;

  // Varieties
  varietiesTitle: string;
  varietiesCursive: string;
  varietiesSub: string;
  varietiesFruitSelect: string;
  varietiesSoon: string;

  // Detail Modal
  modalOrigin: string;
  modalGrowth: string;
  modalFruitSize: string;
  modalTaste: string;
  modalChill: string;
  modalHarvest: string;
  modalShelfLife: string;
  modalFeatures: string;
  modalClose: string;
  modalOrganic: string;
  modalSapling: string;
  modalSustainable: string;

  // Footer
  footerDesc: string;
  footerRights: string;
  footerCert: string;
  footerCert2: string;

  // Varieties Data
  caddo_tag: string;
  caddo_desc: string;
  caddo_origin: string;
  caddo_growth: string;
  caddo_size: string;
  caddo_taste: string;
  caddo_chill: string;
  caddo_harvest: string;
  caddo_shelf: string;

  a2526t_tag: string;
  a2526t_desc: string;
  a2526t_origin: string;
  a2526t_growth: string;
  a2526t_size: string;
  a2526t_taste: string;
  a2526t_chill: string;
  a2526t_harvest: string;
  a2526t_shelf: string;

  traveler_tag: string;
  traveler_desc: string;
  traveler_origin: string;
  traveler_growth: string;
  traveler_size: string;
  traveler_taste: string;
  traveler_chill: string;
  traveler_harvest: string;
  traveler_shelf: string;

  kokanee_tag: string;
  kokanee_desc: string;
  kokanee_origin: string;
  kokanee_growth: string;
  kokanee_size: string;
  kokanee_taste: string;
  kokanee_chill: string;
  kokanee_harvest: string;
  kokanee_shelf: string;

  miniblues_tag: string;
  miniblues_desc: string;
  miniblues_origin: string;
  miniblues_growth: string;
  miniblues_size: string;
  miniblues_taste: string;
  miniblues_chill: string;
  miniblues_harvest: string;
  miniblues_shelf: string;

  cupla_tag: string;
  cupla_desc: string;
  cupla_origin: string;
  cupla_growth: string;
  cupla_size: string;
  cupla_taste: string;
  cupla_chill: string;
  cupla_harvest: string;
  cupla_shelf: string;
}

export const translations: Record<Language, TranslationDict> = {
  tr: {
    navProducts: 'Ürünlerimiz',
    navVarieties: 'Çeşitlerimiz',
    navAbout: 'Hakkımızda',
    navContact: 'İletişim',
    heroTitlePrefix: 'Türkiye\'nin ',
    heroCursive: 'kalbinden',
    heroTitleSuffix: ' sofranıza',
    heroDesc: 'Türkiye’nin seçkin tarım havzalarında yetiştirdiğimiz EMCO CAL lisanslı tescilli meyvelerimizi, yüksek aroma ve maksimum tazelik standartlarıyla doğrudan sofranıza ulaştırıyoruz.',
    heroExplore: 'Bahçemizi Keşfet',
    heroStatBahceTitle: '50+ Dönüm',
    heroStatBahceDesc: 'Test Bahçesi',
    heroStatCesitTitle: '12+ Lisanslı',
    heroStatCesitDesc: 'Elit Çeşit',
    heroStatYilTitle: '2022\'den',
    heroStatYilDesc: 'Beri Hizmet',
    productsCursive: 'Elit Meyve Koleksiyonumuz',
    productsSub: 'Türkiye’nin bereketli topraklarında, yüksek aroma, ideal sertlik oranı ve üstün antioksidan değerleriyle yetiştirdiğimiz seçkin meyve çeşitlerimizi inceleyin.',
    productsExplore: 'İncele',
    productsKaraberryDesc: 'Yüksek aromalı dikensiz primocane ve floricane böğürtlenler. EMCO CAL\'in üstün meyve kalitesi, uzun raf ömrü ve benzersiz tatlılık sunan tescilli dünya lideri çeşitleri.',
    productsAlberryDesc: 'Taze pazar ve sanayiye uygun yüksek verimli ahududular. Parlak kırmızı renk, yüksek sıkılık ve organik üretime tam uyum sağlayan tescilli EMCO CAL klonları.',
    productsGokberryDesc: 'Geleneksel aromaya sahip çıtır ve bol mumsu mavi yemişler. Yüksek antioksidan, üstün dayanıklılık ve benzersiz tat profili sunan yeni nesil EMCO CAL seçkileri.',
    aboutTitle: 'Topraktan Sofraya Hikayemiz',
    aboutCursive: 'Hikayemiz',
    aboutDesc1: 'Afyonkarahisar Sultandağı\'nın bereketli eteklerinde, sürdürülebilir tarım ve üstün meyve kalitesi ilkeleriyle 2022 yılında yola çıktık. Amacımız, Türkiye genelindeki yerli tüketicilerimizi yüksek verimli, tescilli ve lisanslı lezzetlerle buluşturarak taze meyve üretimini desteklemektir.',
    aboutDesc2: 'Dereçine\'deki 50+ dönümlük test bahçemizde, küresel ıslah devlerinin geliştirdiği tescilli fidanlarımızı Türkiye iklimine ve toprak yapısına adapte etmek için bilimsel yöntemlerle çalışıyoruz. Sağlıklı doku kültürü kökenli materyallerimiz, sürdürülebilir tarımın geleceğini şekillendiriyor.',
    aboutSub: 'Üstün meyve kalitesi ve sürdürülebilir üretim ilkelerimizle tarımın geleceğine yön veriyoruz.',
    aboutStoryTab: 'Hikayemiz',
    aboutOrganicTab: 'Organik Tarım',
    aboutStoryTitle: 'Kuruluş Hikayemiz & Vizyonumuz',
    aboutOrganicTitle: 'Sertifikalı Organik Tarım',
    aboutOrganicDesc: 'Kimyasal gübre veya sentetik katkı maddelerinden uzak durarak, T.C. Organik Tarım (TR-OT) sertifikasyon standartlarında üretim yapıyoruz. Toprağımızın mikroorganizma çeşitliliğini korumak için kompost ve faydalı bakterilerle doğal canlılığı destekliyor, sürdürülebilir bir ekosistem inşa ediyoruz.',
    varietiesTitle: 'Organik Meyve Çeşitlerimiz',
    varietiesCursive: 'Lisanslı Üretim',
    varietiesSub: 'Dereçine bahçemizde özenle yetiştirdiğimiz, tescilli ve EMCO CAL lisanslı elit meyve çeşitlerimizin teknik özelliklerini ve verim analizlerini inceleyin.',
    varietiesFruitSelect: 'Meyve Seçimi',
    varietiesSoon: 'Yakında',
    modalOrigin: 'Köken / Islahçı',
    modalGrowth: 'Büyüme Formu',
    modalFruitSize: 'Meyve Boyutu',
    modalTaste: 'Lezzet Profili',
    modalChill: 'Soğuklama İhtiyacı',
    modalHarvest: 'Hasat Dönemi',
    modalShelfLife: 'Raf Ömrü & Dayanıklılık',
    modalFeatures: 'Öne Çıkan Özellikler',
    modalClose: 'Kapat',
    modalOrganic: 'Organik Tarım',
    modalSapling: 'Üstün Kalite meyve',
    modalSustainable: 'Sürdürülebilir',
    footerDesc: 'Afyonkarahisar ili Sultandağı ilçesi Dereçine kasabasında 2022 yılından beri doğaya saygılı, organik tarım standartlarında sürdürülebilir meyve yetiştiriciliği yapıyoruz.',
    footerRights: 'Tüm Hakları Saklıdır.',
    footerCert: 'EMCO CAL Lisanslı Meyve Üreticisi',
    footerCert2: 'Tarımsal Üretim Sertifikalı',

    caddo_tag: 'Floricane / Yazlık',
    caddo_desc: 'Caddo® (A-2428T), yüksek verimli, taze pazar için ideal iri meyveler (ortalama 8-10g) üreten, mükemmel bitki sağlığına sahip dikensiz bir Karaberry (böğürtlen) çeşididir. Çok tatlı, istikrarlı aromatik lezzeti (%10.5 Brix) ve olağanüstü hasat sonrası dayanıklılığı ile öne çıkar. Hastalıklara tam dirençlidir.',
    caddo_origin: 'University of Arkansas Islah Programı',
    caddo_growth: 'Dik Büyüyen (Erect), Tamamen Dikensiz',
    caddo_size: 'Büyük Meyveli (Ortalama 8-10g)',
    caddo_taste: 'Çok Tatlı, Mükemmel Aromatik (%10.5 Brix)',
    caddo_chill: 'Yaklaşık 300 Saat Soğuklama',
    caddo_harvest: 'Haziran - Temmuz (Floricane)',
    caddo_shelf: 'Mükemmel Taşıma ve Depolama Dayanıklılığı',

    a2526t_tag: 'Deneysel Elit Seçki',
    a2526t_desc: 'Arkansas Üniversitesi ıslah programı ve EMCO CAL işbirliğiyle test edilen, özellikle Avrupa ve Türkiye pazarındaki üreticiler arasında mükemmel raf ömrü sayesinde büyük ilgi gören deneysel bir Karaberry klonudur. Yaklaşık 128.9 cm bitki boyuna sahiptir.',
    a2526t_origin: 'Arkansas Üniv. Islah Programı / EMCO CAL',
    a2526t_growth: 'Yarı Dik (Ortalama 128.9 cm boy), Dikensiz',
    a2526t_size: 'İri, Yuvarlak-Oval Meyve Yapısı',
    a2526t_taste: 'Damak zevkine son derece uygun, tatlı ve hafif asitli (Şeker/Asit oranı: 10–13)',
    a2526t_chill: '300-400 Saat',
    a2526t_harvest: 'Temmuz Başı ve Ortası',
    a2526t_shelf: 'Mükemmel Raf Ömrü (Avrupa ve Türkiye pazarlarında yoğun ilgi)',

    traveler_tag: 'Primocane / Çift Hasat',
    traveler_desc: 'Traveler™ (APF 190T cv.), Arkansas Üniversitesi tarafından geliştirilen, erken meyve verimi ve çok iyi lezzetiyle öne çıkan dikensiz bir primocane (güzlük) Karaberry çeşididir. Haziran başında yazlık sürgünlerden (floricane), Ağustos ayından donlara kadar ise güzlük sürgünlerden (primocane) çift hasat imkanı sunar.',
    traveler_origin: 'University of Arkansas Islah Programı',
    traveler_growth: 'Dik ve Güçlü Büyüyen, Tamamen Dikensiz',
    traveler_size: 'Orta-İri, Tutarlı İyi Şekil (6-8g)',
    traveler_taste: 'Çok İyi Lezzet ve Aroma, Düşük Asit (%10-12 Brix)',
    traveler_chill: 'Güzlük Üretim İçin Soğuklama Gerekmez',
    traveler_harvest: 'Çift Hasat: Haziran & Ağustos-Donlara Kadar',
    traveler_shelf: 'Mükemmel Taşıma Dayanıklılığı, Renk Kaybı Düşük',

    kokanee_tag: 'Primocane / Güzlük',
    kokanee_desc: 'Kokanee cv., USDA-ARS (Oregon) tarafından geliştirilen, harika lezzeti, yüksek verimi ve mükemmel meyve sıkılığı ile öne çıkan bir primocane (güzlük) Ahududu çeşididir. Sıfır soğuklama ihtiyacı sayesinde subtropikal iklimlerde dahi yetiştirilebilir.',
    kokanee_origin: 'USDA-ARS (Oregon, ABD)',
    kokanee_growth: 'Güçlü, Dik Büyüyen (Upright), Hasadı Kolay',
    kokanee_size: 'Orta-İri, Tutarlı Şekil (Ortalama 3.3g)',
    kokanee_taste: 'Geniş Olgunluk Skalasında Çok İyi Lezzet (%11.6 Brix)',
    kokanee_chill: 'Soğuklama İhtiyacı Yoktur',
    kokanee_harvest: 'Erken Sonbahar (Heritage\'dan 10-14 gün erken)',
    kokanee_shelf: 'Çok İyi Raf Ömrü ve Taşıma Dayanıklılığı',

    miniblues_tag: 'Northern Highbush / Gelecek Planı',
    miniblues_desc: 'Mini Blues (USDA-ARS Corvallis), yoğun gurme lezzeti, yüksek verimi ve küçük meyve boyutu ile ön plana çıkan bir Gökberry (mavi yemiş) çeşididir. Özellikle taze tüketim ve gıda sanayisinde yoğun aroması nedeniyle tercih edilen bu elit çeşit, Dereçine tesislerimiz için gelecek planlarımız arasındadır.',
    miniblues_origin: 'USDA-ARS, Corvallis, Oregon / EMCO CAL',
    miniblues_growth: 'Dik Büyüyen, Makine Hasadına Uygun',
    miniblues_size: 'Küçük-Orta, Üniform ve Çok Sıkı (0.8-1.2g)',
    miniblues_taste: 'Olağanüstü Tatlı, Yoğun Gurme Aromalı',
    miniblues_chill: '800 Saat (Orta-Yüksek Soğuklama)',
    miniblues_harvest: 'Temmuz Ortası - Ağustos Başı',
    miniblues_shelf: 'Çok Yüksek, Soğuk Muhafazaya Çok Uygun',

    cupla_tag: 'Cuna de Platero / Gelecek Planı',
    cupla_desc: 'Cupla, EMCO CAL lisanslı, erken dönem hasadına uygun ve son derece verimli bir Gökberry (mavi yemiş) çeşididir. Çok sulu, aromatik ve lezzetli meyvelere sahiptir. Dereçine ikliminde erken bahar hasadı için gelecek planlarımız arasındadır.',
    cupla_origin: 'Cuna de Platero, İspanya / EMCO CAL',
    cupla_growth: 'Dik ve Yarı Yayvan, Kolay Hasat Edilebilir',
    cupla_size: 'İri ve Üniform Meyve Yapısı',
    cupla_taste: 'Bol Sulu, Tatlı ve Dengeli Asit',
    cupla_chill: 'Düşük Soğuklama İhtiyacı',
    cupla_harvest: 'Aralık - Nisan Sonu (Erkenci Hasat)',
    cupla_shelf: 'İyi, Taze Pazar Gönderimine Uygun'
  },
  en: {
    navProducts: 'Products',
    navVarieties: 'Varieties',
    navAbout: 'About Us',
    navContact: 'Contact',
    heroTitlePrefix: 'From Turkey\'s ',
    heroCursive: 'heart',
    heroTitleSuffix: ' to your table',
    heroDesc: 'Each fruit grown in our ecological garden ripens with love, abundance of sun and nature\'s little magic. We offer you fresh organic fruits with home warmth.',
    heroExplore: 'Explore Our Garden',
    heroStatBahceTitle: '50+ Acres',
    heroStatBahceDesc: 'Test Garden',
    heroStatCesitTitle: '12+ Licensed',
    heroStatCesitDesc: 'Elite Varieties',
    heroStatYilTitle: 'Since',
    heroStatYilDesc: '2022',
    productsCursive: 'Elite Fruit Collection',
    productsSub: 'Our licensed elite fruits ripen under the sun, boasting unique intense aromas, superior firmness, and rich antioxidants in every bite.',
    productsExplore: 'Examine',
    productsKaraberryDesc: 'High aroma, thornless primocane and floricane blackberries. Proprietary world-leading varieties of EMCO CAL offering superior fruit quality, long shelf life, and unique sweetness.',
    productsAlberryDesc: 'High yield raspberries suitable for fresh market and industry. Registered EMCO CAL clones providing bright red color, high firmness, and full compatibility with organic farming.',
    productsGokberryDesc: 'Crisp and highly waxy blueberries with traditional aroma. Next generation EMCO CAL selections offering high antioxidant levels, superior durability, and unique taste profile.',
    aboutTitle: 'Our Story from Soil to Table',
    aboutCursive: 'Our Story',
    aboutDesc1: 'We set out in 2022 on the fertile foothills of Sultandağı, Afyonkarahisar, with the principles of sustainable agriculture and superior sapling quality. Our aim is to support value-added agriculture by bringing local producers across Turkey together with high-yield, registered, and licensed Karaberry and Alberry varieties.',
    aboutDesc2: 'In our 50+ acres test garden in Dereçine, we work with scientific methods to adapt our proprietary saplings developed by global breeding giants to the climate and soil structure of Turkey. Our healthy tissue culture-derived materials shape the future of sustainable agriculture.',
    aboutSub: 'We shape the future of agriculture with our superior sapling quality and sustainable production principles.',
    aboutStoryTab: 'Our Story',
    aboutOrganicTab: 'Organic Farming',
    aboutStoryTitle: 'Our Founding Story & Vision',
    aboutOrganicTitle: 'Certified Organic Farming',
    aboutOrganicDesc: 'Avoiding chemical fertilizers or synthetic additives, we produce according to Republic of Turkey Organic Farming (TR-OT) certification standards. We support natural soil biology using compost and beneficial bacteria to build a sustainable ecosystem.',
    varietiesTitle: 'Our Organic Fruit Varieties',
    varietiesCursive: 'Licensed Production',
    varietiesSub: 'Examine the technical specifications and yield analysis of our elite, registered, and EMCO CAL licensed fruit varieties carefully grown in our Dereçine garden.',
    varietiesFruitSelect: 'Fruit Selection',
    varietiesSoon: 'Soon',
    modalOrigin: 'Origin / Breeder',
    modalGrowth: 'Growth Habit',
    modalFruitSize: 'Fruit Size',
    modalTaste: 'Taste Profile',
    modalChill: 'Chilling Hours',
    modalHarvest: 'Harvest Period',
    modalShelfLife: 'Shelf Life',
    modalFeatures: 'Key Features',
    modalClose: 'Close',
    modalOrganic: 'Organic Farming',
    modalSapling: 'Superior Fruit',
    modalSustainable: 'Sustainable',
    footerDesc: 'We have been practicing sustainable fruit growing at organic farming standards respectful to nature in Dereçine, Sultandağı, Afyonkarahisar since 2022.',
    footerRights: 'All Rights Reserved.',
    footerCert: 'EMCO CAL Licensed Fruit Producer',
    footerCert2: 'Agricultural Production Certified',

    caddo_tag: 'Floricane / Summer',
    caddo_desc: 'Caddo® (A-2428T) is a high-yielding, thornless blackberry variety with excellent plant health, producing large fruits (avg 8-10g) ideal for the fresh market. It stands out with a sweet, stable aromatic flavor (10.5% Brix) and outstanding post-harvest durability. Fully disease resistant.',
    caddo_origin: 'University of Arkansas Breeding Program',
    caddo_growth: 'Erect growing, fully thornless',
    caddo_size: 'Large fruits (avg 8-10g)',
    caddo_taste: 'Very sweet, excellent aroma (10.5% Brix)',
    caddo_chill: 'Approx. 300 chilling hours',
    caddo_harvest: 'June - July (Floricane)',
    caddo_shelf: 'Excellent transport and storage life',

    a2526t_tag: 'Experimental Elite Selection',
    a2526t_desc: 'An experimental thornless blackberry clone tested in cooperation with the University of Arkansas breeding program and EMCO CAL. It has generated great interest among growers in Europe and the Turkish market due to its excellent shelf life, with an average plant height of roughly 128.9 cm.',
    a2526t_origin: 'Arkansas Univ. Breeding Program / EMCO CAL',
    a2526t_growth: 'Semi-erect (Average plant height ~128.9 cm), thornless',
    a2526t_size: 'Large, round-oval fruit shape',
    a2526t_taste: 'Highly palatable, sweet, and sub-acid (Sugar-to-acid ratio: 10–13)',
    a2526t_chill: '300-400 hours',
    a2526t_harvest: 'Early to mid July',
    a2526t_shelf: 'Excellent shelf life (Generates high interest in European & Turkish markets)',

    traveler_tag: 'Primocane / Double Harvest',
    traveler_desc: 'Traveler™ (APF 190T cv.) is a thornless primocane (fall) blackberry variety developed by the University of Arkansas, featuring early yield and very good flavor. It offers double harvest: early June on floricanes and from August until frost on primocanes.',
    traveler_origin: 'University of Arkansas Breeding Program',
    traveler_growth: 'Erect and strong growth, fully thornless',
    traveler_size: 'Medium-large, consistent good shape (6-8g)',
    traveler_taste: 'Very good flavor and aroma, low acid (10-12% Brix)',
    traveler_chill: 'No winter chill required for primocane production',
    traveler_harvest: 'Double Harvest: June & August-Frost',
    traveler_shelf: 'Excellent transport durability, low color loss',

    kokanee_tag: 'Primocane / Fall',
    kokanee_desc: 'Kokanee cv. is a primocane raspberry variety developed by USDA-ARS (Oregon), distinguished by wonderful flavor, high yield and excellent firmness. Ideal for fresh market with zero chilling requirements, meaning it grows even in subtropical climates.',
    kokanee_origin: 'USDA-ARS (Oregon, USA)',
    kokanee_growth: 'Strong, upright growth, easy harvest',
    kokanee_size: 'Medium-large, consistent shape (avg 3.3g)',
    kokanee_taste: 'Very good flavor across maturity scale (11.6% Brix)',
    kokanee_chill: 'No winter chill required',
    kokanee_harvest: 'Early Fall (10-14 days earlier than Heritage)',
    kokanee_shelf: 'Very good shelf life and transport durability',

    miniblues_tag: 'Northern Highbush / Future Plan',
    miniblues_desc: 'Mini Blues (USDA-ARS Corvallis) is a blueberry variety featuring intense gourmet flavor, high yield, and small fruit size. Requires about 800 chilling hours. Particularly preferred for fresh consumption and food industry due to its rich aroma.',
    miniblues_origin: 'USDA-ARS, Corvallis, Oregon / EMCO CAL',
    miniblues_growth: 'Erect growth, suitable for machine harvesting',
    miniblues_size: 'Small-medium, uniform and very firm (0.8-1.2g)',
    miniblues_taste: 'Outstandingly sweet, intense gourmet aroma',
    miniblues_chill: '800 hours (medium-high chilling)',
    miniblues_harvest: 'Mid July - Early August',
    miniblues_shelf: 'Very high, highly suitable for cold storage',

    cupla_tag: 'Cuna de Platero / Future Plan',
    cupla_desc: 'Cupla is a highly productive blueberry variety licensed by EMCO CAL, suitable for early harvest. Fruits are evenly distributed on branches for easy picking. Very juicy, aromatic and delicious.',
    cupla_origin: 'Cuna de Platero, Spain / EMCO CAL',
    cupla_growth: 'Erect and semi-spreading, easy to harvest',
    cupla_size: 'Large and uniform fruit structure',
    cupla_taste: 'Very juicy, sweet and balanced acidity',
    cupla_chill: 'Low chilling requirement',
    cupla_harvest: 'December - End of April (Early harvest)',
    cupla_shelf: 'Good, suitable for fresh market shipping'
  },
  es: {
    navProducts: 'Productos',
    navVarieties: 'Variedades',
    navAbout: 'Nosotros',
    navContact: 'Contacto',
    heroTitlePrefix: 'Del ',
    heroCursive: 'corazón de Turquía',
    heroTitleSuffix: ' a su mesa',
    heroDesc: 'Cada fruta cultivada en nuestro jardín ecológico madura con amor, abundancia de sol y la pequeña magia de la naturaleza. Le ofrecemos fruta fresca ecológica con la calidez del hogar.',
    heroExplore: 'Explore Nuestro Jardín',
    heroStatBahceTitle: '50+ Acres',
    heroStatBahceDesc: 'Huerto de Prueba',
    heroStatCesitTitle: '12+ Licencias',
    heroStatCesitDesc: 'Variedades de Élite',
    heroStatYilTitle: 'Desde',
    heroStatYilDesc: '2022',
    productsCursive: 'Colección de Frutas de Élite',
    productsSub: 'Nuestras frutas de élite con licencia maduran bajo el sol, ofreciendo aromas intensos únicos, firmeza superior y ricos antioxidantes en cada bocado.',
    productsExplore: 'Examinar',
    productsKaraberryDesc: 'Zarzamoras primocane y floricane sin espinas de gran aroma. Variedades líderes de EMCO CAL que ofrecen calidad de fruta superior, larga vida útil y un dulzor único.',
    productsAlberryDesc: 'Frambuesas de alto rendimiento aptas para mercado en fresco e industria. Clones registrados de EMCO CAL de color rojo brillante, alta firmeza y total compatibilidad orgánica.',
    productsGokberryDesc: 'Arándanos crujientes con aroma tradicional. Selecciones de nueva generación de EMCO CAL que ofrecen altos niveles de antioxidantes, durabilidad superior y sabor único.',
    aboutTitle: 'Nuestra Historia de la Tierra a la Mesa',
    aboutCursive: 'Nuestra Historia',
    aboutDesc1: 'Comenzamos en 2022 en las fértiles faldas del Sultandağı, Afyonkarahisar, con los principios de agricultura sostenible y calidad superior de plantas. Nuestro objetivo es apoyar la agricultura de valor añadido uniendo a productores locales con variedades con licencias de Karaberry y Alberry.',
    aboutDesc2: 'En nuestro huerto de prueba de más de 50 acres en Dereçine, trabajamos con métodos científicos para adaptar plantas desarrolladas por gigantes mundiales de la hibridación al clima y suelo de Turquía. Nuestros materiales de cultivo de tejidos sanos moldean el futuro de la agricultura.',
    aboutSub: 'Modelamos el futuro de la agricultura con nuestra calidad superior de plantas y principios sostenibles.',
    aboutStoryTab: 'Nuestra Historia',
    aboutOrganicTab: 'Agricultura Orgánica',
    aboutStoryTitle: 'Nuestra Historia y Visión',
    aboutOrganicTitle: 'Agricultura Orgánica Certificada',
    aboutOrganicDesc: 'Evitando fertilizantes químicos o aditivos sintéticos, producimos bajo las normas de certificación orgánica de Turquía (TR-OT). Apoyamos la biología natural del suelo con compost y bacterias benéficas para un ecosistema sostenible.',
    varietiesTitle: 'Nuestras Variedades de Frutas Orgánicas',
    varietiesCursive: 'Producción con Licencia',
    varietiesSub: 'Examine las especificaciones técnicas y análisis de rendimiento de nuestras variedades de frutas de élite con licencias de EMCO CAL cultivadas en Dereçine.',
    varietiesFruitSelect: 'Selección de Fruta',
    varietiesSoon: 'Pronto',
    modalOrigin: 'Origen / Obtentor',
    modalGrowth: 'Hábito de Crecimiento',
    modalFruitSize: 'Tamaño del Fruto',
    modalTaste: 'Perfil de Sabor',
    modalChill: 'Horas Frío',
    modalHarvest: 'Período de Cosecha',
    modalShelfLife: 'Vida Útil',
    modalFeatures: 'Características Clave',
    modalClose: 'Cerrar',
    modalOrganic: 'Agricultura Orgánica',
    modalSapling: 'Fruta de Calidad Superior',
    modalSustainable: 'Sostenible',
    footerDesc: 'Llevamos a cabo una fruticultura sostenible y orgánica respetuosa con la naturaleza en Dereçine, Sultandağı, desde 2022.',
    footerRights: 'Todos los Derechos Reservados.',
    footerCert: 'Productor Autorizado de EMCO CAL',
    footerCert2: 'Certificado de Producción Agrícola',

    caddo_tag: 'Floricane / Verano',
    caddo_desc: 'Caddo® (A-2428T) es una variedad de zarzamora sin espinas de alto rendimiento y excelente salud, ideal para mercado fresco. Destaca por su sabor dulce y aromático (10.5% Brix) y durabilidad postcosecha.',
    caddo_origin: 'Programa de Hibridación de la Univ. de Arkansas',
    caddo_growth: 'Crecimiento erecto, totalmente sin espinas',
    caddo_size: 'Frutos grandes (promedio 8-10g)',
    caddo_taste: 'Muy dulce, excelente aroma (10.5% Brix)',
    caddo_chill: 'Aprox. 300 horas frío',
    caddo_harvest: 'Junio - Julio (Floricane)',
    caddo_shelf: 'Excelente transporte y conservación',

    a2526t_tag: 'Selección Élite Experimental',
    a2526t_desc: 'Clon experimental sin espinas probado con la Universidad de Arkansas y EMCO CAL. Posee un aroma perfumado y gourmet muy superior a los estándares comerciales.',
    a2526t_origin: 'Programa de Arkansas / EMCO CAL',
    a2526t_growth: 'Semi-erecto, puede requerir soporte, sin espinas',
    a2526t_size: 'Grande, forma redonda-ovalada',
    a2526t_taste: 'Aroma perfumado intenso, balance gourmet',
    a2526t_chill: '300-400 horas',
    a2526t_harvest: 'Principios a mediados de julio',
    a2526t_shelf: 'Bueno, ideal para consumo local gourmet fresco',

    traveler_tag: 'Primocane / Doble Cosecha',
    traveler_desc: 'Traveler™ (APF 190T cv.) es una variedad de zarzamora primocane sin espinas con cosecha temprana y excelente sabor. Produce en junio (floricanes) y de agosto a heladas (primocanes).',
    traveler_origin: 'Programa de la Universidad de Arkansas',
    traveler_growth: 'Erecto y vigoroso, totalmente sin espinas',
    traveler_size: 'Mediano-grande, forma uniforme (6-8g)',
    traveler_taste: 'Sabor y aroma muy buenos, acidez baja (10-12% Brix)',
    traveler_chill: 'Sin frío invernal para primocanes',
    traveler_harvest: 'Doble cosecha: Junio y Agosto-Heladas',
    traveler_shelf: 'Excelente durabilidad de transporte, baja pérdida de color',

    kokanee_tag: 'Primocane / Otoño',
    kokanee_desc: 'Kokanee cv. es una frambuesa primocane desarrollada por USDA-ARS (Oregón) con gran sabor, alto rendimiento y firmeza. No requiere frío invernal, acopla a climas subtropicales.',
    kokanee_origin: 'USDA-ARS (Oregón, EE. UU.)',
    kokanee_growth: 'Crecimiento erecto fuerte, cosecha fácil',
    kokanee_size: 'Mediano-grande, forma uniforme (promedio 3.3g)',
    kokanee_taste: 'Excelente sabor en madurez (11.6% Brix)',
    kokanee_chill: 'Sin requerimiento de frío',
    kokanee_harvest: 'Otoño temprano (10-14 días antes que Heritage)',
    kokanee_shelf: 'Muy buena vida útil y transporte',

    miniblues_tag: 'Northern Highbush / Plan Futuro',
    miniblues_desc: 'Mini Blues (USDA-ARS) es un arándano de tamaño pequeño con sabor gourmet intenso y alto rendimiento. Requiere 800 horas frío. Ideal para frescos y la industria.',
    miniblues_origin: 'USDA-ARS, Corvallis, Oregón / EMCO CAL',
    miniblues_growth: 'Erecto, apto para cosecha mecanizada',
    miniblues_size: 'Pequeño-mediano, muy firme (0.8-1.2g)',
    miniblues_taste: 'Dulzor excepcional, aroma gourmet concentrado',
    miniblues_chill: '800 horas (frío medio-alto)',
    miniblues_harvest: 'Mitad de julio a principios de agosto',
    miniblues_shelf: 'Muy alta, excelente para almacenamiento en frío',

    cupla_tag: 'Cuna de Platero / Plan Futuro',
    cupla_desc: 'Cupla is a highly productive blueberry variety licensed by EMCO CAL, suitable for early harvest. Fruits are evenly distributed on branches for easy picking. Very juicy, aromatic and delicious.',
    cupla_origin: 'Cuna de Platero, España / EMCO CAL',
    cupla_growth: 'Erecto y semi-abierto, fácil cosecha',
    cupla_size: 'Estructura grande y uniforme',
    cupla_taste: 'Muy jugoso, dulce y acidez equilibrada',
    cupla_chill: 'Bajo requerimiento de frío',
    cupla_harvest: 'Diciembre - Fin de abril (Cosecha temprana)',
    cupla_shelf: 'Bueno, apto para envíos al mercado fresco'
  },
  fr: {
    navProducts: 'Produits',
    navVarieties: 'Variétés',
    navAbout: 'À Propos',
    navContact: 'Contact',
    heroTitlePrefix: 'Du ',
    heroCursive: 'cœur de la Turquie',
    heroTitleSuffix: ' à votre table',
    heroDesc: 'Chaque fruit de notre verger écologique mûrit avec amour, soleil et magie. Nous vous offrons la fraîcheur bio avec la chaleur de notre foyer.',
    heroExplore: 'Explorer Notre Verger',
    heroStatBahceTitle: '50+ Acres',
    heroStatBahceDesc: 'Verger d\'Essai',
    heroStatCesitTitle: '12+ Licenciés',
    heroStatCesitDesc: 'Variétés d\'Élite',
    heroStatYilTitle: 'Depuis',
    heroStatYilDesc: '2022',
    productsCursive: 'Collection de Fruits d\'Élite',
    productsSub: 'Nos fruits d\'élite sous licence mûrissent au soleil, offrant des arômes intenses uniques, une fermeté supérieure et de riches antioxydants à chaque bouchée.',
    productsExplore: 'Examiner',
    productsKaraberryDesc: 'Mûres primocane et floricane sans épines au parfum intense. Variétés leaders d\'EMCO CAL offrant une qualité supérieure, une longue conservation et une douceur unique.',
    productsAlberryDesc: 'Framboises à haut rendement pour le marché frais et l\'industrie. Clones enregistrés d\'EMCO CAL offrant un rouge éclatant, une grande fermeté et une parfaite adaptation au bio.',
    productsGokberryDesc: 'Myrtilles croquantes et cireuses à l\'arôme traditionnel. Sélections de nouvelle génération d\'EMCO CAL offrant antioxydants, durabilité supérieure et goût unique.',
    aboutTitle: 'Notre Histoire de la Terre à la Table',
    aboutCursive: 'Notre Histoire',
    aboutDesc1: 'Nous nous sommes lancés en 2022 sur les flancs fertiles du Sultandağı, avec pour principes une agriculture durable et une qualité supérieure de plants. Notre but est de valoriser l\'agriculture en proposant des variétés licenciées de Karaberry et d\'Alberry.',
    aboutDesc2: 'Dans notre verger d\'essai de plus de 50 acres à Dereçine, nous adaptons par des méthodes scientifiques les variétés de leaders mondiaux de l\'hybridation au climat et aux sols de Turquie. Nos cultures in vitro saines dessinent l\'agriculture de demain.',
    aboutSub: 'Nous façonnons l\'avenir agricole grâce à la qualité supérieure de nos plants et à nos valeurs durables.',
    aboutStoryTab: 'Notre Histoire',
    aboutOrganicTab: 'Agriculture Bio',
    aboutStoryTitle: 'Notre Histoire & Vision',
    aboutOrganicTitle: 'Agriculture Biologique Certifiée',
    aboutOrganicDesc: 'Sans engrais chimiques ni additifs synthétiques, nous produisons selon les normes de certification TR-OT. Nous soutenons la biologie naturelle des sols à l\'aide de compost et de bactéries bénéfiques.',
    varietiesTitle: 'Nos Variétés de Fruits Bio',
    varietiesCursive: 'Production sous Licence',
    varietiesSub: 'Consultez les fiches techniques et analyses de rendement de nos variétés de fruits d\'élite sous licence EMCO CAL cultivés avec soin dans nos vergers de Dereçine.',
    varietiesFruitSelect: 'Choix du Fruit',
    varietiesSoon: 'Bientôt',
    modalOrigin: 'Origine / Obtenteur',
    modalGrowth: 'Port de la Plante',
    modalFruitSize: 'Calibre du Fruit',
    modalTaste: 'Profil Gustatif',
    modalChill: 'Besoins en Froid',
    modalHarvest: 'Période de Récolte',
    modalShelfLife: 'Conservation',
    modalFeatures: 'Points Forts',
    modalClose: 'Fermer',
    modalOrganic: 'Arboriculture Bio',
    modalSapling: 'Fruit de Qualité',
    modalSustainable: 'Durable',
    footerDesc: 'Nous pratiquons une arboriculture fruitière durable et bio au pied du mont Sultandağı à Dereçine depuis 2022.',
    footerRights: 'Tous Droits Réservés.',
    footerCert: 'EMCO CAL Licensed Fruit Producer',
    footerCert2: 'Certifié pour la Production Agricole',

    caddo_tag: 'Floricane / Été',
    caddo_desc: 'Caddo® (A-2428T) est une variété de mûre sans épines à fort rendement et excellente santé. Fruits très sucrés et parfumés (10.5% Brix) avec une remarquable tenue post-récolte.',
    caddo_origin: 'Programme d\'amélioration de l\'Université de l\'Arkansas',
    caddo_growth: 'Port dressé, totalement sans épines',
    caddo_size: 'Gros fruits (moyenne 8-10g)',
    caddo_taste: 'Très sucré, arôme excellent (10.5% Brix)',
    caddo_chill: 'Env. 300 heures de froid',
    caddo_harvest: 'Juin - Juillet (Floricane)',
    caddo_shelf: 'Excellente tenue au transport et stockage',

    a2526t_tag: 'Sélection Élite Expérimentelle',
    a2526t_desc: 'Clon expérimental sans épines évalué avec l\'Université de l\'Arkansas et EMCO CAL. Senteur de parfum et de gourmet très supérieure aux standards.',
    a2526t_origin: 'Arkansas / EMCO CAL',
    a2526t_growth: 'Semi-dressé, tuteurage conseillé, sans épines',
    a2526t_size: 'Gros, forme ronde-ovale',
    a2526t_taste: 'Arôme parfumé intense, équilibre gustatif supérieur',
    a2526t_chill: '300-400 heures',
    a2526t_harvest: 'Début à mi-juillet',
    a2526t_shelf: 'Bonne, idéale pour circuit court gourmet local',

    traveler_tag: 'Primocane / Double Récolte',
    traveler_desc: 'Traveler™ (APF 190T cv.) est une mûre primocane sans épines avec une précocité remarquable et un goût excellent. Double récolte: juin (floricanes) et août aux gelées (primocanes).',
    traveler_origin: 'Université de l\'Arkansas',
    traveler_growth: 'Érigé et vigoureux, totalement sans épines',
    traveler_size: 'Moyen-gros, forme régulière (6-8g)',
    traveler_taste: 'Très bon goût, faible acidité (10-12% Brix)',
    traveler_chill: 'Pas de froid hivernal requis pour primocanes',
    traveler_harvest: 'Double récolte: Juin & Août-Gelées',
    traveler_shelf: 'Excellente aptitude au transport, faible perte de couleur',

    kokanee_tag: 'Primocane / Automne',
    kokanee_desc: 'Kokanee cv. is une framboise primocane (USDA-ARS Oregón) très sucrée, ferme et productive. Pas de besoin en froid, s\'adapte aux régions subtropicales.',
    kokanee_origin: 'USDA-ARS (Oregon, États-Unis)',
    kokanee_growth: 'Fort développement érigé, cueillette aisée',
    kokanee_size: 'Moyen-grand, forme uniforme (moyenne 3.3g)',
    kokanee_taste: 'Excellente saveur à maturité (11.6% Brix)',
    kokanee_chill: 'Aucun besoin en froid',
    kokanee_harvest: 'Début automne (10-14 jours avant Heritage)',
    kokanee_shelf: 'Très bonne durée de conservation et transport',

    miniblues_tag: 'Northern Highbush / Projet',
    miniblues_desc: 'Mini Blues (USDA-ARS) &ndash; это сорт голубики с интенсивным вкусом, высокой урожайностью и мелким размером ягоды.',
    miniblues_origin: 'USDA-ARS, Corvallis, Oregon / EMCO CAL',
    miniblues_growth: 'Dressé, adapté à la récolte mécanique',
    miniblues_size: 'Petit-moyen, très ferme (0.8-1.2g)',
    miniblues_taste: 'Douceur exceptionnelle, arôme gourmet concentré',
    miniblues_chill: '800 heures (froid moyen-élevé)',
    miniblues_harvest: 'Mi-juillet à début août',
    miniblues_shelf: 'Très élevée, excellente pour le stockage au froid',

    cupla_tag: 'Cuna de Platero / Projet',
    cupla_desc: 'Cupla est une myrtille très productive sous licence EMCO CAL, pour récolte précoce. Fruits juteux et savoureux, parfaits pour le marché frais.',
    cupla_origin: 'Cuna de Platero, Espagne / EMCO CAL',
    cupla_growth: 'Érigé et semi-ouvert, cueillette facile',
    cupla_size: 'Calibre gros et homogène',
    cupla_taste: 'Trés juteuse, douce et acidité équilibrée',
    cupla_chill: 'Faibles besoins en froid',
    cupla_harvest: 'Décembre - Fin avril (Récolte précoce)',
    cupla_shelf: 'Bonne, adaptée à l\'expédition fraîche'
  },
  de: {
    navProducts: 'Produkte',
    navVarieties: 'Sorten',
    navAbout: 'Über uns',
    navContact: 'Kontakt',
    heroTitlePrefix: 'Aus dem ',
    heroCursive: 'Herzen der Türkei',
    heroTitleSuffix: ' auf Ihren Tisch',
    heroDesc: 'Jede Frucht in unserem ökologischen Garten reift mit Liebe, viel Sonne und der kleinen Magie der Natur. Wir bieten Ihnen frische Bio-Früchte mit häuslicher Wärme.',
    heroExplore: 'Erkunden Sie Unseren Garten',
    heroStatBahceTitle: '50+ Morgen',
    heroStatBahceDesc: 'Versuchsgarten',
    heroStatCesitTitle: '12+ Lizenziert',
    heroStatCesitDesc: 'Elite-Sorten',
    heroStatYilTitle: 'Seit',
    heroStatYilDesc: '2022',
    productsCursive: 'Elite-Obstkollektion',
    productsSub: 'Unsere lizenzierten Elite-Früchte reifen unter der Sonne und bieten bei jedem Bissen einzigartige intensive Aromen, hervorragende Festigkeit und reichhaltige Antioxidantien.',
    productsExplore: 'Prüfen',
    productsKaraberryDesc: 'Aromatische dornenlose Primocane- und Floricane-Brombeeren. Führende Sorten von EMCO CAL mit hervorragender Fruchtqualität, langer Haltbarkeit und einzigartiger Süße.',
    productsAlberryDesc: 'Ertragsstarke Himbeeren für Frischmarkt und Industrie. Registrierte EMCO CAL-Klone mit leuchtend roter Farbe, hoher Festigkeit und Eignung für den Bio-Anbau.',
    productsGokberryDesc: 'Knackige und wachsartige Blaubeeren mit traditionellem Aroma. EMCO CAL-Sorten der nächsten Generation mit hohem Antioxidantiengehalt, Haltbarkeit und Geschmack.',
    aboutTitle: 'Unsere Geschichte vom Feld auf den Tisch',
    aboutCursive: 'Unsere Geschichte',
    aboutDesc1: 'Gegründet im Jahr 2022 an den fruchtbaren Hängen des Sultandağı mit dem Ziel, die Landwirtschaft durch den Einsatz ertragreicher, lizenzierter Karaberry- und Alberry-Sorten zu unterstützen.',
    aboutDesc2: 'In unserem über 50 Morgen großen Versuchsgarten in Dereçine passen wir Sorten globaler Züchter an das Klima und die Böden der Türkei an. Unsere gesunden In-vitro-Kulturen sichern die Zukunft.',
    aboutSub: 'Wir gestalten die Zukunft der Landwirtschaft mit unserer herausragenden Pflanzenqualität und Nachhaltigkeit.',
    aboutStoryTab: 'Unsere Geschichte',
    aboutOrganicTab: 'Ökologischer Anbau',
    aboutStoryTitle: 'Gründungsgeschichte & Vision',
    aboutOrganicTitle: 'Zertifizierter Bio-Anbau',
    aboutOrganicDesc: 'Unter Verzicht auf Kunstdünger und synthetische Zusätze produzieren wir nach strengen Bio-Zertifizierungsstandards (TR-OT). Wir fördern die natürliche Bodenbiologie durch Kompost und nützliche Bakterien.',
    varietiesTitle: 'Unsere Bio-Obstsorten',
    varietiesCursive: 'Lizenzierte Produktion',
    varietiesSub: 'Prüfen Sie die technischen Spezifikationen und Ertragsanalysen unserer in Dereçine angebauten Elite-Obstsorten mit EMCO CAL-Lizenz.',
    varietiesFruitSelect: 'Fruchtwahl',
    varietiesSoon: 'Demnächst',
    modalOrigin: 'Herkunft / Züchter',
    modalGrowth: 'Wuchsform',
    modalFruitSize: 'Fruchtgröße',
    modalTaste: 'Geschmacksprofil',
    modalChill: 'Kältebedarf',
    modalHarvest: 'Erntezeit',
    modalShelfLife: 'Haltbarkeit',
    modalFeatures: 'Hauptmerkmale',
    modalClose: 'Schließen',
    modalOrganic: 'Biologischer Anbau',
    modalSapling: 'Elite-Frucht',
    modalSustainable: 'Nachhaltig',
    footerDesc: 'Nachhaltiger Obstbau nach biologischen Richtlinien am Fuße des Sultandağı-Gebirges seit 2022.',
    footerRights: 'Alle Rechte vorbehalten.',
    footerCert: 'Lizenzierter EMCO CAL Obstvermehrungsbetrieb',
    footerCert2: 'Zertifizierter Landwirtschaftsbetrieb',

    caddo_tag: 'Floricane / Sommer',
    caddo_desc: 'Caddo® (A-2428T) ist eine ertragreiche, dornenlose Brombeersorte mit exzellenter Gesundheit. Sehr süße und aromatische Früchte (10.5% Brix) mit hervorragender Lagerfähigkeit.',
    caddo_origin: 'Züchtungsprogramm der Universität Arkansas',
    caddo_growth: 'Aufrecht wachsend, völlig dornenlos',
    caddo_size: 'Große Früchte (durchschnittlich 8-10g)',
    caddo_taste: 'Sehr süß, hervorragendes Aroma (10.5% Brix)',
    caddo_chill: 'Ca. 300 Kälteschutzstunden',
    caddo_harvest: 'Juni - Juli (Floricane)',
    caddo_shelf: 'Exzellente Transport- und Lagerfähigkeit',

    a2526t_tag: 'Experimentelle Elite-Auswahl',
    a2526t_desc: 'Experimenteller dornenloser Brombeerklon, der in Zusammenarbeit mit der Universität Arkansas und EMCO CAL getestet wird. Übertrifft kommerzielle Standards im Duft.',
    a2526t_origin: 'Universität Arkansas / EMCO CAL',
    a2526t_growth: 'Halbaufrecht, benötigt Unterstützung, dornenlos',
    a2526t_size: 'Groß, rund-oval',
    a2526t_taste: 'Intensives Aroma, erstklassige Geschmacksausgewogenheit',
    a2526t_chill: '300-400 Stunden',
    a2526t_harvest: 'Anfang bis Mitte Juli',
    a2526t_shelf: 'Gut, geeignet für lokale Direktvermarktung',

    traveler_tag: 'Primocane / Zweimaltragend',
    traveler_desc: 'Traveler™ (APF 190T cv.) ist eine dornenlose Primocane-Brombeere mit früher Ernte und sehr gutem Geschmack. Zweimaltragend: Juni und ab August bis zum Frost.',
    traveler_origin: 'Universität Arkansas Züchtungsprogramm',
    traveler_growth: 'Aufrecht und stark wachsend, völlig dornenlos',
    traveler_size: 'Mittelschein-groß, gleichmäßige Form (6-8g)',
    traveler_taste: 'Sehr guter Geschmack, säurearm (10-12% Brix)',
    traveler_chill: 'Kein Kältebedarf für Primocane-Ernte',
    traveler_harvest: 'Doppelte Ernte: Juni & August-Frost',
    traveler_shelf: 'Hervorragende Transportfähigkeit, geringer Farbverlust',

    kokanee_tag: 'Primocane / Herbst',
    kokanee_desc: 'Kokanee cv. ist eine Primocane-Himbeere (USDA-ARS Oregon) mit feinem Geschmack, hohem Ertrag und Festigkeit. Wächst ohne Kältebedürfnis auch in Subtropen.',
    kokanee_origin: 'USDA-ARS (Oregon, USA)',
    kokanee_growth: 'Kräftiger, aufrechter Wuchs, leichte Ernte',
    kokanee_size: 'Mittelgroß, gleichmäßige Form (ca. 3.3g)',
    kokanee_taste: 'Sehr guter Geschmack bei Vollreife (11.6% Brix)',
    kokanee_chill: 'Kein Kältebedarf erforderlich',
    kokanee_harvest: 'Früher Herbst (10-14 Tage vor Heritage)',
    kokanee_shelf: 'Sehr gute Haltbarkeit und Transportfähigkeit',

    miniblues_tag: 'Northern Highbush / Zukunftsplan',
    miniblues_desc: 'Mini Blues (USDA-ARS) ist eine Blaubeere mit intensivem Geschmack, hohem Ertrag und kleiner Fruchtgröße. Benötigt 800 Kältestunden. Perfekt für Frischverzehr.',
    miniblues_origin: 'USDA-ARS, Corvallis, Oregon / EMCO CAL',
    miniblues_growth: 'Aufrechter Wuchs, maschinell erntbar',
    miniblues_size: 'Klein-mittel, sehr fest (0.8-1.2g)',
    miniblues_taste: 'Außergewöhnlich süß, intensives Gourmet-Aroma',
    miniblues_chill: '800 Stunden (mittlere bis hohe Kälte)',
    miniblues_harvest: 'Mitte Juli - Anfang August',
    miniblues_shelf: 'Sehr hoch, bestens für Kühllagerung geeignet',

    cupla_tag: 'Cuna de Platero / Zukunftsplan',
    cupla_desc: 'Cupla ist eine ertragreiche Blaubeere mit EMCO CAL-Lizenz, ideal für die Frühernte. Sehr saftig, aromatisch und süß, bestens für Frischmarkt geeignet.',
    cupla_origin: 'Cuna de Platero, Spanien / EMCO CAL',
    cupla_growth: 'Aufrecht und halb-ausladend, leicht zu ernten',
    cupla_size: 'Große und gleichmäßige Fruchtstruktur',
    cupla_taste: 'Sehr saftig, süß, ausgewogene Säure',
    cupla_chill: 'Geringer Kältebedarf',
    cupla_harvest: 'Dezember - Ende April (Frühernte)',
    cupla_shelf: 'Gut, für Frischversand geeignet'
  },
  ru: {
    navProducts: 'Продукция',
    navVarieties: 'Сорта',
    navAbout: 'О нас',
    navContact: 'Контакты',
    heroTitlePrefix: 'Из самого ',
    heroCursive: 'сердца Турции',
    heroTitleSuffix: ' к вашему столу',
    heroDesc: 'Каждая ягода, выращенная в нашем экологическом саду, созревает с любовью, обилием солнца и маленьким волшебством природы. Мы предлагаем вам свежие органические фрукты с домашним теплом.',
    heroExplore: 'Наш Сад',
    heroStatBahceTitle: '50+ Акров',
    heroStatBahceDesc: 'Опытный сад',
    heroStatCesitTitle: '12+ Лицензий',
    heroStatCesitDesc: 'Элитных сортов',
    heroStatYilTitle: 'С',
    heroStatYilDesc: '2022 года',
    productsCursive: 'Коллекция элитных фруктов',
    productsSub: 'Наши лицензированные элитные фрукты созревают под солнцем, даря уникальный насыщенный аромат, превосходную плотность и богатство антиоксидантов в каждой ягоде.',
    productsExplore: 'Подробнее',
    productsKaraberryDesc: 'Высокоароматная ежевика без шипов. Элитные запатентованные сорта EMCO CAL с отличным качеством, вкусом и долгим сроком хранения.',
    productsAlberryDesc: 'Малина высокой урожайности для свежего рынка и переработки. Запатентованные клоны EMCO CAL, обладающие высокой плотностью и ярко-красным цветом.',
    productsGokberryDesc: 'Хрустящая голубика с традиционным вкусом. Новейшие сорта от EMCO CAL с высокой лежкостью, отличной транспортабельностью и антиоксидантами.',
    aboutTitle: 'Наша история от земли до стола',
    aboutCursive: 'Наша история',
    aboutDesc1: 'Мы начали свой путь в 2022 году у подножия горы Султандаг с принципами устойчивого сельского хозяйства и высочайшего качества саженцев для поддержки местных производителей.',
    aboutDesc2: 'В нашем опытном саду площадью более 50 акров в Дерачине мы адаптируем лучшие мировые сорта к климату и почвам Турции, используя научные методы.',
    aboutSub: 'Мы формируем будущее сельского хозяйства, предлагая высокое качество саженцев и экологичное производство.',
    aboutStoryTab: 'Наша история',
    aboutOrganicTab: 'Органическое земледелие',
    aboutStoryTitle: 'История и миссия питомника',
    aboutOrganicTitle: 'Сертифицированное эко-производство',
    aboutOrganicDesc: 'Избегая химических удобрений и синтетических добавок, мы производим продукцию по стандартам органического земледелия (TR-OT). Мы поддерживаем биологию почв компостом.',
    varietiesTitle: 'Наши сорта органических ягод',
    varietiesCursive: 'Лицензионное производство',
    varietiesSub: 'Ознакомьтесь с техническими характеристиками и урожайностью элитных лицензированных сортов EMCO CAL из нашего сада в Дерачине.',
    varietiesFruitSelect: 'Выбор ягоды',
    varietiesSoon: 'Скоро',
    modalOrigin: 'Происхождение / Селекционер',
    modalGrowth: 'Характер роста',
    modalFruitSize: 'Размер ягоды',
    modalTaste: 'Вкус',
    modalChill: 'Потребность в холоде',
    modalHarvest: 'Период сбора',
    modalShelfLife: 'Срок хранения',
    modalFeatures: 'Ключевые качества',
    modalClose: 'Закрыть',
    modalOrganic: 'Органическое земледелие',
    modalSapling: 'Элитная ягода',
    modalSustainable: 'Экологичный',
    footerDesc: 'Экологичное земледелие, производство сертифицированных и лицензированных саженцев у подножия горы Султандаг с 2022 года.',
    footerRights: 'Все права защищены.',
    footerCert: 'Лицензированный производитель EMCO CAL',
    footerCert2: 'Сертифицированное сельхозпроизводство',

    caddo_tag: 'Floricane / Летний',
    caddo_desc: 'Caddo® (A-2428T) — высокоурожайный бесшипный сорт ежевики с отличным здоровьем, идеальный для рынка свежей продукции. Отличается сладким ароматным вкусом (10,5% Brix) и высокой лежкостью.',
    caddo_origin: 'Программа селекции Арканзасского университета',
    caddo_growth: 'Прямостоячий, полностью бесшипный',
    caddo_size: 'Крупные ягоды (в среднем 8-10 г)',
    caddo_taste: 'Очень сладкий, отличный аромат (10,5% Brix)',
    caddo_chill: 'Около 300 часов охлаждения',
    caddo_harvest: 'Июнь - Июль (Floricane)',
    caddo_shelf: 'Отличная транспортабельность и лежкость',

    a2526t_tag: 'Экспериментальный элитный клон',
    a2526t_desc: 'Экспериментальный клон без шипов, созданный при поддержке Университета Арканзаса и EMCO CAL. Обладает выдающимся ароматом и вкусом.',
    a2526t_origin: 'Университет Арканзаса / EMCO CAL',
    a2526t_growth: 'Полупрямостоячий, требует опоры, бесшипный',
    a2526t_size: 'Крупная ягода округло-овальной формы',
    a2526t_taste: 'Интенсивный парфюмерный аромат, гурманский баланс',
    a2526t_chill: '300-400 часов',
    a2526t_harvest: 'Начало-середина июля',
    a2526t_shelf: 'Хороший, идеален для местного свежего потребления',

    traveler_tag: 'Primocane / Двойной урожай',
    traveler_desc: 'Traveler™ (APF 190T cv.) — бесшипный сорт ежевики primocane (осенний) селекции Арканзаса. Ранняя ягода с отличным вкусом. Дает двойной сбор: в июне и с августа до заморозков.',
    traveler_origin: 'Программа селекции Арканзасского университета',
    traveler_growth: 'Прямостоячий, мощный рост, полностью бесшипный',
    traveler_size: 'Средне-крупный, однородный (6-8 г)',
    traveler_taste: 'Очень хороший вкус и аромат, низкая кислотность (10-12% Brix)',
    traveler_chill: 'Не требует зимнего охлаждения для побегов текущего года',
    traveler_harvest: 'Двойной сбор: Июнь и Август-Заморозки',
    traveler_shelf: 'Отличная транспортабельность, малая потеря цвета',

    kokanee_tag: 'Primocane / Осенний',
    kokanee_desc: 'Kokanee cv. — ремонтантный сорт малины селекции USDA-ARS (Орегон) с прекрасным вкусом, высокой урожайностью и плотностью ягод. Растет даже в субтропиках.',
    kokanee_origin: 'USDA-ARS (Oregon, USA)',
    kokanee_growth: 'Мощный, прямостоячий куст, легкий сбор',
    kokanee_size: 'Средне-крупный куст, однородный размер (3.3 г)',
    kokanee_taste: 'Отличный вкус на любой стадии зрелости (11.6% Brix)',
    kokanee_chill: 'Не требует охлаждения',
    kokanee_harvest: 'Ранняя осень (на 10-14 дней раньше сорта Heritage)',
    kokanee_shelf: 'Очень хорошая лежкость и прочность при перевозке',

    miniblues_tag: 'Northern Highbush / Перспектива',
    miniblues_desc: 'Mini Blues (USDA-ARS) — сорт голубики с интенсивным гурманским вкусом, высокой урожайностью и мелким размером ягоды. Требует 800 часов охлаждения.',
    miniblues_origin: 'USDA-ARS, Корваллис, Орегон / EMCO CAL',
    miniblues_growth: 'Прямостоячий, пригоден для машинной уборки',
    miniblues_size: 'Мелко-средний, плотный (0.8-1.2 г)',
    miniblues_taste: 'Чрезвычайно сладкий, концентрированный аромат',
    miniblues_chill: '800 часов (средне-высокое охлаждение)',
    miniblues_harvest: 'Середина июля - начало августа',
    miniblues_shelf: 'Очень высокая, отлично переносит холодное хранение',

    cupla_tag: 'Cuna de Platero / Перспектива',
    cupla_desc: 'Cupla — высокоурожайный сорт голубики по лицензии EMCO CAL для раннего сбора. Ягоды очень сочные, ароматные и сладкие, идеальны для свежего рынка.',
    cupla_origin: 'Cuna de Platero, Испания / EMCO CAL',
    cupla_growth: 'Прямостоячий куст, легкий сбор ягод',
    cupla_size: 'Крупный размер ягоды, однородная структура',
    cupla_taste: 'Очень сочный, сладкий с гармоничной кислинкой',
    cupla_chill: 'Низкая потребность в холоде',
    cupla_harvest: 'Декабрь - конец апреля (ранний сбор)',
    cupla_shelf: 'Хорошая, отлично переносит транспортировку'
  }
};

import React, { useState, useEffect, useRef } from 'react';
import { Activity, Sprout, ChevronLeft, ChevronRight, Eye, X, BookOpen, ThermometerSun, MapPin, TrendingUp, Maximize, Utensils, Snowflake, CalendarDays, ShieldCheck } from 'lucide-react';
import type { VarietyDetail } from './DetailModal';
import type { FruitType } from './FruitSelector';
import { ThreeScene } from './ThreeScene';

interface ContentOverlayProps {
  activeFruit: FruitType;
  setActiveFruit: (fruit: FruitType) => void;
  onOpenVariety: (variety: VarietyDetail) => void;
}

// Dynamically import all images in src/assets/images using Vite glob
let dynamicGardenImages: string[] = [];
try {
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,PNG,JPEG,JPG}', { eager: true });
  dynamicGardenImages = Object.values(imagesGlob).map((img: any) => img.default || img);
} catch (e) {
  console.warn("Failed to load dynamic images from src/assets/images", e);
}

// Fallback static array
const fallbackImages = [
  '/images/garden_1.jpg',
  '/images/garden_2.jpg',
  '/images/garden_3.jpg',
  '/images/garden_4.jpg',
  '/images/garden_5.jpg',
  '/images/garden_6.jpg',
];

const gardenImages = dynamicGardenImages.length > 0 ? dynamicGardenImages : fallbackImages;

export const ContentOverlay: React.FC<ContentOverlayProps> = ({ activeFruit, setActiveFruit, onOpenVariety: _onOpenVariety }) => {
  const [gardenIndex, setGardenIndex] = useState(0);
  const [expandedVarietyId, setExpandedVarietyId] = useState<string | null>('caddo');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [aboutTab, setAboutTab] = useState<'story' | 'organic' | 'terroir'>('story');
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll for dynamic hero animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Autoplay slideshow effect
  useEffect(() => {
    if (!isAutoplay || gardenImages.length === 0) return;
    
    const interval = setInterval(() => {
      setGardenIndex((prev) => (prev + 1) % gardenImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, gardenImages.length]);

  const varietyData: Record<string, VarietyDetail[]> = {
    blackberry: [
      {
        id: 'caddo',
        name: 'Caddo® Karaberry',
        type: 'blackberry',
        tag: 'Floricane / Yazlık',
        description: 'Caddo® (A-2428T), yüksek verimli, taze pazar için ideal iri meyveler (ortalama 8-10g) üreten, mükemmel bitki sağlığına sahip dikensiz bir Karaberry (böğürtlen) çeşididir. Çok tatlı, istikrarlı aromatik lezzeti (%10.5 Brix) ve olağanüstü hasat sonrası dayanıklılığı ile öne çıkar. Hasat sonrası 7 günden fazla depolamada bile lezzetini korur. Hastalıklara tam dirençlidir. Hem ticari üretim hem de butik bahçeler için mükemmel bir seçimdir.',
        image: '/images/caddo_blackberry.png',
        origin: 'University of Arkansas Islah Programı',
        growth: 'Dik Büyüyen (Erect), Tamamen Dikensiz',
        fruitSize: 'Büyük Meyveli (Ortalama 8-10g)',
        taste: 'Çok Tatlı, Mükemmel Aromatik (%10.5 Brix)',
        chillHours: 'Yaklaşık 300 Saat Soğuklama',
        harvest: 'Haziran - Temmuz (Floricane)',
        shelfLife: 'Mükemmel Taşıma ve Depolama Dayanıklılığı'
      },
      {
        id: 'a2526t',
        name: 'A-2526T Karaberry',
        type: 'blackberry',
        tag: 'Deneysel Elit Seçki',
        description: 'Arkansas Üniversitesi ıslah programı ve EMCO CAL işbirliğiyle test edilen deneysel bir dikensiz Karaberry klonudur. Aromatik uçucu bileşenler (volatile organic compounds) bakımından ticari standartların çok üzerinde, parfümsü ve gurme bir kokuya sahiptir. Yarı-dik büyüme alışkanlığı gösteren bu elit hat, özel butik organik bahçeler ve yüksek katma değerli gurme meyve pazarları için Dereçine test parsellerimizde titizlikle gözlemlenmektedir.',
        image: '/images/a2526t_blackberry.png',
        origin: 'Arkansas Üniv. Islah Programı / EMCO CAL',
        growth: 'Yarı Dik, Desteğe ihtiyaç duyabilir, Dikensiz',
        fruitSize: 'İri, Yuvarlak-Oval Meyve Yapısı',
        taste: 'Çok Yoğun Parfümsü Aroma, Üstün Lezzet Dengesi',
        chillHours: '300-400 Saat',
        harvest: 'Temmuz Başı ve Ortası',
        shelfLife: 'İyi, Butik Toplama ve Taze Yerel Gurme Tüketime Uygun'
      },
      {
        id: 'traveler',
        name: 'Traveler™ Karaberry',
        type: 'blackberry',
        tag: 'Primocane / Çift Hasat',
        description: 'Traveler™ (APF 190T cv.), Arkansas Üniversitesi tarafından geliştirilen, erken meyve verimi ve çok iyi lezzetiyle öne çıkan dikensiz bir primocane (güzlük) Karaberry çeşididir. Meyveler tatlı, düşük asitli (%10-12 Brix) ve parlak siyah renklidir. Haziran başında yazlık sürgünlerden (floricane), Ağustos ayından donlara kadar ise güzlük sürgünlerden (primocane) çift hasat imkanı sunar. Sıkı meyve yapısı sayesinde nakliye ve raf ömrü mükemmeldir.',
        image: '/images/traveler_blackberry.png',
        origin: 'University of Arkansas Islah Programı',
        growth: 'Dik ve Güçlü Büyüyen, Tamamen Dikensiz',
        fruitSize: 'Orta-İri, Tutarlı İyi Şekil (6-8g)',
        taste: 'Çok İyi Lezzet ve Aroma, Düşük Asit (%10-12 Brix)',
        chillHours: 'Güzlük Üretim İçin Soğuklama Gerekmez',
        harvest: 'Çift Hasat: Haziran & Ağustos-Donlara Kadar',
        shelfLife: 'Mükemmel Taşıma Dayanıklılığı, Renk Kaybı Düşük'
      }
    ],
    raspberry: [
      {
        id: 'kokanee',
        name: 'Kokanee cv. Alberry',
        type: 'raspberry',
        tag: 'Primocane / Güzlük',
        description: 'Kokanee cv., USDA-ARS (Oregon) tarafından geliştirilen, harika lezzeti, yüksek verimi ve mükemmel meyve sıkılığı ile öne çıkan bir primocane (güzlük) Ahududu çeşididir. Taze pazar için ideal olan bu çeşit, dik büyüme alışkanlığıyla hasat kolaylığı sunar. Meyveler parlak açık kırmızı renkli ve orta-iri boyuttadır (ortalama 3.3g). Sıfır soğuklama ihtiyacı (no winter chill) sayesinde subtropikal iklimlerde dahi yetiştirilebilir ve Heritage çeşidinden 10-14 gün daha erken olgunlaşır.',
        image: '/images/kokanee_raspberry.png',
        origin: 'USDA-ARS (Oregon, ABD)',
        growth: 'Güçlü, Dik Büyüyen (Upright), Hasadı Kolay',
        fruitSize: 'Orta-İri, Tutarlı Şekil (Ortalama 3.3g)',
        taste: 'Geniş Olgunluk Skalasında Çok İyi Lezzet (%11.6 Brix)',
        chillHours: 'Soğuklama İhtiyacı Yoktur',
        harvest: 'Erken Sonbahar (Heritage\'dan 10-14 gün erken)',
        shelfLife: 'Çok İyi Raf Ömrü ve Taşıma Dayanıklılığı'
      }
    ],
    blueberry: [
      {
        id: 'miniblues',
        name: 'Mini Blues Gökberry',
        type: 'blueberry',
        tag: 'Northern Highbush / Gelecek Planı',
        description: 'Mini Blues (USDA-ARS Corvallis), yoğun gurme lezzeti, yüksek verimi ve küçük meyve boyutu ile ön plana çıkan bir Gökberry (mavi yemiş) çeşididir. Yaklaşık 800 saat soğuklama ihtiyacı duyar. Özellikle taze tüketim ve gıda sanayisinde yoğun aroması nedeniyle tercih edilen bu elit çeşit, Dereçine tesislerimiz için gelecek planlarımız arasındadır.',
        image: '/images/miniblues_blueberry.png',
        origin: 'USDA-ARS, Corvallis, Oregon / EMCO CAL',
        growth: 'Dik Büyüyen, Makine Hasadına Uygun',
        fruitSize: 'Küçük-Orta, Üniform ve Çok Sıkı (0.8-1.2g)',
        taste: 'Olağanüstü Tatlı, Yoğun Gurme Aromalı',
        chillHours: '800 Saat (Orta-Yüksek Soğuklama)',
        harvest: 'Temmuz Ortası - Ağustos Başı',
        shelfLife: 'Çok Yüksek, Soğuk Muhafazaya Çok Uygun'
      },
      {
        id: 'cupla',
        name: 'Cupla Gökberry',
        type: 'blueberry',
        tag: 'Cuna de Platero / Gelecek Planı',
        description: 'Cupla, EMCO CAL lisanslı, erken dönem hasadına uygun ve son derece verimli bir Gökberry (mavi yemiş) çeşididir. Meyveler dallarda dengeli dağılarak toplama kolaylığı sağlar. Çok sulu, aromatik ve lezzetli meyvelere sahiptir. Aralık ile Nisan sonu arasında uzun bir hasat periyodu sunar ve Dereçine ikliminde erken bahar hasadı için gelecek planlarımız arasındadır.',
        image: '/images/cupla_blueberry.png',
        origin: 'Cuna de Platero, İspanya / EMCO CAL',
        growth: 'Dik ve Yarı Yayvan, Kolay Hasat Edilebilir',
        fruitSize: 'İri ve Üniform Meyve Yapısı',
        taste: 'Bol Sulu, Tatlı ve Dengeli Asit',
        chillHours: 'Düşük Soğuklama İhtiyacı',
        harvest: 'Aralık - Nisan Sonu (Erkenci Hasat)',
        shelfLife: 'İyi, Taze Pazar Gönderimine Uygun'
      }
    ]
  };

  const thumbnailBarRef = useRef<HTMLDivElement>(null);

  // Reset expanded variety when changing fruit category
  useEffect(() => {
    setExpandedVarietyId(varietyData[activeFruit] && varietyData[activeFruit][0] ? varietyData[activeFruit][0].id : null);
  }, [activeFruit]);


  // Scroll active thumbnail into view smoothly without jumping the window
  useEffect(() => {
    if (thumbnailBarRef.current) {
      const activeEl = thumbnailBarRef.current.querySelector('.garden-thumb-item.active') as HTMLElement;
      if (activeEl) {
        const container = thumbnailBarRef.current;
        const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [gardenIndex]);

  const currentVarieties = varietyData[activeFruit] || [];
  const activeVariety = currentVarieties.find(v => v.id === expandedVarietyId) || currentVarieties[0];






  const getCoverflowStyle = (idx: number) => {
    const total = gardenImages.length;
    let diff = idx - gardenIndex;
    
    // Handle circular offsets
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;

    const isActive = diff === 0;
    const isVisible = Math.abs(diff) <= 2; 

    // Horizontal translate values centered for a larger compact side deck
    let translateX = 0;
    if (diff > 0) {
      translateX = 160 + (diff - 1) * 95;
    } else if (diff < 0) {
      translateX = -160 + (diff + 1) * 95;
    }

    const scale = isActive ? 1.0 : 0.82;
    const rotateY = isActive ? 0 : diff > 0 ? -12 : 12; 
    const opacity = isActive ? 1.0 : isVisible ? 0.65 : 0;
    const zIndex = 10 - Math.abs(diff);

    return {
      transform: `translate3d(calc(-50% + ${translateX}px), -50%, ${isActive ? '0px' : '-80px'}) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity: isVisible ? opacity : 0,
      zIndex,
      pointerEvents: isVisible ? 'auto' : 'none',
      visibility: isVisible ? 'visible' : 'hidden',
    } as React.CSSProperties;
  };

  const handleCardClick = (idx: number) => {
    if (idx === gardenIndex) {
      setLightboxImage(gardenImages[idx]);
    } else {
      setGardenIndex(idx);
      setIsAutoplay(false);
    }
  };


  // Calculate dynamic hero scroll styles with realistic depth of field
  const fadeStart = 0;
  const fadeEnd = 500;
  // Base linear progress
  let progress = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
  // Apply easeOutQuad for more natural feeling progression
  progress = progress * (2 - progress);
  
  const heroOpacity = 1 - progress;
  const heroTranslateY = scrollY * 0.35; // smooth parallax
  const heroScale = 1 - (progress * 0.08); // slight push back in 3D space
  const heroBlur = progress * 10; // camera depth of field effect

  const renderBackgroundBerries = () => {
    const color = 'var(--color-primary)';
    
    const berryStyles = [
      { top: '10%', right: '8%', transform: 'rotate(15deg) scale(1.8)' },
      { bottom: '12%', left: '5%', transform: 'rotate(-25deg) scale(1.3)' },
      { top: '15%', left: '42%', transform: 'rotate(45deg) scale(0.9)' },
      { bottom: '8%', right: '35%', transform: 'rotate(-10deg) scale(1.4)' },
      { top: '45%', right: '2%', transform: 'rotate(70deg) scale(1.1)' }
    ];

    return (
      <div className="tab-bg-fruits" style={{ color }}>
        {berryStyles.map((style, idx) => (
          <div key={idx} className="bg-fruit-item" style={{ ...style, position: 'absolute', opacity: 0.06, pointerEvents: 'none', transition: 'all 0.5s ease' }}>
            {activeFruit === 'blackberry' && (
              <svg width="24" height="28" viewBox="0 0 24 28" fill="currentColor">
                <circle cx="12" cy="8" r="4.5" />
                <circle cx="8" cy="12" r="4.5" />
                <circle cx="16" cy="12" r="4.5" />
                <circle cx="12" cy="16" r="4.5" />
                <circle cx="8" cy="20" r="4.5" />
                <circle cx="16" cy="20" r="4.5" />
                <circle cx="12" cy="24" r="4" />
                <path d="M12,4 L11,1 M12,4 L13,1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
            {activeFruit === 'raspberry' && (
              <svg width="24" height="26" viewBox="0 0 24 26" fill="currentColor">
                <circle cx="12" cy="8" r="4.5" />
                <circle cx="8" cy="12" r="4.5" />
                <circle cx="16" cy="12" r="4.5" />
                <circle cx="12" cy="16" r="4.5" />
                <circle cx="9" cy="19" r="4" />
                <circle cx="15" cy="19" r="4" />
                <circle cx="12" cy="22" r="3.5" />
                <path d="M12,4 L11,1 M12,4 L13,1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
            {activeFruit === 'blueberry' && (
              <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor">
                <circle cx="13" cy="14" r="10" />
                <path d="M9,5 L11,7 L13,4 L15,7 L17,5 L16,8 L10,8 Z" fill="currentColor" />
              </svg>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ position: 'relative', zIndex: 10 }}>
      {/* 1. Hero Section - Vintage Centered Layout */}
      <section id="home" className="hero-vintage-section">
        <div className="hero-vintage-content">
          <h1 className="hero-vintage-title">
            Dereçine'nin <span>kalbinden</span><br />sofranıza
          </h1>
          
          <p className="hero-vintage-desc">
            Ekolojik bahçemizde yetiştirdiğimiz her bir meyve; sevgi, bol güneş ve doğanın küçük sihirleriyle olgunlaşıyor. Size ev sıcaklığında, en taze organik meyveleri sunuyoruz.
          </p>
          
          <button 
            className="btn-vintage-outline"
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Bahçemizi Keşfet
          </button>
        </div>

        <div 
          className="hero-illustration-container"
          style={{ 
            opacity: heroOpacity, 
            transform: `translateY(${heroTranslateY}px) scale(${heroScale})`,
            filter: `blur(${heroBlur}px)`,
            willChange: 'opacity, transform, filter',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="hero-illustration-svg-divider">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,50 C180,85 360,15 720,55 C1080,95 1260,25 1440,65 L1440,0 L0,0 Z" fill="#f5ede0" />
            </svg>
          </div>
          <img 
            src="/images/hero_garden_illustration.png" 
            alt="Ekolojik Bahçemiz İllüstrasyonu" 
            className="hero-illustration-img" 
          />
        </div>
      </section>

      {/* 2. Products Section */}
      <section id="products" className="scroll-section products-section">
        {/* Soft double wave divider */}
        <div className="products-bg-wave">
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C320,200 640,70 960,160 C1280,250 1360,120 1440,150 L1440,0 L0,0 Z" fill="#f5ede0" opacity="0.6" />
            <path d="M0,90 C320,170 640,40 960,130 C1280,220 1360,90 1440,120 L1440,0 L0,0 Z" fill="#f5ede0" />
          </svg>
        </div>

        {/* Decorative background leaf outlines */}
        <div className="products-leaf-left">
          <svg width="240" height="300" viewBox="0 0 240 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,290 C60,250 140,240 180,180 C220,120 180,40 120,20 C60,0 20,60 10,120 C0,180 30,220 10,290 Z" fill="#1c3224" opacity="0.04" />
            <path d="M50,260 C90,220 160,210 190,160 C220,110 190,40 140,30" stroke="#1c3224" strokeWidth="2" strokeDasharray="4 4" opacity="0.06" />
          </svg>
        </div>

        <div className="products-leaf-right">
          <svg width="240" height="300" viewBox="0 0 240 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M230,290 C180,250 100,240 60,180 C20,120 60,40 120,20 C180,0 220,60 230,120 C240,180 210,220 230,290 Z" fill="#c7923e" opacity="0.04" />
            <path d="M190,260 C150,220 80,210 50,160 C20,110 50,40 100,30" stroke="#c7923e" strokeWidth="2" strokeDasharray="4 4" opacity="0.05" />
          </svg>
        </div>

        {/* Vintage Header */}
        <div className="products-header-vintage">
          <h2 className="products-vintage-cursive">Tohumdan tebessüme</h2>
          <p className="products-vintage-typewriter">
            Bahçemizden sofranıza uzanan her bir adımda; özen, tazelik ve doğanın küçük sihirleri saklı.
          </p>
        </div>

        <div className="products-vintage-grid">
          {/* Karaberry Postage Stamp Card */}
          <div 
            className="product-stamp-card" 
            onClick={() => { 
              setActiveFruit('blackberry'); 
              document.getElementById('varieties')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
          >
            <div className="product-3d-wrap">
              <ThreeScene activeFruit="blackberry" disableScrollFade={true} />
            </div>
            <h3 className="product-stamp-title">Karaberry</h3>
            <span className="product-stamp-subtitle">Böğürtlen</span>
            <p className="product-stamp-desc">
              Yüksek aromalı dikensiz primocane ve floricane böğürtlenler. EMCO CAL'in üstün meyve kalitesi, uzun raf ömrü ve benzersiz tatlılık sunan tescilli dünya lideri çeşitleri.
            </p>
            <button className="product-stamp-link">İncele →</button>
          </div>

          {/* Alberry Postage Stamp Card */}
          <div 
            className="product-stamp-card" 
            onClick={() => { 
              setActiveFruit('raspberry'); 
              document.getElementById('varieties')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
          >
            <div className="product-3d-wrap">
              <ThreeScene activeFruit="raspberry" disableScrollFade={true} />
            </div>
            <h3 className="product-stamp-title">Alberry</h3>
            <span className="product-stamp-subtitle">Ahududu</span>
            <p className="product-stamp-desc">
              Taze pazar ve sanayiye uygun yüksek verimli ahududular. Parlak kırmızı renk, yüksek sıkılık ve organik üretime tam uyum sağlayan tescilli EMCO CAL klonları.
            </p>
            <button className="product-stamp-link">İncele →</button>
          </div>

          {/* Gökberry Postage Stamp Card */}
          <div 
            className="product-stamp-card product-stamp-coming-soon" 
            onClick={() => { 
              setActiveFruit('blueberry'); 
              document.getElementById('varieties')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
          >
            <div className="stamp-badge-vintage">Pek Yakında</div>
            <div className="product-3d-wrap">
              <ThreeScene activeFruit="blueberry" disableScrollFade={true} />
            </div>
            <h3 className="product-stamp-title">Gökberry</h3>
            <span className="product-stamp-subtitle">Mavi Yemiş</span>
            <p className="product-stamp-desc">
              Geleneksel aromaya sahip çıtır ve bol mumsu mavi yemişler. Yüksek antioksidan, üstün dayanıklılık ve benzersiz tat profili sunan yeni nesil EMCO CAL seçkileri.
            </p>
            <button className="product-stamp-link">İncele →</button>
          </div>
        </div>
      </section>


      {/* 3. About/Farm Section - Premium Vertically Stacked Layout with Coverflow Carousel */}
      <section id="about" className="scroll-section about-section">
        {/* Left Column: Text & Tabs & Stats */}
        <div className="about-text-col">
          <span className="section-tag">Ekolojik Hakkımızda</span>
          <h2 className="section-title">Dereçine Kasabası Ekolojik Tesislerimiz</h2>
          
          <div className="about-tabs-nav">
            <button 
              className={`about-tab-btn ${aboutTab === 'story' ? 'active' : ''}`}
              onClick={() => setAboutTab('story')}
            >
              <BookOpen size={15} /> Hikayemiz
            </button>
            <button 
              className={`about-tab-btn ${aboutTab === 'organic' ? 'active' : ''}`}
              onClick={() => setAboutTab('organic')}
            >
              <Sprout size={15} /> Organik Tarım
            </button>
            <button 
              className={`about-tab-btn ${aboutTab === 'terroir' ? 'active' : ''}`}
              onClick={() => setAboutTab('terroir')}
            >
              <ThermometerSun size={15} /> Terroir
            </button>
          </div>

          <div className="about-tab-content">
            {renderBackgroundBerries()}
            {aboutTab === 'story' && (
              <div className="about-tab-pane">
                <h3 className="about-pane-title">Kuruluş Hikayemiz & Vizyonumuz</h3>
                <p className="about-desc">
                  Afyonkarahisar Sultandağı'nın bereketli eteklerinde, sürdürülebilir tarım ve üstün fidan kalitesi ilkeleriyle 2022 yılında yola çıktık. Amacımız, Türkiye genelindeki yerli üreticilerimizi yüksek verimli, tescilli ve lisanslı Karaberry ile Alberry çeşitleriyle buluşturarak katma değerli tarımı desteklemektir.
                </p>
              </div>
            )}
            {aboutTab === 'organic' && (
              <div className="about-tab-pane">
                <h3 className="about-pane-title">Sertifikalı Organik Tarım</h3>
                <p className="about-desc">
                  Kimyasal gübre veya sentetik katkı maddelerinden uzak durarak, T.C. Organik Tarım (TR-OT) sertifikasyon standartlarında üretim yapıyoruz. Toprağımızın mikroorganizma çeşitliliğini korumak için kompost ve faydalı bakterilerle doğal canlılığı destekliyor, sürdürülebilir bir ekosistem inşa ediyoruz.
                </p>
              </div>
            )}
            {aboutTab === 'terroir' && (
              <div className="about-tab-pane">
                <h3 className="about-pane-title">Sultandağı Mikrokliması</h3>
                <p className="about-desc">
                  Bahçelerimiz 1000 metre rakımda, Sultandağı'nın eriyen kar sularıyla beslenen eşsiz bir mikroklimadadır. Gece ile gündüz arasındaki yüksek sıcaklık farkı, bitkilerde doğal bir direnç oluşturarak meyvelerimizin içindeki yoğun aromayı, antioksidanları ve en yüksek şeker (Brix) oranlarını tetikler.
                </p>
              </div>
            )}
          </div>
          
          <div className="about-stats-mini-grid">
            <div className="stat-mini-item">
              <div className="stat-mini-icon-wrap">
                <CalendarDays size={18} />
              </div>
              <div className="stat-mini-text-wrap">
                <span className="stat-mini-number">2022</span>
                <span className="stat-mini-label">Tesis Kuruluşu</span>
              </div>
            </div>
            
            <div className="stat-mini-item">
              <div className="stat-mini-icon-wrap">
                <Sprout size={18} />
              </div>
              <div className="stat-mini-text-wrap">
                <span className="stat-mini-number">2026</span>
                <span className="stat-mini-label">Alberry Bahçeleri</span>
              </div>
            </div>

            <div className="stat-mini-item">
              <div className="stat-mini-icon-wrap">
                <ShieldCheck size={18} />
              </div>
              <div className="stat-mini-text-wrap">
                <span className="stat-mini-number">TR-OT</span>
                <span className="stat-mini-label">Organik Tarım</span>
              </div>
            </div>

            <div className="stat-mini-item">
              <div className="stat-mini-icon-wrap">
                <Activity size={18} />
              </div>
              <div className="stat-mini-text-wrap">
                <span className="stat-mini-number">pH 4.5+</span>
                <span className="stat-mini-label">Toprak Analizi</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Refined 3D Coverflow Slide Carousel */}
        <div className="about-media-col">
          <div className="about-coverflow-container">
            {/* Left Overlay Navigation Arrow */}
            <button 
              className="coverflow-side-nav-btn prev"
              onClick={() => {
                setGardenIndex((prev) => (prev - 1 + gardenImages.length) % gardenImages.length);
                setIsAutoplay(false);
              }}
              aria-label="Önceki Fotoğraf"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="about-coverflow-track">
              {gardenImages.map((src, idx) => (
                <div
                  key={src}
                  className={`coverflow-slide ${idx === gardenIndex ? 'active' : ''}`}
                  style={getCoverflowStyle(idx)}
                  onClick={() => handleCardClick(idx)}
                >
                  <img
                    src={src}
                    alt={`Dereçine Organik Bahçemiz - Fotoğraf ${idx + 1}`}
                    className="coverflow-img"
                  />
                  
                  {idx === gardenIndex && (
                    <>
                      <div className="slideshow-overlay" />
                      
                      <div className="slideshow-hud-top">
                        <span className="slideshow-counter">
                          {idx + 1} / {gardenImages.length}
                        </span>
                      </div>

                      <div className="slideshow-hud-bottom">
                        <div className="slideshow-media-caption">
                          Ekolojik Bahçemiz
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Right Overlay Navigation Arrow */}
            <button 
              className="coverflow-side-nav-btn next"
              onClick={() => {
                setGardenIndex((prev) => (prev + 1) % gardenImages.length);
                setIsAutoplay(false);
              }}
              aria-label="Sonraki Fotoğraf"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Progress bar centered under Coverflow */}
          {isAutoplay && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', width: '100%' }}>
              <div className="slideshow-progress-bar" style={{ position: 'relative', width: '160px', height: '3px', borderRadius: '2px', background: 'rgba(28, 50, 36, 0.08)', overflow: 'hidden' }}>
                <div key={gardenIndex} className="slideshow-progress-line" style={{ background: 'var(--color-primary)' }} />
              </div>
            </div>
          )}

          <div className="glass-panel about-sensor-panel">
            <Activity size={20} className="sensor-panel-icon" />
            <p className="sensor-panel-text">
              Bahçelerimizdeki nem, pH ve toprak sıcaklık değerleri sensörler ile anlık takip edilerek optimum organik gelişim desteklenir.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Varieties Section - With Local 3D Fruit Scene and Tabs */}
      <section id="varieties" className="scroll-section varieties-section" style={{ width: '100%' }}>
        <div className="varieties-header">
          <span className="section-tag">Fidan Çeşitlerimiz</span>
          <h2 className="section-title">Organik Fidan Çeşitleri</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 30px' }}>
            Dereçine bahçemizde özenle yetiştirdiğimiz, tescilli ve EMCO CAL lisanslı elit fidan çeşitlerimizin teknik özelliklerini ve verim analizlerini inceleyin.
          </p>
        </div>

        {/* Category Tabs for selection inside Varieties */}
        <div className="varieties-category-tabs">
          <button 
            className={`tab-btn blackberry ${activeFruit === 'blackberry' ? 'active' : ''}`}
            onClick={() => setActiveFruit('blackberry')}
          >
            🍇 Karaberry (Böğürtlen)
          </button>
          <button 
            className={`tab-btn raspberry ${activeFruit === 'raspberry' ? 'active' : ''}`}
            onClick={() => setActiveFruit('raspberry')}
          >
            🍓 Alberry (Ahududu)
          </button>
          <button 
            className={`tab-btn blueberry ${activeFruit === 'blueberry' ? 'active' : ''}`}
            onClick={() => setActiveFruit('blueberry')}
          >
            🫐 Gökberry (Mavi Yemiş)
            <span className="tab-soon-badge">Yakında</span>
          </button>
        </div>

        {currentVarieties.length > 0 && (
          <div className="varieties-split-layout">
            
            {/* Left Side: Photo Showcase (Sticky) */}
            <div className="varieties-left-column">
              <div className={`variety-sticky-3d variety-photo-panel--${activeFruit}`}>
                {activeVariety && (
                  <div className="variety-image-container">
                    {/* Accent bar — top edge color stripe */}
                    <div className="variety-photo-accent-bar" />

                    <img 
                      key={activeVariety.image}
                      src={activeVariety.image} 
                      alt={activeVariety.name} 
                      className="variety-showcase-img"
                    />
                    <div className="variety-image-overlay" />

                    {/* HUD — top-right chip */}
                    <div className="variety-photo-chip">
                      {activeFruit === 'blackberry' ? '🍇' : activeFruit === 'raspberry' ? '🍓' : '🫐'}
                      &nbsp;{activeVariety.taste?.split(',')[0]?.split('(')[0]?.trim()}
                    </div>

                    {/* HUD — bottom info */}
                    <div className="variety-photo-hud">
                      <div className="variety-photo-hud-inner">
                        <span className="variety-photo-tag">{activeVariety.tag}</span>
                        <h3 className="variety-photo-name">{activeVariety.name}</h3>
                        <div className="variety-photo-divider" />
                        <div className="variety-photo-meta">
                          <span>🌿 {activeVariety.origin?.split('/')[0]?.trim()}</span>
                          <span>📅 {activeVariety.harvest?.split(':')[1]?.trim() || activeVariety.harvest}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Accordion Bento Cards */}
            <div className="varieties-right-column">
              {currentVarieties.map((variety) => {
                const isExpanded = expandedVarietyId === variety.id;
                
                return (
                  <div 
                    key={variety.id} 
                    className={`variety-bento-card glass-panel-glow ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => setExpandedVarietyId(isExpanded ? null : variety.id)}
                  >
                    <div className="variety-bento-header">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="variety-compact-tag">{variety.tag}</span>
                        {/* Chevron icon indicating expand/collapse */}
                        <div className={`bento-chevron ${isExpanded ? 'rotated' : ''}`}>
                          <ChevronRight size={20} />
                        </div>
                      </div>
                      <h3 className="modal-title" style={{ fontSize: '1.9rem', marginBottom: '12px' }}>
                        {variety.name}
                      </h3>
                      <p className="variety-compact-desc" style={{ 
                        fontSize: '0.92rem', 
                        color: 'var(--text-secondary)', 
                        lineHeight: '1.6', 
                        marginBottom: isExpanded ? '24px' : '0'
                      }}>
                        {variety.description}
                      </p>
                    </div>

                    {/* Expandable Content Area */}
                    <div className="variety-bento-content" style={{
                      maxHeight: isExpanded ? '1000px' : '0',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em', marginBottom: '15px' }}>
                        Ürün Özellikleri
                      </h4>

                      <div className="bento-grid">
                        <div className="bento-item">
                          <div className="bento-item-header">
                            <MapPin size={14} className="bento-item-icon" />
                            <span className="spec-name">Köken</span>
                          </div>
                          <span className="spec-value">{variety.origin}</span>
                        </div>
                        <div className="bento-item">
                          <div className="bento-item-header">
                            <TrendingUp size={14} className="bento-item-icon" />
                            <span className="spec-name">Büyüme</span>
                          </div>
                          <span className="spec-value">{variety.growth}</span>
                        </div>
                        <div className="bento-item">
                          <div className="bento-item-header">
                            <Maximize size={14} className="bento-item-icon" />
                            <span className="spec-name">Meyve</span>
                          </div>
                          <span className="spec-value">{variety.fruitSize}</span>
                        </div>
                        <div className="bento-item">
                          <div className="bento-item-header">
                            <Utensils size={14} className="bento-item-icon" />
                            <span className="spec-name">Lezzet</span>
                          </div>
                          <span className="spec-value">{variety.taste}</span>
                        </div>
                        <div className="bento-item">
                          <div className="bento-item-header">
                            <Snowflake size={14} className="bento-item-icon" />
                            <span className="spec-name">Soğuklama</span>
                          </div>
                          <span className="spec-value">{variety.chillHours}</span>
                        </div>
                        <div className="bento-item">
                          <div className="bento-item-header">
                            <CalendarDays size={14} className="bento-item-icon" />
                            <span className="spec-name">Hasat</span>
                          </div>
                          <span className="spec-value">{variety.harvest}</span>
                        </div>
                        {variety.shelfLife && (
                          <div className="bento-item full-width">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              <div className="bento-item-header">
                                <ShieldCheck size={14} className="bento-item-icon" />
                                <span className="spec-name">Dayanıklılık</span>
                              </div>
                              <span className="spec-value">{variety.shelfLife}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        )}
      </section>

      {/* Garden Lightbox Modal */}
      <div className={`lightbox-overlay ${lightboxImage ? 'open' : ''}`} onClick={() => setLightboxImage(null)}>
        {lightboxImage && (
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
              <X size={20} />
            </button>
            <img src={lightboxImage} alt="Bahçemizden Büyük Görsel" />
          </div>
        )}
      </div>

      {/* Grid Gallery Modal to view ALL garden photos */}
      <div className={`modal-overlay ${showAllPhotos ? 'open' : ''}`} onClick={() => setShowAllPhotos(false)}>
        <div 
          className="modal-content glass-panel-glow" 
          style={{ 
            maxWidth: '1100px', 
            maxHeight: '90vh', 
            padding: '30px', 
            borderRadius: '28px',
            overflowY: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={() => setShowAllPhotos(false)}>
            <X size={20} />
          </button>
          
          <div style={{ marginBottom: '24px' }}>
            <span className="section-tag">Fotoğraf Galerisi</span>
            <h3 className="modal-title" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Dereçine Kasabası Ekolojik Bahçemiz</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
              Bahçemizden çekilmiş, fidanlarımızın büyüme aşamalarını ve ekolojik tarım sahasını gösteren tüm fotoğraflar ({gardenImages.length} Görsel).
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '12px',
            paddingTop: '10px'
          }}>
            {gardenImages.map((src, idx) => (
              <div 
                key={src}
                onClick={() => {
                  setLightboxImage(src);
                }}
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  height: '140px', 
                  cursor: 'pointer',
                  border: '1px solid rgba(0,0,0,0.05)',
                  position: 'relative'
                }}
                className="glass-panel"
              >
                <img 
                  src={src} 
                  alt={`Bahçe Fotoğrafı ${idx + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.3s ease' }}
                  className="gallery-grid-img"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.2)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
                className="gallery-grid-overlay"
                >
                  <Eye size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

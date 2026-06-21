import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-vintage" style={{ cursor: 'default', marginBottom: '12px' }}>
            <span className="logo-vintage-icon"><Leaf size={16} /></span>
            <span className="logo-vintage-text">ELİTE <span>plants</span></span>
          </div>
          <p className="footer-desc">
            Afyonkarahisar ili Sultandağı ilçesi Dereçine kasabasında 2022 yılından beri doğaya saygılı, organik tarım standartlarında sürdürülebilir meyve yetiştiriciliği yapıyoruz.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Kurumsal</h4>
          <ul>
            <li><a href="#home">Ana Sayfa</a></li>
            <li><a href="#products">Ürünlerimiz</a></li>
            <li><a href="#varieties">Çeşitlerimiz</a></li>
            <li><a href="#about">Hakkımızda</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>İletişim</h4>
          <div className="footer-contact-item">
            <div className="footer-contact-icon-wrap">
              <MapPin size={18} />
            </div>
            <span className="footer-contact-text">
              Dereçine Kasabası, Organik Tarım Tesisleri,<br />
              Sultandağı / Afyonkarahisar, Türkiye
            </span>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon-wrap">
              <Phone size={18} />
            </div>
            <span className="footer-contact-text">+90 (272) 123 45 67</span>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon-wrap">
              <Mail size={18} />
            </div>
            <span className="footer-contact-text">info@eliteplants.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Elite Plants. Tüm Hakları Saklıdır.</p>
        <div className="footer-certifications">
          <span className="footer-cert-item">
            <ShieldCheck size={16} /> Organik Sertifikalı (TR-OT)
          </span>
          <span className="footer-cert-item">
            <Leaf size={16} /> Sürdürülebilir Tarım
          </span>
        </div>
      </div>
    </footer>
  );
};

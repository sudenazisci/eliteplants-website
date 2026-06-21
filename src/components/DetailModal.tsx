import React from 'react';
import { X, Check, Award, Sprout } from 'lucide-react';

export interface VarietyDetail {
  id: string;
  name: string;
  type: string;
  tag: string;
  description: string;
  image: string;
  origin: string;
  growth: string;
  fruitSize: string;
  taste: string;
  chillHours: string;
  harvest: string;
  shelfLife: string;
}

interface DetailModalProps {
  isOpen: boolean;
  variety: VarietyDetail | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, variety, onClose }) => {
  if (!variety) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div 
        className="modal-content glass-panel-glow" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Kapat">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="modal-hero">
            <img src={variety.image} alt={variety.name} />
          </div>
          
          <div className="modal-info">
            <span className="modal-tag">{variety.tag}</span>
            <h2 className="modal-title">{variety.name}</h2>
            <p className="modal-desc">{variety.description}</p>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Teknik Özellikler</h3>
            
            <div className="modal-specs">
              <div className="spec-item">
                <span className="spec-name">Köken</span>
                <span className="spec-value">{variety.origin}</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Büyüme Formu</span>
                <span className="spec-value">{variety.growth}</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Meyve Boyutu</span>
                <span className="spec-value">{variety.fruitSize}</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Lezzet Profili</span>
                <span className="spec-value">{variety.taste}</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Soğuklama İhtiyacı</span>
                <span className="spec-value">{variety.chillHours}</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Hasat Dönemi</span>
                <span className="spec-value">{variety.harvest}</span>
              </div>
              {variety.shelfLife && (
                <div className="spec-item">
                  <span className="spec-name">Raf Ömrü & Dayanıklılık</span>
                  <span className="spec-value">{variety.shelfLife}</span>
                </div>
              )}
            </div>

            <div style={{ marginTop: '40px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <div className="hero-tag" style={{ margin: 0, color: 'var(--color-primary)' }}>
                <Check size={14} /> Organik Tarım
              </div>
              <div className="hero-tag" style={{ margin: 0, color: 'var(--color-primary)' }}>
                <Award size={14} /> Üstün Kalite fidan
              </div>
              <div className="hero-tag" style={{ margin: 0, color: 'var(--color-primary)' }}>
                <Sprout size={14} /> Sürdürülebilir
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

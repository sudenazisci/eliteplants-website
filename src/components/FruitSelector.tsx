import React from 'react';

export type FruitType = 'blackberry' | 'raspberry' | 'blueberry';

interface FruitSelectorProps {
  activeFruit: FruitType;
  onChangeFruit: (fruit: FruitType) => void;
}

export const FruitSelector: React.FC<FruitSelectorProps> = ({ activeFruit, onChangeFruit }) => {
  const fruits: { id: FruitType; label: string; color: string }[] = [
    { id: 'blackberry', label: 'Karaberry', color: '#8b5cf6' }, // Modernized purple
    { id: 'raspberry', label: 'Alberry', color: '#ec4899' },    // Modernized pink
    { id: 'blueberry', label: 'Gökberry', color: '#0ea5e9' },    // Modernized sky blue
  ];

  const handleFruitSelect = (fruit: FruitType) => {
    onChangeFruit(fruit);
  };

  return (
    <div className="fruit-selector-panel">
      <span className="selector-title-tag">Meyve Seçimi</span>
      <div className="selector-items">
        {fruits.map((fruit) => (
          <button
            key={fruit.id}
            className={`selector-item-btn ${activeFruit === fruit.id ? 'active' : ''}`}
            onClick={() => handleFruitSelect(fruit.id)}
            style={{
              '--item-color': fruit.color,
            } as React.CSSProperties}
          >
            <span className="selector-item-label">
              {fruit.label}
              {fruit.id === 'blueberry' && (
                <span className="selector-soon-badge">Yakında</span>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

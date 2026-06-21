import React from 'react';

export type FruitType = 'blackberry' | 'raspberry' | 'blueberry';

interface FruitSelectorProps {
  activeFruit: FruitType;
  onChangeFruit: (fruit: FruitType) => void;
}

export const FruitSelector: React.FC<FruitSelectorProps> = ({ activeFruit, onChangeFruit }) => {
  const fruits: { id: FruitType; label: string; color: string; emoji: string }[] = [
    { id: 'blackberry', label: 'Karaberry', color: '#7b2cbf', emoji: '🍇' },
    { id: 'raspberry', label: 'Alberry', color: '#d81b60', emoji: '🍓' },
    { id: 'blueberry', label: 'Gökberry', color: '#0077b6', emoji: '🫐' },
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
            <span className="selector-emoji">{fruit.emoji}</span>
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

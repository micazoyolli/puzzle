import React, { useState } from 'react';
import './ModalSelector.scss';

interface Set {
  name: string;
  src: string;
}

interface ModalSelectorProps {
  sets: Set[];
  onSelect: (image: string, level: number) => void;
}

const levels = [
  { value: 9, label: 'Fácil (9 piezas)' },
  { value: 16, label: 'Intermedio (16 piezas)' },
  { value: 25, label: 'Difícil (25 piezas)' }
];

const ModalSelector: React.FC<ModalSelectorProps> = ({ sets, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  return (
    <div className="modal-selector">
      <h2>Elige tu imagen</h2>
      <div className="sets">
        {sets.map(set => (
          <img
            key={set.name}
            src={set.src}
            alt={set.name}
            className={selectedImage === set.src ? 'active' : ''}
            onClick={() => setSelectedImage(set.src)}
          />
        ))}
      </div>
      <h2>Elige nivel</h2>
      <div className="levels">
        {levels.map(lvl => (
          <button
            key={lvl.value}
            className={selectedLevel === lvl.value ? 'active' : ''}
            onClick={() => setSelectedLevel(lvl.value)}
          >
            {lvl.label}
          </button>
        ))}
      </div>
      <button
        className="play-btn"
        disabled={!selectedImage || !selectedLevel}
        onClick={() => selectedImage && selectedLevel && onSelect(selectedImage, selectedLevel)}
      >
        ¡Jugar!
      </button>
    </div>
  );
};

export default ModalSelector;
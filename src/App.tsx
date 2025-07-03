import React, { useState } from 'react';
import ModalSelector from './components/ModalSelector/ModalSelector';
import PuzzleBoard from './components/PuzzleBoard/PuzzleBoard';
import pikachu from './assets/puzzles/1.jpg';
import mario from './assets/puzzles/2.jpg';
import goku from './assets/puzzles/3.jpg';
import bluey from './assets/puzzles/4.jpg';
import helloKitty from './assets/puzzles/5.jpg';
import './styles/_global.scss';

const sets = [
  { name: 'Pikachu', src: pikachu },
  { name: 'Mario', src: mario },
  { name: 'Goku', src: goku },
  { name: 'Bluey', src: bluey },
  { name: 'Hello Kitty', src: helloKitty }
];

const App: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [level, setLevel] = useState<number | null>(null);

  const handleRestart = () => {
    setImageSrc(null);
    setLevel(null);
  };

  return (
    <div className="app">
      <h1>🧩 Rompecabezas interactivo</h1>
      {!imageSrc || !level ? (
        <ModalSelector sets={sets} onSelect={(img, lvl) => { setImageSrc(img); setLevel(lvl); }} />
      ) : (
        <PuzzleBoard imageSrc={imageSrc} level={level} onRestart={handleRestart} />
      )}
      <footer>
        Una creación de <a href="https://nadia.dev" target="_blank" rel="noreferrer">&lt;micazoyolli /&gt; ✨</a>
      </footer>
    </div>
  );
};

export default App;

import React, { useEffect, useMemo, useState } from 'react';
import { DndContext, PointerSensor, TouchSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import confetti from 'canvas-confetti';
import './PuzzleBoard.scss';

interface Piece {
  id: string;
  row: number;
  col: number;
}

const SortablePiece: React.FC<{ id: string; imageSrc: string; size: number; row: number; col: number; }> = ({ id, imageSrc, size, row, col }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: `${(col * 100) / (size - 1)}% ${(row * 100) / (size - 1)}%`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${size * 100}% ${size * 100}%`,
    border: '1px solid #ccc',
    height: `${100 / size}%`,
    transform: CSS.Transform.toString(transform),
    transition,
    width: `${100 / size}%`
  };
  return <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="puzzle-piece" />;
};

const PuzzleBoard: React.FC<{ imageSrc: string; level: number; onRestart: () => void }> = ({ imageSrc, level, onRestart }) => {
  const size = Math.sqrt(level);
  const initialPieces = useMemo(() => {
    const arr: Piece[] = [];
    let id = 0;
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        arr.push({ id: id.toString(), row, col });
        id++;
      }
    }
    return arr.sort(() => Math.random() - 0.5);
  }, [level]);

  const [pieces, setPieces] = useState<Piece[]>(initialPieces);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    setPieces(initialPieces);
    setSolved(false);
  }, [initialPieces]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) return;

    const oldIndex = pieces.findIndex(p => p.id === active.id);
    const newIndex = pieces.findIndex(p => p.id === over.id);
    const newPieces = arrayMove(pieces, oldIndex, newIndex);
    setPieces(newPieces);
    if (newPieces.every((p, i) => p.id === i.toString())) {
      confetti();
      setSolved(true);
    }
  };

  return (
    <div className="puzzle-container">
      <div className="info-panel">
        <h3>Instrucciones</h3>
        <ul>
          <li>Ordena las piezas para formar la imagen.</li>
          <li>Usa la imagen objetivo como guía.</li>
        </ul>
        <section>
          <div>
            <h3>Objetivo</h3>
            <img src={imageSrc} alt="Objetivo" className="objective" />
          </div>
          <div>
            <h3>Nivel</h3>
            <p>{level} piezas</p>
            <button onClick={onRestart}>
              {solved ? '🎉 Volver a jugar' : '🔄 Cambiar puzzle'}
            </button>
          </div>
        </section>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={pieces.map(p => p.id)} strategy={rectSortingStrategy}>
          <div className="puzzle-board">
            {pieces.map(piece => (
              <SortablePiece key={piece.id} id={piece.id} imageSrc={imageSrc} size={size} row={piece.row} col={piece.col} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default PuzzleBoard;
import { useEffect, useRef } from 'react';
import '/home/dci-student/Desktop/Projects/portfolio/src/styles/MatrixEffect.css';

const MatrixEffect = ({ numRows, numCols }) => {
 const containerRef = useRef(null);

 useEffect(() => {
    const container = containerRef.current;

    for (let i = 0; i < numCols; i++) {
      const column = document.createElement('div');
      column.className = 'column';

      for (let j = 0; j < numRows; j++) {
        const char = document.createElement('span');
        char.innerText = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
        char.style.animationDelay = `${Math.random() * 5}s`;
        column.appendChild(char);
      }

      container.appendChild(column);
    }

    return () => {
      container.innerHTML = ''; // Cleanup
    };
 }, [numRows, numCols]);

 return (
    <div className="matrix-container" ref={containerRef}>
    </div>
 );
};

export default MatrixEffect;

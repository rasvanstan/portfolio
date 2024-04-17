import React, { useEffect, useRef } from 'react';
import '/home/dci-student/Desktop/Projects/portfolio/src/styles/MatrixEffect.css';

const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const MatrixEffect = ({ numRows, numCols }) => {
 const containerRef = useRef(null);

 useEffect(() => {
    const container = containerRef.current;

    for (let i = 0; i < numCols; i++) {
      const column = document.createElement('div');
      column.className = 'column';

      const highlight = Math.random() < 0.2; // 20% chance of highlighting
      if (highlight) {
        column.classList.add('highlighted');
      }

      for (let j = 0; j < numRows; j++) {
        const char = document.createElement('span');
        char.innerText = characters.charAt(Math.floor(Math.random() * characters.length));
        char.style.animationDelay = `${Math.random() * 5}s`;

        // Vary animation speed
        const speedFactor = Math.random() * 0.5 + 0.5; // Speed between 0.5 and 1.0
        char.style.animationDuration = `${speedFactor * 5}s`;

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

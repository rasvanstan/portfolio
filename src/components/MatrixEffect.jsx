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

      for (let j = 0; j < numRows; j++) {
        const char = document.createElement('span');
        char.innerText = characters.charAt(Math.floor(Math.random() * characters.length));
        char.style.animationDelay = `${Math.random() * 5}s`;
        char.style.opacity = Math.random(); // Random opacity for each character
        column.appendChild(char);
      }

      column.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay for each column
      column.style.opacity = Math.random(); // Random opacity for each column
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

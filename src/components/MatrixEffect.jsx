import React, { useEffect, useRef } from 'react';

// MatrixEffect.css styles can be used as is

const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = characters;
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = "";
  }

  draw(context) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    context.textAlign = "center";
    context.font = this.fontSize + "px monospace";
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
  }

  update() {
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 17;
    this.columns = canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }

  initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
}

const MatrixEffect = ({ numRows, numCols }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = containerRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const effect = new Effect(canvas.width, canvas.height);

    let lastTime = 0;
    const fps = 50;
    const nextframe = 1000 / fps;
    let timer = 0;

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;

      if (timer > nextframe) {
        ctx.fillStyle = "rgba(0,0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0aff0a";
        effect.symbols.forEach((symbol) => {
          symbol.draw(ctx);
          symbol.update();
        });
        timer = 0;
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animate);
    }

    animate(0);

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <canvas ref={containerRef} className="matrix-effect-canvas" />;
};

export default MatrixEffect;

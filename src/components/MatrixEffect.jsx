import { useEffect, useRef } from 'react';

// Define the characters used for the matrix effect
const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to draw a symbol on the canvas
function drawSymbol(context, x, y, fontSize) {
  // Choose a random character from the defined set
  const text = characters.charAt(Math.floor(Math.random() * characters.length));
  // Set text alignment and font size
  context.textAlign = "center";
  context.font = fontSize + "px monospace";
  // Draw the symbol on the canvas at the specified position
  context.fillText(text, x * fontSize, y * fontSize);
}

// Function to update the position of a symbol
function updateSymbol(symbol, canvasHeight) {
  // If the symbol reaches the bottom of the canvas and a random condition is met, reset its position
  if (symbol.y * symbol.fontSize > canvasHeight && Math.random() > 0.98) {
    symbol.y = 0;
  } else {
    // Otherwise, move the symbol down
    symbol.y += 1;
  }
}

function MatrixEffect() {
  // Reference to the canvas element
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = containerRef.current;
    const ctx = canvas.getContext("2d");
    // Set initial canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define initial number of columns and create an array of symbols
    let columns = canvas.width / 17;
    let symbols = Array.from({ length: columns }, (_, i) => ({ x: i, y: 0, fontSize: 17 }));

    // Animation variables
    let lastTime = 0;
    const fps = 50;
    const nextframe = 1000 / fps;
    let timer = 0;

    // Animation function
    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;

      // Check if it's time for the next frame
      if (timer > nextframe) {
        // Clear the canvas
        ctx.fillStyle = "rgba(0,0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Set fill style for symbols
        ctx.fillStyle = "#0aff0a";
        // Draw and update each symbol
        symbols.forEach((symbol) => {
          drawSymbol(ctx, symbol.x, symbol.y, symbol.fontSize, canvas.height);
          updateSymbol(symbol, canvas.height);
        });
        // Reset timer
        timer = 0;
      } else {
        // Increment timer
        timer += deltaTime;
      }

      // Request next frame
      requestAnimationFrame(animate);
    }

    // Start animation loop
    animate(0);

    // Event listener for window resize
    const resizeHandler = () => {
      // Update canvas dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recalculate number of columns and recreate symbols array
      columns = canvas.width / 17;
      symbols = Array.from({ length: columns }, (_, i) => ({ x: i, y: 0, fontSize: 17 }));
    };

    // Add event listener
    window.addEventListener("resize", resizeHandler);

    // Cleanup function
    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Render the canvas element
  return <canvas ref={containerRef} className="matrix-effect-canvas" />;
}

export default MatrixEffect;

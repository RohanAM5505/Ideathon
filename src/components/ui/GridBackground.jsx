import { useEffect, useRef, useState } from "react";

export default function GridBackground() {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/small screens
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Optimize grid size and settings for mobile
    const GRID_SIZE = isMobile ? 45 : 50;
    const ACTIVATION_RADIUS = isMobile ? 100 : 80;
    const PULL_STRENGTH = isMobile ? 0.05 : 0.1;

    let mouse = { x: -9999, y: -9999 };
    let touchTimeout = null;

    // Handle both mouse and touch events
    const handlePointerMove = (e) => {
      // Only enable on desktop, disable on mobile to prevent lag
      if (!isMobile) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    const handlePointerEnd = () => {
      if (touchTimeout) clearTimeout(touchTimeout);
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Add event listeners only for desktop
    if (!isMobile) {
      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("mouseleave", handlePointerEnd);
    }

    class Node {
      constructor(x, y) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.glowIntensity = 0;
      }

      update() {
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < ACTIVATION_RADIUS) {
          const pull = 1 - dist / ACTIVATION_RADIUS;
          this.x = this.baseX + dx * pull * PULL_STRENGTH;
          this.y = this.baseY + dy * pull * PULL_STRENGTH;
          
          // Increase glow when touch/mouse is near
          this.glowIntensity = Math.min(1, this.glowIntensity + 0.15);
        } else {
          this.x += (this.baseX - this.x) * 0.15;
          this.y += (this.baseY - this.y) * 0.15;
          
          // Decrease glow when touch/mouse moves away
          this.glowIntensity = Math.max(0, this.glowIntensity - 0.08);
        }
      }

      draw() {
        // Simpler drawing on mobile
        if (isMobile && this.glowIntensity === 0) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(139, 92, 246, 0.35)";
          ctx.fill();
          return;
        }

        // Draw node point
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.glowIntensity > 0 
          ? `rgba(168, 85, 247, ${0.5 + this.glowIntensity * 0.3})` 
          : "rgba(139, 92, 246, 0.4)";
        ctx.fill();

        // Draw purple glow when activated (simplified on mobile)
        if (this.glowIntensity > 0) {
          const glowSize = isMobile ? 15 * this.glowIntensity : 20 * this.glowIntensity;
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, glowSize
          );
          gradient.addColorStop(0, `rgba(168, 85, 247, ${this.glowIntensity * 0.3})`);
          gradient.addColorStop(0.5, `rgba(147, 51, 234, ${this.glowIntensity * 0.15})`);
          gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    let nodes = [];
    let cols = 0;
    let rows = 0;

    const buildGrid = () => {
      nodes = [];
      cols = Math.floor(canvas.width / GRID_SIZE);
      rows = Math.floor(canvas.height / GRID_SIZE);
      
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const x = col * GRID_SIZE;
          const y = row * GRID_SIZE;
          nodes.push(new Node(x, y));
        }
      }
    };

    const drawLines = () => {
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const index = row * (cols + 1) + col;
          const node = nodes[index];
          
          if (!node) continue;

          // Draw horizontal line
          if (col < cols) {
            const rightNode = nodes[index + 1];
            const glowFactor = Math.max(node.glowIntensity, rightNode.glowIntensity);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(rightNode.x, rightNode.y);
            ctx.strokeStyle = glowFactor > 0
              ? `rgba(168, 85, 247, ${0.2 + glowFactor * 0.6})`
              : "rgba(139, 92, 246, 0.15)";
            ctx.lineWidth = glowFactor > 0 ? 1.5 : 0.5;
            ctx.stroke();
          }

          // Draw vertical line
          if (row < rows) {
            const bottomNode = nodes[index + cols + 1];
            const glowFactor = Math.max(node.glowIntensity, bottomNode.glowIntensity);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(bottomNode.x, bottomNode.y);
            ctx.strokeStyle = glowFactor > 0
              ? `rgba(168, 85, 247, ${0.2 + glowFactor * 0.6})`
              : "rgba(139, 92, 246, 0.15)";
            ctx.lineWidth = glowFactor > 0 ? 1.5 : 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Use scrollWidth to ensure full width coverage
        canvas.width = Math.max(parent.offsetWidth, parent.scrollWidth, window.innerWidth);
        canvas.height = Math.max(parent.offsetHeight, parent.scrollHeight);
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      buildGrid();
    };

    resize();
    window.addEventListener("resize", resize);

    // Observe parent container size changes
    let resizeObserver;
    if (canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        resize();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawLines();
      
      nodes.forEach((n) => {
        n.update();
        n.draw();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", checkMobile);
      if (resizeObserver) resizeObserver.disconnect();
      if (touchTimeout) clearTimeout(touchTimeout);
      
      // Only remove desktop event listeners
      if (!isMobile) {
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("mouseleave", handlePointerEnd);
      }
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ pointerEvents: 'auto' }}
    />
  );
}

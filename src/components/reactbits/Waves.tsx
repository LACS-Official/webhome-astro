import React, { useRef, useEffect } from 'react';

class Grad {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  dot2(x: number, y: number): number {
    return this.x * x + this.y * y;
  }
}

class Noise {
  grad3: Grad[];
  p: number[];
  perm: number[];

  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
      new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
      new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)
    ];
    this.p = [
      151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,
      247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,
      175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
      102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,
      198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,
      189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,
      110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,
      235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,
      222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
    ];
    this.perm = new Array(512);
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
    }
  }

  mix(a: number, b: number, t: number): number {
    return (1 - t) * a + t * b;
  }

  fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  noise2d(x: number, y: number): number {
    let X = Math.floor(x) & 255;
    let Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = this.fade(x);
    const v = this.fade(y);
    const A = this.perm[X] + Y;
    const B = this.perm[X + 1] + Y;

    return this.mix(
      this.mix(this.grad3[this.perm[A] % 12].dot2(x, y), this.grad3[this.perm[B] % 12].dot2(x - 1, y), u),
      this.mix(this.grad3[this.perm[A + 1] % 12].dot2(x, y - 1), this.grad3[this.perm[B + 1] % 12].dot2(x - 1, y - 1), u),
      v
    );
  }
}

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  xGap?: number;
  yGap?: number;
  className?: string;
}

interface WavePoint {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
}

const Waves: React.FC<WavesProps> = ({
  lineColor = 'rgba(59, 130, 246, 0.3)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 100,
  xGap = 10,
  yGap = 24,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const noiseRef = useRef(new Noise());
  const linesRef = useRef<WavePoint[][]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    function setSize() {
      const parent = containerRef.current;
      if (!parent || !canvas) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }

    function createLines() {
      const lines: WavePoint[][] = [];
      const width = canvas!.width;
      const height = canvas!.height;
      for (let y = -yGap; y <= height + yGap; y += yGap) {
        const line: WavePoint[] = [];
        for (let x = -xGap; x <= width + xGap; x += xGap) {
          line.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
        lines.push(line);
      }
      linesRef.current = lines;
    }

    function render(t: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const lines = linesRef.current;
      const mouse = mouseRef.current;
      const noise = noiseRef.current;

      lines.forEach((line, i) => {
        ctx.beginPath();
        line.forEach((p: any, j: number) => {
          const nx = p.ox * 0.002 + t * waveSpeedX;
          const ny = p.oy * 0.002 + t * waveSpeedY;
          const n = noise.noise2d(nx, ny);

          const dx = p.x - mouse.sx;
          const dy = p.y - mouse.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const f = dist < maxCursorMove ? (maxCursorMove - dist) / maxCursorMove : 0;
          
          p.vx += (p.ox - p.x + n * waveAmpX) * tension;
          p.vy += (p.oy - p.y + n * waveAmpY) * tension;
          
          p.vx += Math.cos(mouse.a) * f * mouse.v;
          p.vy += Math.sin(mouse.a) * f * mouse.v;
          
          p.vx *= friction;
          p.vy *= friction;
          p.x += p.vx;
          p.y += p.vy;

          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
      });

      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;
      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const d = Math.sqrt(dx * dx + dy * dy);
      mouse.v += (d - mouse.v) * 0.1;
      mouse.a = Math.atan2(dy, dx);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;

      requestAnimationFrame(() => render(t + 1));
    }

    setSize();
    createLines();
    const animId = requestAnimationFrame(() => render(0));

    const handleResize = () => {
      setSize();
      createLines();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.set = true;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`} style={{ backgroundColor }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Waves;

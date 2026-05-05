import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const katakana =
      "インド、テランガーナ州ハイデラバードを拠点とするクラウドDevOpsアーキテクト。";
    const latin = "CLOUD DEVOPS ENGINEER";
    const nums = "365307246060";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let rainDrops: number[] = Array.from({ length: columns }, () => 1);

    const startTime = performance.now();
    const glowDuration = 2000; // bright glow only for first 2s

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      const elapsed = performance.now() - startTime;
      const glow = Math.max(0, 1 - elapsed / glowDuration);

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length),
        );
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        if (glow > 0) {
          ctx.shadowColor = "#9FFF9F";
          ctx.shadowBlur = 12 * glow;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = "#0F0";
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = window.setInterval(draw, 30);

    const onResize = () => {
      setSize();
      columns = Math.floor(canvas.width / fontSize);
      rainDrops = Array.from({ length: columns }, () => 1);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 h-screen w-screen pointer-events-none opacity-20"
    />
  );
}

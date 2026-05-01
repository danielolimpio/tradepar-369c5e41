import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const REAPPEAR_INTERVAL_MS = 60_000; // 1 minuto

const PolarTensorAd = () => {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | null>(null);

  // Tenta dar play sempre que ficar visível (autoplay com muted é permitido)
  useEffect(() => {
    if (visible && videoRef.current) {
      const v = videoRef.current;
      v.muted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [visible]);

  // Quando fechar, reagenda para reaparecer em 1 minuto
  const handleClose = () => {
    setVisible(false);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setVisible(true);
    }, REAPPEAR_INTERVAL_MS);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] w-[280px] sm:w-[320px] md:w-[360px] rounded-lg overflow-hidden border border-border shadow-2xl bg-background animate-fade-in"
      role="complementary"
      aria-label="Anúncio Polar Tensor"
    >
      <div className="relative">
        <video
          ref={videoRef}
          src="/videos/polar-tensor.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
        />

        {/* Botão fechar */}
        <button
          onClick={handleClose}
          aria-label="Fechar anúncio"
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 hover:bg-black text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Botão Saiba mais */}
        <a
          href="https://polartensor.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide shadow-lg hover:scale-105 transition-transform"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default PolarTensorAd;

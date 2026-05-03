import { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

const SESSION_KEYS = {
  initialShown: "tradepar-polar-ad-initial-shown",
  exitShown: "tradepar-polar-ad-exit-shown",
};

const PolarTensorAd = () => {
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasShownInitially = window.sessionStorage.getItem(SESSION_KEYS.initialShown) === "true";

    if (!hasShownInitially) {
      window.sessionStorage.setItem(SESSION_KEYS.initialShown, "true");
      setVisible(true);
    }
  }, []);

  // Tenta tocar com som; se o navegador bloquear, faz fallback para mudo
  useEffect(() => {
    if (!visible || !videoRef.current) return;
    const v = videoRef.current;
    v.muted = false;
    v.volume = 1;
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        // Autoplay com som bloqueado: tocar mudo e mostrar botão para ativar
        v.muted = true;
        setMuted(true);
        v.play().catch(() => {});
      });
    }
  }, [visible]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) {
      v.volume = 1;
      v.play().catch(() => {});
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleExitIntent = (event: MouseEvent) => {
      const hasShownExitIntent = window.sessionStorage.getItem(SESSION_KEYS.exitShown) === "true";

      if (hasShownExitIntent || visible) return;

      const isLeavingTopEdge = event.clientY <= 8;
      const isRealExit = !event.relatedTarget && !event.toElement;

      if (!isLeavingTopEdge || !isRealExit) return;

      window.sessionStorage.setItem(SESSION_KEYS.exitShown, "true");
      setVisible(true);
    };

    document.addEventListener("mouseout", handleExitIntent);

    return () => {
      document.removeEventListener("mouseout", handleExitIntent);
    };
  }, [visible]);

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
          loop
          playsInline
          className="w-full h-auto block"
        />

        {/* Botão de som (aparece se o navegador bloquear o autoplay com som) */}
        {muted && (
          <button
            onClick={toggleMute}
            aria-label="Ativar som"
            className="absolute top-2 left-2 px-3 h-8 flex items-center gap-2 rounded-full bg-black/70 hover:bg-black text-white text-xs font-medium transition-colors"
          >
            <VolumeX size={16} />
            Ativar som
          </button>
        )}
        {!muted && (
          <button
            onClick={toggleMute}
            aria-label="Silenciar"
            className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 hover:bg-black text-white transition-colors"
          >
            <Volume2 size={16} />
          </button>
        )}

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

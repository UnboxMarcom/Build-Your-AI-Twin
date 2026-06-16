import { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  glowColor?: string;
}

export function TiltCard({ children, className = "", style = {}, maxTilt = 10, glowColor = "rgba(128,64,224,0.2)" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");
  const [glow, setGlow] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = -py * maxTilt;
    const ry = px * maxTilt;
    setTransform(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`);
    // Shift glow to where cursor is
    const glowX = (px + 0.5) * 100;
    const glowY = (py + 0.5) * 100;
    setGlow({ background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor} 0%, transparent 65%)` });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlow({});
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform,
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        position: "relative",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Moving glow layer */}
      {glow.background && (
        <div
          className="absolute inset-0 pointer-events-none rounded-sm"
          style={{ ...glow, zIndex: 0, borderRadius: "inherit" }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

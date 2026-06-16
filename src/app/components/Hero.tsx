import { motion } from "motion/react";
import { useState } from "react";
import unboxLogo from "../../imports/AI__Unbox_white.png";

const CX = 220;
const CY = 220;

const RING_NODES = [
  // Inner ring — r=82, 3 nodes
  { label: "Goals",      angle: -90,  r: 82,  ring: 0 },
  { label: "Rules",      angle: 30,   r: 82,  ring: 0 },
  { label: "Standards",  angle: 150,  r: 82,  ring: 0 },
  // Middle ring — r=132, 3 nodes
  { label: "Context",    angle: -30,  r: 132, ring: 1 },
  { label: "Workflows",  angle: 90,   r: 132, ring: 1 },
  { label: "Memory",     angle: 210,  r: 132, ring: 1 },
  // Outer ring — r=168, 2 nodes
  { label: "Priorities", angle: -50,  r: 168, ring: 2 },
  { label: "Decisions",  angle: 130,  r: 168, ring: 2 },
];

const RING_COLORS = ["#8040E0", "#6060E0", "#20E0E0"];
const RING_RADII = [82, 132, 168];

function toXY(angle: number, r: number) {
  const a = (angle * Math.PI) / 180;
  return { x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r };
}

function SystemDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative flex-shrink-0" style={{ width: 440, height: 440 }}>
      <svg
        viewBox="0 0 440 440"
        width="440"
        height="440"
        style={{ overflow: "visible", position: "absolute", inset: 0 }}
      >
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8040E0" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#050B18" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8040E0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8040E0" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6060E0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#20E0E0" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#20E0E0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#20E0E0" stopOpacity="0.15" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <ellipse cx={CX} cy={CY} rx="185" ry="185" fill="url(#bgGlow)" />

        {/* Orbit rings — 3 concentric, each slightly different */}
        <circle cx={CX} cy={CY} r={RING_RADII[0]} fill="none" stroke="rgba(128,64,224,0.12)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={RING_RADII[1]} fill="none" stroke="rgba(96,96,224,0.09)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx={CX} cy={CY} r={RING_RADII[2]} fill="none" stroke="rgba(32,224,224,0.07)" strokeWidth="1" strokeDasharray="2 10" />

        {/* Lines from core to each node */}
        {RING_NODES.map((node) => {
          const { x, y } = toXY(node.angle, node.r);
          const isHovered = hoveredNode === node.label;
          return (
            <line
              key={node.label + "-line"}
              x1={CX} y1={CY} x2={x} y2={y}
              stroke={`url(#lineGrad${node.ring})`}
              strokeWidth={isHovered ? 1.5 : 0.8}
              strokeOpacity={isHovered ? 1 : 0.6}
              strokeDasharray="3 5"
            />
          );
        })}

        {/* Nodes */}
        {RING_NODES.map((node) => {
          const { x, y } = toXY(node.angle, node.r);
          const isHovered = hoveredNode === node.label;
          const isRight = x > CX + 8;
          const isLeft = x < CX - 8;
          const labelX = isRight ? x + 12 : isLeft ? x - 12 : x;
          const anchor = isRight ? "start" : isLeft ? "end" : "middle";
          const labelY = !isRight && !isLeft ? (y < CY ? y - 10 : y + 16) : y + 4;
          const color = RING_COLORS[node.ring];

          return (
            <g
              key={node.label}
              filter="url(#nodeGlow)"
              style={{ cursor: "default" }}
              onMouseEnter={() => setHoveredNode(node.label)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Glow halo on hover */}
              {isHovered && (
                <circle cx={x} cy={y} r="12" fill={color} fillOpacity="0.08" />
              )}
              {/* Node bg */}
              <circle cx={x} cy={y} r="4" fill="#050B18" />
              {/* Node ring */}
              <circle cx={x} cy={y} r="4" fill="none"
                stroke={isHovered ? color : color}
                strokeOpacity={isHovered ? 1 : 0.55}
                strokeWidth="1"
              />
              {/* Center fill */}
              <circle cx={x} cy={y} r="1.8" fill={isHovered ? color : color} fillOpacity={isHovered ? 1 : 0.4} />
              {/* Label */}
              <text
                x={labelX} y={labelY}
                textAnchor={anchor}
                fill={isHovered ? "#ffffff" : "#7A8AA8"}
                fontSize={isHovered ? "10" : "9"}
                fontFamily="'Manrope', sans-serif"
                fontWeight={isHovered ? "600" : "500"}
                letterSpacing="0.2"
                style={{ transition: "fill 0.15s ease" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Ring labels — subtle */}
        <text x={CX + RING_RADII[0] + 6} y={CY - 2} fill="rgba(128,64,224,0.25)" fontSize="7" fontFamily="'IBM Plex Mono', sans-serif" letterSpacing="0.5">FOUNDATION</text>
        <text x={CX + RING_RADII[1] + 6} y={CY - 2} fill="rgba(96,96,224,0.2)" fontSize="7" fontFamily="'IBM Plex Mono', sans-serif" letterSpacing="0.5">OPERATIONS</text>
        <text x={CX + RING_RADII[2] + 6} y={CY - 2} fill="rgba(32,224,224,0.15)" fontSize="7" fontFamily="'IBM Plex Mono', sans-serif" letterSpacing="0.5">OUTPUT</text>
      </svg>

      {/* Logo core */}
      <div
        className="absolute"
        style={{
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: 80, height: 80,
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "core-breathe 4s ease-in-out infinite",
          borderRadius: 12,
          background: "rgba(5,11,24,0.95)",
        }}
      >
        <img src={unboxLogo} alt="Unbox AI" style={{ width: 64, height: 64, objectFit: "contain" }} />
      </div>
    </div>
  );
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "11px 28px",
        background: "#0A1525",
        boxShadow: hovered
          ? "0 0 0 1px rgba(32,224,224,0.55), 0 0 20px rgba(32,224,224,0.12)"
          : "0 0 0 1px rgba(128,64,224,0.4)",
        color: "#ffffff",
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
        fontSize: "0.87rem",
        letterSpacing: "0.02em",
        borderRadius: "3px",
        border: "none",
        cursor: "pointer",
        transform: hovered ? "translateY(-1px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "4px 0",
        background: "transparent",
        border: "none",
        color: hovered ? "#ffffff" : "#A7B0C5",
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 400,
        fontSize: "0.87rem",
        cursor: "pointer",
        position: "relative",
        transition: "color 0.2s ease",
      }}
    >
      {children}
      <span style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: hovered ? "100%" : "0%", background: "linear-gradient(90deg, #8040E0, #20E0E0)", transition: "width 0.3s ease" }} />
      <span style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: "100%", background: "rgba(32,224,224,0.1)" }} />
    </button>
  );
}

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-8 lg:px-16 pt-24 pb-8">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(128,64,224,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(128,64,224,0.028) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />
      {/* Left radial glow */}
      <div className="absolute pointer-events-none" style={{
        top: "-80px", left: "-120px",
        width: "550px", height: "550px",
        background: "radial-gradient(circle, rgba(128,64,224,0.07) 0%, transparent 65%)",
      }} />

      <div className="relative w-full flex items-center justify-between gap-12 lg:gap-20" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Left: copy */}
        <div style={{ maxWidth: 520, flex: "1 1 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div style={{ height: 1, width: 28, background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              One-Day Workshop
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
              fontWeight: 800,
              lineHeight: 1.04,
              color: "#ffffff",
              letterSpacing: "-0.035em",
              marginBottom: "1.4rem",
            }}
          >
            Build Your<br />AI Twin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1.05rem", color: "#D0D8F0", lineHeight: 1.65, marginBottom: "1rem", fontWeight: 400 }}
          >
            A one-day, hands-on workshop where you build your own Personal Digital Assistant.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem", color: "#A7B0C5", lineHeight: 1.82, marginBottom: "1.5rem", fontWeight: 400 }}
          >
            Most people rent their AI. In this workshop, you begin building one that is yours — shaped around your goals, your rules, your decision patterns, your workflows, and the way you actually operate.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.78rem", color: "#4A5A80", lineHeight: 1.6, marginBottom: "2rem", fontWeight: 400, letterSpacing: "0.01em" }}
          >
            Designed for CEOs, CXOs, founders, GCC leaders, business heads, and senior operators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", marginBottom: 20 }}
          >
            <PrimaryButton onClick={onOpenModal}>Register Here</PrimaryButton>
            <SecondaryButton onClick={onOpenModal}>Request the Private Workshop Brief</SecondaryButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.73rem", color: "#4A5A80", lineHeight: 1.65, fontStyle: "italic" }}
          >
            Facilitator details and deeper technical information will be shared with confirmed or shortlisted participants.
          </motion.p>
        </div>

        {/* Right: diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block flex-shrink-0"
        >
          <SystemDiagram />
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useInView } from "../hooks/useInView";

const genericPoints = [
  "Starts from zero",
  "Needs repeated context",
  "Responds task by task",
  "Gives isolated answers",
];
const twinPoints = [
  "Built around you",
  "Carries your context",
  "Follows your rules",
  "Keeps improving with use",
];

function ComparisonCard({ title, points, highlight }: { title: string; points: string[]; highlight?: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="flex-1 relative overflow-hidden"
      style={{
        background: highlight ? "rgba(128,64,224,0.04)" : "transparent",
        padding: "2rem",
      }}
    >
      {highlight && (
        <div className="absolute top-0 left-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, #8040E0, #20E0E0, transparent)" }} />
      )}
      <h3
        className="mb-8"
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: highlight ? "#ffffff" : "#4A5A80",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-4 py-2.5 transition-all duration-200 cursor-default"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderBottom: `1px solid ${hovered === i && highlight ? "rgba(32,224,224,0.1)" : "rgba(255,255,255,0.03)"}`,
              transform: hovered === i ? "translateX(4px)" : "none",
            }}
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: highlight ? (hovered === i ? "#20E0E0" : "#8040E0") : "#1E2E50" }}
            />
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.92rem",
              color: highlight ? (hovered === i ? "#ffffff" : "#D0D8F0") : (hovered === i ? "#A7B0C5" : "#4A5A80"),
              lineHeight: 1.5,
            }}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SimpleReframe() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>The Reframe</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
          }}>
            Stop renting AI.<br />
            <span style={{ color: "#A7B0C5", fontWeight: 400 }}>Start owning yours.</span>
          </h2>
          <p className="mb-16 max-w-lg" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            A generic AI assistant starts from zero every time. Your AI Twin starts from the context you build into it.
          </p>

          {/* Comparison module */}
          <div
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.04)", background: "#0A1525" }}
          >
            <div className="flex flex-col md:flex-row">
              <ComparisonCard title="Generic AI" points={genericPoints} />
              {/* Vertical divider */}
              <div className="hidden md:block w-px self-stretch" style={{ background: "linear-gradient(to bottom, transparent, rgba(128,64,224,0.3), rgba(32,224,224,0.3), transparent)" }} />
              <ComparisonCard title="Your AI Twin" points={twinPoints} highlight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

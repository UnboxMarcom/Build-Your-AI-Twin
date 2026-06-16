import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const STAGES = [
  {
    num: "01",
    label: "Plant",
    desc: "Goals, principles, frameworks, and workflows.",
    detail: "Day one: you deliberately plant the seeds. Everything you know about how you operate gets encoded as a foundation.",
  },
  {
    num: "02",
    label: "Tend",
    desc: "Every message read and task handled adds context.",
    detail: "Each interaction deposits something. Your patterns, preferences, and recurring threads start to accumulate.",
  },
  {
    num: "03",
    label: "Grow",
    desc: "Patterns recognized, opportunities surfaced, work anticipated.",
    detail: "The system begins to connect dots you didn't ask it to. It sees what comes around, what gets deferred, what signals tend to matter.",
  },
  {
    num: "04",
    label: "Compound",
    desc: "An assistant that grows itself, in your direction.",
    detail: "The longer you use it, the more it gives back. Not because it has more data — because it has more of you.",
  },
];

export function GardenMetaphor() {
  const [ref, inView] = useInView(0.1);
  const [litIndex, setLitIndex] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    STAGES.forEach((_, i) => {
      setTimeout(() => setLitIndex(i), 200 + i * 350);
    });
  }, [inView]);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>The Garden Metaphor</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
          }}>
            Think of it as a garden.
          </h2>
          <p className="mb-16 max-w-2xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.8 }}>
            On day one, you plant: goals, principles, frameworks, and workflows. Then you tend it. Every message read, every task handled, every workflow used adds context. Over time, the system starts giving back more than you put in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {STAGES.map((stage, i) => {
            const lit = i <= litIndex;
            return (
              <div
                key={i}
                className="relative overflow-hidden transition-all duration-500"
                style={{
                  background: lit ? "rgba(128,64,224,0.05)" : "#0A1525",
                  border: `1px solid ${lit ? "rgba(128,64,224,0.2)" : "rgba(255,255,255,0.04)"}`,
                  borderRadius: "3px",
                  padding: "1.5rem",
                  opacity: inView ? 1 : 0,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {lit && (
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(128,64,224,0.5), rgba(32,224,224,0.4), transparent)" }} />
                )}

                <div className="flex items-center gap-3 mb-4">
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem", color: lit ? "#20E0E0" : "#1E2E50", letterSpacing: "0.12em" }}>
                    {stage.num}
                  </span>
                  {i < STAGES.length - 1 && (
                    <div className="hidden md:block absolute top-6 -right-2 z-10" style={{ color: lit ? "rgba(128,64,224,0.4)" : "rgba(255,255,255,0.05)", fontSize: "0.7rem" }}>→</div>
                  )}
                </div>

                <h4 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: lit ? "#ffffff" : "#4A5A80",
                  marginBottom: 6,
                  letterSpacing: "0.02em",
                }}>
                  {stage.label}
                </h4>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: lit ? "#A7B0C5" : "#1E2E50", lineHeight: 1.6, marginBottom: 12 }}>
                  {stage.desc}
                </p>

                <p
                  className="mt-3 transition-all duration-300"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.75rem",
                    color: "#4A5A80",
                    lineHeight: 1.65,
                    opacity: lit ? 1 : 0,
                    borderTop: "1px solid rgba(255,255,255,0.03)",
                    paddingTop: 10,
                  }}
                >
                  {stage.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

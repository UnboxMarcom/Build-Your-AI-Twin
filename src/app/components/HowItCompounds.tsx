import { useInView } from "../hooks/useInView";

const STAGES = [
  { num: "01", label: "Plant",    desc: "Goals, principles, frameworks, and workflows." },
  { num: "02", label: "Tend",     desc: "Every interaction adds context." },
  { num: "03", label: "Grow",     desc: "Patterns are recognised and opportunities surface." },
  { num: "04", label: "Compound", desc: "The assistant grows in your direction." },
];

export function HowItCompounds() {
  const [ref, inView] = useInView(0.15);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>How It Compounds</span>
          </div>
          <h2 className="mb-4 max-w-2xl" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            Built to keep getting sharper.
          </h2>
          <p className="mb-14 max-w-2xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.8 }}>
            Your AI Twin becomes useful because it is not generic. Soul makes it yours. Memory makes it improve.<br /><br />
            On day one, you plant the foundation: goals, principles, frameworks, and workflows. With use, the assistant keeps gaining context and starts giving back more than you put in.
          </p>
        </div>

        {/* Horizontal progression */}
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "180ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: "rgba(128,64,224,0.08)", borderRadius: "3px", overflow: "hidden", border: "1px solid rgba(128,64,224,0.1)" }}>
            {STAGES.map((stage, i) => {
              const pct = i / (STAGES.length - 1);
              const r = Math.round(128 + (32 - 128) * pct);
              const g = Math.round(64 + (224 - 64) * pct);
              const b = Math.round(224);
              const nodeColor = `rgb(${r},${g},${b})`;

              return (
                <div
                  key={i}
                  className="relative"
                  style={{
                    background: "#0A1525",
                    padding: "1.75rem",
                    borderRight: i < STAGES.length - 1 ? "1px solid rgba(128,64,224,0.08)" : "none",
                    opacity: inView ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    transitionDelay: `${200 + i * 100}ms`,
                  }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${nodeColor}50, transparent)` }} />

                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: nodeColor, letterSpacing: "0.12em", opacity: 0.8 }}>{stage.num}</span>
                    {/* Visual connector line */}
                    {i < STAGES.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 z-10" style={{ color: "rgba(128,64,224,0.3)", fontSize: "0.65rem" }}>→</div>
                    )}
                  </div>

                  <h4 style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}>
                    {stage.label}
                  </h4>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", color: "#A7B0C5", lineHeight: 1.65 }}>
                    {stage.desc}
                  </p>

                  {/* Compounding density indicator */}
                  <div className="mt-4 flex items-end gap-1" style={{ height: 20 }}>
                    {Array.from({ length: i + 1 }).map((_, j) => (
                      <div
                        key={j}
                        style={{
                          width: 3,
                          height: `${40 + j * 15}%`,
                          background: nodeColor,
                          opacity: 0.3 + j * 0.15,
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

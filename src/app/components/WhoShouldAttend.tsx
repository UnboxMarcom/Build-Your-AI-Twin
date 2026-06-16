import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { TiltCard } from "./TiltCard";

const PERSONAS = [
  {
    title: "Founders",
    desc: "For leaders who want leverage, not another subscription.",
    detail: "You are building something and you are the constraint. This builds a system that multiplies your output without multiplying your hours.",
  },
  {
    title: "CEOs / CXOs",
    desc: "For leaders whose decisions carry context, history, and trade-offs.",
    detail: "Your decisions are high-stakes and context-heavy. Build an assistant that holds that context so you can move faster with more confidence.",
  },
  {
    title: "GCC Leaders",
    desc: "For leaders managing scale, stakeholders, capability, and strategic value.",
    detail: "You operate across functions, geographies, and expectations. A system that holds your priorities and standards is leverage you can use every day.",
  },
  {
    title: "Business Heads",
    desc: "For leaders balancing priorities, execution, people, and follow-through.",
    detail: "Your day is pulled in many directions. Build a system that keeps you oriented — so nothing important falls through.",
  },
  {
    title: "Operators",
    desc: "For leaders managing many moving parts across teams and decisions.",
    detail: "Multiple teams, multiple threads, multiple contexts. Build a system that holds the complexity so you do not have to.",
  },
];

export function WhoShouldAttend() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ height: 1, width: 24, background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>Who Should Attend</span>
          </div>
          <h2 className="mb-4 max-w-2xl" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            Built for leaders who need leverage,<br />
            <span style={{ color: "#A7B0C5", fontWeight: 400 }}>not another subscription.</span>
          </h2>
          <p className="mb-14 max-w-xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            This workshop is for leaders managing too much context, too many decisions, and too many recurring leadership tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {PERSONAS.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <TiltCard
                key={i}
                glowColor={i % 2 === 0 ? "rgba(128,64,224,0.15)" : "rgba(32,224,224,0.1)"}
                style={{
                  background: isOpen ? "rgba(128,64,224,0.06)" : "#0A1525",
                  border: `1px solid ${isOpen ? "rgba(128,64,224,0.22)" : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "3px",
                  padding: "1.5rem",
                  cursor: "pointer",
                  opacity: inView ? 1 : 0,
                  transitionDelay: `${(i % 3) * 50 + 80}ms`,
                  minHeight: 140,
                }}
                className="transition-all duration-700"
                // @ts-ignore
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                <div style={{ position: "relative" }}>
                  {isOpen && (
                    <div style={{ position: "absolute", top: -24, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(128,64,224,0.45), rgba(32,224,224,0.25), transparent)" }} />
                  )}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                    <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                      {p.title}
                    </h4>
                    <span style={{ color: isOpen ? "#20E0E0" : "#1E2E50", fontSize: "1rem", transition: "color 0.2s, transform 0.2s", transform: isOpen ? "rotate(45deg)" : "none", flexShrink: 0, marginLeft: 8 }}>+</span>
                  </div>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.83rem", color: "#A7B0C5", lineHeight: 1.65, marginBottom: isOpen ? 12 : 0 }}>
                    {p.desc}
                  </p>
                  <div style={{ overflow: "hidden", maxHeight: isOpen ? 100 : 0, transition: "max-height 0.3s ease" }}>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#D0D8F0", lineHeight: 1.75, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                      {p.detail}
                    </p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Note */}
        <p
          className="transition-all duration-700"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.82rem",
            color: "#4A5A80",
            lineHeight: 1.65,
            fontStyle: "italic",
            opacity: inView ? 1 : 0,
            transitionDelay: "350ms",
          }}
        >
          No AI engineering background required. You bring your goals and way of working. The workshop provides the structure.
        </p>
      </div>
    </section>
  );
}

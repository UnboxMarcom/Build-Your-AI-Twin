import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import { Check } from "lucide-react";

const ITEMS = [
  { title: "Working assistant foundation", desc: "Built for you and owned by you." },
  { title: "Soul defined", desc: "Your goals, operating style, frameworks, and principles." },
  { title: "Constitution created", desc: "Your rules, boundaries, and things it must never violate." },
  { title: "Workflow libraries started", desc: "Repeatable playbooks for the work you do often." },
  { title: "Memory structure created", desc: "A foundation that keeps building with every interaction." },
  { title: "Prioritized action summary", desc: "A clearer view of what needs your attention, judgment, or follow-through." },
];

export function WhatYouLeaveWith() {
  const [ref, inView] = useInView(0.1);
  const [ticked, setTicked] = useState<boolean[]>(new Array(ITEMS.length).fill(false));

  useEffect(() => {
    if (!inView) return;
    ITEMS.forEach((_, i) => {
      setTimeout(() => {
        setTicked((prev) => { const n = [...prev]; n[i] = true; return n; });
      }, 300 + i * 240);
    });
  }, [inView]);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>What You Leave With</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            What you leave with.
          </h2>
          <p className="mb-14 max-w-xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            By the end of the workshop, you leave with a working foundation of your Personal Digital Assistant.
          </p>
        </div>

        <div className="space-y-2">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 px-5 py-5 transition-all duration-600"
              style={{
                background: ticked[i] ? "rgba(128,64,224,0.04)" : "#0A1525",
                border: `1px solid ${ticked[i] ? "rgba(128,64,224,0.18)" : "rgba(255,255,255,0.04)"}`,
                borderRadius: "3px",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateX(-10px)",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              <div
                className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center transition-all duration-400"
                style={{
                  background: ticked[i] ? "linear-gradient(135deg, #8040E0, #20E0E0)" : "transparent",
                  border: ticked[i] ? "none" : "1px solid #1E2E50",
                  borderRadius: "2px",
                }}
              >
                {ticked[i] && <Check size={11} style={{ color: "#ffffff", strokeWidth: 3 }} />}
              </div>
              <div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: ticked[i] ? "#ffffff" : "#4A5A80", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {item.title}
                </p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: ticked[i] ? "#A7B0C5" : "#1E2E50", lineHeight: 1.55, marginTop: 3 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useInView } from "../hooks/useInView";

const COLUMNS = [
  {
    label: "Define",
    num: "01",
    color: "#8040E0",
    items: ["Goals", "Rules", "Principles", "Operating style"],
    caption: "What you stand for and how you work.",
  },
  {
    label: "Build",
    num: "02",
    color: "#6060E0",
    items: ["Workflow libraries", "Assistant foundation", "Pattern memory", "Context structure"],
    caption: "The infrastructure that runs on your terms.",
  },
  {
    label: "Use",
    num: "03",
    color: "#20E0E0",
    items: ["Prioritized action summary", "Repeatable playbooks", "Ongoing improvement"],
    caption: "A sharper view of what actually needs you.",
  },
];

export function WhatYouBuild() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>What You Build</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            A working assistant,<br />not a demo.
          </h2>
          <p className="mb-4 max-w-xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            This is a hands-on build experience. By the end of the workshop, you leave with the working foundation of your own Personal Digital Assistant — built around your goals, rules, workflows, and memory.
          </p>
          <p className="mb-16 max-w-xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", color: "#4A5A80", lineHeight: 1.75, fontStyle: "italic" }}>
            Communication channels can be connected as part of the assistant foundation, based on the build scope.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px transition-all duration-700"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(128,64,224,0.12)",
            borderRadius: "3px",
            overflow: "hidden",
            opacity: inView ? 1 : 0,
            transitionDelay: "150ms",
          }}
        >
          {COLUMNS.map((col, i) => (
            <div
              key={col.label}
              className="relative"
              style={{
                background: "#0A1525",
                padding: "2rem",
                borderRight: i < COLUMNS.length - 1 ? "1px solid rgba(128,64,224,0.1)" : "none",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${col.color}70, transparent)` }} />

              <div className="flex items-center gap-3 mb-6">
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: col.color, letterSpacing: "0.12em" }}>{col.num}</span>
                <div className="h-px flex-1" style={{ background: `${col.color}25` }} />
              </div>

              <h3 style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}>
                {col.label}
              </h3>

              <div className="space-y-3 mb-6">
                {col.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-px h-3 flex-shrink-0" style={{ background: col.color, opacity: 0.5 }} />
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.88rem", color: "#D0D8F0", lineHeight: 1.4 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", color: "#4A5A80", lineHeight: 1.6, fontStyle: "italic", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "1rem" }}>
                {col.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

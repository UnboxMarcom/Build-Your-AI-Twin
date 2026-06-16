import { useInView } from "../hooks/useInView";

const LAYERS = [
  {
    num: "01",
    title: "Knowledge of You",
    desc: "Your role, relationships, context, and the world you operate in.",
  },
  {
    num: "02",
    title: "Constitution",
    desc: "Your rules, frameworks, principles, boundaries, and non-negotiables.",
  },
  {
    num: "03",
    title: "Goals",
    desc: "Where you are headed, so every answer and action points in the same direction.",
  },
  {
    num: "04",
    title: "Workflow Libraries",
    desc: "Repeatable playbooks for the work you do often.",
  },
  {
    num: "05",
    title: "Pattern Memory",
    desc: "A memory layer that remembers, connects, compounds, and starts noticing recurring patterns.",
  },
];

export function AITwinStack() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>What is an AI Twin?</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            Your personal AI infrastructure.
          </h2>
          <p className="mb-14 max-w-xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            Your AI Twin is a Personal Digital Assistant built for you and owned by you. It carries the foundational layers that make it personal, useful, and extendable.
          </p>
        </div>

        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#4A5A80", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
          The AI Twin Stack
        </p>

        <div className="space-y-1.5">
          {LAYERS.map((layer, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-6 py-5 transition-all duration-700"
              style={{
                background: "#0A1525",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "3px",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(12px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#1E2E50", letterSpacing: "0.1em", flexShrink: 0, width: 24 }}>
                {layer.num}
              </span>
              <div
                className="flex-shrink-0 w-px self-stretch"
                style={{ background: `linear-gradient(to bottom, #8040E0${Math.round(80 - i * 10).toString(16)}, #20E0E0${Math.round(40 + i * 10).toString(16)})` }}
              />
              <div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#ffffff", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {layer.title}
                </p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", color: "#A7B0C5", lineHeight: 1.55, marginTop: 3 }}>
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

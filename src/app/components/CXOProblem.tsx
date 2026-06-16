import { useInView } from "../hooks/useInView";

const SCATTERED = ["Decisions", "Reviews", "People", "Priorities", "Follow-ups", "Ideas", "Trade-offs", "Commitments"];
const STRUCTURED = ["Judgment", "Attention", "Context", "Action"];

export function CXOProblem() {
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
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>The Problem</span>
          </div>
          <h2 className="mb-4 max-w-2xl" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            Leadership has become<br />a context problem.
          </h2>
          <p className="mb-16 max-w-2xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.82 }}>
            For senior leaders, the real constraint is no longer information. It is judgment, attention, and the cost of context-switching.<br /><br />
            Your day is filled with decisions, conversations, reviews, follow-ups, trade-offs, and unfinished thinking. The challenge is not to process more. The challenge is to build a system that understands what matters, what can wait, and what needs your judgment.
          </p>
        </div>

        {/* Context flow diagram */}
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "200ms" }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left: scattered context */}
            <div className="flex-1 lg:pr-12">
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#4A5A80", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Scattered context
              </p>
              <div className="grid grid-cols-2 gap-2">
                {SCATTERED.map((item, i) => (
                  <div
                    key={item}
                    className="px-4 py-3 transition-all duration-700"
                    style={{
                      background: "#0A1525",
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: "2px",
                      opacity: inView ? 1 : 0,
                      transitionDelay: `${250 + i * 50}ms`,
                    }}
                  >
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.82rem", color: "#4A5A80", lineHeight: 1.3 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow / flow lines */}
            <div className="flex flex-col items-center gap-1 flex-shrink-0 lg:w-32">
              <div className="hidden lg:block" style={{ width: 1, height: 32, background: "linear-gradient(to bottom, transparent, rgba(128,64,224,0.4))" }} />
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="hidden lg:block">
                <path d="M0 12 Q40 4 80 12" stroke="url(#arrowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M0 12 Q40 20 80 12" stroke="url(#arrowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <defs>
                  <linearGradient id="arrowGrad" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8040E0" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#20E0E0" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", color: "#4A5A80", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>
                structured
              </span>
              <svg width="80" height="12" viewBox="0 0 80 12" fill="none" className="hidden lg:block">
                <path d="M72 6 L80 6 L74 2 M80 6 L74 10" stroke="rgba(32,224,224,0.5)" strokeWidth="1" />
              </svg>
              <div className="hidden lg:block" style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(32,224,224,0.4), transparent)" }} />
              {/* Mobile arrow */}
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="lg:hidden">
                <path d="M12 0 L12 36" stroke="url(#arrowGradV)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M6 32 L12 40 L18 32" stroke="rgba(32,224,224,0.5)" strokeWidth="1" fill="none" />
                <defs>
                  <linearGradient id="arrowGradV" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8040E0" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#20E0E0" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Right: structured view */}
            <div className="flex-1 lg:pl-12">
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#20E0E0", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem", opacity: 0.7 }}>
                Structured view
              </p>
              <div className="space-y-2">
                {STRUCTURED.map((item, i) => (
                  <div
                    key={item}
                    className="px-4 py-4 relative overflow-hidden transition-all duration-700"
                    style={{
                      background: "rgba(128,64,224,0.04)",
                      border: "1px solid rgba(128,64,224,0.15)",
                      borderRadius: "2px",
                      opacity: inView ? 1 : 0,
                      transitionDelay: `${400 + i * 80}ms`,
                    }}
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, transparent, rgba(${i < 2 ? "128,64,224" : "32,224,224"},0.6), transparent)` }} />
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.92rem", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.01em" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

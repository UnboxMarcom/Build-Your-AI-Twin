import { useInView } from "../hooks/useInView";

export function CoreFrame() {
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
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>The Frame</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            Every meaningful task<br />is the same shape.
          </h2>
        </div>

        {/* Framework diagram */}
        <div
          className="mt-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "150ms" }}
        >
          <div className="flex flex-col lg:flex-row items-stretch gap-0">
            {/* Current State */}
            <div
              className="flex-1 px-8 py-8 relative"
              style={{
                background: "#0A1525",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRight: "none",
                borderRadius: "3px 0 0 3px",
              }}
            >
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", color: "#4A5A80", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Current State</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#A7B0C5", lineHeight: 1.5 }}>
                Where you are today — incomplete, constrained, or operating below the standard you want.
              </p>
            </div>

            {/* Gap — arrow bridge */}
            <div
              className="flex flex-col lg:flex-row items-center justify-center flex-shrink-0"
              style={{ background: "#0A1525", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", minWidth: 120, padding: "2rem 0" }}
            >
              <div className="flex lg:flex-col items-center gap-3 px-6">
                <div className="hidden lg:block" style={{ width: 1, height: 24, background: "linear-gradient(to bottom, transparent, rgba(128,64,224,0.5))" }} />
                <div style={{ padding: "6px 14px", border: "1px solid rgba(128,64,224,0.3)", borderRadius: "2px", background: "rgba(128,64,224,0.06)" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#8040E0", letterSpacing: "0.1em", textTransform: "uppercase" }}>Gap</span>
                </div>
                <div className="hidden lg:block" style={{ width: 1, height: 24, background: "linear-gradient(to bottom, rgba(32,224,224,0.5), transparent)" }} />
                {/* Mobile arrow */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="lg:hidden">
                  <path d="M4 12 L20 12 M14 6 L20 12 L14 18" stroke="rgba(32,224,224,0.5)" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Ideal State */}
            <div
              className="flex-1 px-8 py-8 relative"
              style={{
                background: "rgba(128,64,224,0.04)",
                border: "1px solid rgba(128,64,224,0.18)",
                borderLeft: "none",
                borderRadius: "0 3px 3px 0",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(128,64,224,0.4), rgba(32,224,224,0.3), transparent)" }} />
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", color: "#20E0E0", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem", opacity: 0.8 }}>Ideal State</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#ffffff", lineHeight: 1.5 }}>
                Where you want to be — the outcome, standard, or result that matters.
              </p>
            </div>
          </div>

          {/* Supporting line */}
          <div className="mt-10 max-w-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1" style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #8040E0, #20E0E0)" }} />
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1rem", color: "#D0D8F0", lineHeight: 1.75 }}>
                Your AI Twin is the second brain you point at that gap, again and again, until it closes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useInView } from "../hooks/useInView";
import { TiltCard } from "./TiltCard";

const CARDS = [
  {
    title: "Soul",
    subtitle: "What makes it yours.",
    body: "Your DA is defined in terms of your professional and personal goals, your operating style, your frameworks, and your principles. This is what makes it yours.",
    tags: ["Goals", "Principles", "Frameworks", "Operating Style"],
    accentColor: "#8040E0",
    gradientFrom: "#8040E0",
    gradientTo: "#6060E0",
  },
  {
    title: "Memory",
    subtitle: "What makes it keep getting better.",
    body: "A memory that keeps building with every interaction. It watches patterns in your daily tasks, learns what recurs, and starts surfacing opportunities you did not ask about.",
    tags: ["Patterns", "Recurring Tasks", "Signals", "Opportunities"],
    accentColor: "#20E0E0",
    gradientFrom: "#6060E0",
    gradientTo: "#20E0E0",
  },
];

export function SoulMemory() {
  const [ref, inView] = useInView(0.15);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div style={{ height: 1, width: 24, background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>Soul & Memory</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
          }}>
            Built on Soul and Memory.
          </h2>
          <p className="mb-14 max-w-xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            Your AI Twin becomes useful because it is not generic. It is shaped by who you are, how you work, and what it learns from repeated use.
          </p>
        </div>

        <div
          className="relative flex flex-col md:flex-row transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "150ms" }}
        >
          {CARDS.map((card, i) => (
            <div key={i} className="flex-1 relative group">
              <TiltCard
                glowColor={`${card.accentColor}20`}
                style={{
                  height: "100%",
                  padding: "2rem",
                  background: "#0A1525",
                  border: `1px solid rgba(255,255,255,0.05)`,
                  borderRadius: "4px",
                }}
              >
                {/* Gradient top line — always visible, glows on hover */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, height: 1,
                  background: `linear-gradient(90deg, transparent, ${card.accentColor}50, transparent)`,
                }} />

                <h3 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  backgroundImage: `linear-gradient(120deg, ${card.gradientFrom}, ${card.gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  marginBottom: 6,
                }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#4A5A80", marginBottom: 18, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {card.subtitle}
                </p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.92rem", color: "#A7B0C5", lineHeight: 1.82, marginBottom: 24 }}>
                  {card.body}
                </p>

                {/* Tags — visible always, brighten on hover via group */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {card.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 10px",
                      background: card.accentColor + "0e",
                      border: `1px solid ${card.accentColor}22`,
                      color: card.accentColor,
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      borderRadius: "2px",
                      transition: "background 0.2s, border-color 0.2s",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>

              {/* Connecting thread between cards */}
              {i === 0 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-px z-10"
                  style={{
                    width: 1,
                    height: "55%",
                    transform: "translateY(-50%)",
                    background: "linear-gradient(to bottom, transparent, rgba(128,64,224,0.35), rgba(32,224,224,0.35), transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

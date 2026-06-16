import { useState } from "react";
import { useInView } from "../hooks/useInView";

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "12px 32px",
        background: "rgba(128,64,224,0.12)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(32,224,224,0.65), 0 0 28px rgba(32,224,224,0.2), inset 0 0 20px rgba(128,64,224,0.1)"
          : "0 0 0 1px rgba(128,64,224,0.5), inset 0 0 16px rgba(128,64,224,0.06)",
        color: "#ffffff",
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
        fontSize: "0.88rem",
        letterSpacing: "0.02em",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "all 0.22s ease",
      }}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "4px 0",
        background: "transparent",
        border: "none",
        color: hovered ? "#ffffff" : "#A7B0C5",
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 400,
        fontSize: "0.88rem",
        cursor: "pointer",
        position: "relative",
        transition: "color 0.2s ease",
      }}
    >
      {children}
      <span style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: hovered ? "100%" : "0%", background: "linear-gradient(90deg, #8040E0, #20E0E0)", transition: "width 0.3s ease" }} />
      <span style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: "100%", background: "rgba(32,224,224,0.15)" }} />
    </button>
  );
}

export function FinalCTA({ onOpenModal }: { onOpenModal: () => void }) {
  const [ref, inView] = useInView(0.15);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16 relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(128,64,224,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(128,64,224,0.025) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />
      {/* Glow */}
      <div className="absolute pointer-events-none" style={{
        bottom: "-80px", right: "-80px",
        width: "480px", height: "480px",
        background: "radial-gradient(circle, rgba(32,224,224,0.06) 0%, transparent 65%)",
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(128,64,224,0.25), rgba(32,224,224,0.15), transparent)" }} />

      <div
        className="relative transition-all duration-1000"
        style={{ maxWidth: 1100, margin: "0 auto", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
      >
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: headline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div style={{ height: 1, width: 24, background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>Apply</span>
            </div>
            <h2 style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
            }}>
              Build it once.<br />
              <span style={{ color: "#A7B0C5", fontWeight: 400 }}>Keep making it<br />better every day.</span>
            </h2>
          </div>

          {/* Right: copy + CTAs */}
          <div style={{ paddingTop: "5rem" }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "1rem", color: "#A7B0C5", lineHeight: 1.82, marginBottom: "2.5rem" }}>
              Your AI Twin is designed to keep learning your context, your patterns, your workflows, and your direction.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", marginBottom: 28 }}>
              <PrimaryButton onClick={onOpenModal}>Register Here</PrimaryButton>
              <SecondaryButton onClick={onOpenModal}>Request the Private Workshop Brief</SecondaryButton>
            </div>

            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.68rem", color: "#4A5A80", lineHeight: 1.8, letterSpacing: "0.04em", marginBottom: 20, borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 20 }}>
              Not a chatbot demo. Not a prompt class. Not a generic AI session.<br />A hands-on build experience.
            </p>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#4A5A80", marginBottom: 8 }}>
              Questions?{" "}
              <a
                href="mailto:hello@unbox.ai"
                style={{ color: "#8040E0", textDecoration: "none", borderBottom: "1px solid rgba(128,64,224,0.3)", paddingBottom: 1 }}
              >
                Write to us
              </a>
            </p>

            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.73rem", color: "#4A5A80", fontStyle: "italic", lineHeight: 1.65 }}>
              Facilitator details and deeper technical information will be shared with confirmed or shortlisted participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

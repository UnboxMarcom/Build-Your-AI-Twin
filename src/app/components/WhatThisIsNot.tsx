import { useState } from "react";
import { useInView } from "../hooks/useInView";

const NOT_THIS = ["Chatbot demo", "Prompt list", "Generic productivity session", "One-size-fits-all AI tool"];
const THIS = ["Your goals", "Your rules", "Your workflows", "Your memory layer"];

export function WhatThisIsNot() {
  const [showThis, setShowThis] = useState(false);
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(28px)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #8040E0, #20E0E0)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>What This Is Not</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
          }}>
            Not another AI workshop.
          </h2>
          <p className="mb-16 max-w-xl" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            This is not a generic AI awareness session, a prompt-writing class, or a software demo. It is a hands-on build experience where you begin creating a Personal Digital Assistant designed around you and owned by you.
          </p>
        </div>

        {/* Toggle */}
        <div
          className="flex items-center gap-2 mb-10 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "120ms" }}
        >
          {["Not This", "This"].map((label, i) => {
            const active = i === 0 ? !showThis : showThis;
            return (
              <button
                key={label}
                onClick={() => setShowThis(i === 1)}
                className="px-5 py-2 text-sm transition-all duration-200"
                style={{
                  background: active ? "rgba(128,64,224,0.15)" : "transparent",
                  border: active ? "1px solid rgba(128,64,224,0.35)" : "1px solid rgba(255,255,255,0.05)",
                  color: active ? "#ffffff" : "#4A5A80",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.82rem",
                  letterSpacing: "0.02em",
                  borderRadius: "3px",
                  boxShadow: active ? "0 0 20px rgba(128,64,224,0.12)" : "none",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden" style={{ minHeight: 260 }}>
          {/* Not This */}
          <div
            className="absolute inset-0 transition-all duration-400 grid grid-cols-2 gap-3"
            style={{ opacity: showThis ? 0 : 1, transform: showThis ? "translateX(-20px)" : "none", pointerEvents: showThis ? "none" : "all" }}
          >
            {NOT_THIS.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-5" style={{ background: "#0A1525", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "3px" }}>
                <span style={{ color: "#1E2E50", fontSize: "0.9rem" }}>✕</span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.92rem", color: "#4A5A80", lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* This */}
          <div
            className="absolute inset-0 transition-all duration-400 grid grid-cols-2 gap-3"
            style={{ opacity: showThis ? 1 : 0, transform: showThis ? "none" : "translateX(20px)", pointerEvents: showThis ? "all" : "none" }}
          >
            {THIS.map((item, i) => (
              <div key={i} className="relative flex items-center gap-4 px-6 py-5 overflow-hidden" style={{ background: "rgba(128,64,224,0.05)", border: "1px solid rgba(128,64,224,0.2)", borderRadius: "3px" }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(128,64,224,0.5), rgba(32,224,224,0.3), transparent)" }} />
                <span style={{ color: "#20E0E0", fontSize: "0.75rem", opacity: 0.7 }}>✦</span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.01em" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Hero } from "./components/Hero";
import { CXOProblem } from "./components/CXOProblem";
import { SimpleReframe } from "./components/SimpleReframe";
import { AITwinStack } from "./components/AITwinStack";
import { WhatYouBuildRoom } from "./components/WhatYouBuildRoom";
import { HowItCompounds } from "./components/HowItCompounds";
import { FormatStrip } from "./components/FormatStrip";
import { FinalCTA } from "./components/FinalCTA";
import { CTAModal } from "./components/CTAModal";
import unboxLogo from "../imports/unbox_logo.png";

const NAV_LINKS = [
  { label: "What it is", href: "#what-it-is" },
  { label: "What you build", href: "#what-you-build" },
  { label: "Format", href: "#format" },
];

function NavButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "11px 28px",
        background: "#0A1525",
        boxShadow: hovered
          ? "0 0 0 1px rgba(32,224,224,0.55), 0 0 20px rgba(32,224,224,0.12)"
          : "0 0 0 1px rgba(128,64,224,0.4)",
        color: "#ffffff",
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
        fontSize: "0.87rem",
        letterSpacing: "0.02em",
        borderRadius: "3px",
        border: "none",
        cursor: "pointer",
        transform: hovered ? "translateY(-1px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ background: "#050B18", minHeight: "100vh", fontFamily: "'Manrope', sans-serif", overflowX: "hidden" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-4"
        style={{
          background: "rgba(5,11,24,0.92)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(128,64,224,0.07)",
        }}
      >
        <img src={unboxLogo} alt="Unbox" style={{ height: 28, width: "auto", objectFit: "contain" }} />

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", color: "#A7B0C5", textDecoration: "none", letterSpacing: "0.01em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A7B0C5")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <NavButton onClick={openModal}>Register Here</NavButton>
      </nav>

      <main>
        <Hero onOpenModal={openModal} />
        <CXOProblem />
        <SimpleReframe />
        <section id="what-it-is" style={{ height: 0 }} />
        <AITwinStack />
        <section id="what-you-build" style={{ height: 0 }} />
        <WhatYouBuildRoom />
        <HowItCompounds />
        <section id="format" style={{ height: 0 }} />
        <FormatStrip />
        <FinalCTA onOpenModal={openModal} />
      </main>

      {/* Footer */}
      <footer
        className="px-8 lg:px-16 py-10"
        style={{ borderTop: "1px solid rgba(128,64,224,0.07)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="flex items-center gap-4">
            <img src={unboxLogo} alt="Unbox" style={{ height: 22, width: "auto", objectFit: "contain", opacity: 0.5 }} />
            <div style={{ width: 1, height: 18, background: "rgba(128,64,224,0.2)" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem", color: "#4A5A80", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Build Your AI Twin
            </span>
          </div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#1E2E50", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Workshop · 2025
          </p>
        </div>
      </footer>
      <CTAModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(2,6,17,0.75)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "100%",
              maxWidth: 780,
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              background: "rgba(5,11,24,0.97)",
              borderRadius: "6px",
              boxShadow: "0 0 0 1px rgba(128,64,224,0.3), 0 0 80px rgba(128,64,224,0.12), 0 32px 64px rgba(0,0,0,0.6)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Gradient border top */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent 5%, #8040E0 35%, #20E0E0 65%, transparent 95%)",
            }} />

            {/* Header */}
            <div
              className="flex items-start justify-between"
              style={{
                padding: "2rem 2rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                flexShrink: 0,
              }}
            >
              <div>
                <h2 style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  marginBottom: "0.5rem",
                }}>
                  Register for Build Your AI Twin
                </h2>
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.85rem",
                  color: "#A7B0C5",
                  lineHeight: 1.65,
                  maxWidth: 460,
                }}>
                  Share your details and our team will get back to you with the private workshop brief and next steps.
                </p>
              </div>
              <button
                onClick={onClose}
                style={{
                  flexShrink: 0,
                  marginLeft: "1.5rem",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "3px",
                  color: "#A7B0C5",
                  cursor: "pointer",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#A7B0C5";
                }}
                aria-label="Close"
              >
                <X size={15} strokeWidth={1.8} />
              </button>
            </div>

            {/* Form area — modal scrolls, iframe never scrolls internally */}
            <div style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              WebkitOverflowScrolling: "touch" as any,
              scrollBehavior: "smooth",
            }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSezUhADOrw_QOSCbqqBMX-tcX1DTQ0JOktbmT3mBfvdFNxJGw/viewform?embedded=true"
                width="100%"
                height="951"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                style={{ border: "none", display: "block", background: "transparent", minHeight: 951 }}
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

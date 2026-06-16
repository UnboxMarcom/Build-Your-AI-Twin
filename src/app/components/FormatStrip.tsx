import { useInView } from "../hooks/useInView";
import { Sun, MapPin, Laptop, Users, FileText, TrendingUp } from "lucide-react";

const FORMAT = [
  { icon: Sun,         label: "One Day",              sub: "Intensive and focused" },
  { icon: MapPin,      label: "In Person",             sub: "A shared room. Real build." },
  { icon: Laptop,      label: "Bring Your Laptop",     sub: "You build as you learn" },
  { icon: Users,       label: "Limited Cohort",        sub: "Intimate by design" },
  { icon: FileText,    label: "Pre-Workshop Brief",    sub: "Sent to confirmed seats" },
  { icon: TrendingUp,  label: "Continued Build Path",  sub: "This is day one, not the end" },
];

export function FormatStrip() {
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
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "#A7B0C5", letterSpacing: "0.18em", textTransform: "uppercase" }}>Format</span>
          </div>
          <h2 className="mb-4" style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
          }}>
            One day. Hands-on.<br />
            <span style={{ backgroundImage: "linear-gradient(120deg, #8040E0, #20E0E0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Limited seats.
            </span>
          </h2>
          <p className="mb-16 max-w-lg" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", color: "#A7B0C5", lineHeight: 1.75 }}>
            The workshop is designed to be intimate so that each participant can build with enough depth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {FORMAT.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group p-5 flex flex-col items-center text-center gap-3 transition-all duration-700 hover:scale-[1.03] cursor-default"
                style={{
                  background: "#0A1525",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "3px",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(16px)",
                  transitionDelay: `${i * 55}ms`,
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{
                    background: "rgba(128,64,224,0.08)",
                    border: "1px solid rgba(128,64,224,0.18)",
                    borderRadius: "3px",
                  }}
                >
                  <Icon size={16} style={{ color: "#8040E0" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#ffffff", lineHeight: 1.3 }}>{item.label}</p>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", color: "#4A5A80", lineHeight: 1.4, marginTop: 3 }}>{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

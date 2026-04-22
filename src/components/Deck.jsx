import { useRef, useState, useEffect } from "react";
import EventsModule from "../modules/EventsModule";
import SponsorshipModule from "../modules/SponsorshipModule";
import LeasingModule from "../modules/LeasingModule";

export default function Deck({ children }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // 🔥 MODULE STATE
  const [activeModule, setActiveModule] = useState(null);

  const sections = [
    "Intro",
    "Why",
    "Retail",
    "Luxury",
    "Experience",
    "Outcome",
    "Dining",
    "Attractions",
    "Events",
  ];

  /* 🔥 SCROLL SYNC */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current.scrollTop;
      const newIndex = Math.round(scrollTop / window.innerHeight);
      setIndex(newIndex);
    };

    const el = containerRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (i) => {
    containerRef.current.scrollTo({
      top: i * window.innerHeight,
      behavior: "smooth",
    });
  };

  // 🔥 MODULE HANDLERS
  const openModule = (name) => setActiveModule(name);
  const closeModule = () => setActiveModule(null);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">

      {/* 🔥 MAIN DECK (BLUR WHEN MODULE OPEN) */}
      <div
        ref={containerRef}
        className={`h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-all duration-500 ${
          activeModule ? "blur-md scale-[0.98]" : ""
        }`}
      >
        {children.map((child, i) => (
          <div key={i} className="h-screen w-screen snap-start">
            {/* 🔥 PASS openModule */}
            {typeof child === "function"
              ? child({ openModule })
              : child}
          </div>
        ))}
      </div>

      {/* 🔥 MODULE LAYER */}
      {activeModule === "events" && (
        <EventsModule onClose={closeModule} />
      )}

      {activeModule === "sponsorship" && (
        <SponsorshipModule onClose={closeModule} />
      )}

      {activeModule === "leasing" && (
        <LeasingModule onClose={closeModule} />
      )}

      {/* 🔥 SIDE NAV */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 
                      bg-black/40 backdrop-blur-md px-3 py-4 rounded-xl border border-white/10">

        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-2 h-2 rounded-full transition ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/30 group-hover:bg-white/60"
              }`}
            />

            <span
              className={`text-xs tracking-wide transition ${
                i === index ? "text-white" : "text-white/40"
              }`}
            >
              {String(i + 1).padStart(2, "0")} — {s}
            </span>
          </button>
        ))}
      </div>

      {/* 🔥 PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/10 z-50">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${((index + 1) / sections.length) * 100}%`,
          }}
        />
      </div>

      {/* 🔥 MOBILE DOTS */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
                      bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex gap-3">

        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* 🔥 MENU */}
      <Menu sections={sections} goTo={goTo} />
    </div>
  );
}
function Menu({ sections, goTo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 text-white text-sm tracking-wide 
                   bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      >
        Menu
      </button>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white/60"
          >
            Close
          </button>

          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                setOpen(false);
              }}
              className="text-white text-2xl tracking-wide hover:opacity-70 transition"
            >
              {String(i + 1).padStart(2, "0")} — {s}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
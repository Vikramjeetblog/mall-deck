import { useRef, useState, useEffect } from "react";
import EventsModule from "../modules/EventsModule";
import SponsorshipModule from "../modules/SponsorshipModule";
import LeasingModule from "../modules/LeasingModule";

export default function Deck({ children }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
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

  /* SCROLL SYNC */
  useEffect(() => {
    const el = containerRef.current;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const newIndex = Math.round(scrollTop / window.innerHeight);
      setIndex(newIndex);
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  /* LOCK BODY WHEN MODULE OPEN */
  useEffect(() => {
    document.body.style.overflow = activeModule ? "hidden" : "hidden";

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [activeModule]);

  const goTo = (i) => {
    containerRef.current.scrollTo({
      top: i * window.innerHeight,
      behavior: "smooth",
    });
  };

  const openModule = (name) => setActiveModule(name);
  const closeModule = () => setActiveModule(null);

  return (
    <div className="relative h-screen w-full overflow-x-hidden bg-black text-white">
      {/* MAIN DECK */}
      <div
        ref={containerRef}
        className={`h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-all duration-500 ${
          activeModule ? "blur-md scale-[0.985]" : ""
        }`}
      >
        {children.map((child, i) => (
          <div key={i} className="h-screen w-full snap-start overflow-hidden">
            {typeof child === "function" ? child({ openModule }) : child}
          </div>
        ))}
      </div>

      {/* MODULES */}
      {activeModule === "events" && (
        <EventsModule onClose={closeModule} />
      )}

      {activeModule === "sponsorship" && (
        <SponsorshipModule onClose={closeModule} />
      )}

      {activeModule === "leasing" && (
        <LeasingModule onClose={closeModule} />
      )}

      {/* DESKTOP SIDE NAV ONLY */}
      <div
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4
        rounded-2xl border border-white/10 bg-black/40 px-4 py-5 backdrop-blur-md"
      >
        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group flex items-center gap-3 text-left"
          >
            <div
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "scale-125 bg-white"
                  : "bg-white/25 group-hover:bg-white/60"
              }`}
            />

            <span
              className={`text-xs tracking-wide transition ${
                i === index ? "text-white" : "text-white/45"
              }`}
            >
              {String(i + 1).padStart(2, "0")} — {s}
            </span>
          </button>
        ))}
      </div>

      {/* TABLET + MOBILE MENU ONLY */}
      <ResponsiveMenu sections={sections} goTo={goTo} />

      {/* TOP PROGRESS BAR */}
      <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-white/10">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${((index + 1) / sections.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

function ResponsiveMenu({ sections, goTo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON - ONLY UNDER DESKTOP */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-5 z-50 flex lg:hidden items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm tracking-wide text-white backdrop-blur-md"
      >
        Menu
      </button>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-7 bg-black">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70"
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
              className="text-xl tracking-wide text-white transition hover:opacity-70 md:text-2xl"
            >
              {String(i + 1).padStart(2, "0")} — {s}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
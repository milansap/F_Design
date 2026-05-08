import React, { useRef, useState } from "react";

const Service = () => {
  const PARTNERS = [
    { name: "Cloud Education", logo: "/images/cloud.png" },
    { name: "CMC", logo: "/images/cmclogo.png" },
    { name: "SNP", logo: "/images/it.png" },
    { name: "Zebec", logo: "/images/zebec.png" },
  ];

  const IMAGES = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  ];

  function DraggableSlider() {
    const trackRef = useRef(null);
    const wrapperRef = useRef(null);

    const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

    const [progress, setProgress] = useState(0);
    const [interaction, setInteraction] = useState({
      hovering: false,
      dragging: false,
      cursorPos: { x: 0, y: 0 },
    });

    const onMouseDown = (e) => {
      dragState.current = {
        isDragging: true,
        startX: e.pageX - trackRef.current.offsetLeft,
        scrollLeft: trackRef.current.scrollLeft,
      };
      setInteraction((prev) => ({ ...prev, dragging: true }));
    };

    const onMouseMove = (e) => {
      const rect = wrapperRef.current.getBoundingClientRect();
      const cursorPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      setInteraction((prev) => (prev.hovering ? { ...prev, cursorPos } : prev));

      if (!dragState.current.isDragging) return;
      e.preventDefault();
      const x = e.pageX - trackRef.current.offsetLeft;
      const walk = (x - dragState.current.startX) * 1.5;
      trackRef.current.scrollLeft = dragState.current.scrollLeft - walk;
    };

    const onMouseUp = () => {
      dragState.current.isDragging = false;
      setInteraction((prev) => ({ ...prev, dragging: false }));
    };

    const onTouchStart = (e) => {
      dragState.current = {
        isDragging: true,
        startX: e.touches[0].pageX - trackRef.current.offsetLeft,
        scrollLeft: trackRef.current.scrollLeft,
      };
    };

    const onTouchMove = (e) => {
      if (!dragState.current.isDragging) return;
      const x = e.touches[0].pageX - trackRef.current.offsetLeft;
      const walk = (x - dragState.current.startX) * 1.5;
      trackRef.current.scrollLeft = dragState.current.scrollLeft - walk;
    };

    const onScroll = () => {
      const el = trackRef.current;
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };

    const { hovering, dragging, cursorPos } = interaction;

    return (
      <div className="relative">
        <div
          ref={wrapperRef}
          className="relative"
          onMouseEnter={() =>
            setInteraction((prev) => ({ ...prev, hovering: true }))
          }
          onMouseLeave={() => {
            dragState.current.isDragging = false;
            setInteraction((prev) => ({
              ...prev,
              hovering: false,
              dragging: false,
            }));
          }}
          onMouseMove={onMouseMove}
        >
          {hovering && (
            <div
              className="pointer-events-none absolute z-20 hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg text-sm font-semibold text-gray-700 select-none transition-transform duration-75"
              style={{
                left: cursorPos.x,
                top: cursorPos.y,
                transform: `translate(-50%, -50%) scale(${dragging ? 0.85 : 1})`,
              }}
            >
              {dragging ? "dragging" : "Drag"}
            </div>
          )}

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto select-none cursor-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onMouseUp}
            onScroll={onScroll}
          >
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: "clamp(260px, 80vw, 600px)",
                  height: "clamp(180px, 50vw, 380px)",
                }}
              >
                <img
                  src={src}
                  alt={`slide ${i + 1}`}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#CFCFCF] rounded-full transition-all duration-100"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#262626] antialiased">
      <section className="max-w-4xl mx-auto px-5 sm:px-10 pt-14 sm:pt-24 pb-10 sm:pb-20">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
          <p className="text-base sm:text-[1.5rem] font-semibold tracking-wide leading-relaxed sm:max-w-[50%]">
            Experience our expert solutions <br className="hidden sm:block" />
            tailored to enhance your business <br className="hidden sm:block" />
            with top-tier design, development,{" "}
            <br className="hidden sm:block" />
            and animation.
          </p>

          <div className="flex items-start sm:items-center justify-start sm:justify-center gap-3.5 px-0 sm:px-6">
            <h1
              className="font-extrabold leading-snug tracking-tight"
              style={{
                fontFamily: '"Oakes Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: "clamp(22px, 6vw, 35px)",
                lineHeight: "170%",
                letterSpacing: "-0.01em",
              }}
            >
              UI &amp; UX
              <br />
              Development
              <br />
              Blockchain
            </h1>
          </div>
        </div>

        <button className="mt-4 sm:mt-0 bg-[#1253ED] hover:bg-[#1253ED]/80 cursor-pointer active:scale-95 text-[#FAFAFA] text-[10px] font-semibold px-4 py-2 rounded-full transition-all duration-150 shadow-sm">
          Services
        </button>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-10 pb-12 sm:pb-20">
        <DraggableSlider />
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-10 pb-16 sm:pb-24">
        <p className="text-center text-sm text-black font-semibold tracking-wide mb-8">
          Our Partners
        </p>
        <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-12 lg:gap-20">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex cursor-pointer items-center justify-center py-2 sm:py-3 opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-12 w-auto grayscale contrast-125 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;

import React, { useRef, useState } from "react";
import { FaCaretSquareRight, FaCloud } from "react-icons/fa";
import { GiSwordInStone } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";

const Service = () => {
  const IMAGES = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  ];

  function DraggableSlider() {
    const trackRef = useRef(null);
    const wrapperRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [progress, setProgress] = useState(0);
    const [hovering, setHovering] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const onMouseDown = (e) => {
      setDragging(true);
      setStartX(e.pageX - trackRef.current.offsetLeft);
      setScrollLeft(trackRef.current.scrollLeft);
    };

    const onMouseMove = (e) => {
      const rect = wrapperRef.current.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      if (!dragging) return;
      e.preventDefault();
      const x = e.pageX - trackRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      trackRef.current.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => setDragging(false);

    const onScroll = () => {
      const el = trackRef.current;
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };

    return (
      <div className="relative">
        <div
          ref={wrapperRef}
          className="relative"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            setHovering(false);
            setDragging(false);
          }}
          onMouseMove={onMouseMove}
        >
          {hovering && (
            <div
              className="pointer-events-none absolute z-20 flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg text-sm font-semibold text-gray-700 select-none transition-transform duration-75"
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
            onScroll={onScroll}
          >
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                style={{ width: "380px", height: "240px" }}
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

        <div className="mt-5 h-0.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-400 rounded-full transition-all duration-100"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <section className="max-w-4xl mx-auto px-10 pt-24 pb-20 grid grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-gray-600 text-[1.05rem] leading-relaxed mb-8">
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 active:scale-95 text-white text-sm font-semibold px-6 py-2 rounded-full transition-all duration-150 shadow-sm">
            Services
          </button>
        </div>

        <div>
          <h1 className="text-4xl font-extrabold leading-snug tracking-tight">
            UI &amp; UX
            <br />
            Development
            <br />
            Blockchain
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-10 pb-20">
        <DraggableSlider />
      </section>

      <section className="max-w-4xl mx-auto px-10 pb-24">
        <p className="text-center text-sm text-gray-400 tracking-wide mb-10">
          Our Partners
        </p>
        <div className="flex items-center justify-evenly gap-14 flex-wrap">
          <div className="flex flex-col  items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
              <FaCloud />
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Cloud Education
            </span>
          </div>

          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-gray-700 text-2xl">
              <FaCaretSquareRight />
            </span>
            <span className="text-gray-700 font-bold text-base tracking-wide">
              CMC
            </span>
          </div>

          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-[10px] font-extrabold leading-none">
              <GrTechnology />
            </div>
            <span className="text-gray-700 font-bold text-base tracking-wide">
              SNP
            </span>
          </div>

          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-2xl">
              <GiSwordInStone />
            </span>
            <span className="text-gray-700 font-bold text-base tracking-wide">
              Zebec
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

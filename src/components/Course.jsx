import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaVuejs } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

const techIcons = [
  {
    label: "React",
    bg: "bg-sky-100",
    image: "/images/Frame(1).png",
  },
  {
    label: "Social",
    bg: "bg-purple-100",
    image: "/images/Frame.png",
  },
  {
    label: "Vue",
    bg: "bg-green-100",
    image: "/images/Group.png",
  },
  {
    label: "Design",
    bg: "bg-orange-100",
    image: "/images/Group(1).png",
  },
];

const Course = () => {
  return (
    <section
      className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14"
      style={{
        fontFamily: "sans-serif,inter",
      }}
    >
      <p className="text-[#414141] font-[sans-serif] tracking-wide text-[12px] sm:text-[14px] mb-1.5">
        Explore our classes and master trending skills!
      </p>
      <h2 className="text-[18px] sm:text-[22px] font-black text-[#2B2B2B] mb-5 sm:mb-7 leading-snug">
        Dive Into{" "}
        <span className="text-[#2ea781] text-[16px] sm:text-[20px]">
          What's Hot Right Now!
        </span>{" "}
        🔥
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-5 sm:h-[280px]">
        <div className="col-span-1 sm:col-span-2 bg-[#C33241] rounded-[24px] p-5 sm:p-6 sm:px-7 flex flex-col justify-between relative overflow-hidden min-h-[260px] sm:min-h-0">
          <Link
            to="#"
            className="absolute top-4 right-5 sm:top-5 sm:right-6 text-white/80 hover:text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            View all Courses
            <HiArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex justify-between gap-3 sm:gap-5 px-2 sm:px-4 mt-10 sm:mt-14">
            {techIcons.map(({ label, image }, i) => (
              <div
                key={label}
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={label}
                  className={`w-full h-full object-contain ${
                    i % 2 === 0 ? "rotate-0" : "rotate-0"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3.5 px-2 sm:px-6">
            <div className="flex items-start leading-none">
              <span
                className="text-[#F9EBEC] font-black font-Nohemi leading-none tracking-[-4px]"
                style={{
                  fontWeight: "700",
                  lineHeight: "120%",
                }}
              >
                <div className="flex items-start font-extrabold text-7xl sm:text-8xl leading-none">
                  <span className="translate-y-0">2</span>
                  <span className="-translate-y-0.5">3</span>
                </div>
              </span>
              <span className="text-[#F9EBEC] -translate-y-3 font-black text-[24px] sm:text-[30px] mt-2 sm:mt-3">
                +
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#F9EBEC] text-[20px] sm:text-[25px] font-bold leading-tight">
                All Courses
              </span>
              <span className="text-[#F9EBEC] text-[11px] sm:text-[12px] leading-snug mt-1 max-w-[130px]">
                courses you're powering through right now.
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4 sm:gap-5 sm:contents">
          <div className="sm:col-span-1 bg-[#F9EBEC] rounded-[24px] px-6 sm:px-4 py-4 flex flex-col items-center justify-between min-h-[240px] sm:min-h-0">
            <div className="flex-1 flex items-center justify-center w-full">
              <div
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
                className="text-[#C33241] text-[11px] sm:text-[12px] leading-snug max-h-[150px]"
              >
                <span
                  className="text-[#C33241] font-extrabold text-[20px] sm:text-[25px] leading-tight block mb-1.5"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Upcoming
                  <br />
                  Courses
                </span>
                exciting new courses waiting to boost your skills.
              </div>
            </div>

            <div className="flex items-start leading-none self-center">
              <span className="text-[#C33241] font-black leading-none tracking-[-4px] text-[60px] sm:text-[100px]">
                05
              </span>
              <span className="text-[#C33241] -translate-y-1 font-black text-[28px] sm:text-[40px]">
                +
              </span>
            </div>
          </div>

          <div className="sm:col-span-1 bg-[#fde8e8] rounded-[24px] px-3 sm:px-4 py-4 sm:py-5 flex flex-col items-center justify-between min-h-[240px] sm:min-h-0">
            <div className="flex-1 flex items-start justify-center w-full">
              <div
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
                className="text-[#C33241] text-[11px] sm:text-[12px] leading-snug max-h-[150px]"
              >
                <span
                  className="text-[#C33241] font-extrabold text-[20px] sm:text-[25px] leading-wider block mb-1.5"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Ongoing
                  <br />
                  Courses
                </span>
                currently happening—don't <br /> miss out on the action!
              </div>
            </div>

            <div className="flex items-start leading-none self-center">
              <span className="text-[#C33241] font-black leading-none tracking-[-4px] text-[60px] sm:text-[100px]">
                10
              </span>
              <span className="text-[#C33241] -translate-y-1 font-black text-[28px] sm:text-[40px]">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;

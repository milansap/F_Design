// import React from "react";
// import { BiArrowFromLeft, BiPlus } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { FaReact, FaVuejs } from "react-icons/fa";
// import { BsChatLeftTextFill } from "react-icons/bs";
// import { MdColorLens } from "react-icons/md";

// const techIcons = [
//   { label: "React",  bg: "bg-sky-100",    icon: <FaReact className="w-6 h-6 text-sky-400" /> },
//   { label: "Social", bg: "bg-purple-100", icon: <BsChatLeftTextFill className="w-6 h-6 text-purple-400" /> },
//   { label: "Vue",    bg: "bg-green-100",  icon: <FaVuejs className="w-6 h-6 text-green-500" /> },
//   { label: "Design", bg: "bg-orange-100", icon: <MdColorLens className="w-6 h-6 text-orange-400" /> },
// ];

// const Course = () => {
//   return (
//     <section className="max-w-4xl mx-auto px-6 py-14">
//       <p className="text-gray-500 text-sm mb-2">
//         Explore our classes and master trending skills!
//       </p>
//       <h2 className="text-2xl font-black text-gray-900 mb-8">
//         Dive Into{" "}
//         <span className="text-emerald-500">What's Hot Right Now!</span> 🔥
//       </h2>

//       <div className="grid grid-cols-4 gap-4 h-72">
//         <div className="col-span-2 bg-[#c0392b] rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden">
//           <Link
//             to="#"
//             className="absolute top-6 right-7 text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
//           >
//             View all Courses
//             <BiArrowFromLeft className="w-4 h-4" />
//           </Link>

//           <div className="flex justify-between gap-3 px-8 mt-8">
//             {techIcons.map(({ label, bg, icon }, i) => (
//               <div
//                 key={label}
//                 className={`w-12 h-12 ${bg} ${i % 2 === 0 ? "rotate-45" : "rotate-135"} rounded-2xl flex items-center justify-center shadow-sm`}
//               >
//                 <div >
//                   {icon}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="inline-flex items-center rounded-lg px-8  gap-3 min-w-[320px]">
//             <div className="flex items-start leading-none">
//               <span
//                 style={{
//                   fontFamily: "Nohemi",
//                   fontWeight: "700",
//                   fontStyle: "normal",
//                   fontSize: "100px",
//                   lineHeight: "120%",
//                   letterSpacing: "0",
//                 }}
//                 className="font-black text-white leading-none tracking-tighter"
//               >
//                 23
//               </span>
//               <span className="text-[28px] font-black text-white mt-2">+</span>
//             </div>

//             <div className="flex flex-col justify-center ">
//               <span className="text-white text-lg font-bold  tracking-wide ">
//                 All Courses
//               </span>
//               <span className="text-red-200 text-sm leading-snug mt-1 ">
//                 courses you're powering through right now.
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 bg-[#fde8e8] rounded-3xl px-4 py-4 flex flex-col justify-between items-center">
//           <div>
//             <p
//               className="text-[#c0392b]/70 text-sm mt-3 flex  flex-col justify-center leading-snug"
//               style={{
//                 writingMode: "vertical-rl",
//                 transform: "rotate(180deg)",
//                 maxHeight: "130px",
//               }}
//             >
//               <p className="text-[#c0392b] font-bold text-xl leading-tight">
//                 Upcoming
//                 <br />
//                 Courses
//               </p>
//               exciting new courses waiting to boost your skills.
//             </p>
//           </div>
//           <div className="flex items-end justify-">
//             <div className="flex items-start leading-none">
//               <span
//                 style={{
//                   fontFamily: "Nohemi",
//                   fontWeight: "700",
//                   fontStyle: "normal",

//                   letterSpacing: "0",
//                 }}
//                 className="text-[100px]  font-black text-[#c0392b] leading-none tracking-tighter"
//               >
//                 05
//               </span>
//               <span className="text-[35px] align-middle text-[#c0392b] font-black  mt-2">
//                 +
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 bg-[#fde8e8] rounded-3xl px-7 py-4 flex flex-col justify-between">
//           <div>
//             <p
//               className="text-[#c0392b]/70 text-sm mt-3 leading-snug"
//               style={{
//                 writingMode: "vertical-rl",
//                 transform: "rotate(180deg)",
//                 maxHeight: "130px",
//               }}
//             >
//               {" "}
//               <p className="text-[#c0392b] font-bold text-xl leading-tight">
//                 Ongoing
//                 <br />
//                 Courses
//               </p>
//               currently happening—don't miss out on the action!
//             </p>
//           </div>
//           <div className="flex items-end">
//             <div className="flex items-start leading-none">
//               <span
//                 style={{
//                   fontFamily: "Nohemi",
//                   fontWeight: "900",
//                   fontStyle: "normal",

//                   letterSpacing: "0",
//                 }}
//                 className="text-[100px] font-Nohemi font-black text-[#c0392b] leading-none tracking-tighter"
//               >
//                 10
//               </span>
//               <span className="text-[35px] align-middle text-[#c0392b] font-black  mt-2">
//                 +
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Course;

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
    <section className="max-w-4xl mx-auto px-6 py-14">
      {/* Header */}
      <p className="text-gray-400 text-sm mb-1.5 font-medium">
        Explore our classes and master trending skills!
      </p>
      <h2 className="text-[22px] font-black text-gray-900 mb-7 leading-snug">
        Dive Into{" "}
        <span className="text-emerald-500">What's Hot Right Now!</span> 🔥
      </h2>

      <div className="grid grid-cols-4 gap-5 h-[280px]">
        <div className="col-span-2 bg-[#C33241] rounded-[24px] p-6 px-7 flex flex-col justify-between relative overflow-hidden">
          <Link
            to="#"
            className="absolute top-5 right-6 text-white/80 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            View all Courses
            <HiArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex justify-between gap-5 px-4 mt-14">
            {techIcons.map(({ label, bg, image }, i) => (
              <div
                key={label}
                className={`w-16 h-16  flex items-center justify-center  `}
              >
                <img
                  src={image}
                  alt={label}
                  className={`w-full h-full object-contain ${i % 2 === 0 ? "rotate-0" : "rotate-0"}`}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3.5 px-6">
            <div className="flex items-start leading-none">
              <span
                className="text-[#F9EBEC] font-black font-Nohemi leading-none tracking-[-4px]"
                style={{
                  fontSize: "100px",
                  fontWeight: "700",
                  lineHeight: "120%",
                }}
              >
                <div className="flex items-start  font-extrabold text-8xl leading-none">
                  <span className="translate-y-1">2</span>
                  <span className="-translate-y-0.5">3</span>
                </div>
              </span>
              <span className="text-[#F9EBEC] font-black text-[30px] mt-3">
                +
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="text-[#F9EBEC] text-[25px] font-bold leading-tight">
                All Courses
              </span>
              <span className="text-[#F9EBEC] text-[12px] leading-snug mt-1 max-w-[130px]">
                courses you're powering through right now.
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-[#F9EBEC] rounded-[24px] px-4 py-4 flex flex-col items-center justify-between">
          <div className="flex-1 flex items-center justify-center w-full">
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
              className="text-[#C33241] text-[12px] leading-snug max-h-[150px]"
            >
              <span
                className="text-[#C33241] font-extrabold text-[25px] leading-tight block mb-1.5"
                style={{ writingMode: "vertical-rl" }}
              >
                Upcoming
                <br />
                Courses
              </span>
              exciting new courses waiting to boost your skills.
            </div>
          </div>

          {/* Number */}
          <div className="flex items-start leading-none self-center">
            <span
              className="text-[#C33241] font-black leading-none tracking-[-4px]"
              style={{ fontSize: "120px" }}
            >
              05
            </span>
            <span className="text-[#C33241] -translate-y-1 font-black  text-[40px] ">
              +
            </span>
          </div>
        </div>

        {/* ── Ongoing Card ── */}
        <div className="col-span-1 bg-[#fde8e8] rounded-[24px] px-4 py-4 flex flex-col items-center justify-between">
          {/* Vertical text */}
          <div className="flex-1 flex items-start justify-center w-full">
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
              className="text-[#C33241]  text-[10px]  leading-snug max-h-[150px]"
            >
              <span
                className="text-[#C33241] font-extrabold text-[25px]  leading-tight block mb-1.5"
                style={{ writingMode: "vertical-rl" }}
              >
                Ongoing
                <br />
                Courses
              </span>
              currently happening—don't miss out on the action!
            </div>
          </div>

          {/* Number */}
          <div className="flex items-start leading-none self-center">
            <span
              className="text-[#C33241] font-black leading-none tracking-[-4px]"
              style={{ fontSize: "120px" }}
            >
              10
            </span>
            <span className="text-[#C33241] -translate-y-1 font-black  text-[40px] ">
              +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;

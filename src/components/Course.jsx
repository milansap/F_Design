import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

const cards = [
  {
    title: ["All Courses"],
    description: ["courses you're powering", "through right now."],
    count: "23",
    key: 1,
  },
  {
    title: ["Upcoming", "Courses"],
    description: ["exciting new courses", "waiting to boost your skills."],
    count: "05",
    key: 2,
  },
  {
    title: ["Ongoing", "Courses"],
    description: ["currently happening—don't", "miss out on the action!"],
    count: "10",
    key: 3,
  },
];

const techIcons = [
  { label: "React", image: "/images/Frame(1).png" },
  { label: "Social", image: "/images/Frame.png" },
  { label: "Vue", image: "/images/Group.png" },
  { label: "Design", image: "/images/Group(1).png" },
];

const textVariants = {
  active: {
    rotate: [null, -95, 5, 0],
    x: [null, -90, 0, 0],
    y: [null, -160, 0, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.25, 0.75, 1],
    },
  },
  inactive: {
    rotate: [null, 5, -95, -90],
    x: [null, 0, -90, -90],
    y: [null, 0, -120, -120],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      times: [0, 0.25, 0.75, 1],
    },
  },
};

function AnimatedCard({ card, current, previous, setCurrent }) {
  const isActive = card.key === current;
  const isPrevious = card.key === previous;

  const enterX = previous > current ? "100%" : "-100%";
  const exitX = previous > current ? "-100%" : "100%";

  console.log("current", current,enterX, exitX);

  return (
    <motion.div
      onClick={() => !isActive && setCurrent(card.key)}
      layout
      animate={{ width: isActive ? 592 : 280 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="mx-5 rounded-3xl p-1 cursor-pointer relative overflow-hidden bg-[#C33241]"
      style={{ color: isActive ? "#F9EBEC" : "#C33241" }}
    >
      <motion.div
        className="absolute inset-0 bg-[#F9EBEC]"
        initial={false}
        animate={{
          clipPath: isActive
            ? "circle(0% at bottom left)"
            : "circle(200% at bottom left)",
        }}
        transition={{ duration: 0.8, ease: EASE }}
      />

      <div className="min-h-[400px] flex flex-col justify-between relative z-10">
        <motion.div
          className="ml-auto font-bold text-xl pr-6 pt-6 flex items-center gap-4"
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="group flex items-center">
            View all Courses
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </motion.div>

        <div className="flex items-center justify-center overflow-hidden h-[125px]">
          <AnimatePresence
            initial={false}
            mode="sync"
            custom={{ enterX, exitX }}
          >
            {isActive && (
              <motion.div
                key={current}
                custom={{ enterX, exitX }}
                className="flex items-center justify-center w-full"
                variants={{
                  enter: ({ enterX }) => ({ x: enterX, opacity: 0 }),
                  center: () => ({ x: 0, opacity: 1 }),
                  exit: ({ exitX }) => ({ x: exitX, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: EASE }}
              >
                {techIcons.map((tech) => (
                  <img
                    key={tech.label}
                    src={tech.image}
                    alt={tech.label}
                    className="object-contain h-24 w-24 mx-2"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={`flex ${isActive ? "gap-8" : "gap-16"} items-center px-12 pb-6`}
        >
          <div className="font-bold text-[140px] leading-tight relative">
            {card.count}
            <span className="text-[64px] absolute top-0 left-11/12 -translate-y-2.5">
              +
            </span>
          </div>

          <motion.div
            variants={textVariants}
            animate={isActive ? "active" : "inactive"}
            initial={false}
            style={{ transformOrigin: "left bottom" }}
          >
            <div className={`${isActive ? "w-[350px]" : "w-[250px]"} `}>
              {isActive ? (
                <h3 className="text-[28px] font-bold leading-tight">
                  {card.title.join(" ")}
                </h3>
              ) : (
                card.title.map((t, i) => (
                  <h3 key={i} className="text-[28px] font-bold leading-tight">
                    {t}
                  </h3>
                ))
              )}

              {card.description.map((d, i) => (
                <p key={i} className="font-normal text-[15px]">
                  {d}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Course() {
  const [current, setCurrent] = useState(1);
  const [previous, setPrevious] = useState(0);

  const handleCardChange = (newKey) => {
    setPrevious(current);
    setCurrent(newKey);
  };

  return (
    <div className="flex flex-col justify-center px-10 p-8">
      <div className="mb-8 mx-28">
        <h2 className="text-muted-foreground text-2xl mb-4">
          Explore our classes and master trending skills!
        </h2>
        <h1 className="text-4xl font-bold text-foreground">
          Dive Into{" "}
          <span className="text-emerald-500">What's Hot Right Now!</span> 🔥
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <AnimatedCard
            key={card.key}
            card={card}
            current={current}
            previous={previous}
            setCurrent={handleCardChange}
          />
        ))}
      </div>
    </div>
  );
}

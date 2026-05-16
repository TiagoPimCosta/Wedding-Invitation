"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import Image from "next/image";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const animationRange = [0, 0.7];

  const scaleX = useTransform(scrollYProgress, animationRange, [1, 0.45]);
  const scaleY = useTransform(scrollYProgress, animationRange, [1, 0.95]);
  const imageScaleX = useTransform(scaleX, (v) => 1 / v);
  const imageScaleY = useTransform(scaleY, (v) => 1 / v);
  //const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // const titleDisplay = useTransform(scrollYProgress, (v) =>
  //   v >= 0.5 ? "none" : "block",
  // );
  const targetRadius = useTransform(scrollYProgress, animationRange, [24, 24]);
  const borderRadiusH = useTransform(
    [targetRadius, scaleX],
    ([r, sx]: number[]) => r / sx,
  );
  const borderRadiusV = useTransform(
    [targetRadius, scaleY],
    ([r, sy]: number[]) => r / sy,
  );
  const borderRadius = useMotionTemplate`${borderRadiusH}px / ${borderRadiusV}px`;

  // Left Side Photos
  const left1PhotoX = useTransform(scrollYProgress, animationRange, [-500, 25]);
  const left1PhotoY = useTransform(
    scrollYProgress,
    animationRange,
    [200, -400],
  );

  const left2PhotoX = useTransform(
    scrollYProgress,
    animationRange,
    [-400, 125],
  );
  const left2PhotoY = useTransform(scrollYProgress, animationRange, [1000, 10]);

  // Right Side Photos
  const right1PhotoX = useTransform(
    scrollYProgress,
    animationRange,
    [2000, 1190],
  );
  const right1PhotoY = useTransform(
    scrollYProgress,
    animationRange,
    [300, -400],
  );

  const right2PhotoX = useTransform(
    scrollYProgress,
    animationRange,
    [2000, 1190],
  );
  const right2PhotoY = useTransform(
    scrollYProgress,
    animationRange,
    [600, -90],
  );

  return (
    <div ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Main card */}
        <motion.div
          style={{
            scaleX,
            scaleY,
            borderRadius,
          }}
          className="absolute inset-3 overflow-hidden origin-center z-10"
        >
          <motion.div
            style={{ scaleX: imageScaleX, scaleY: imageScaleY }}
            className="absolute inset-0"
          >
            <Image
              src="/heroBackground.jpg"
              alt="Tiago & Fátima"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Title */}
        {/* TODO: Implement text fade and zoom-out */}
        {/* <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <h1 className="font-parisienne text-5xl md:text-9xl text-white drop-shadow-lg whitespace-nowrap">
            Tiago & Fátima
          </h1>
        </motion.div> */}

        {/* Left photo 1 */}
        <motion.div
          style={{
            x: left1PhotoX,
            y: left1PhotoY,
          }}
          className="absolute left-3 md:left-8 top-1/2 z-30 w-100 h-100 overflow-hidden rounded-4xl"
        >
          <Image
            src="/left-1-photo.jpeg"
            alt=""
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Left photo 2 */}
        <motion.div
          style={{
            x: left2PhotoX,
            y: left2PhotoY,
          }}
          className="absolute left-3 md:left-8 top-1/2 z-20 w-75 h-75 overflow-hidden rounded-4xl"
        >
          <Image
            src="/left-2-photo.JPG"
            alt=""
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right photo 1 */}
        <motion.div
          style={{
            x: right1PhotoX,
            y: right1PhotoY,
          }}
          className="absolute left-3 md:left-8 top-1/2 z-20 w-75 h-75 overflow-hidden rounded-4xl"
        >
          <Image
            src="/right-1-photo.jpeg"
            alt=""
            width={400}
            height={533}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right photo 2 */}
        <motion.div
          style={{
            x: right2PhotoX,
            y: right2PhotoY,
          }}
          className="absolute left-3 md:left-8 top-1/2 z-30 w-100 h-100 overflow-hidden rounded-4xl"
        >
          <Image
            src="/right-2-photo.JPG"
            alt=""
            width={400}
            height={533}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

// {/* Nav */}
// const scrollToRsvp = () => {
//    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
//  };
//             <motion.nav
//               className="flex items-center justify-between px-8 md:px-14 pt-7 pb-4 shrink-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.9, ease: "easeOut" }}
//             >
//               <p className="font-the-seasons text-sm tracking-[0.45em] uppercase text-white/80 select-none">
//                 T & F
//               </p>
//               <motion.button
//                 onClick={scrollToRsvp}
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="font-the-seasons text-[10px] tracking-[0.3em] uppercase px-6 py-2.5 border border-white/30 rounded-full text-white/70 hover:border-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
//               >
//                 RSVP
//               </motion.button>
//             </motion.nav>

// Right photo: starts off-screen to the right, slides left and upward
//

//   // Left photo: mirrors right — starts off-screen to the left, slides right and upward
//   const left1PhotoX = useTransform(
//     scrollYProgress,
//     animationRange,
//     [-400, 100],
//   );
//   const left1PhotoY = useTransform(scrollYProgress, animationRange, [300, 50]);
//
//
//
//

//

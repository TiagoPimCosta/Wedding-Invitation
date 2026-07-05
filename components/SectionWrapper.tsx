"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ThinOrnament from "./ThinOrnament";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  headerClassname?: string;
  bodyClassname?: string;
  sectionClassname?: string;
  title: string;
  titleClassname?: string;
  subTitle?: string;
  subTitleClassname?: string;
}

const SectionWrapper = (props: SectionWrapperProps) => {
  const {
    children,
    id,
    sectionClassname,
    headerClassname,
    bodyClassname,
    title,
    titleClassname,
    subTitle,
    subTitleClassname,
  } = props;

  const headerRef = useRef<HTMLElement>(null);
  const isInView = useInView(headerRef, {
    once: true,
    margin: "0px 0px -40px 0px",
  });

  return (
    <section
      id={id}
      className={cn(
        "flex flex-col items-center justify-center gap-10 py-20",
        sectionClassname,
      )}
    >
      <motion.header
        ref={headerRef}
        className={cn(
          "flex flex-col items-center gap-3 text-center font-the-seasons px-6",
          headerClassname,
        )}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <ThinOrnament />

        {title && (
          <p
            className={cn(
              "font-parisienne text-gold",
              "text-4xl md:text-7xl",
              titleClassname,
            )}
          >
            {title}
          </p>
        )}

        <ThinOrnament />

        {subTitle && (
          <p
            className={cn(
              "text-lg md:text-xl mt-1 font-the-seasons max-w-md text-[#1e150d]/50",
              subTitleClassname,
            )}
          >
            {subTitle}
          </p>
        )}
      </motion.header>

      <div
        className={cn(
          "max-w-xs md:max-w-3xl w-full px-6 md:px-0",
          bodyClassname,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

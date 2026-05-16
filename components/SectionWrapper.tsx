"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  headerClassname?: string;
  bodyClassname?: string;
  sectionClassname?: string;
  overline?: string;
  overlineClassname?: string;
  title: string;
  titleClassname?: string;
  subTitle?: string;
  subTitleClassname?: string;
  footer?: string;
  footerClassname?: string;
}

const ThinOrnament = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center justify-center gap-3 w-full">
    <div className={cn("w-10 h-px", light ? "bg-gold/15" : "bg-gold/25")} />
    <div className={cn("w-[5px] h-[5px] rotate-45", light ? "bg-gold/25" : "bg-gold/40")} />
    <div className={cn("w-10 h-px", light ? "bg-gold/15" : "bg-gold/25")} />
  </div>
);

const SectionWrapper = (props: SectionWrapperProps) => {
  const {
    children,
    sectionClassname,
    headerClassname,
    bodyClassname,
    overline,
    overlineClassname,
    title,
    titleClassname,
    subTitle,
    subTitleClassname,
    footer,
    footerClassname,
  } = props;

  const headerRef = useRef<HTMLElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <section
      className={cn(
        "pt-24 pb-20 relative overflow-hidden",
        "flex flex-col items-center gap-12",
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
        <ThinOrnament light />

        {overline && (
          <p className={cn("text-[10px] uppercase tracking-[0.5em] mt-1", overlineClassname)}>
            {overline}
          </p>
        )}

        {title && (
          <p
            className={cn(
              "font-parisienne text-gold",
              "text-4xl md:text-6xl",
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
              "text-base md:text-lg mt-1 font-the-seasons max-w-md",
              subTitleClassname,
            )}
          >
            {subTitle}
          </p>
        )}
      </motion.header>

      <div className={cn("max-w-xs md:max-w-3xl w-full px-6 md:px-0", bodyClassname)}>
        {children}
      </div>

      {footer && (
        <footer className="flex flex-col gap-4 text-center">
          <p className={cn("text-base font-the-seasons", footerClassname)}>
            {footer}
          </p>
        </footer>
      )}
    </section>
  );
};

export default SectionWrapper;

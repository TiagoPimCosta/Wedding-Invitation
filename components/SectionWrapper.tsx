import { cn } from "@/lib/utils";

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

  return (
    <section
      className={cn(
        "pt-18 pb-12 relative overflow-hidden",
        "flex flex-col items-center gap-12",
        sectionClassname,
      )}
    >
      <header
        className={cn(
          "flex flex-col gap-4 text-center font-cormorant-garamond",
          headerClassname,
        )}
      >
        {overline && (
          <p className={cn("text-sm", overlineClassname)}>{overline}</p>
        )}
        {title && (
          <p
            className={cn(
              "font-great-vibes text-4xl md:text-5xl text-gold",
              "text-5xl md:text-5xl",
              titleClassname,
            )}
          >
            {title}
          </p>
        )}
        {subTitle && (
          <p
            className={cn("text-lg font-cormorant-garamond", subTitleClassname)}
          >
            {subTitle}
          </p>
        )}
      </header>
      <div className={cn("max-w-xs md:max-w-3xl w-full", bodyClassname)}>
        {children}
      </div>
      <footer className={cn("flex flex-col gap-4 text-center")}>
        {footer && (
          <p className={cn("text-lg font-cormorant-garamond", footerClassname)}>
            {footer}
          </p>
        )}
      </footer>
    </section>
  );
};

export default SectionWrapper;

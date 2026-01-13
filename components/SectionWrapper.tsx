import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  titleClassname?: string;
  subTitle?: string;
  subTitleClassname?: string;
}

const SectionWrapper = (props: SectionWrapperProps) => {
  const { children, title, titleClassname, subTitle, subTitleClassname } =
    props;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2
          className={cn(
            "font-display text-4xl md:text-5xl text-gold mb-4",
            titleClassname
          )}
        >
          {title}
        </h2>
        <p className={cn("text-cream/80 text-lg", subTitleClassname)}>
          {subTitle}
        </p>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;

import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const namesClassname = "text-center font-great-vibes";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-2 bg-[url('/heroBackground.jpg')] bg-cover bg-center bg-no-repeat">
      <p className={cn(namesClassname, "text-2xl")}>O nosso casamento</p>
      <div>
        <h1 className={cn(namesClassname, "text-3xl")}>Tiago</h1>
        <h2 className={cn(namesClassname, "text-3xl")}>&</h2>
        <h1 className={cn(namesClassname, "text-3xl")}>Fátima</h1>
      </div>
      <Separator className="w-3/4 sm:w-1/3" />
      <p className={cn(namesClassname, "text-3xl")}>10 de Outubro de 2026</p>
    </section>
  );
};

export default HeroSection;

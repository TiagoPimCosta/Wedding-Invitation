import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 sm:gap-12 relative px-6 py-12">
      <h1 className="font-parisienne text-5xl sm:text-7xl md:text-9xl text-[#570d16] whitespace-nowrap">
        Tiago & Fátima
      </h1>

      <Image
        src="/0086.jpg"
        alt="Tiago & Fátima"
        width={1400}
        height={1000}
        quality={90}
        sizes="(max-width: 768px) 100vw, 700px"
        className="w-full max-w-175 h-auto object-cover object-[50%_20%] md:object-center"
        priority
      />

      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 font-the-seasons max-w-5xl w-full text-green text-lg sm:text-xl text-center md:text-left mt-4 sm:mt-8">
        <p>10 de Outubro 2026</p>
        <p>Responder até dia 10 de Setembro 2026</p>
      </div>
    </div>
  );
};

export default HeroSection;

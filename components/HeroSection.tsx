import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 relative py-12">
      <h1 className="font-parisienne text-5xl md:text-9xl text-[#570d16] whitespace-nowrap">
        Tiago & Fátima
      </h1>

      <Image
        src="/0086.jpg"
        alt="Tiago & Fátima"
        width={1400}
        height={1000}
        quality={90}
        sizes="700px"
        className="w-175 h-auto object-cover object-center"
        priority
      />

      <div className="flex flex-col md:flex-row justify-between font-the-seasons max-w-5xl w-full text-green text-lg mt-8">
        <p>10 Outubro 2026</p>
        <p>Responder até dia 10 Setembro 2026</p>
        <p>asdadasd, asdsdas</p>
      </div>
    </div>
  );
};

export default HeroSection;

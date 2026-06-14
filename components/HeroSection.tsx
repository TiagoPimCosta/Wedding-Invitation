import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/heroBackground.JPG"
          alt="Tiago & Fátima"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <h1 className="font-parisienne text-5xl md:text-9xl text-white drop-shadow-lg whitespace-nowrap">
          Tiago & Fátima
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;

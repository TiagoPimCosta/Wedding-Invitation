import Image from "next/image";

const PhotoSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/0095.jpg"
          alt="Tiago & Fátima"
          fill
          className="object-cover object-[70%_50%] md:object-center"
          priority
        />
      </div>
    </div>
  );
};

export default PhotoSection;

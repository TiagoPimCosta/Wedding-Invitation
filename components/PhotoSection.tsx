import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhotoSectionProps {
  imageSrc: string;
  imageClassname: string;
}

const PhotoSection = (props: PhotoSectionProps) => {
  const { imageSrc, imageClassname } = props;
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Tiago & Fátima"
          fill
          className={cn(
            "object-cover object-[70%_20%] md:object-center",
            imageClassname,
          )}
          priority
        />
      </div>
    </div>
  );
};

export default PhotoSection;

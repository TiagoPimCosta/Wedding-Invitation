import BackgroundMusic from "@/components/BackgroundMusic";
import CountdownSection from "@/components/CountdownSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import PhotoSection from "@/components/PhotoSection";
import VenueSection from "@/components/VenueSection";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <PhotoSection
        imageSrc="/0095.jpg"
        imageClassname="object-[58%_20%] md:object-center"
      />
      <HistorySection />
      <CountdownSection />
      <VenueSection />
      <PhotoSection
        imageSrc="/4432.jpg"
        imageClassname="object-[65%_20%] md:object-center"
      />
      {/* <TimelineSection /> */}
      <FAQSection />
      {/* <Suspense>
        <VideoSection />
      </Suspense> */}
      <Footer />
      <BackgroundMusic
        src="/Frank Sinatra - Have Yourself A Merry Little Christmas.mp3"
        volume={0.3}
      />
    </>
  );
}

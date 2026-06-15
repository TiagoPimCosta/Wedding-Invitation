import CountdownSection from "@/components/CountdownSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import Navbar from "@/components/Navbar";
import PhotoSection from "@/components/PhotoSection";
import TimelineSection from "@/components/TimelineSection";
import VenueSection from "@/components/VenueSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PhotoSection />
      <HistorySection />
      <CountdownSection />
      <VenueSection />
      <PhotoSection />
      <TimelineSection />
      <FAQSection />
      {/* <Suspense>
        <VideoSection />
      </Suspense> */}
      <Footer />
      {/* <BackgroundMusic src="/background-music.mp3" volume={0.3} /> */}
    </>
  );
}

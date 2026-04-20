import BackgroundMusic from "@/components/BackgroundMusic";
import CountdownSection from "@/components/CountdownSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RSVPSection from "@/components/RSVPSection";
import TimelineSection from "@/components/TimelineSection";
import VenueSection from "@/components/VenueSection";
import VideoSection from "@/components/VideoSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f0e8]">
        <HeroSection />
        <CountdownSection />
        <VenueSection />
        <TimelineSection />
        <FAQSection />
        <RSVPSection />
        <Suspense>
          <VideoSection />
        </Suspense>
        <Footer />
        <BackgroundMusic src="/background-music.mp3" volume={0.3} />
      </div>
    </>
  );
}

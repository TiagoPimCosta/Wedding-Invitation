import CountdownSection from "@/components/CountdownSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TimelineSection from "@/components/TimelineSection";
import VenueSection from "@/components/VenueSection";
import VideoSection from "@/components/VideoSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <VenueSection />
      <TimelineSection />
      <FAQSection />
      <Suspense>
        <VideoSection />
      </Suspense>
      <Footer />
      {/* <BackgroundMusic src="/background-music.mp3" volume={0.3} /> */}
    </>
  );
}

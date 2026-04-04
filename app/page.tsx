import BackgroundMusic from "@/components/BackgroundMusic";
import CountdownSection from "@/components/CountdownSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import VideoSection from "@/components/VideoSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f0e8]">
        <HeroSection />
        <CountdownSection />
        <FAQSection />
        <TimelineSection />
        <Suspense>
          <VideoSection />
        </Suspense>
        <BackgroundMusic src="/background-music.mp3" volume={0.3} />
      </div>
    </>
  );
}

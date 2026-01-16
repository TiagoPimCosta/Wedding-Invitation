import CountdownSection from "@/components/CountdownSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#FCF9ED]">
        <HeroSection />
        <CountdownSection />
        <FAQSection />
        <VideoSection />
      </div>
    </>
  );
}

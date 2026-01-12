import CountdownSection from "@/components/CountdownSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#FCF9ED]">
        <HeroSection />
        <CountdownSection />
      </div>
    </>
  );
}

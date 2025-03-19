import { Features } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/shared/FooterSection";
import { ResumeBuilderWalkthrough } from "@/types/main";


export default function Home() {
  return (
    <div >
      <HeroSection />
      <Features />
      <ResumeBuilderWalkthrough />
      <FooterSection />
    </div>
  );
}

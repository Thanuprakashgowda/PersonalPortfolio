import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6">
        <HeroSection />
        <AboutSection />
      </main>
      
      <div className="w-full border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <EducationSection />
        </div>
      </div>
      

      
      <div className="w-full border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <SkillsSection />
        </div>
      </div>
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6">
        <ProjectsSection />
      </main>

      <div className="w-full bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <CertificationsSection />
        </div>
      </div>


      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6">
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

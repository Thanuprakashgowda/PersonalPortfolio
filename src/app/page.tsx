import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Flow */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6">
        <AboutSection />
        
        <div className="w-full border-t border-slate-200/80" />
        <ExperienceSection />
        
        <div className="w-full border-t border-slate-200/80" />
        <ProjectsSection />
        
        <div className="w-full border-t border-slate-200/80" />
        <SkillsSection />
        
        <div className="w-full border-t border-slate-200/80" />
        <EducationSection />
        
        <div className="w-full border-t border-slate-200/80" />
        <CertificationsSection />
        
        <div className="w-full border-t border-slate-200/80" />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

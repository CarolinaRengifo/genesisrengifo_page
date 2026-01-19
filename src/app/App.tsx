import { Toaster } from '@/app/components/ui/sonner';
import { HeaderSection } from '@/app/components/medical/HeaderSection';
import { HeroSection } from '@/app/components/medical/HeroSection';
import { ServicesSection } from '@/app/components/medical/ServicesSection';
import { AboutSection } from '@/app/components/medical/AboutSection';
import { ContactSection } from '@/app/components/medical/ContactSection';
import { FooterSection } from '@/app/components/medical/FooterSection';
import { ChatBot } from '@/app/components/medical/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <FooterSection />
      <ChatBot />
      <Toaster position="top-center" />
    </div>
  );
}

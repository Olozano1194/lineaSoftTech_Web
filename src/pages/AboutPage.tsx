import HeroSection from "../components/sections/about/HeroSection";
import HistorySection from "../components/sections/about/HistorySection";
import MisionVisionSection from "../components/sections/about/MisionVisionSection";
import TeamSection from "../components/sections/about/TeamSection";
import { SEO } from "../components/ui/SEO";

const AboutPage = () => {
    return (
        <>
            <SEO 
                title="Sobre Nosotros - LineaSoftTech"
                description="Conoce al equipo de LineaSoftTech. Somos ingenieros de sistemas especializados en desarrollo web, automatización y soporte técnico para emprendedores y pequeños negocios."
                image="/logo.png"
                url="https://lineasofttech.com/about"
            />
            <HeroSection />
            <HistorySection />            
            <MisionVisionSection />            
            <TeamSection />            
        </>
    );
};
export default AboutPage;
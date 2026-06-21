import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "../components/ui/SEO";
import { HEADER_OFFSET } from "../components/ui/ScrollToTop";
import HeroSection from "../components/sections/HeroSection";
import TrustBar from "../components/ui/TrustBar";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import WorkSection from "../components/sections/WorkSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import PlanSolutionSection from "../components/sections/PlanSolutionSection";

const HomePage = () => {
    const location = useLocation();

    // Scroll a sección si hay hash en la URL (al navegar desde otra página o cambiar hash)
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - HEADER_OFFSET;

                const raf = requestAnimationFrame(() =>
                    requestAnimationFrame(() => {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
                    })
                );
                return () => cancelAnimationFrame(raf);
            }
        }
    }, [location.pathname, location.hash]);
    return (
        <>
            <SEO
                image="/logo.png"
                favicon="/favicon.png"                 
            />
            <HeroSection />
            <TrustBar />
            <ServicesSection />
            <WorkSection />
            <ProcessSection />
            <PlanSolutionSection />            
            <FAQSection />
            <ContactSection />            
        </>        
    );
};
export default HomePage;
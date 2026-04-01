import { SEO } from "../components/ui/SEO";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import WorkSection from "../components/sections/WorkSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import PlanSolutionSection from "../components/sections/PlanSolutionSection";
// img
import logo from "../../src/assets/logo.png";
import favicon from "../../public/favicon.png"

const HomePage = () => {
    return (
        <>
            <SEO
                image={logo}
                favicon={favicon}                 
            />
            <HeroSection />
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
import Hero from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import WorkSection from "../components/sections/WorkSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import PlanSolutionSection from "../components/sections/PlanSolutionSection";

const HomePage = () => {
    return (
        <>
            <Hero />
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
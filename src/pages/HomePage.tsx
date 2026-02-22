import Hero from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import WorkSection from "../components/sections/WorkSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
    return (
        <>
            <Hero />
            <ServicesSection />
            <ProcessSection />
            <WorkSection />
            <FAQSection />
            <ContactSection />
        </>        
    );
};
export default HomePage;
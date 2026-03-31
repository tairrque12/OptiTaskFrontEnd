
import HeroSection from "../components/HeroSection.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import HowItWorks from "../components/How-It-Works.jsx";
import CallToAction from "../components/CTA.jsx";
import NavBar1 from "../components/NavBar.jsx";




function LandingPage() {
    return (
        <>
            <NavBar1/>
            <HeroSection />
            <ServiceSection/>
            <HowItWorks/>
            <CallToAction/>


        </>
    );
}
export default LandingPage;

import HeroSection from "../components/HeroSection.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import HowItWorks from "../components/How-It-Works.jsx";
import CallToAction from "../components/CTA.jsx";
import BasicExample from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";




function LandingPage() {
    return (
        <>
            <BasicExample/>
            <HeroSection />
            <ServiceSection/>
            <HowItWorks/>
            <CallToAction/>
            <Footer/>


        </>
    );
}
export default LandingPage;
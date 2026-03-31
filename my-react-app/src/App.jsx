import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from "./pages/LandingPage.jsx";
import "./App.css"

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <LandingPage />
    );
}
export default App;
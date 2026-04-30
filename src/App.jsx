import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import FAQPAGE from './pages/FAQPAGE.jsx';
import ContactPage from './pages/ContactPage.jsx';
import RequestRobot from './pages/RequestRobot.jsx';
import Optimus from './pages/Optimus.jsx';
import './App.css';
// import ScheduleDemoPage from "./pages/ScheduleDemoPage.jsx";
import Figure03 from "./pages/Figure03.jsx";
import ManageReservation from "./pages/ManageReservation.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<LandingPage />} />
                    {/*<Route path="/demo" element={<ScheduleDemoPage/>} />*/}
                    <Route path="/faq" element={<FAQPAGE />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/request-cta" element={<RequestRobot />} />
                    <Route path="/services-lp" element={<Optimus />} />
                    <Route path="/figure03" element={<Figure03 />} />
                    <Route path="/manageReservation" element={<ManageReservation />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import DemoPage from './pages/DemoPage.jsx';
import FAQPAGE from './pages/FAQPAGE.jsx';
import ContactPage from './pages/ContactPage.jsx';
import RequestRobot from './pages/RequestRobot.jsx';
import Optimus from './pages/Optimus.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isLoggedIn) {
        return <SignUpPage onSignUp={() => setIsLoggedIn(true)} />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/faq" element={<FAQPAGE />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/request-cta" element={<RequestRobot />} />
                    <Route path="/services-lp" element={<Optimus />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
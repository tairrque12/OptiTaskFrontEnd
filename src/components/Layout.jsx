import { Outlet } from 'react-router-dom';
import NavBar1 from './NavBar.jsx';
import Footer from './Footer.jsx';

function Layout() {
    return (
        <>
            <NavBar1 />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;

import Header from '../Components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';


const MainLayouts = () => {

    const location = useLocation();
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setShowLoader(true);
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div>
            <Header></Header>

            {showLoader ? (
                
                <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            ) : (
                
                <Outlet />
            )}

            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;
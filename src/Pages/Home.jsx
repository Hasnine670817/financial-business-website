import Banner from '../Sections/Banner';
import ChoseUs from '../Sections/ChoseUs';
import Insights from '../Sections/Insights';
import Platform from '../Sections/Platform';
import Services from '../Sections/Services';
import SolarWorks from '../Sections/SolarWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChoseUs></ChoseUs>
            <Platform></Platform>
            <Services></Services>
            <SolarWorks></SolarWorks>
            <Insights></Insights>
        </div>
    );
};

export default Home;
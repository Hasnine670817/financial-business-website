import Banner from '../Sections/Banner';
import ChoseUs from '../Sections/ChoseUs';
import Insights from '../Sections/Insights';
import Platform from '../Sections/Platform';
import Services from '../Sections/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChoseUs></ChoseUs>
            <Platform></Platform>
            <Services></Services>
            <Insights></Insights>
        </div>
    );
};

export default Home;
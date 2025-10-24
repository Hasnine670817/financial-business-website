import { useEffect, useState } from 'react';
import start from '../../public/images/icons/star.png';
import servicesImage from '../../public/images/services-image.png'
import SolutionCard from '../DynamicCard/SolutionCard';

const Services = () => {

    const [solutionCards, setSolutionCards] = useState([]);

    useEffect(() => {
        fetch('/SolutionsCard.json')
            .then(res => res.json())
            .then(data => setSolutionCards(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <section className='pt-8 pb-8 md:pb-16'>
            <div className='container-custom'>
                <div className='lg:flex flex-wrap'>
                    <div className='lg:w-2/5 text-center lg:text-start'>
                        <div>
                            <p className='text-sm xl:text-xl font-medium text-old-green flex items-center justify-center lg:justify-start gap-2.5'>
                                <span className='xl:w-5 w-3 xl:h-5 h-3 rounded-full bg-old-green'></span>
                                Services
                            </p>
                        </div>

                        <h2 className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[65px] font-light leading-[1.2] mt-8 text-center lg:text-start text-old-green'><b className='font-semibold text-black'>Diverse</b> & <b className='font-semibold text-black'>Seasoned</b> <br /> Capital Solutions</h2>

                        <h2 className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[65px] font-light leading-[1.2] mt-10 lg:mt-17 text-center lg:text-start text-black'>GWs</h2>
                        <h5 className='mt-6 mb-3.5 font-poppins text-lg font-medium text-old-green'>Of Overall Processing and Deal Experience</h5>
                        <p className='text-base text-[#979797] leading-[1.8] max-w-[426px] mx-auto lg:mx-0'>Our back office and executive leadership team collectively bring a wealth of experience, having successfully supported and executed over 10 gigawatts (GW) of alternative energy generation projects across eight countries.</p>
                        <button type="button" className='py-6 px-12 bg-old-green hover:bg-black rounded-3xl text-white leading-0 mt-10 lg:mt-16 mb-10 lg:mb-14'>Discover</button>

                        <ul className='flex gap-4 items-center mb-12 lg:mb-20 justify-center lg:justify-start'>
                            <li>
                                <img src={start} alt="star" />
                            </li>
                            <li>
                                <img src={start} alt="star" />
                            </li>
                            <li>
                                <img src={start} alt="star" />
                            </li>
                        </ul>

                        <span className='block bg-[linear-gradient(270deg,_#F3F4F6_0%,_#262F2E_48%,_#F3F4F6_100%)] h-0.5 max-w-[70%] mx-auto lg:mx-0 mb-15 lg:mb-0'></span>
                    </div>
                    <div className='lg:w-3/5 relative'>
                        <div className='md:w-[60%] ms-auto md:py-12 h-full md:absolute right-0 top-1/2 md:-translate-y-1/2'>
                            <img className='rounded-2xl md:rounded-[30px] h-full object-cover object-center [box-shadow:21px_25px_47.9px_0px_#00000040]' src={servicesImage} alt="servicesImage" />
                        </div>
                        <div className='ps-5 pe-5 md:pe-0 md:ps-10 -mt-14 md:mt-0'>
                            {
                                solutionCards.map(solutionCard => <SolutionCard card={solutionCard} key={solutionCard.id}></SolutionCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
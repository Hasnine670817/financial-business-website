import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';

import { useEffect, useState } from 'react';
import TeamDetails from '../CardDetails/TeamDetails';


const About = () => {

    const [teams, setTeams] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        fetch('/Teams.json')
            .then(res => res.json())
            .then(data => setTeams(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <section className='pt-5 md:pt-10 xl:pt-16 overflow-hidden'>
                <div className='container-custom'>
                    <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
                        <img data-aos="fade-right" className='rounded-2xl w-full object-cover object-center h-full min-h-[250px]' src='https://i.ibb.co.com/nNHk0QqN/about1.jpg' alt="about image" />
                        <div data-aos="fade-left">
                            <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold'>About Us</h2>
                            <p className='text-xs md:text-sm xl:text-base mt-5 font-poppins text-[#979797] leading-[1.8]'>We are a trusted name in financial innovation and sustainable business growth. At Financial Business, we combine strategic investment planning with modern technology to empower organizations across the renewable energy and finance sectors. Our expert team collaborates with clients to design customized capital solutions, optimize operational efficiency, and build long-term value.</p>
                            <p className='text-xs md:text-sm xl:text-base mt-2 font-poppins text-[#979797] leading-[1.8]'>With years of industry experience, we understand the challenges that modern businesses face — from energy transition to financial restructuring. That’s why we focus on delivering flexible financing models and data-driven insights that help companies achieve stability and success.</p>
                            <p className='text-xs md:text-sm xl:text-base mt-2 font-poppins text-[#979797] leading-[1.8]'>Beyond numbers, we believe in creating impact. Our mission is to support a greener, smarter, and more inclusive global economy. Through transparency, innovation, and strong partnerships, we are redefining how financial solutions can power sustainable growth for generations to come.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-20 mb-10 md:mb-20 md:px-12">

                <div className='container-custom'>
                    <h2 data-aos="fade-up" className='text-2xl md:text-3xl xl:text-5xl font-bold text-center mb-8 xl:mb-16'>Meet Our Expert Team</h2>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        // navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1000}
                        modules={[Pagination, Autoplay]}
                        className="teamSwiper !pb-14"
                    >
                        {teams.map(member => (
                            <SwiperSlide key={member.id}>
                                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between" data-aos="flip-left">
                                    <div>
                                        <img
                                            className="2xl:w-32 w-24 h-24 2xl:h-32 mx-auto rounded-full object-cover mb-4"
                                            src={member.image}
                                            alt={member.name}
                                        />
                                        <h3 className="text-lg 2xl:text-xl font-semibold text-gray-800">{member.name}</h3>
                                        <p className="text-xs 2xl:text-sm text-gray-500 mb-3">{member.role}</p>
                                        <p className="2xl:text-base text-gray-600 text-xs mb-4 line-clamp-3 leading-[1.7]">{member.bio}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedMember(member)}
                                        className="mt-2 inline-block bg-old-green text-white px-4 py-2 xl:py-3 rounded-full text-xs font-medium hover:bg-black transition"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Modal */}
                {selectedMember && (
                    <TeamDetails selectedMember={selectedMember} setSelectedMember={setSelectedMember}></TeamDetails>
                )}
            </div>
        </>

    );
};

export default About;
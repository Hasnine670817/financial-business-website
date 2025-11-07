// import shape1 from '../../public/images/icons/shape1.png';
import dots1 from '../../public/images/icons/dots1.png';
// import ellipseBlur1 from '../../public/images/icons/ellipse-blur1.png';
// import brain from '../../public/images/icons/brain.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';

const ChoseUs = () => {
    return (
        <section className='pt-10 md:pt-18 relative z-10'>
            <img className='absolute right-0 top-0 -z-10' src={dots1} alt="dots" />
            <img className='absolute right-0 top-28 -z-10' src='https://i.ibb.co.com/1WrdC2s/ellipse-blur1.png' alt="ellipse blur1" />
            <div className='container-custom'>
                <div>
                    <p className='text-sm xl:text-xl font-medium text-old-green flex items-center justify-center md:justify-start gap-2.5'>
                        <span className='xl:w-5 w-3 xl:h-5 h-3 rounded-full bg-old-green'></span>
                        Why Chose Us
                    </p>
                </div>

                <div className='text-center py-5 md:py-13'>
                    <h2 className='text-[28px] md:text-4xl xl:text-[55px] leading-[1.2] font-light'>Your <b className='font-bold'>Trusted</b> Platform in Solar Project <b className='font-bold'>Financing</b> and <b className='font-bold'>Development</b></h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:-mb-[100px] xl:-mb-[250px] 2xl:-mb-[300px]'>
                    <p className='text-sm text-center md:text-start lg:text-lg xl:text-xl font-normal 2xl:leading-[36px]'>At IQGen, we understand that every solar project is unique. With years of experience in renewable energy financing, development, and construction support, our team combines deep industry knowledge with innovative financial strategies to accelerate project timelines and maximize returns.</p>
                    <div className='relative'>
                        <img className='max-w-[300px] lg:max-w-full mx-auto lg:mx-0' src='https://i.ibb.co.com/8DBs7HYC/shape1.png' alt="shape1" />
                    </div>
                </div>

                <div className='relative md:inline-block 2xl:ps-[150px] w-full max-w-[370px] mx-auto lg:w-auto lg:max-w-none lg:mx-0'>
                    <div className='max-w-[470px] bg-black [box-shadow:22px_40px_40px_0px_#0000000D] rounded-[35px] px-11 py-10 text-center'>
                        <h4 className='text-xl xl:text-2xl font-poppins text-white font-normal leading-[1.5]'>Project Planning and <br /> Optimization</h4>
                        <img className='mt-4' src='https://i.ibb.co.com/spdLzLLN/brain.png' alt="brain" />
                    </div>


                    <div className='md:absolute -bottom-[170px] -right-[200px] lg:-right-[400px] mt-4 md:mt-0 max-w-[370px] md:max-w-full lg:w-auto'>
                        <div className='max-w-[470px] bg-old-green rounded-[35px] text-sm lg:text-base 2xl:text-lg text-white text-center font-poppins font-normal leading-[1.8] text-slider'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
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
                                className="mySwiper"
                            >
                                <SwiperSlide className='pt-8 sm:pt-14 px-8 sm:px-14 pb-10 md:pb-20'>
                                    <p>Our agnostic, bespoke approach means we tailor every solution to your project’s specific needs—whether you’re scaling Residential Portfolios, implementing Commercial systems, or constructing Industrial solar solutions.</p>
                                </SwiperSlide>
                                <SwiperSlide className='pt-8 sm:pt-14 px-8 sm:px-14 pb-10 md:pb-20'>
                                    <p>Our innovative, client-focused strategy ensures each project receives a customized approach — whether optimizing Residential energy systems, integrating advanced Commercial technologies, or developing large-scale Industrial infrastructures.</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>

                <div className='bg-[linear-gradient(270deg,_#F3F4F6_0%,_#262F2E_48%,_#F3F4F6_100%)] max-w-[1050px] mx-auto h-0.5 mt-[50px] md:mt-[250px] lg:mt-[250px] xl:mt-[280px]'></div>
            </div>
        </section>
    );
};

export default ChoseUs;
import bannerImage from '../../public/images/banner-image.png';
import paymentIcon from '../../public/images/icons/payment.png';
import brainstorming from '../../public/images/icons/brainstorming.png';

const Banner = () => {
    return (
        
        <section className='py-9 md:py-12 lg:py-15'>

            <div className='container-custom'>
                <div className='flex flex-col-reverse flex-wrap lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-10 2xl:gap-16'>
                    <div className='relative mt-8 lg:mt-0'>
                        <img className='w-4/5 ms-auto rounded-3xl object-cover lg:h-full' src={bannerImage} alt="banner image" />

                        <div className='bg-white text-center pt-8 2xl:pt-14 px-7 2xl:px-10 pb-7 2xl:pb-10 w-[280px] -mt-12 lg:mt-0 relative md:w-[380px] lg:w-[320px] 2xl:w-[428px] rounded-2xl xl:rounded-4xl lg:absolute lg:bottom-0 lg:left-0'>
                            <div className='flex justify-center gap-4 items-center'>
                                <span><img src={paymentIcon} alt="payment icon" /></span>
                                <h4 className='text-base md:text-lg xl:text-xl 2xl:text-2xl text-old-green font-medium text-start'>Green Energy Capital Solutions</h4>
                            </div>
                            <p className='text-xs md:text-sm xl:text-base font-normal text-[#979797] font-poppins mt-5'>We explore the edge of the capital <br /> market Status Quo.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className='text-xs lg:text-sm xl:text-base text-white font-medium bg-black rounded-[100px] py-2 px-6 lg:py-3 lg:px-8 leading-none'>Renewable Energy Finance </span>
                        </div>

                        <h1><span>Smart</span> Power. <br /> <span>Smarter</span> Future.</h1>
                        <p className='text-sm xl:text-base 2xl:text-lg 3xl:text-xl 3xl:leading-[35px] mb-8 xl:mb-10 2xl:mb-16 3xl:mb-20'>Deploying Creative, Flexible Renewable Energy Support and Financing. At IQGen, we provide streamlined, reliable, and innovative development and financial solutions for renewable projects in the residential, commercial and industrial sector. </p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-4 2xl:gap-8'>
                            <div className='[box-shadow:0px_4px_60px_0px_#00000008] bg-white rounded-xl xl:rounded-3xl text-center py-5 px-1 2xl:px-3 3xl:px-4 flex flex-col justify-center'>
                                <h3 className='text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-poppins'>~80%</h3>
                                <p className='text-sm lg:text-xs xl:text-sm 3xl:text-base text-[#000000A1] font-light font-poppins px-4 mt-2'>Faster Approvals and Offers Than Competitors</p>
                            </div>
                            <div className='[box-shadow:0px_4px_22.6px_0px_#00000008] bg-black text-white rounded-xl xl:rounded-3xl text-center py-5 px-1 2xl:px-3 3xl:px-4 flex flex-col justify-center banner-box'>
                                <h3 className='text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-poppins'>20,000+</h3>
                                <p className='text-sm lg:text-xs xl:text-sm 3xl:text-base font-light font-poppins px-4 mt-2'>Network Installs Completed to date</p>
                            </div>
                            <div className='[box-shadow:0px_4px_60px_0px_#00000008] bg-white rounded-xl xl:rounded-3xl text-center py-5 px-1 2xl:px-3 3xl:px-4 flex flex-col justify-center'>
                                <h3 className='text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-poppins'><img className='mx-auto max-w-[60px] 3xl:max-w-none' src={brainstorming} alt="brainstorming" /></h3>
                                <p className='text-sm lg:text-xs xl:text-sm 3xl:text-base text-[#000000A1] font-light font-poppins px-4 mt-2'>AI-Integrated Platform Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
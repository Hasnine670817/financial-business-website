// import monitor from '../../public/images/icons/monitor-shape.png';
// import strategy from '../../public/images/icons/strategy.png';
// import meeting from '../../public/images/icons/meeting.png';
// import target from '../../public/images/icons/target.png';
// import platformShape from '../../public/images/icons/platform-shape.png';

const Platform = () => {
    return (
        <section className='pt-10 lg:pt-[80px] xl:pt-[150px] 3xl:pt-[230px] pb-12 md:pb-16 lg:pb-22 relative z-10'>

            <img className='absolute left-0 bottom-0 -z-10' src='https://i.ibb.co.com/5Xf78PVP/platform-shape.png' alt="platformShape" />

            <div className='container-custom'>
                <div className="lg:flex flex-wrap">
                    <div className="lg:w-[45%] mb-10 lg:mb-0">
                        <img data-aos="zoom-in" className='md:max-w-[500px] mx-auto lg:mx-0 lg:max-w-full' src='https://i.ibb.co.com/CS419kv/monitor-shape.png' alt="monitor" />
                    </div>
                    <div className='lg:w-[55%] md:ps-8'>
                        <p data-aos="fade-up" className='text-sm xl:text-xl font-medium text-old-green flex items-center justify-center md:justify-start gap-2.5'>
                            <span className='xl:w-5 w-3 xl:h-5 h-3 rounded-full bg-old-green'></span>
                            Our Platform
                        </p>
                        <h2 data-aos="flip-up" className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[65px] font-light leading-[1.2] mt-6 text-center md:text-start'>Deal Processing <b className='font-semibold text-old-green'>Mastery</b> <br className='hidden md:block lg:hidden' /> Meets Capital <br /> <b className='font-semibold'>Innovation</b> </h2>

                        <div className='relative'>
                            <div className='max-w-[320px] md:max-w-full mx-auto md:mx-0 md:w-[300px] xl:w-[350px] 2xl:w-[400px] bg-white [box-shadow:22px_40px_40px_0px_#0000000D] rounded-3xl p-6 2xl:p-8 mt-10 md:mt-20 lg:-ms-24 xl:-ms-24 2xl:-ms-24 3xl:-ms-20 card-animation'>
                                <h5 className='text-lg lg:text-xl 2xl:text-[22px] font-medium text-old-green mb-3 flex gap-2.5 items-center'>
                                    <span><img className='max-w-[30px] xl:max-w-full' src='https://i.ibb.co.com/JWJ9bB9h/strategy.png' alt="strategy" /></span>
                                    Real-time Visibility
                                </h5>
                                <p className='text-[#979797] text-sm lg:text-base font-normal xl:leading-[1.8] line-clamp-3'>Gain instant insight into your projects with real-time tracking and live dashboards. Monitor approvals, payouts, and milestones as they happen. </p>
                            </div>
                            <div className='max-w-[320px] md:max-w-full mx-auto md:mx-0 md:w-[300px] xl:w-[350px] 2xl:w-[400px] md:absolute md:-top-18 lg:-top-18 xl:-top-18 2xl:-top-18 3xl:-top-24 right-0 bg-white [box-shadow:0px_4px_54.4px_0px_#00000040] rounded-3xl p-6 2xl:p-8 my-4 md:my-0 card-animation-delay-1'>
                                <h5 className='text-lg lg:text-xl 2xl:text-[22px] font-medium text-old-green mb-3 flex gap-2.5 items-center'>
                                    <span><img className='max-w-[30px] xl:max-w-full' src='https://i.ibb.co.com/Xr00wpkC/meeting.png' alt="meeting" /></span>
                                    Inclusivity
                                </h5>
                                <p className='text-[#979797] text-sm lg:text-base font-normal xl:leading-[1.8] line-clamp-3'>Designed for everyone in the solar ecosystem—brokers, affiliates, installers, and More. Collaborate effortlessly while keeping everyone aligned.</p>
                            </div>
                            <div className='max-w-[320px] md:max-w-full mx-auto md:me-0 md:w-[300px] xl:w-[350px] 2xl:w-[400px] bg-white [box-shadow:22px_40px_40px_0px_#0000000D] rounded-3xl p-6 2xl:p-8 ms-auto md:-mt-6 lg:-mt-6 lg:me-10 xl:-mt-6 xl:me-10 2xl:-mt-6 2xl:me-10 3xl:-mt-28 3xl:me-24 card-animation-delay-2'>
                                <h5 className='text-lg lg:text-xl 2xl:text-[22px] font-medium text-old-green mb-3 flex gap-2.5 items-center'>
                                    <span><img className='max-w-[30px] xl:max-w-full' src='https://i.ibb.co.com/CKSZBwc6/target.png' alt="target" /></span>
                                    On-Target Streamlineability
                                </h5>
                                <p className='text-[#979797] text-sm lg:text-base font-normal xl:leading-[1.8] line-clamp-3'>Stay on track with seamless, end-to-end workflows that reduce delays and manual errors. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Platform;
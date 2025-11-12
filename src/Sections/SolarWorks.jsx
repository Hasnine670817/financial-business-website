import { useEffect, useState } from 'react';

const SolarWorks = () => {

    const [solarSteps, setSolarSteps] = useState([]);

    useEffect(() => {
        fetch('/SolarSteps.json')
            .then(res => res.json())
            .then(data => setSolarSteps(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <section className="pt-0 xl:pt-20 pb-10 xl:pb-30">
            <div className="container-custom mx-auto px-5">
                {/* Section Header */}
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4"></h2>
                    <div>
                        <h2 className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[65px] font-light leading-[1.2] mt-6 text-center text-old-green mb-5 md:mb-10 2xl:mb-15'>How Solar Energy <strong className='font-bold'>Works</strong></h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:gap-8 max-w-[370px] mx-auto md:mx-0 md:max-w-none">
                    {solarSteps.map((step) => (
                        <div data-aos='flip-left'>
                            <div
                            key={step.id}
                            className="group relative bg-gradient-to-b from-[#F8FFF9] to-[#FFFFFF] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-[#E3EDE6] transition-all duration-500 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                                {/* Image */}
                                <div className="overflow-hidden relative">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-44 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                                    />                                
                                </div>

                                {/* Content */}
                                <div className="pt-10 pb-5 px-5 text-center relative">
                                    {/* floating icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center text-2xl text-[#00A86B] group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#193D2E] font-poppins mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-[#000000A1] leading-relaxed line-clamp-2 mb-4">
                                        {step.description}
                                    </p>

                                    {/* category & efficiency */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 font-medium border-t border-[#E5E9E7] pt-3">
                                        <span className="bg-[#00A86B1A] text-[#00A86B] px-2 py-1 rounded-full">
                                            {step.category}
                                        </span>
                                        <span className="text-[#00A86B] font-semibold">
                                            ⚙️ {step.efficiency}
                                        </span>
                                    </div>

                                    {/* duration */}
                                    <p className="text-[12px] text-gray-400 mt-2 italic">
                                        ⏱ {step.duration}
                                    </p>
                                </div>

                                {/* bottom gradient bar */}
                                <div className="h-[5px] w-0 group-hover:w-full bg-gradient-to-r from-[#00A86B] to-[#9BE15D] transition-all duration-500 absolute bottom-0 left-0 rounded-t-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default SolarWorks;
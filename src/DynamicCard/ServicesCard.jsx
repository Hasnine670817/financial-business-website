import { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const ServicesCard = () => {
    const [services, setServices] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");
    const [showAll, setShowAll] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/Services.json")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setLoading(false)
            })
            .catch((err) => {
                console.error("Error loading services:", err);
                setLoading(false)
            });
    }, []);

    const sortedServices = [...services].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
    });

    if(loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        )
    }

    const visibleServices = showAll ? sortedServices : sortedServices.slice(0, 6);

    return (
        <div className="py-10 xl:py-16 bg-gradient-to-b from-[#f4fff8] to-white">
            <div className="container-custom">
                {/* Header & Sort */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-7 xl:mb-10">
                    <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold'>Our Solar Services</h2>
                    <div className="mt-4 sm:mt-0">
                        <select
                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="default">Sort by</option>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleServices.map((service) => (
                        <div
                            key={service.id}
                            className="card w-full bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="card-body flex flex-col p-6 sm:p-4 md:p-6">
                                <div>
                                    <span className="badge badge-xs badge-warning mb-2">
                                        {service.tag}
                                    </span>
                                    <div className="flex gap-2 flex-wrap justify-between items-center">
                                        <h2 className="text-lg xl:text-2xl font-bold">
                                            {service.title}
                                        </h2>
                                        <span className="text-sm xl:text-lg font-semibold text-[#00A86B]">
                                            ${service.price}/mo
                                        </span>
                                    </div>
                                </div>
                                <ul className="mt-3 xl:mt-6 flex flex-col gap-2 text-xs xl:text-base grow">
                                    {service.features.map((item, i) => (
                                        <li key={i}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-4 me-2 inline-block text-green-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                    {service.unavailable.map((item, i) => (
                                        <li key={i} className="opacity-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-4 me-2 inline-block text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="line-through">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <button type="button" className='py-4 px-8 text-xs xl:text-base xl:py-4 xl:px-12 border text-black border-old-green hover:bg-old-green rounded-3xl hover:text-white leading-0 w-full flex gap-2 items-center justify-center font-medium'>Get Started <FaArrowRightLong className='leading-0' /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show All / Less */}
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="py-5 px-8 text-xs xl:text-base xl:py-6 xl:px-12 bg-old-green hover:bg-black rounded-3xl text-white leading-0 transition-all duration-300"
                    >
                        {showAll ? "Show Less" : "Show All"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
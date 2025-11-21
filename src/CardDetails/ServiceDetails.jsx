import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
    const { id } = useParams();

    const [services, setServices] = useState([]);
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


    const service = services.find((s) => s.id === Number(id));

    if (!service) {
        return <div className="text-center py-20 text-xl">Service Not Found</div>;
    }

    if(loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-b from-[#f4fff8] to-white py-10 xl:py-20">
            <div className="container-custom">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl xl:text-5xl font-bold text-[#12300B]">
                        {service.title}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Learn more about our premium solar solution and how it can reduce your monthly electricity bills.
                    </p>
                </div>

                {/* Details Box */}
                <div className="bg-white border border-[#E3EDE6] shadow-lg rounded-2xl p-6 md:p-10 mb-10">
                    <h2 className="text-2xl xl:text-3xl font-bold mb-4">What’s Included</h2>

                    <ul className="space-y-3">
                        {service.features.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-[#00A86B] mt-1" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {service.unavailable.length > 0 && (
                        <div className="mt-6 opacity-60">
                            <h3 className="font-semibold mb-2">Not Included</h3>
                            <ul className="space-y-2">
                                {service.unavailable.map((item, i) => (
                                    <li key={i} className="line-through">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Pricing Section */}
                <div className="bg-[#F8FFF9] border border-[#DCEEE3] shadow-md p-8 rounded-2xl text-center">
                    <p className="text-xl text-gray-700">Starting at</p>
                    <h2 className="text-4xl xl:text-5xl font-bold text-[#00A86B]">
                        ${service.price}/month
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Flexible billing. 24/7 customer support. 100% satisfaction guaranteed.
                    </p>

                    <Link to={"/appointment"} className="mt-6 py-4 px-10 bg-[#00A86B] text-white rounded-full text-lg hover:bg-[#008E5F] transition">
                        Book Appointment
                    </Link>
                </div>

                {/* FAQ */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <div className="p-5 border border-gray-200 rounded-xl">
                            <h3 className="font-semibold text-lg">How long does installation take?</h3>
                            <p className="mt-2 text-gray-600">Typically installation takes 24–48 hours depending on roof size and system capacity.</p>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-xl">
                            <h3 className="font-semibold text-lg">Is maintenance included?</h3>
                            <p className="mt-2 text-gray-600">Yes! We provide yearly free maintenance plus monitoring support.</p>
                        </div>

                        <div className="p-5 border border-gray-200 rounded-xl">
                            <h3 className="font-semibold text-lg">Do I get warranty?</h3>
                            <p className="mt-2 text-gray-600">All panels come with 15–20 years of warranty based on model.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;

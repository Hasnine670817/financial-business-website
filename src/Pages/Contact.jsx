import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Your message has been received!",
            icon: "success",
            draggable: false,
            
        });
        setFormData({name: "", email: "", message: ""});
    };

    return (
        <div className="bg-gradient-to-b from-[#f4fff8] to-white py-10 xl:py-20">
            <div className="container-custom">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Have questions or need help? Our team is here to assist you with all solar services and installation inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div className="bg-white border border-[#E3EDE6] rounded-2xl p-4 sm:p-8 shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#E8FFF0] rounded-xl text-[#00A86B] text-xl">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+880 1234-567890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#E8FFF0] rounded-xl text-[#00A86B] text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">contact@solarcompany.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#E8FFF0] rounded-xl text-[#00A86B] text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Office</h3>
                                    <p className="text-gray-600">
                                        44/2 Green Valley, Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white border border-[#E3EDE6] rounded-2xl p-4 sm:p-8 shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A86B] outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A86B] outline-none"
                                    placeholder="example@mail.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A86B] outline-none"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 text-lg font-semibold bg-[#00A86B] hover:bg-[#008E5F] text-white rounded-full transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;

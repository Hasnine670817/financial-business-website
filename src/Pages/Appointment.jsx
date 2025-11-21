import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Appointment = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: ""
    });

    // Load services dynamically from JSON
    useEffect(() => {
        fetch("/Services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data);
                const selectedService = data.find(s => s.id.toString() === serviceId);
                if (selectedService) {
                    setFormData(prev => ({ ...prev, service: selectedService.title }));
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [serviceId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Data:", formData);
        // alert("Appointment request submitted successfully!");
        Swal.fire({
            title: "Appointment request submitted successfully!",
            icon: "success",
            draggable: false,
            
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <section className="py-16 bg-gradient-to-b from-[#f4fff8] to-white">
            <div className="container-custom">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    Book an Appointment
                </h2>

                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                        
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            value={formData.name}
                            required
                        />

                        {/* Phone */}
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            value={formData.phone}
                            required
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            value={formData.email}
                        />

                        {/* Service */}
                        <select
                            name="service"
                            className="select select-bordered w-full"
                            onChange={handleChange}
                            value={formData.service}
                            required
                        >
                            <option value="">Select a Service</option>
                            {services.map(s => (
                                <option key={s.id} value={s.title}>{s.title}</option>
                            ))}
                        </select>

                        {/* Date & Time */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered w-full"
                                onChange={handleChange}
                                value={formData.date}
                                required
                            />
                            <input
                                type="time"
                                name="time"
                                className="input input-bordered w-full"
                                onChange={handleChange}
                                value={formData.time}
                                required
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            name="message"
                            className="textarea textarea-bordered w-full"
                            placeholder="Your message (optional)"
                            rows={4}
                            onChange={handleChange}
                            value={formData.message}
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="py-4 px-8 bg-old-green hover:bg-black text-white rounded-full text-base md:text-lg font-medium transition-all duration-300"
                        >
                            Submit Appointment Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Appointment;

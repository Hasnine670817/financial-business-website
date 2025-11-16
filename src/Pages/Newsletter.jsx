import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter Subscription:", email);
        alert("Thank you for subscribing!");
        setEmail("");
    };


    return (
        <section className="bg-gradient-to-b from-[#f4fff8] to-white">
            <div className="py-16 xl:py-20">
                <div className="container-custom text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mb-8">
                        Stay updated with the latest solar solutions and financial insights.
                    </p>

                    {/* Subscription Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full sm:w-auto flex-1 rounded-3xl px-6 py-2 md:py-4 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="py-2 px-8 bg-old-green hover:bg-black text-white rounded-3xl font-medium transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Optional Note */}
                    <p className="text-sm text-gray-500 mt-4">
                        We respect your privacy. No spam, ever.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

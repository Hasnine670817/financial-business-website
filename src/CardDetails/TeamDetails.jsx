import { useState } from "react";

const TeamDetails = ({ selectedMember, setSelectedMember }) => {
    // Local state for like/dislike
    const [feedback, setFeedback] = useState(null); // 'like' | 'dislike' | null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 bg-black/60 backdrop-blur-sm">
            {/* Modal Container */}
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn max-h-[calc(100vh-40px)] overflow-y-auto">

                {/* Close Button */}
                <button
                    className="absolute text-xl top-3 right-3 text-gray-500 hover:text-gray-700 transition"
                    onClick={() => setSelectedMember(null)}
                >
                    ✕
                </button>

                {/* Modal Content */}
                <div className="text-center px-6 sm:px-10 py-8 sm:py-10">
                    {/* Image */}
                    <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover mb-4 ring-4 ring-[#00A86B]/30"
                    />

                    {/* Name & Role */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {selectedMember.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-3">
                        {selectedMember.role}
                    </p>

                    {/* Bio */}
                    <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                        {selectedMember.bio}
                    </p>

                    {/* Experience */}
                    <div className="text-left bg-[#F8FFF9] p-4 rounded-xl border border-[#E3EDE6] mb-4">
                        <p className="text-sm font-semibold text-[#00A86B] mb-1">
                            Experience:
                        </p>
                        <p className="text-sm text-gray-600">
                            {selectedMember.experience}
                        </p>
                    </div>

                    {/* Specialities */}
                    <div className="text-left bg-[#F8FFF9] p-4 rounded-xl border border-[#E3EDE6]">
                        <p className="text-sm font-semibold text-[#00A86B] mb-2">
                            Specialities:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {selectedMember.speciality.map((sp, idx) => (
                                <li key={idx}>{sp}</li>
                            ))}
                        </ul>
                    </div>

                    {/* LinkedIn Button */}
                    <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 bg-old-green text-white px-5 py-2 rounded-full text-sm hover:bg-black transition-all duration-300"
                    >
                        Visit LinkedIn Profile
                    </a>

                    {/* Like / Dislike Section */}
                    <div className="flex items-center justify-center gap-6 mt-6">
                        {/* Like Button */}
                        <button
                            onClick={() =>
                                setFeedback(feedback === "like" ? null : "like")
                            }
                            className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                                feedback === "like"
                                    ? "text-[#00A86B]"
                                    : "text-gray-500 hover:text-[#00A86B]"
                            }`}
                        >
                            <span
                                className={`text-xl ${
                                    feedback === "like" ? "scale-110" : ""
                                }`}
                            >
                                ❤️
                            </span>
                            Like
                        </button>

                        {/* Dislike Button */}
                        <button
                            onClick={() =>
                                setFeedback(feedback === "dislike" ? null : "dislike")
                            }
                            className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                                feedback === "dislike"
                                    ? "text-red-500"
                                    : "text-gray-500 hover:text-red-500"
                            }`}
                        >
                            <span
                                className={`text-xl ${
                                    feedback === "dislike" ? "scale-110" : ""
                                }`}
                            >
                                👎
                            </span>
                            Dislike
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;

import React from 'react';

const CardDetails = ({card}) => {
    return (
        <div>
            <dialog id="card_details" className="modal modal-bottom md:modal-middle">
                <div className="modal-box lg:max-w-[950px] xl:max-w-[1000px] w-full rounded-t-3xl sm:rounded-3xl p-0">
                    
                    {/* Image Section */}
                    <div className="relative p-5 sm:p-8 !pb-0">
                        <img className="w-full h-[250px] sm:h-[450px] object-cover rounded-2xl" src={card?.thumbnail} alt={card?.title} />
                        <span className="absolute top-8 sm:top-12 left-8 sm:left-12 bg-black/60 text-white text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wide">{card?.category}</span>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-8 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{card?.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                                {card?.date && new Date(card.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600"><span className="font-semibold">Author:</span> {card?.author}</p>

                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{card?.summary}</p>

                        <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">{card?.details}</p>
                        </div>

                        {card?.tags && card.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-3">
                                {card.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded-full border border-gray-200">#{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Close Button */}
                    <div className="modal-action px-6 pb-6 sm:px-8">
                        <form method="dialog">
                            <button className="btn w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg border-0 h-[30px] sm:h-[40px] text-xs sm:text-sm">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default CardDetails;
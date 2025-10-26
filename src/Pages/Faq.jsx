import { useEffect, useState } from "react";


const Faq = () => {

    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Faq.json')
            .then(res => res.json())
            .then(data => {
                setFaqs(data)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div className='pt-5 md:pt-10 pb-10 md:pb-20'>
            <div className='container-custom'>
                <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-8'>FAQ</h2>

                <div className="max-w-[600px] mx-auto">
                        {
                            faqs.map(faq => (
                                <div key={faq.id} className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3 md:mb-5">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title font-semibold text-sm md:text-lg">{faq?.question}</div>
                                    <div className="collapse-content text-xs md:text-sm leading-[1.7]">{faq?.answer}</div>
                                </div>
                            )) 
                        }
                </div>
            </div>
        </div>
    );
};

export default Faq;
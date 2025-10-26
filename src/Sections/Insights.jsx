import { useEffect, useState } from 'react';
import insightsDots from '../../public/images/insights-dots.png'
import insightsBlur from '../../public/images/insights-blur.png'
import FinanceCard from '../DynamicCard/FinanceCard';
import ellipseBlur1 from '../../public/images/icons/ellipse-blur1.png';
import CardDetails from '../CardDetails/CardDetails';
import { FaFilter } from 'react-icons/fa';

const Insights = () => {

    const [financeCards, setFinanceCards] = useState([]);

    const [filterCards, setFilterCards] = useState([]);

    const [showAll, setShowAll] = useState(false);

    const [showMore, setShowMore] = useState([]);

    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState("all");

    const [loading, setLoading] = useState(false);

    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        fetch('/FinanceCards.json')
            .then(res => res.json())
            .then(data => {
                setFinanceCards(data)
                setFilterCards(data);
            })
            .catch(error => console.error(error))
    }, []);


    // for fetch category
    useEffect(() => {
        fetch('/Category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])


    // for show more button
    const handleShowMore = (card) => {
        setShowMore(card);

        document.getElementById('card_details').showModal();
    }

    // handle category btn 
    const handleCategory = (category) => {
        setActiveCategory(category);
        setLoading(true);

        setTimeout(() => {
            if (category === 'all') {
                setFilterCards(financeCards)
            }
            else {
                const filtered = financeCards.filter(card => card.category === category);
                setFilterCards(filtered)
            }
            setShowAll(false);
            setLoading(false);
        }, 1000);
    }

    // for show all button
    const handleShowAll = () => {
        setShowAll(true);
    }


    return (
        <section className='relative z-10 pt-0 pb-15 md:pt-10 md:pb-25'>
            <img className='absolute w-full left-0 top-0 -z-10' src={insightsDots} alt="insightsDots" />
            <img className='absolute left-0 bottom-0 -z-10' src={insightsBlur} alt="insightsBlur" />
            <img className='absolute right-0 top-0 -z-10' src={ellipseBlur1} alt="ellipse blur1" />

            <div className='container-custom'>
                <div>
                    <h2 className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[65px] font-light leading-[1.2] mt-6 text-center text-old-green mb-5 md:mb-10 2xl:mb-15'>Energy Market <strong className='font-bold'>Insights</strong></h2>
                </div>

                <div className='text-end mb-3 md:hidden'>
                    <button onClick={() => setShowFilter(prev => !prev)} type="button" className='flex items-center gap-2 font-semibold justify-center text-xs py-3 px-3 rounded-lg bg-[#E2E2E2] hover:bg-[#cec7c78f] w-full max-w-[370px] mx-auto filter-btn'><FaFilter /> Filter</button>
                </div>

                <div className='relative'>
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 md:translate-0 z-10 md:[position:initial] w-full max-w-[370px] md:max-w-none ms-auto md:ms-0 md:w-auto md:flex gap-3 justify-center items-center pb-5 lg:pb-10 bg-white md:bg-transparent p-4 md:p-0 md:pb-7 rounded-2xl md:rounded-none shadow-2xl md:shadow-none category-toggle transition-all duration-500 overflow-hidden ${showFilter ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100`}>
                        {
                            categories.map(category => <button className={`w-full mb-1.5 md:mb-0 md:w-auto text-xs lg:text-base 2xl:text-lg rounded-lg 2xl:rounded-xl bg-[#E2E2E2] font-semibold py-3 px-3 lg:py-3 lg:px-4 2xl:py-5 leading-none 2xl:px-6 shadow-sm ${activeCategory === category.category ? 'bg-old-green text-white' : 'bg-[#E2E2E2]'}`} onClick={() => {
                                handleCategory(category.category)
                                setShowFilter(false);
                            }} key={category.id}>{category?.name}</button>)
                        }
                    </div>
                </div>

                
                {
                    loading ? (
                        <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                            <span className="loading loading-bars loading-xl"></span>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 xl:gap-6 2xl:gap-10 3xl:gap-14 max-w-[370px] mx-auto md:max-w-none md:mx-0'>
                            {
                                (showAll ? filterCards : filterCards.slice(0, 6)).map(financeCard => <FinanceCard key={financeCard.id} card={financeCard} handleShowMore={handleShowMore}></FinanceCard>)
                            }
                        </div>
                    )
                }

                

                {
                    filterCards.length > 6 && !showAll && (
                        <div className='text-center'>
                            <div className='text-center pt-15'>
                                <button onClick={handleShowAll} type="button" className='py-6 px-12 bg-old-green hover:bg-black rounded-3xl text-white leading-0'>Show All</button>
                            </div>
                        </div>
                    )
                }

                {
                    showMore && (
                        <CardDetails card={showMore}></CardDetails>
                    )
                }
            </div>
        </section>
    );
};

export default Insights;
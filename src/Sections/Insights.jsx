import { useEffect, useState } from 'react';
import insightsDots from '../../public/images/insights-dots.png'
import insightsBlur from '../../public/images/insights-blur.png'
import FinanceCard from '../DynamicCard/FinanceCard';
import ellipseBlur1 from '../../public/images/icons/ellipse-blur1.png';
import CardDetails from '../CardDetails/CardDetails';

const Insights = () => {

    const [financeCards, setFinanceCards] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const [showMore, setShowMore] = useState([]);

    useEffect(() => {
        fetch('/FinanceCards.json')
            .then(res => res.json())
            .then(data => setFinanceCards(data))
            .catch(error => console.error(error))
    }, []);


    // for show more button
    const handleShowMore = (card) => {
        setShowMore(card);

        document.getElementById('card_details').showModal();
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
                    <h2 className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[65px] font-light leading-[1.2] mt-6 text-center text-old-green mb-10 2xl:mb-20'>Energy Market <strong className='font-bold'>Insights</strong></h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 xl:gap-6 2xl:gap-10 3xl:gap-14 max-w-[370px] mx-auto md:max-w-none md:mx-0'>
                    {
                        (showAll ? financeCards : financeCards.slice(0, 6)).map(financeCard => <FinanceCard key={financeCard.id} card={financeCard} handleShowMore={handleShowMore}></FinanceCard>)
                    }
                </div>

                {
                    financeCards.length > 6 && !showAll && (
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
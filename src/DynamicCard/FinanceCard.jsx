
const FinanceCard = ({card, handleShowMore}) => {


    return (
        <div data-aos="zoom-in">
            <div className="finance__card rounded-3xl sm:rounded-[30px]">
                <figure className='overflow-hidden rounded-3xl sm:rounded-[30px]'>
                    <img className='w-full h-[250px] lg:h-[280px] 2xl:h-[310px] rounded-3xl sm:rounded-[30px] object-center object-cover bg-black/50' src={card?.thumbnail} alt={card?.title} />
                </figure>
                <div className='bg-white rounded-3xl sm:rounded-[30px] [box-shadow:22px_40px_40px_0px_#0000000D] 2xl:pt-8 3xl:pt-11 2xl:px-8 3xl:px-10 2xl:pb-10 3xl:pb-12 -mt-[80px] sm:px-7 sm:py-8 md:px-5 md:py-6 lg:px-7 lg:py-8 px-6 py-6 relative'>
                    <div className='flex gap-5 2xl:gap-10 items-center'>
                        <p className='flex gap-3 md:gap-2 lg:gap-3 items-center text-sm md:text-base font-poppins font-medium'>
                            <span className='md:w-[15px] w-2.5 h-2.5 md:h-[15px] rounded-full bg-old-green'></span>
                            {card?.author}
                        </p>
                        <p className='flex gap-3 md:gap-2 lg:gap-3 items-center text-sm md:text-base font-poppins font-medium'>
                            <span className='md:w-[15px] w-2.5 h-2.5 md:h-[15px] rounded-full bg-old-green'></span>
                            {card?.date}
                        </p>
                    </div>
                    <h3 className='text-xl md:text-2xl font-medium text-old-green my-4 2xl:my-6 line-clamp-1'>{card?.title}</h3>
                    <p className='text-sm md:text-base text-[#979797] leading-[1.8] line-clamp-2'>{card?.details}</p>

                    <div className='text-center pt-6 2xl:pt-8'>
                        <button onClick={() => handleShowMore(card)} type="button" className='2xl:py-6 md:py-5.5 2xl:px-12 md:px-10 py-5 px-6 hover:bg-old-green bg-black rounded-3xl text-white leading-0'>Show more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceCard;


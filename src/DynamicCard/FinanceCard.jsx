import React from 'react';

const FinanceCard = ({card}) => {


    return (
        <div>
            <figure className='overflow-hidden rounded-[30px]'>
                <img className='w-full h-[310px] rounded-[30px] object-center object-cover' src={card?.thumbnail} alt={card?.title} />
            </figure>
            <div className='bg-white rounded-[30px] [box-shadow:22px_40px_40px_0px_#0000000D] pt-11 px-10 pb-12 -mt-[80px] relative'>
                <div className='flex gap-10 items-center'>
                    <p className='flex gap-3 items-center text-base font-poppins font-medium'>
                        <span className='w-[15px] h-[15px] rounded-full bg-old-green'></span>
                        {card?.author}
                    </p>
                    <p className='flex gap-3 items-center text-base font-poppins font-medium'>
                        <span className='w-[15px] h-[15px] rounded-full bg-old-green'></span>
                        {card?.date}
                    </p>
                </div>
                <h3 className='text-2xl font-medium text-old-green my-6 line-clamp-1'>{card?.title}</h3>
                <p className='text-base text-[#979797] leading-[1.8] line-clamp-2'>{card?.details}</p>

                <div className='text-center pt-8'>
                    <button type="button" className='py-6 px-12 hover:bg-old-green bg-black rounded-3xl text-white leading-0'>Show more</button>
                </div>
            </div>
        </div>
    );
};

export default FinanceCard;


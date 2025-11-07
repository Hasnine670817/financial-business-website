import { BsPatchExclamation } from 'react-icons/bs';

const SolutionCard = ({card}) => {
    

    return (
        <div data-aos="fade-up" className='bg-[linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,_255,_255,_0.52)_100%)] [box-shadow:22px_40px_40px_0px_#0000000D] backdrop-filter backdrop-blur-[17.399999618530273px] rounded-3xl md:rounded-[35px] p-7 md:p-10 max-w-[380px] 2xl:max-w-[420px] my-2 mx-auto md:mx-0'>
            <h4 className='flex gap-2.5 items-center text-base md:text-lg 2xl:text-xl font-semibold text-old-green px-1 2xl:px-3.5'>
                <span><BsPatchExclamation /></span>
                {card?.title}
            </h4>
            <p className='text-sm md:text-base font-light text-[#000000A1] font-poppins mt-4 2xl:mt-6 line-clamp-2'>{card?.description}</p>
        </div>
    );
};

export default SolutionCard;
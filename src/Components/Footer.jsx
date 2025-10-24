import { Link } from 'react-router-dom';
import footerLogo from '../../public/images/logo.png';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className='container-custom'>
                <div className='md:flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 justify-between border border-[#979797] border-x-0 pt-10 pb-10 lg:pb-18 xl:pt-14 xl:pb-24'>
                    <div className='md:flex items-start gap-10 md:gap-6 lg:gap-10 xl:gap-20 mt-6 sm:mt-0 text-center md:text-start'>
                        <Link to='/'><img className='max-w-[100px] md:max-w-[80px] lg:max-w-[100px] xl:max-w-full mx-auto lg:mx-0' src={footerLogo} alt="footer logo" /></Link>
                        <div className='font-poppins text-sm xl:text-base font-normal text-[#979797]'>
                            <div className='mb-2'>
                                <strong className='font-bold text-old-green'>Office:</strong>
                                <p>8 The Green Suite B <br className='hidden md:block lg:hidden' /> Dover, DE <br className='md:hidden' /> 19901</p>
                            </div>

                            <div>
                                <strong className='font-bold text-old-green'>Email:</strong>
                                <p>info@iqgen.energy</p>
                            </div>

                            <ul className='flex gap-3 items-center mt-7 justify-center md:justify-start'>
                                <li>
                                    <a className='w-7 h-7 rounded-full border border-[#D4D4D8] flex justify-center items-center text-old-green hover:text-white hover:bg-old-green hover:border-old-green' href="http://www.twitter.com" target='_blank'><FaTwitter /></a>
                                </li>
                                <li>
                                    <a className='w-7 h-7 rounded-full border border-[#D4D4D8] flex justify-center items-center text-old-green hover:text-white hover:bg-old-green hover:border-old-green' href="http://www.facebook.com" target='_blank'><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a className='w-7 h-7 rounded-full border border-[#D4D4D8] flex justify-center items-center text-old-green hover:text-white hover:bg-old-green hover:border-old-green' href="http://www.instagram.com" target='_blank'><FaInstagram /></a>
                                </li>
                                <li>
                                    <a className='w-7 h-7 rounded-full border border-[#D4D4D8] flex justify-center items-center text-old-green hover:text-white hover:bg-old-green hover:border-old-green' href="http://www.github.com" target='_blank'><FaGithub /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='text-sm xl:text-base font-normal text-[#979797] mt-8 md:mt-0 text-center md:text-start'>
                        <h4 className='uppercase font-bold text-old-green mb-4 lg:mb-7'>Company</h4>
                        <ul>
                            <li>
                                <a href="#" className='mb-2 lg:mb-4 hover:underline'>About</a>
                            </li>
                            <li>
                                <a href="#" className='mb-2 lg:mb-4 hover:underline'>Features</a>
                            </li>
                            <li>
                                <a href="#" className='hover:underline'>Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div className='text-sm xl:text-base font-normal text-[#979797] mt-8 md:mt-0 text-center md:text-start'>
                        <h4 className='uppercase font-bold text-old-green mb-4 lg:mb-7'>Help</h4>
                        <ul>
                            <li>
                                <a href="#" className='mb-2 lg:mb-4 hover:underline'>Customer Support</a>
                            </li>
                            <li>
                                <a href="#" className='mb-2 lg:mb-4 hover:underline'>Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className='hover:underline'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className='text-sm xl:text-base font-normal text-[#979797] mt-8 md:mt-0 text-center md:text-start'>
                        <h4 className='uppercase font-bold text-old-green mb-4 lg:mb-7'>Resources</h4>
                        <ul>
                            <li>
                                <a href="#" className='mb-2 lg:mb-4 hover:underline'>Platform Tutorial</a>
                            </li>
                            <li>
                                <a href="#" className='hover:underline'>Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className='text-center text-sm lg:text-base text-[#979797] py-4 lg:py-6'>© Copyright 2025, All Rights Reserved By IQGen, LLC</p>
            </div>
        </footer>
    );
};

export default Footer;
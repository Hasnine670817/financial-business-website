import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../public/images/logo.png'
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='py-2.5 lg:py-4 bg-[#F3F4F6]/70 backdrop-blur-md sticky top-0 z-50'>
            <div className='container-custom'>
                <nav className='hidden lg:flex items-center justify-between'>
                    <Link to='/'><img className='lg:max-w-[90px] 2xl:max-w-[130px]' src={headerLogo} alt="logo" /></Link>

                    <ul className='flex items-center gap-10 xl:gap-14 2xl:gap-16'>
                        <li>
                            <NavLink to='/' className='text-sm xl:text-base 2xl:text-lg font-medium text-black relative link-a'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='text-sm xl:text-base 2xl:text-lg font-medium text-black relative link-a'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' className='text-sm xl:text-base 2xl:text-lg font-medium text-black relative link-a'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/faq' className='text-sm xl:text-base 2xl:text-lg font-medium text-black relative link-a'>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className='text-sm xl:text-base 2xl:text-lg font-medium text-black relative link-a'>Blog</NavLink>
                        </li>
                    </ul>

                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link to='/sign-up' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B]'>Sign Up</Link>
                        </li>
                        <li>
                            <Link to='/login' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B]'>Login</Link>
                        </li>
                    </ul>
                </nav>

                <div className="drawer lg:hidden">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <div className='flex items-center justify-between'>
                            <Link to='/'><img className='max-w-[60px]' src={headerLogo} alt="logo" /></Link>
                            <label htmlFor="my-drawer-1" className="drawer-button cursor-pointer text-xl"><FaBars></FaBars></label>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-[#F3F4F6] min-h-full w-70 p-4">
                            <li>
                                <NavLink to='/' className='text-base font-medium text-black relative'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className='text-base font-medium text-black relative'>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' className='text-base font-medium text-black relative'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/faq' className='text-base font-medium text-black relative'>FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog' className='text-base font-medium text-black relative'>Blog</NavLink>
                            </li>
                            <li className='mt-3'>
                                <Link to='sign-up' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B] justify-center'>Sign Up</Link>
                            </li>
                            <li className='mt-3'>
                                <Link to='/login' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B] justify-center'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
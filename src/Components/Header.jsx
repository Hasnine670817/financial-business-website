import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../public/images/logo.png'
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Header = () => {

    const { user, logout } = useContext(AppContext);

    return (
        <header className='py-2.5 lg:py-4 bg-[#F3F4F6]/70 backdrop-blur-md sticky top-0 z-50'>
            <div className='container-custom'>
                <nav className='hidden lg:flex items-center justify-between'>
                    <Link to='/'><img className='lg:max-w-[90px] 2xl:max-w-[130px]' src={headerLogo} alt="logo" /></Link>

                    <ul className='flex items-center gap-8 xl:gap-14 2xl:gap-16'>
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
                            <NavLink to='/appointment' className='text-sm xl:text-base 2xl:text-lg font-medium text-black relative link-a'>Appointment</NavLink>
                        </li>
                        <li>
                            <NavLink to='/newsletter' className='text-sm xl:text-base 2xl:text-lg font-medium text-black relative link-a'>NewsLetter</NavLink>
                        </li>
                    </ul>

                    <ul className='flex items-center gap-4'>
                        {
                            user ? (
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold cursor-pointer"
                                    >
                                        {user.email.charAt(0).toUpperCase()}
                                    </div>

                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[100] menu p-3 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li className="mb-2 pointer-events-none">
                                            <span className="text-sm font-medium">{user.email}</span>
                                        </li>
                                        <li>
                                            <button
                                                className="text-sm btn text-center font-semibold bg-black border-0 hover:text-red-600 text-white flex gap-1 items-center"
                                                onClick={() => {
                                                    logout();
                                                }}
                                            >
                                                <FaSignOutAlt />
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                <li>
                                    <Link to='/sign-up' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B]'>Sign Up</Link>
                                </li>
                                <li>
                                    <Link to='/login' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B]'>Login</Link>
                                </li>
                                </>
                            )
                        }
                    </ul>
                </nav>

                <div className="drawer lg:hidden">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <div className='flex items-center justify-between'>
                            <Link to='/'><img className='max-w-[60px]' src={headerLogo} alt="logo" /></Link>
                            <div className='flex gap-3 items-center'>
                                <label htmlFor="my-drawer-1" className="drawer-button cursor-pointer text-xl"><FaBars></FaBars></label>
                                {
                                    user && (
                                        <div className="dropdown dropdown-end">
                                            <div
                                                tabIndex={0}
                                                role="button"
                                                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold cursor-pointer"
                                            >
                                                {user.email.charAt(0).toUpperCase()}
                                            </div>

                                            <ul
                                                tabIndex={0}
                                                className="dropdown-content z-[100] menu p-3 shadow bg-base-100 rounded-box w-52"
                                            >
                                                <li className="mb-2 pointer-events-none">
                                                    <span className="text-sm font-medium">{user.email}</span>
                                                </li>
                                                <li>
                                                    <button
                                                        className="text-sm btn text-center font-semibold bg-black border-0 hover:text-red-600 text-white flex gap-1 items-center"
                                                        onClick={() => {
                                                            logout();
                                                        }}
                                                    >
                                                        <FaSignOutAlt />
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
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
                                <NavLink to='/appointment' className='text-base font-medium text-black relative'>Appointment</NavLink>
                            </li>
                            <li>
                                <NavLink to='/newsletter' className='text-base font-medium text-black relative'>NewsLetter</NavLink>
                            </li>
                            {
                                !user && (
                                    <>
                                        <li className='mt-3'>
                                            <Link to='sign-up' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B] justify-center'>Sign Up</Link>
                                        </li>
                                        <li className='mt-3'>
                                            <Link to='/login' className='text-sm xl:text-base 2xl:text-lg font-semibold text-white bg-black leading-none py-3 px-6 2xl:py-4 2xl:px-8 rounded-[26px] hover:bg-[#12300B] justify-center'>Login</Link>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
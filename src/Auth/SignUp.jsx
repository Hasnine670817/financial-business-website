import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="hero py-10 md:py-15">
                <div className="hero-content block w-full text-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-0">Sign Up now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3'>
                                    <div className='text-start'>
                                        <label className="label">First Name</label>
                                        <input type="text" className="input" placeholder="First Name" />
                                    </div>
                                    <div className='text-start'>
                                        <label className="label">Last Name</label>
                                        <input type="text" className="input" placeholder="Last Name" />
                                    </div>
                                </div>

                                <label className="label">Photo URL</label>
                                <input type="url" className="input w-full" placeholder="Photo URL" />

                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />

                                <button className="btn btn-neutral mt-4 hover:bg-old-green">Sign Up</button>

                                <p className='label text-center mt-3 block text-sm'>Already have an account? <Link className='text-blue-500 hover:underline' to='/login'>Login</Link></p>

                                <button className="btn mt-2">
                                    <FcGoogle className='text-lg' />
                                    Continue with Google
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero py-10 md:py-15">
                <div className="hero-content block w-full text-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-0">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <div className='text-start'><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4 hover:bg-old-green">Login</button>

                                <p className='label text-center mt-3 block text-sm'>Don't have account? <Link className='text-blue-500 hover:underline' to='/sign-up'>Sign Up</Link></p>

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

export default Login;
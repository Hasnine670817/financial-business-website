import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Swal from 'sweetalert2';
import { IoAlertCircleOutline } from 'react-icons/io5';

const Login = () => {

    const { login } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

         const result = login({ email, password });

         if (!result.success) {
            setError(result.message);
            Swal.fire({
                title: "Oops!",
                icon: "error",
                draggable: false,
                
            });
        }
        else {
            setError("");
            Swal.fire({
                title: "Login SuccessFully!",
                icon: "success",
                draggable: false,
                
            });
            navigate(from, { replace: true }); 
        }        
    }

    return (
        <div>
            <div className="hero py-10 md:py-15">
                <div className="hero-content block w-full text-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-0">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                        <div className="card-body">
                            <form className="fieldset" onSubmit={handleSubmit}>
                                <label className="label">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="input w-full" placeholder="Password" />
                                
                                {error && <p style={{ color: "red" }} className='text-start flex gap-1 items-center'><IoAlertCircleOutline /> {error}</p>}

                                <button className="btn btn-neutral mt-4 hover:bg-old-green">Login</button>

                                <p className='label text-center mt-3 block text-sm'>Don't have account? <Link className='text-blue-500 hover:underline' to='/sign-up'>Sign Up</Link></p>

                                <button className="btn mt-2">
                                    <FcGoogle className='text-lg' />
                                    Continue with Google
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
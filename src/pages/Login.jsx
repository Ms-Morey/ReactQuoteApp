import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate()
    let handleSignIn = (e) => {
        e.preventDefault()
        //! validation
        //! navigation based on  validation
        navigate('/home')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-md text-white">
                <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-white text-sm"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <div className="text-right">
                        <a href="#" className="text-sm hover:underline">Forgot password?</a>
                    </div>

                    <button
                        onClick={handleSignIn}
                        type="submit"
                        className="w-full bg-white text-purple-600 font-bold py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    Don't have an account?{' '}
                    <button onClick={()=>{navigate('/signup')}} className="font-semibold underline hover:text-white">Sign up</button>
                </p>
            </div>
        </div>
    );
};

export default Login;

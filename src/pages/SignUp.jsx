import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    let navigate = useNavigate()
    let handleSignup = (e) => {
        e.preventDefault()
        //! create user
        //! navigate to login page if signup is successful
        navigate('/')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-4">
            <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-md text-white">
                <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

                <form className="space-y-5">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-2.5 text-white text-sm"
                            >
                                Show
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-2.5 text-white text-sm"
                            >
                                Show
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={handleSignup}
                        className="w-full bg-white text-blue-600 font-bold py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Link to Login */}
                <p className="text-center text-sm mt-6">
                    Already have an account?{' '}
                    <Link to='/' className="font-semibold underline hover:text-white">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

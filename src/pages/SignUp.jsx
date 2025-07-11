import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const SignUp = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  let { name, email, password } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(state);
  };
  let handleSignup = (e) => {
    e.preventDefault();
    state.name && state.email && state.password
      ? axios.post("http://localhost:3000/users", state) && navigate("/")
      : toast("empty fields found", {
          icon: "👀",
        });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-4">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              onChange={handleChange}
              required
              name="name"
              value={name}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              required
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <Toaster position="bottom-right" />
          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                onChange={handleChange}
                name="password"
                value={password}
                required
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
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                required
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
            onClick={handleSignup}
            type="submit"
            className="w-full bg-white text-blue-600 font-bold py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/" className="font-semibold underline hover:text-white">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

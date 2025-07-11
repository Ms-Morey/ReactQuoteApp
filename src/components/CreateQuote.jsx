import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuote = () => {
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
        navigate('/home')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
                <h2 className="text-2xl font-bold text-center text-[#883377] mb-6">Add New Quote</h2>

                <form className="space-y-5">
                    {/* Quote Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Quote</label>
                        <textarea
                            rows="4"
                            placeholder="Enter the quote here..."
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                        />
                    </div>

                    {/* Author Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Author</label>
                        <input
                            type="text"
                            placeholder="e.g. Albert Einstein"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-4">
                        <button
                            type="button"
                            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                        >
                            Clear
                        </button>
                        <button
                             onClick={handleSubmit}
                            type="submit"
                            className="px-5 py-2 bg-[#883377] text-white rounded-md hover:bg-[#a34499] transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateQuote;

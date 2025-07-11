import React from 'react';
import { useData } from '../context/AppContext';


const AllQuotes = () => {
    const { api } = useData();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-6">
            {
                api.length === 0 ? (
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Loading Quotes...</h1>
                ) : (
                    <div className="flex flex-wrap justify-center gap-6">
                        {api.length==0? <Loader/>:api.map((val, i) => (
                            <div
                                key={i}
                                className="flex flex-col justify-between w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white border-l-4 border-purple-400 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <p className="text-gray-800 text-lg leading-relaxed mb-4 relative pl-6 before:absolute before:left-0 before:top-0 before:text-purple-400 before:text-3xl before:content-['“']">
                                    {val.quote}
                                </p>
                                <p className="text-right text-sm text-gray-600 font-medium mt-auto">— {val.author || "Unknown"}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default AllQuotes;

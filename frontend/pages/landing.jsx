import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer'
import { CodeBracketIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const Landing = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <div className="fixed px-5 top-3 w-full z-50">
        <Navbar />
      </div>

      {/* Add padding top so content doesn't go under navbar */}
      <div className="pt-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            CodeTable
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Sharpen your coding skills and practice interviews in real-time. Mock or live interviews, all in one place!
          </p>
        </section>

        {/* Cards Section */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 pb-20">
          {/* Mock Interview Card */}
          <Link
            to="/mock"
            className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-blue-500 transition-colors duration-1000 p-8 rounded-2xl shadow-lg w-72 text-center cursor-pointer hover:scale-105"
          >
            <CodeBracketIcon className="w-16 h-16 text-white mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Mock Interview</h2>
            <p className="text-gray-100">
                Challenge yourself with a timed mock coding test.            
            </p>
          </Link>

          {/* Live Interview Card */}
          <Link
            to="/live"
            className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-blue-500 transition-colors duration-1000 p-8 rounded-2xl shadow-lg w-72 text-center cursor-pointer hover:scale-105"
          >
            <PresentationChartLineIcon className="w-16 h-16 text-white mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Live Interview</h2>
            <p className="text-gray-100">
              Use the shared <span className='font-semibold'>Room Key</span> to join your coding interview.
            </p>
          </Link>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;

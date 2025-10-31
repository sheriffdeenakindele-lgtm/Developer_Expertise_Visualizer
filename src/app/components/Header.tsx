"use client";
import React from 'react';
import Wrapper from '../shared/wrapper';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between py-2 sm:py-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-800 truncate">Developer Expertise Visualizer</h1>
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="flex space-x-1 sm:space-x-2 lg:space-x-4">
                <a 
                    href="#about" 
                    className="relative z-10 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer text-xs sm:text-sm lg:text-base"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }}
                >
                    ABOUT
                </a>
                <a 
                    href="#dashboard" 
                    className="relative z-10 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer text-xs sm:text-sm lg:text-base"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('dashboard')?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }}
                >
                    DASHBOARD
                </a>
                <a 
                    href="#contact" 
                    className="relative z-10 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer text-xs sm:text-sm lg:text-base"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }}
                >
                    CONTACT
                </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
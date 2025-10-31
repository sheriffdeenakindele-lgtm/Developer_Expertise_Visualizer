"use client";
import React from 'react';
import Wrapper from '../shared/wrapper';

const Header = () => {
  return (
    <Wrapper>
    <header className="z-10">
        <div className="container mx-auto ml-0 mt-7 pl-0">
          <h1 className="text-2xl font-bold">Developer Expertise Visualizer</h1>
        </div>
        <div className="flex justify-end">
            <nav className="flex space-x-4">
                <a 
                    href="#about" 
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    ABOUT
                </a>
                <a 
                    href="#dashboard" 
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    DASHBOARD
                </a>
                <a 
                    href="#review" 
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
                >
                    REVIEW
                </a>
                <a 
                    href="#contact" 
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
                >
                    CONTACT
                </a>
            </nav>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
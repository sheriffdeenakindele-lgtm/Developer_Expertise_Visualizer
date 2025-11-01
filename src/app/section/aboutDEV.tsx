// Import React library for component functionality
import React from "react";
// Import shared layout wrapper component
import Wrapper from "../shared/wrapper";

// About section component explaining the Developer Expertise Visualizer project
export default function AboutDEV() {
    return (
        <Wrapper>
            {/* Main about section container with responsive padding and full screen height */}
            <div id="about" className="min-h-screen w-full p-4 sm:p-6">
                {/* Content wrapper with maximum width and centered alignment */}
                <div className="max-w-6xl mx-auto">
                    
                    {/* Main project title with responsive text sizing and padding */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center px-2">
                        WHAT IS DEVELOPER EXPERTISE VISUALIZER?
                    </h1>
                    
                    {/* Detailed project description with responsive text and spacing */}
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-4">
                        The Developer Expertise Visualizer is a lightweight web application that presents developer contribution data from software projects in a clear and interactive way. It aims to demonstrate how metadata such as commit frequency and contribution areas can reveal the expertise of individual developers within a project. <br /><br />
                        This prototype supports the concept of a <strong>Developer Expertise Recommendation System</strong> — a research area focused on using project metadata to identify which developers are best suited for specific tasks or maintenance activities. The goal is to make software management more efficient by helping teams recognize who has worked most frequently on each component of a project.
                    </p>

                    {/* Three-column grid layout for project details - responsive from single column on mobile to three columns on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        
                        {/* Technical Implementation card */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                            {/* Section title with responsive sizing */}
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                Technical Implementation
                            </h2>
                            {/* Technology stack list with bullet points */}
                            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                                {/* Next.js technology item with blue bullet point */}
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>Next.js (React Framework) for fast, server-rendered UI</span>
                                </li>
                                {/* TypeScript technology item */}
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>TypeScript for static type checking</span>
                                </li>
                                {/* Recharts technology item for data visualization */}
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>Recharts for data visualization</span>
                                </li>
                                {/* Tailwind CSS technology item for styling */}
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>Tailwind CSS for stylings</span>
                                </li>
                            </ul>
                        </div>

                        {/* Project Motivation card */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                            {/* Section title */}
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                Motivation
                            </h2>
                            {/* Academic and research context description */}
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                This project was developed as part of a research proposal for the MSc in Computer Science program at the University of Lethbridge, supervised by <strong>Prof. John Anvik</strong>. The intent is to explore how interactive visualization can support software maintenance research and act as a foundation for future AI-assisted expertise recommendation systems.
                            </p>
                        </div>

                        {/* Creator information card with gradient background */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg text-center">
                            {/* Section title */}
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                Created by
                            </h2>
                            {/* Developer biography and expertise areas */}
                            <p className="text-base sm:text-lg text-gray-700">
                                <strong>Sheriffdeen Akindele</strong>, a frontend developer passionate about intelligent UI design, software visualization, and research-driven web automation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

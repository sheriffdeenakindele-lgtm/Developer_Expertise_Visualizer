import React from "react";
import Wrapper from "../shared/wrapper";

export default function AboutDEV() {
    return (
        <Wrapper>
            <div id="about" className="min-h-screen w-full p-4 sm:p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center px-2">
                        WHAT IS DEVELOPER EXPERTISE VISUALIZER?
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-4">
                        The Developer Expertise Visualizer is a lightweight web application that presents developer contribution data from software projects in a clear and interactive way. It aims to demonstrate how metadata such as commit frequency and contribution areas can reveal the expertise of individual developers within a project. <br /><br />
                        This prototype supports the concept of a <strong>Developer Expertise Recommendation System</strong> — a research area focused on using project metadata to identify which developers are best suited for specific tasks or maintenance activities. The goal is to make software management more efficient by helping teams recognize who has worked most frequently on each component of a project.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                Technical Implementation
                            </h2>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>Next.js (React Framework) for fast, server-rendered UI</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>TypeScript for static type checking</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>Recharts for data visualization</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    <span>Tailwind CSS for stylings</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                Motivation
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                This project was developed as part of a research proposal for the MSc in Computer Science program at the University of Lethbridge, supervised by <strong>Prof. John Anvik</strong>. The intent is to explore how interactive visualization can support software maintenance research and act as a foundation for future AI-assisted expertise recommendation systems.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg text-center">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                Created by
                            </h2>
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

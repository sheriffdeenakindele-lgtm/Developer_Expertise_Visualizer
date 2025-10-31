"use client";
import React from "react";
import Wrapper from "../shared/wrapper";

export default function Contact() {
  return (
    <Wrapper>
      <div id="contact" className="min-h-screen w-full p-4 sm:p-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              ☏ CONTACT ME
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              💪 I welcome any challenge that comes my way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">what do you think about this❓</p>
                <a
                  href="mailto:sheriffdeenakindele@gmail.com?subject=Feedback&body=Hi%20Sheriffdeen,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-30 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium cursor-pointer select-none text-sm sm:text-base"
                  style={{ textDecoration: 'none', pointerEvents: 'auto' }}
                >
                  Send Email
                </a>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Take a look at my repo ⁉️ </p>
                <a
                  href="https://github.com/sheriffdeenakindele-lgtm/Developer_Expertise_Visualizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-30 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium cursor-pointer text-sm sm:text-base"
                  style={{ pointerEvents: 'auto' }}
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📞</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                <a 
                  href="tel:+2349016267739" 
                  className="relative z-30 text-blue-600 hover:text-blue-800 active:text-blue-900 font-medium transition-colors cursor-pointer text-sm sm:text-base"
                  style={{ pointerEvents: 'auto' }}
                >
                  (+234) 9016267739
                </a>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📍</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// Enable client-side rendering for interactive contact features
"use client";
import React from "react";
import Wrapper from "../shared/wrapper";

// Contact section component with email, GitHub, phone, and location information
export default function Contact() {
  return (
    <Wrapper>
      {/* Main contact container with responsive padding and full screen height */}
      <div id="contact" className="min-h-screen w-full p-4 sm:p-6 relative z-10">
        {/* Content wrapper with maximum width and centered alignment */}
        <div className="max-w-4xl mx-auto">
          
          {/* Header section with title and subtitle */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Main contact heading with phone emoji and responsive text sizing */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              ☏ CONTACT ME
            </h1>
            {/* Motivational subtitle with responsive padding and text size */}
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              💪 I welcome any challenge that comes my way
            </p>
          </div>

          {/* Primary contact cards grid - Email and GitHub */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Email contact card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                {/* Email emoji icon with responsive sizing */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
                {/* Email section title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Email</h3>
                {/* Call-to-action text */}
                <p className="text-sm sm:text-base text-gray-600 mb-4">what do you think about this❓</p>
                {/* Email link with pre-filled subject and greeting */}
                <a
                  href="mailto:sheriffdeenakindele@gmail.com?subject=Feedback&body=Hi%20Sheriffdeen,"
                  target="_blank"  // Open in new tab/window
                  rel="noopener noreferrer"  // Security best practice
                  className="relative z-30 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium cursor-pointer select-none text-sm sm:text-base"
                  style={{ textDecoration: 'none', pointerEvents: 'auto' }} // Ensure clickability
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* GitHub repository card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                {/* Globe emoji icon representing web/GitHub */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                {/* GitHub section title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
                {/* Invitation to view the repository */}
                <p className="text-sm sm:text-base text-gray-600 mb-4">Take a look at my repo ⁉️ </p>
                {/* Direct link to the GitHub repository */}
                <a
                  href="https://github.com/sheriffdeenakindele-lgtm/Developer_Expertise_Visualizer"
                  target="_blank"  // Open in new tab
                  rel="noopener noreferrer"  // Security best practice
                  className="relative z-30 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium cursor-pointer text-sm sm:text-base"
                  style={{ pointerEvents: 'auto' }}  // Ensure clickability above particles
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* Secondary contact information grid - Phone and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Phone contact card */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                {/* Phone emoji icon with smaller responsive sizing */}
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📞</div>
                {/* Phone section title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                {/* Clickable phone number that opens phone app on mobile */}
                <a 
                  href="tel:+2349016267739"  // Tel protocol for phone calls
                  className="relative z-30 text-blue-600 hover:text-blue-800 active:text-blue-900 font-medium transition-colors cursor-pointer text-sm sm:text-base"
                  style={{ pointerEvents: 'auto' }}  // Ensure clickability
                >
                  (+234) 9016267739
                </a>
              </div>
            </div>

            {/* Location information card */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-20">
              <div className="text-center">
                {/* Location pin emoji icon */}
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📍</div>
                {/* Location section title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Location</h3>
                {/* Geographic location information */}
                <p className="text-gray-600 font-medium text-sm sm:text-base">Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

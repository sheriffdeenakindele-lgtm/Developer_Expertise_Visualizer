// Enable client-side rendering for interactive chart components
"use client";

// Import React hooks for state management
import { useState, useEffect } from "react";
// Import chart components from Recharts library for data visualization
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Import shared layout wrapper component
import Wrapper from "../shared/wrapper";

// TypeScript interface defining the structure of developer data
interface DeveloperData {
  developer: string;    // Full name of the developer
  commits: number;      // Number of commits made by the developer
  areas: string[];      // Array of expertise areas for the developer
}

// TypeScript interface for component props
interface DeveloperChartProps {
  data: DeveloperData[]; // Array of developer data to display in the chart
}

// Main component function that renders the developer contribution chart
export default function DeveloperChart({ data }: DeveloperChartProps) {
  
  // State to track if we're on mobile screen
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Function to format long developer names for better display on mobile/small screens
  const formatDeveloperName = (name: string) => {
    const parts = name.split(' '); // Split name by spaces
    if (parts.length === 1) return name; // Return as-is if single word
    
    // For mobile screens, be more aggressive with name shortening
    if (isMobile && name.length > 8) {
      // Create initials for very long names on mobile
      return `${parts[0]} ${parts[parts.length - 1][0]}.`;
    }
    return name; // Return full name if short enough
  };

  // Function to check if we're on a mobile device (for more aggressive formatting if needed)
  const isMobileView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640; // Tailwind's 'sm' breakpoint
    }
    return false;
  };

  // Transform the original data to include formatted display names while preserving originals
  const chartData = data.map(item => ({
    ...item,                                        // Spread all original properties
    displayName: formatDeveloperName(item.developer), // Add shortened name for display
    developer: item.developer                       // Keep original name for tooltips
  }));

  // Custom tooltip component that appears when hovering over chart bars
  const CustomTooltip = ({ active, payload, label }: any) => {
    // Only show tooltip when actively hovering and data exists
    if (active && payload && payload.length) {
      const data = payload[0].payload; // Extract data from the hovered bar
      return (
        // Responsive tooltip container with proper styling for all screen sizes
        <div className="bg-white p-2 sm:p-3 md:p-4 border border-gray-200 rounded-lg shadow-xl max-w-xs">
          {/* Developer's full name with responsive text sizing */}
          <p className="font-bold text-gray-800 text-sm sm:text-base md:text-lg break-words">{`${data.developer}`}</p>
          {/* Commit count with blue accent color */}
          <p className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">{`Commits: ${data.commits}`}</p>
          {/* Expertise areas joined by commas with text wrapping */}
          <p className="text-gray-600 text-xs sm:text-sm break-words">{`Expertise: ${data.areas.join(', ')}`}</p>
        </div>
      );
    }
    return null; // Don't render anything if not actively hovering
  };

  return (
    <Wrapper>
    {/* Main dashboard container with responsive padding and full screen height */}
    <div id="dashboard" className="relative z-10 min-h-screen p-4 sm:p-6">
      {/* Title section with centered text and responsive margins */}
      <div className="text-center mb-8 sm:mb-12">
      {/* Main heading with responsive text sizes from mobile to desktop */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
        Developer Contribution Dashboard
      </h1>
      </div>
      
      {/* Chart container with glassmorphism effect and responsive padding */}
      <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg overflow-hidden">
      
      {/* Responsive container that adapts chart size to screen dimensions */}
      <ResponsiveContainer width="100%" height={isMobile ? 300 : 400} className="md:!h-[450px] lg:!h-[500px]">
        
        {/* Main bar chart component with responsive configuration */}
        <BarChart 
          data={chartData}  // Use transformed data with display names
          margin={{ 
            top: 20,     // Good top margin
            right: isMobile ? 15 : 30,   // Less margin on mobile
            left: isMobile ? 15 : 20,    // Less margin on mobile
            bottom: isMobile ? 80 : 60   // More space for rotated labels on mobile
          }}
          className="w-full" // Ensure chart fills container width
        >
          
          {/* X-axis configuration for developer names with responsive settings */}
          <XAxis 
            dataKey="displayName"  // Use formatted names for display
            stroke="#374151"       // Dark gray color for axis
            angle={isMobile ? -45 : 0}              // Rotate only on mobile
            textAnchor={isMobile ? "end" : "middle"}    // Different alignment for mobile/desktop
            height={isMobile ? 80 : 60}            // More space on mobile for rotated labels
            interval={0}           // Show all labels
            fontSize={isMobile ? 10 : 12}          // Smaller font on mobile
            fontWeight="500"       // Medium font weight
            tick={{ 
              fill: '#374151',     
              fontSize: isMobile ? 10 : 12,        
              textAnchor: isMobile ? 'end' : 'middle',
              fontWeight: '500'    
            }}
            axisLine={false}       
            tickLine={false}       
          />
          
          {/* Y-axis configuration for commit counts */}
          <YAxis 
            stroke="#374151"       
            fontSize={12}          
            tick={{ 
              fill: '#374151',     
              fontSize: 12,        
              fontWeight: '500'    
            }}
            axisLine={false}       
            tickLine={false}       
            width={40}             
          />
          
          {/* Interactive tooltip that shows detailed info on hover */}
          <Tooltip content={<CustomTooltip />} />
          
          {/* Bar chart elements representing commit data */}
          <Bar 
            dataKey="commits"      
            fill="#2563eb"         
            radius={[4, 4, 0, 0]}  
            stroke="#1d4ed8"       
            strokeWidth={1}        
          />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    </Wrapper>
  );
}

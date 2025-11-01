// Enable client-side rendering for interactive chart components
"use client";

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
  
  // Function to format long developer names for better display on mobile/small screens
  const formatDeveloperName = (name: string) => {
    const parts = name.split(' '); // Split name by spaces
    if (parts.length === 1) return name; // Return as-is if single word
    
    // For names longer than 10 characters, abbreviate to "FirstName L."
    if (name.length > 10) {
      return `${parts[0]} ${parts[parts.length - 1][0]}.`;
    }
    return name; // Return full name if short enough
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
      <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-4 lg:p-6 xl:p-8 rounded-2xl shadow-lg overflow-hidden">
      
      {/* Responsive container that adapts chart size to screen dimensions */}
      <ResponsiveContainer width="100%" height={250} className="sm:!h-80 md:!h-96 lg:!h-[400px]">
        
        {/* Main bar chart component with responsive configuration */}
        <BarChart 
          data={chartData}  // Use transformed data with display names
          margin={{ 
            top: 10,    // Minimal top margin for mobile
            right: 5,   // Tight right margin to maximize chart width
            left: 5,    // Tight left margin to maximize chart width
            bottom: 60  // Extra bottom margin for rotated labels
          }}
          className="w-full" // Ensure chart fills container width
        >
          
          {/* X-axis configuration for developer names */}
          <XAxis 
            dataKey="displayName"  // Use formatted names for display
            stroke="#374151"       // Dark gray color for axis
            angle={-45}            // Rotate labels 45 degrees for mobile readability
            textAnchor="end"       // Align rotated text to end for better positioning
            height={60}            // Reserve space for rotated labels
            interval={0}           // Show all labels (don't skip any)
            fontSize={8}           // Small font size for mobile
            fontWeight="400"       // Normal font weight
            tick={{ 
              fill: '#374151',     // Text color matching axis
              fontSize: 8,         // Consistent small font size
              textAnchor: 'end'    // Text alignment for rotated labels
            }}
            className="sm:!text-xs md:!text-sm" // Responsive font sizing
            axisLine={false}       // Remove axis line for cleaner look
            tickLine={false}       // Remove tick marks for cleaner look
          />
          
          {/* Y-axis configuration for commit counts */}
          <YAxis 
            stroke="#374151"       // Consistent color with X-axis
            fontSize={8}           // Small font for mobile
            tick={{ 
              fill: '#374151',     // Text color matching axis
              fontSize: 8          // Consistent small font size
            }}
            className="sm:!text-xs md:!text-sm" // Responsive font sizing
            axisLine={false}       // Remove axis line for cleaner look
            tickLine={false}       // Remove tick marks for cleaner look
            width={30}             // Narrow width to maximize chart area
          />
          
          {/* Interactive tooltip that shows detailed info on hover */}
          <Tooltip content={<CustomTooltip />} />
          
          {/* Bar chart elements representing commit data */}
          <Bar 
            dataKey="commits"      // Data field to visualize (commit counts)
            fill="#2563eb"         // Blue fill color for bars
            radius={[4, 4, 0, 0]}  // Rounded top corners for modern look
            stroke="#1d4ed8"       // Slightly darker blue border
            strokeWidth={1}        // Thin border width
          />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    </Wrapper>
  );
}

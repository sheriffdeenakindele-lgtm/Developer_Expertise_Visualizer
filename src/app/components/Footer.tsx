import React from "react";
import Wrapper from "../shared/wrapper";

// Footer component displaying copyright information
const Footer = () => {
  return (
    <Wrapper>
      <footer className="py-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Developer Expertise Visualizer. All rights reserved.
        </p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
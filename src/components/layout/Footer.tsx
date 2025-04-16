import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Footer Text */}
        <p className="text-white font-semibold text-sm">
          © {new Date().getFullYear()} RESTWeb Dev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

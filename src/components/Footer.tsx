import React from 'react';
import { Calculator, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">Calculator Pro</span>
            </div>
            <p className="text-orange-200 text-sm leading-relaxed">
              A professional calculator application with advanced mathematical functions, 
              history tracking, and scientific capabilities. Perfect for students, 
              professionals, and anyone who needs reliable calculations.
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Features</h3>
            <ul className="space-y-2 text-sm text-orange-200">
              <li> Basic arithmetic operations</li>
              <li> Scientific functions (sin, cos, tan, log)</li>
              <li> Memory operations (MC, MR, M+, M-)</li>
              <li> Calculation history tracking</li>
              <li> Responsive design for all devices</li>
              <li> Keyboard support</li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">About</h3>
            <div className="space-y-3 text-sm text-orange-200">
              <p>
                Built with modern web technologies including React, TypeScript, 
                and Tailwind CSS for optimal performance and user experience.
              </p>
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-orange-400" />
                <span>for mathematical precision</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-orange-300 mb-4 md:mb-0">
               2024 Calculator Pro. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-orange-300">
              <span>Precision  Reliability  Performance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
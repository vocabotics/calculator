import React from 'react';
import { Calculator } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-yellow-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-600 p-2 rounded-lg">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Calculator Pro</h1>
              <p className="text-sm text-yellow-600">Professional Calculator App</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-yellow-600">Advanced Mathematical</p>
              <p className="text-xs text-yellow-500">Calculations Made Simple</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
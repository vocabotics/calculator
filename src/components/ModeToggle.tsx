import React from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, FlaskConical } from 'lucide-react';
import useCalculatorStore from '@/stores/calculatorStore';

const ModeToggle: React.FC = () => {
  const { mode, setMode } = useCalculatorStore();

  return (
    <div className="flex bg-pink-100 rounded-lg p-1 mb-4">
      <Button
        onClick={() => setMode('basic')}
        variant={mode === 'basic' ? 'default' : 'ghost'}
        className={`flex-1 flex items-center gap-2 ${
          mode === 'basic' 
            ? 'bg-white shadow-sm text-pink-900' 
            : 'hover:bg-pink-200 text-pink-700'
        }`}
      >
        <Calculator className="h-4 w-4" />
        Basic
      </Button>
      <Button
        onClick={() => setMode('scientific')}
        variant={mode === 'scientific' ? 'default' : 'ghost'}
        className={`flex-1 flex items-center gap-2 ${
          mode === 'scientific' 
            ? 'bg-white shadow-sm text-pink-900' 
            : 'hover:bg-pink-200 text-pink-700'
        }`}
      >
        <FlaskConical className="h-4 w-4" />
        Scientific
      </Button>
    </div>
  );
};

export default ModeToggle;
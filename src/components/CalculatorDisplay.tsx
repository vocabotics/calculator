import React from 'react';
import { Card } from '@/components/ui/card';
import useCalculatorStore from '@/stores/calculatorStore';

const CalculatorDisplay: React.FC = () => {
  const { display, previousValue, operation, isError } = useCalculatorStore();

  return (
    <Card className="p-4 mb-4 bg-orange-900 text-white">
      <div className="text-right">
        {previousValue && operation && (
          <div className="text-sm text-orange-300 mb-1">
            {previousValue} {operation}
          </div>
        )}
        <div 
          className={`text-3xl font-mono break-all ${
            isError ? 'text-orange-300' : 'text-white'
          }`}
        >
          {display}
        </div>
      </div>
    </Card>
  );
};

export default CalculatorDisplay;
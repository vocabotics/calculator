import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Clock } from 'lucide-react';
import useCalculatorStore from '@/stores/calculatorStore';
import { format } from 'date-fns';

interface CalculatorHistoryProps {
  onSelectCalculation?: (result: string) => void;
}

const CalculatorHistory: React.FC<CalculatorHistoryProps> = ({ onSelectCalculation }) => {
  const { history, clearHistory } = useCalculatorStore();

  const handleSelectCalculation = (result: string) => {
    if (onSelectCalculation) {
      onSelectCalculation(result);
    }
  };

  if (history.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-yellow-600" />
            Calculation History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500 py-8">
            <Clock className="h-12 w-12 mx-auto mb-3 opacity-30 text-yellow-300" />
            <p>No calculations yet</p>
            <p className="text-sm">Your calculation history will appear here</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-yellow-600" />
            History ({history.length})
          </CardTitle>
          <Button
            onClick={clearHistory}
            variant="outline"
            size="sm"
            className="text-yellow-600 hover:text-yellow-700 border-yellow-300 hover:border-yellow-400"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Clear
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-2">
            {history.map((entry) => (
              <div
                key={entry.id}
                className="p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 cursor-pointer transition-colors"
                onClick={() => handleSelectCalculation(entry.result)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-sm text-yellow-600 mb-1">
                      {entry.expression}
                    </div>
                    <div className="font-mono text-lg font-semibold text-yellow-900">
                      = {entry.result}
                    </div>
                  </div>
                  <div className="text-xs text-yellow-400 ml-2">
                    {format(entry.timestamp, 'HH:mm')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CalculatorHistory;
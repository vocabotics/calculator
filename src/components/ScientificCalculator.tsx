import React from 'react';
import CalculatorButton from '@/components/CalculatorButton';
import useCalculatorStore from '@/stores/calculatorStore';

const ScientificCalculator: React.FC = () => {
  const {
    inputDigit,
    inputDecimal,
    clear,
    clearAll,
    performOperation,
    calculate,
    toggleSign,
    percentage,
    scientificFunction,
    memoryClear,
    memoryAdd,
    memorySubtract,
    memoryRecall,
    memory
  } = useCalculatorStore();

  return (
    <div className="space-y-3">
      {/* Memory and Constants Row */}
      <div className="grid grid-cols-6 gap-2">
        <CalculatorButton 
          onClick={memoryClear} 
          variant="function"
          className="text-sm"
        >
          MC
        </CalculatorButton>
        <CalculatorButton 
          onClick={memoryRecall} 
          variant="function"
          className={`text-sm ${memory !== 0 ? 'bg-yellow-600 hover:bg-yellow-700' : ''}`}
        >
          MR
        </CalculatorButton>
        <CalculatorButton 
          onClick={memoryAdd} 
          variant="function"
          className="text-sm"
        >
          M+
        </CalculatorButton>
        <CalculatorButton 
          onClick={memorySubtract} 
          variant="function"
          className="text-sm"
        >
          M−
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('pi')} 
          variant="function"
          className="text-sm"
        >
          π
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('e')} 
          variant="function"
          className="text-sm"
        >
          e
        </CalculatorButton>
      </div>

      {/* Scientific Functions Row 1 */}
      <div className="grid grid-cols-6 gap-2">
        <CalculatorButton 
          onClick={() => scientificFunction('sin')} 
          variant="function"
          className="text-sm"
        >
          sin
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('cos')} 
          variant="function"
          className="text-sm"
        >
          cos
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('tan')} 
          variant="function"
          className="text-sm"
        >
          tan
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('log')} 
          variant="function"
          className="text-sm"
        >
          log
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('ln')} 
          variant="function"
          className="text-sm"
        >
          ln
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('factorial')} 
          variant="function"
          className="text-sm"
        >
          x!
        </CalculatorButton>
      </div>

      {/* Scientific Functions Row 2 */}
      <div className="grid grid-cols-6 gap-2">
        <CalculatorButton 
          onClick={() => scientificFunction('sqrt')} 
          variant="function"
          className="text-sm"
        >
          √x
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => scientificFunction('square')} 
          variant="function"
          className="text-sm"
        >
          x²
        </CalculatorButton>
        <CalculatorButton onClick={clearAll} variant="clear" className="text-sm">
          AC
        </CalculatorButton>
        <CalculatorButton onClick={clear} variant="clear" className="text-sm">
          C
        </CalculatorButton>
        <CalculatorButton onClick={percentage} variant="function" className="text-sm">
          %
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('÷')} 
          variant="operator"
          className="text-sm"
        >
          ÷
        </CalculatorButton>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <CalculatorButton onClick={() => inputDigit('7')}>
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => inputDigit('8')}>
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => inputDigit('9')}>
          9
        </CalculatorButton>
        <CalculatorButton onClick={() => performOperation('×')} variant="operator">
          ×
        </CalculatorButton>

        {/* Row 2 */}
        <CalculatorButton onClick={() => inputDigit('4')}>
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => inputDigit('5')}>
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => inputDigit('6')}>
          6
        </CalculatorButton>
        <CalculatorButton onClick={() => performOperation('-')} variant="operator">
          −
        </CalculatorButton>

        {/* Row 3 */}
        <CalculatorButton onClick={() => inputDigit('1')}>
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => inputDigit('2')}>
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => inputDigit('3')}>
          3
        </CalculatorButton>
        <CalculatorButton onClick={() => performOperation('+')} variant="operator">
          +
        </CalculatorButton>

        {/* Row 4 */}
        <CalculatorButton onClick={toggleSign} variant="function">
          ±
        </CalculatorButton>
        <CalculatorButton onClick={() => inputDigit('0')}>
          0
        </CalculatorButton>
        <CalculatorButton onClick={inputDecimal}>
          .
        </CalculatorButton>
        <CalculatorButton onClick={calculate} variant="equals">
          =
        </CalculatorButton>
      </div>
    </div>
  );
};

export default ScientificCalculator;
import React from 'react';
import CalculatorButton from '@/components/CalculatorButton';
import useCalculatorStore from '@/stores/calculatorStore';

const BasicCalculator: React.FC = () => {
  const {
    inputDigit,
    inputDecimal,
    clear,
    clearAll,
    performOperation,
    calculate,
    toggleSign,
    percentage
  } = useCalculatorStore();

  return (
    <div className="grid grid-cols-4 gap-3">
      {/* Row 1 */}
      <CalculatorButton onClick={clearAll} variant="clear">
        AC
      </CalculatorButton>
      <CalculatorButton onClick={clear} variant="clear">
        C
      </CalculatorButton>
      <CalculatorButton onClick={percentage} variant="function">
        %
      </CalculatorButton>
      <CalculatorButton onClick={() => performOperation('÷')} variant="operator">
        ÷
      </CalculatorButton>

      {/* Row 2 */}
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

      {/* Row 3 */}
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

      {/* Row 4 */}
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

      {/* Row 5 */}
      <CalculatorButton onClick={() => inputDigit('0')} className="col-span-2">
        0
      </CalculatorButton>
      <CalculatorButton onClick={inputDecimal}>
        .
      </CalculatorButton>
      <CalculatorButton onClick={calculate} variant="equals">
        =
      </CalculatorButton>
    </div>
  );
};

export default BasicCalculator;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CalculatorDisplay from '@/components/CalculatorDisplay';
import BasicCalculator from '@/components/BasicCalculator';
import ScientificCalculator from '@/components/ScientificCalculator';
import CalculatorHistory from '@/components/CalculatorHistory';
import ModeToggle from '@/components/ModeToggle';
import useCalculatorStore from '@/stores/calculatorStore';

const HomePage: React.FC = () => {
  const { mode, inputDigit } = useCalculatorStore();

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;
      const store = useCalculatorStore.getState();

      // Prevent default behavior for calculator keys
      if (/[0-9+\-*/=.%]/.test(key) || ['Enter', 'Escape', 'Backspace'].includes(key)) {
        event.preventDefault();
      }

      if (/[0-9]/.test(key)) {
        store.inputDigit(key);
      } else if (key === '.') {
        store.inputDecimal();
      } else if (key === '+') {
        store.performOperation('+');
      } else if (key === '-') {
        store.performOperation('-');
      } else if (key === '*') {
        store.performOperation('×');
      } else if (key === '/') {
        store.performOperation('÷');
      } else if (key === '=' || key === 'Enter') {
        store.calculate();
      } else if (key === '%') {
        store.percentage();
      } else if (key === 'Escape') {
        store.clearAll();
      } else if (key === 'Backspace') {
        store.clear();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleHistorySelect = (result: string) => {
    const store = useCalculatorStore.getState();
    store.inputDigit(result.replace(store.display, ''));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-700 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Calculator
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Advanced mathematical calculations with scientific functions
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                <span>Basic & Scientific Modes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                <span>Memory Functions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                <span>History Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                <span>Keyboard Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-xl p-6">
              <ModeToggle />
              <CalculatorDisplay />
              {mode === 'basic' ? <BasicCalculator /> : <ScientificCalculator />}
              
              {/* Keyboard Shortcuts Info */}
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Keyboard Shortcuts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-orange-700">
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">0-9</kbd> Numbers</div>
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">+</kbd> Addition</div>
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">-</kbd> Subtraction</div>
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">*</kbd> Multiplication</div>
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">/</kbd> Division</div>
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">.</kbd> Decimal</div>
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">Enter</kbd> Equals</div>
                  <div><kbd className="bg-white px-1 rounded border border-orange-200">Esc</kbd> Clear All</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* History Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <CalculatorHistory onSelectCalculation={handleHistorySelect} />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl text-orange-600">➕</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Basic Operations</h3>
            <p className="text-gray-600 text-sm">
              Perform fundamental arithmetic operations with precision and ease.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl text-orange-600">🔬</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Scientific Functions</h3>
            <p className="text-gray-600 text-sm">
              Access trigonometric, logarithmic, and advanced mathematical functions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl text-orange-600">💾</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Memory Functions</h3>
            <p className="text-gray-600 text-sm">
              Store and recall values using memory operations for complex calculations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl text-orange-600">📝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">History Tracking</h3>
            <p className="text-gray-600 text-sm">
              Keep track of your calculations with automatic history logging.
            </p>
          </div>
        </motion.div>

        {/* Mathematical Constants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Mathematical Constants & Functions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-mono font-bold text-orange-600 mb-2">π</div>
              <div className="text-sm text-orange-700">Pi (3.14159...)</div>
              <div className="text-xs text-orange-500">Ratio of circumference to diameter</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-mono font-bold text-orange-600 mb-2">e</div>
              <div className="text-sm text-orange-700">Euler's Number (2.71828...)</div>
              <div className="text-xs text-orange-500">Base of natural logarithm</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-mono font-bold text-orange-600 mb-2">√</div>
              <div className="text-sm text-orange-700">Square Root</div>
              <div className="text-xs text-orange-500">Find the principal square root</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
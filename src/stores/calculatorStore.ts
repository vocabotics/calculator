import { create } from 'zustand';

export interface CalculationHistory {
  id: string;
  expression: string;
  result: string;
  timestamp: Date;
}

interface CalculatorState {
  display: string;
  previousValue: string;
  operation: string | null;
  waitingForOperand: boolean;
  memory: number;
  history: CalculationHistory[];
  mode: 'basic' | 'scientific';
  isError: boolean;
  
  // Actions
  inputDigit: (digit: string) => void;
  inputDecimal: () => void;
  clear: () => void;
  clearAll: () => void;
  performOperation: (nextOperation: string) => void;
  calculate: () => void;
  toggleSign: () => void;
  percentage: () => void;
  setMode: (mode: 'basic' | 'scientific') => void;
  memoryClear: () => void;
  memoryAdd: () => void;
  memorySubtract: () => void;
  memoryRecall: () => void;
  scientificFunction: (func: string) => void;
  addToHistory: (expression: string, result: string) => void;
  clearHistory: () => void;
}

const useCalculatorStore = create<CalculatorState>((set, get) => ({
  display: '0',
  previousValue: '',
  operation: null,
  waitingForOperand: false,
  memory: 0,
  history: [],
  mode: 'basic',
  isError: false,

  inputDigit: (digit: string) => {
    const state = get();
    
    if (state.isError) {
      set({
        display: digit,
        isError: false,
        waitingForOperand: false
      });
      return;
    }

    if (state.waitingForOperand) {
      set({
        display: digit,
        waitingForOperand: false
      });
    } else {
      set({
        display: state.display === '0' ? digit : state.display + digit
      });
    }
  },

  inputDecimal: () => {
    const state = get();
    
    if (state.isError) {
      set({
        display: '0.',
        isError: false,
        waitingForOperand: false
      });
      return;
    }

    if (state.waitingForOperand) {
      set({
        display: '0.',
        waitingForOperand: false
      });
    } else if (state.display.indexOf('.') === -1) {
      set({
        display: state.display + '.'
      });
    }
  },

  clear: () => {
    set({
      display: '0',
      isError: false
    });
  },

  clearAll: () => {
    set({
      display: '0',
      previousValue: '',
      operation: null,
      waitingForOperand: false,
      isError: false
    });
  },

  performOperation: (nextOperation: string) => {
    const state = get();
    const inputValue = parseFloat(state.display);

    if (state.previousValue === '') {
      set({
        previousValue: state.display,
        operation: nextOperation,
        waitingForOperand: true
      });
    } else if (state.operation && !state.waitingForOperand) {
      const currentValue = parseFloat(state.previousValue);
      let result: number;

      switch (state.operation) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '×':
          result = currentValue * inputValue;
          break;
        case '÷':
          result = inputValue !== 0 ? currentValue / inputValue : NaN;
          break;
        default:
          return;
      }

      const expression = `${state.previousValue} ${state.operation} ${state.display}`;
      const resultString = isNaN(result) || !isFinite(result) ? 'Error' : result.toString();
      
      if (resultString !== 'Error') {
        get().addToHistory(expression, resultString);
      }

      set({
        display: resultString,
        previousValue: resultString,
        operation: nextOperation,
        waitingForOperand: true,
        isError: resultString === 'Error'
      });
    } else {
      set({
        operation: nextOperation,
        waitingForOperand: true
      });
    }
  },

  calculate: () => {
    const state = get();
    const inputValue = parseFloat(state.display);

    if (state.previousValue !== '' && state.operation) {
      const currentValue = parseFloat(state.previousValue);
      let result: number;

      switch (state.operation) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '×':
          result = currentValue * inputValue;
          break;
        case '÷':
          result = inputValue !== 0 ? currentValue / inputValue : NaN;
          break;
        default:
          return;
      }

      const expression = `${state.previousValue} ${state.operation} ${state.display}`;
      const resultString = isNaN(result) || !isFinite(result) ? 'Error' : result.toString();
      
      if (resultString !== 'Error') {
        get().addToHistory(expression, resultString);
      }

      set({
        display: resultString,
        previousValue: '',
        operation: null,
        waitingForOperand: true,
        isError: resultString === 'Error'
      });
    }
  },

  toggleSign: () => {
    const state = get();
    if (state.display !== '0' && !state.isError) {
      set({
        display: state.display.charAt(0) === '-' 
          ? state.display.slice(1) 
          : '-' + state.display
      });
    }
  },

  percentage: () => {
    const state = get();
    if (!state.isError) {
      const value = parseFloat(state.display) / 100;
      set({
        display: value.toString(),
        waitingForOperand: true
      });
    }
  },

  setMode: (mode: 'basic' | 'scientific') => {
    set({ mode });
  },

  memoryClear: () => {
    set({ memory: 0 });
  },

  memoryAdd: () => {
    const state = get();
    if (!state.isError) {
      set({ memory: state.memory + parseFloat(state.display) });
    }
  },

  memorySubtract: () => {
    const state = get();
    if (!state.isError) {
      set({ memory: state.memory - parseFloat(state.display) });
    }
  },

  memoryRecall: () => {
    const state = get();
    set({
      display: state.memory.toString(),
      waitingForOperand: true
    });
  },

  scientificFunction: (func: string) => {
    const state = get();
    if (state.isError) return;
    
    const value = parseFloat(state.display);
    let result: number;

    switch (func) {
      case 'sin':
        result = Math.sin(value * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(value * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(value * Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'ln':
        result = Math.log(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'square':
        result = value * value;
        break;
      case 'factorial':
        result = value >= 0 && value <= 170 && Number.isInteger(value) 
          ? factorial(value) 
          : NaN;
        break;
      case 'pi':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      default:
        return;
    }

    const expression = `${func}(${state.display})`;
    const resultString = isNaN(result) || !isFinite(result) ? 'Error' : result.toString();
    
    if (resultString !== 'Error') {
      get().addToHistory(expression, resultString);
    }

    set({
      display: resultString,
      waitingForOperand: true,
      isError: resultString === 'Error'
    });
  },

  addToHistory: (expression: string, result: string) => {
    const state = get();
    const newEntry: CalculationHistory = {
      id: Date.now().toString(),
      expression,
      result,
      timestamp: new Date()
    };
    
    set({
      history: [newEntry, ...state.history.slice(0, 49)] // Keep only last 50 entries
    });
  },

  clearHistory: () => {
    set({ history: [] });
  }
}));

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default useCalculatorStore;
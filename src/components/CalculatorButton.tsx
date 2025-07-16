import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CalculatorButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'operator' | 'function' | 'equals' | 'clear';
  className?: string;
  disabled?: boolean;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  className,
  disabled = false
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'operator':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'function':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'equals':
        return 'bg-green-700 hover:bg-green-800 text-white';
      case 'clear':
        return 'bg-green-400 hover:bg-green-500 text-white';
      default:
        return 'bg-green-100 hover:bg-green-200 text-green-900';
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'h-12 text-lg font-semibold transition-all duration-150 active:scale-95',
        getVariantStyles(),
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CalculatorButton;
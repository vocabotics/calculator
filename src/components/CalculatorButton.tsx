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
        return 'bg-yellow-600 hover:bg-yellow-700 text-white';
      case 'function':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'equals':
        return 'bg-yellow-700 hover:bg-yellow-800 text-white';
      case 'clear':
        return 'bg-yellow-400 hover:bg-yellow-500 text-white';
      default:
        return 'bg-yellow-100 hover:bg-yellow-200 text-yellow-900';
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
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
        return 'bg-pink-600 hover:bg-pink-700 text-white';
      case 'function':
        return 'bg-pink-500 hover:bg-pink-600 text-white';
      case 'equals':
        return 'bg-pink-700 hover:bg-pink-800 text-white';
      case 'clear':
        return 'bg-pink-400 hover:bg-pink-500 text-white';
      default:
        return 'bg-pink-100 hover:bg-pink-200 text-pink-900';
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
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
        return 'bg-orange-600 hover:bg-orange-700 text-white';
      case 'function':
        return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'equals':
        return 'bg-orange-700 hover:bg-orange-800 text-white';
      case 'clear':
        return 'bg-orange-400 hover:bg-orange-500 text-white';
      default:
        return 'bg-orange-100 hover:bg-orange-200 text-orange-900';
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
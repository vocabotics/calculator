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
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'function':
        return 'bg-gray-600 hover:bg-gray-700 text-white';
      case 'equals':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'clear':
        return 'bg-red-600 hover:bg-red-700 text-white';
      default:
        return 'bg-gray-200 hover:bg-gray-300 text-gray-900';
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
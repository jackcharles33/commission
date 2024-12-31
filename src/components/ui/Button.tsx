import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  icon: Icon,
  variant = 'primary',
  className = '',
  disabled,
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2";
  const variants = {
    primary: "bg-[#e561a0] hover:bg-[#e561a0]/90 text-white",
    secondary: "bg-[#281c34] hover:bg-[#281c34]/90 text-[#e561a0]"
  };
  const disabledStyles = "opacity-50 cursor-not-allowed hover:bg-[#e561a0]";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};
import React, { useState } from "react";
import Icon, { IconName } from "./Icon";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "destructive" | "success" | "warning";
  trailingIcon?: IconName;
  animationClass?: string;
  animationDuration?: string;
}

const Button = ({
  children,
  className,
  trailingIcon,
  disabled,
  onClick,
  variant = "destructive",
  animationClass,
  animationDuration,
  ...props
}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const baseStyles =
    "px-9 py-3 rounded-sm text-white inline-flex items-center justify-center gap-3 cursor-pointer text-lg transition-all disabled:cursor-not-allowed";

  const variants = {
    destructive:
      "bg-destructive hover:bg-destructive/80 disabled:bg-destructive/80",
    success: "bg-success hover:bg-success/80 disabled:bg-success/80",
    warning: "bg-warning hover:bg-warning/80 disabled:bg-warning/80",
  };

  const animationIconClass = `transition-transform ${animationDuration} ${
    isRefreshing ? animationClass : ""
  }`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <button
      className={`${baseStyles} ${className} ${variants[variant]}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
      {trailingIcon && (
        <Icon name={trailingIcon} className={animationIconClass} />
      )}
    </button>
  );
};

export default Button;

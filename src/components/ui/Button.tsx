import Icon, { IconName } from "./Icon";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "destructive" | "success" | "warning";
  trailingIcon?: IconName;
}

const Button = ({
  children,
  className,
  trailingIcon,
  variant = "destructive",
}: Props) => {
  const baseStyles =
    "px-9 py-4 rounded-sm text-white inline-flex items-center justify-center gap-3 cursor-pointer text-lg";

  const variants = {
    destructive: "bg-destructive hover:bg-destructive/80",
    success: "bg-success hover:bg-success/80",
    warning: "bg-warning hover:bg-warning/80",
  };

  return (
    <button className={`${baseStyles} ${className} ${variants[variant]}`}>
      {children}
      {trailingIcon && <Icon name={trailingIcon} />}
    </button>
  );
};

export default Button;

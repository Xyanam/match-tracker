import Icon, { IconName } from "./Icon";

interface Props {
  text: string;
  type: "success" | "warning" | "error";
}

const Alert = ({ text, type }: Props) => {
  const iconName: Record<string, IconName> = {
    success: "alert",
    warning: "alert",
    error: "alert",
  };

  return (
    <div className="flex items-center justify-center gap-3 bg-muted px-6 rounded-sm">
      <Icon name={iconName[type]} />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Alert;

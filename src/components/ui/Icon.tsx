import alert from "../../assets/icons/alert.svg";
import refresh from "../../assets/icons/refresh.svg";
import { ImgHTMLAttributes } from "react";

const icons = {
  alert,
  refresh,
};

export type IconName = keyof typeof icons;

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  name: IconName;
  className?: string;
}

const Icon: React.FC<Props> = ({ name, className, ...props }) => {
  const src = icons[name];

  if (!src) return null;

  return <img src={src} className={className} {...props} />;
};

export default Icon;

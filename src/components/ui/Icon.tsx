import { ImgHTMLAttributes } from "react";

import alert from "@/assets/icons/alert.svg";
import refresh from "@/assets/icons/refresh.svg";
import crown from "@/assets/icons/crown.svg";
import chevron from "@/assets/icons/chevron-down.svg";

const icons = {
  alert,
  refresh,
  crown,
  chevron,
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

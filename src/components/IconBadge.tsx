import { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "gold" | "muted";
  className?: string;
};

const sizeMap = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

const variantMap = {
  primary: "bg-gradient-primary text-primary-foreground",
  gold: "bg-gradient-accent text-academic-navy",
  muted: "bg-academic-blue-light text-academic-navy",
};

const IconBadge = ({ children, size = "md", variant = "muted", className = "" }: IconBadgeProps) => {
  return (
    <div className={`${sizeMap[size]} ${variantMap[variant]} rounded-2xl flex items-center justify-center shadow-card ${className}`}>
      {children}
    </div>
  );
};

export default IconBadge;



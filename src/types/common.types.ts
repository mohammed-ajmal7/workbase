import { icons, LucideIcon } from "lucide-react";

export interface LucidIconProps {
  name: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  absoluteStrokeWidth?: boolean;
}

export interface DashboardItem {
  title: string;
  value: number;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

import { icons } from "lucide-react";

export interface LucideIconProps {
  name: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  absoluteStrokeWidth?: boolean;
}

export interface DashboardItemProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: keyof typeof icons;
  iconBg: string;
  iconColor: string;
}

export type SidebarElements = {
  name: string;
  icon: keyof typeof icons;
  pathName: string;
};

export type DataPoint = {
  month: string;
  total: number;
  completed: number;
};

export interface recentActivitiesDataProps {
  id: number;
  name: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

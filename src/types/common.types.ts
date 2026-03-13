import { icons } from "lucide-react";

export interface LucidIconProps {
  name: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  absoluteStrokeWidth?: boolean;
}

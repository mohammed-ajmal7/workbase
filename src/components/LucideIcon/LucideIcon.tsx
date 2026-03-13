import { icons } from "lucide-react";
import React from "react";
import { LucidIconProps } from "@/types/common.types";
import "@/styles/variables.scss";
export default function LucideIcon({
  name,
  className,
  color = "var(--color-icon)",
  strokeWidth = 1.5,
  size = 20,
  absoluteStrokeWidth = false,
}: LucidIconProps) {
  const LucideIcon = icons[name];
  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      absoluteStrokeWidth={absoluteStrokeWidth}
    />
  );
}

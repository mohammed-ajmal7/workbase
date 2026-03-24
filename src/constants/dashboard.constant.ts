import { DashboardItemProps } from "@/types/common.types";

export const DASHBOARD_CARD_DATA: DashboardItemProps[] = [
  {
    title: "Total Projects",
    value: 12,
    subtitle: "+2 this month",
    icon: "FolderKanban",
    iconBg: "bg-blue-100",
    iconColor: "#2563eb",
  },
  {
    title: "Active Projects",
    value: 5,
    subtitle: "3 on track",
    icon: "Activity",
    iconBg: "bg-green-100",
    iconColor: "#16a34a",
  },
  {
    title: "Team Members",
    value: 6,
    subtitle: "+1 this month",
    icon: "Users",
    iconBg: "bg-purple-100",
    iconColor: "#9333ea",
  },
  {
    title: "Completed",
    value: 7,
    subtitle: "58% completion",
    icon: "CircleCheck",
    iconBg: "bg-yellow-100",
    iconColor: "#ca8a04",
  },
];

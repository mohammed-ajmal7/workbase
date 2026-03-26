import {
  DashboardItemProps,
  recentActivitiesDataProps,
} from "@/types/common.types";

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

export const recentActivitiesData: recentActivitiesDataProps[] = [
  {
    id: 1,
    name: "Sarah Chen",
    action: "created a new project",
    target: "Customer Portal",
    time: "2 hours ago",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "James Wilson",
    action: "pushed 3 commits to",
    target: "API Gateway",
    time: "4 hours ago",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Maria Garcia",
    action: "updated the design for",
    target: "Design System",
    time: "6 hours ago",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "David Park",
    action: "completed a milestone in",
    target: "Mobile App v2",
    time: "8 hours ago",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Emma Roberts",
    action: "added a comment on",
    target: "Marketing Website",
    time: "12 hours ago",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    name: "Kevin Nakamura",
    action: "deployed",
    target: "Auth Service",
    time: "1 day ago",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
];

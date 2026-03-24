import DashboardTabs from "@/components/DashboardCards/DashboardTabs";
 import {
  Folder,
  Activity,
  Users,
  CheckCircle
} from "lucide-react";

export const dashboardData= [
  {
    title: "Total Projects",
    value: 12,
    subtitle: "+2 this month",
    icon: Folder,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Active Projects",
    value: 5,
    subtitle: "3 on track",
    icon: Activity,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Team Members",
    value: 6,
    subtitle: "+1 this month",
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Completed",
    value: 7,
    subtitle: "58% completion",
    icon: CheckCircle,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  }
];

export default function page() {
  return <div>
    <DashboardTabs Arrdata={dashboardData} />
  </div>;
}

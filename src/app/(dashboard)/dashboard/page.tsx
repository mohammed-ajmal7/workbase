import DashboardCard from "@/components/DashboardCard/DashboardCard";
import ProjectAnalytics from "@/components/ProjectAnalytics/ProjectAnalytics";
import { DASHBOARD_CARD_DATA } from "@/constants/dashboard.constant";

export default function page() {
  return (
    <div className="flex flex-col gap-7">
      <DashboardCard Arrdata={DASHBOARD_CARD_DATA} />
      <div className=" bg-white border-gray-200 border rounded-md p-5">
        <h3 className="text-black text-s font-bold">Project Analytics</h3>
        <p className="text-zinc-400 text-xs">
          Project activity over the last 8 months
        </p>
        <ProjectAnalytics />
      </div>
    </div>
  );
}

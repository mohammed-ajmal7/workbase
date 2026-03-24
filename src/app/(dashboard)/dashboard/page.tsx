import DashboardCard from "@/components/DashboardCard/DashboardCard";
import { DASHBOARD_CARD_DATA } from "@/constants/dashboard.constant";

export default function page() {
  return (
    <div>
      <DashboardCard Arrdata={DASHBOARD_CARD_DATA} />
    </div>
  );
}

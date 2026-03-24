import type { DashboardItemProps } from "@/types/common.types";
import LucideIcon from "@/components/LucideIcon/LucideIcon";

interface DashboardCardProps {
  Arrdata: DashboardItemProps[];
}

function DashboardCard({ Arrdata }: DashboardCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-5">
      {Arrdata.map((cElement) => (
        <div
          key={cElement.title}
          className="border-gray-200 border rounded-md w-full px-4 py-5"
        >
          <div className="flex justify-between">
            <h2 className="text-[14px] text-gray-500">{cElement.title}</h2>

            <div
              className={`${cElement.iconBg} flex justify-center rounded-md px-2 py-1`}
            >
              <LucideIcon
                name={cElement.icon}
                className="w-3.75"
                color={cElement.iconColor}
              />
            </div>
          </div>

          <div className="font-bold text-3xl">{cElement.value}</div>
          <div className="text-gray-400 text-[13px] mt-2">
            {cElement.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCard;

import { RecentActivitiesDataProps } from "@/types/common.types";
import Avatar from "../Avatar/Avatar";
interface recentActivitiesDataProp {
  data: RecentActivitiesDataProps[];
}

function RecentActivities({ data }: recentActivitiesDataProp) {
  return (
    <div className=" bg-white border-gray-200 border rounded-md p-5">
      <div>
        <h1 className="text-[18px] font-medium">Recent Activity</h1>
      </div>
      {data.map((el) => {
        return (
          <div key={el.name} className="flex justify-between ">
            <div className="flex gap-4 mt-4">
              {" "}
              <Avatar />
              <h2 className="text-gray-600">
                {el.name}
                <span className="text-gray-400 text-[14px] pl-1">
                  {el.action}
                </span>
                <span className="text-blue-600 text-[14px] font-medium pl-1">
                  {el.target}
                </span>
              </h2>
            </div>
            <div>
              <p className="text-[14px] font-medium text-gray-500">{el.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentActivities;

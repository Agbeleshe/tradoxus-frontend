// components/admin/StatsCard.tsx
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  showProgress?: boolean;
  progressValue?: number;
  isAction?: boolean;
}

const StatsCard = ({
  title,
  value,
  change,
  icon,
  showProgress = false,
  progressValue = 0,
  isAction = false,
}: StatsCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6 text-black">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <p className="text-gray-600 text-sm md:text-base truncate">{title}</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-1 truncate">{value}</h3>
          <div className="mt-1">
            <span className={`text-xs md:text-sm ${isAction ? "text-blue-600" : "text-gray-500"}`}>
              {change}
            </span>
          </div>
          {showProgress && (
            <div className="mt-3 md:mt-4 w-full bg-gray-200 rounded-full h-2 md:h-2.5">
              <div
                className="bg-black h-2 md:h-2.5 rounded-full"
                style={{ width: `${progressValue}%` }}
              ></div>
            </div>
          )}
        </div>
        <div className="p-1.5 md:p-2 bg-gray-100 rounded-lg ml-2">{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;

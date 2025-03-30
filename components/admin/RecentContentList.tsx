// components/admin/RecentContentList.tsx
import { MoreHorizontal } from "lucide-react";
import { Course } from "@/lib/mock-data";

interface RecentContentListProps {
  courses: Course[];
}

const RecentContentList = ({ courses }: RecentContentListProps) => {
  return (
    <div className="text-black">
      <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Recent Content</h2>
      <p className="text-sm md:text-base text-gray-500 mb-4 md:mb-6">Recently created and updated courses</p>
      
      <div className="space-y-4 md:space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="h-12 w-12 md:h-16 md:w-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div className="flex-grow min-w-0">
              <h3 className="font-medium text-sm md:text-base truncate">{course.title}</h3>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mt-1">
                <span>{course.level}</span>
                <span>•</span>
                <span className="truncate">By {course.author}</span>
              </div>
            </div>
            <div className="flex items-center sm:items-start justify-end sm:justify-start mt-2 sm:mt-0">
              <div className={`h-2 w-2 rounded-full ${course.status === 'published' ? 'bg-green-500' : 'bg-yellow-500'} mt-1.5 mr-1`}></div>
              <button className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal size={16} className="md:h-[18px] md:w-[18px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentContentList;
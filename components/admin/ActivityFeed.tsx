// components/admin/ActivityFeed.tsx
import { BookOpen, CheckSquare, FileText, MessageSquare } from "lucide-react";
import { ReactNode } from "react";
import { Activity } from "@/lib/mock-data";

interface ActivityFeedProps {
  activities: Activity[];
}

const getActivityIcon = (type: string): ReactNode => {
  switch (type) {
    case "enrolled":
      return <BookOpen className="h-5 w-5 text-blue-500" />;
    case "completed":
      return <CheckSquare className="h-5 w-5 text-green-500" />;
    case "created":
      return <FileText className="h-5 w-5 text-purple-500" />;
    case "comment":
      return <MessageSquare className="h-5 w-5 text-orange-500" />;
    default:
      return <BookOpen className="h-5 w-5 text-gray-500" />;
  }
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
      <p className="text-gray-500 mb-6">Latest platform activities</p>
      
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className="mt-1">{getActivityIcon(activity.activityType)}</div>
            <div>
              <div className="font-medium">{activity.userName}</div>
              <div className="text-sm text-gray-600">
                {activity.activityType === 'enrolled' && `Enrolled in the course ${activity.targetName}`}
                {activity.activityType === 'completed' && `Completed the course ${activity.targetName}`}
                {activity.activityType === 'created' && `Created a new draft course ${activity.targetName}`}
                {activity.activityType === 'comment' && `Left a comment on ${activity.targetName}`}
              </div>
              <div className="text-xs text-gray-500 mt-1">{formatDate(activity.timestamp)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
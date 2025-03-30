// app/admin/page.tsx
import { BookOpen, Users, Calendar, Clock, Plus } from "lucide-react";
import Link from "next/link";
import StatsCard from "@/components/admin/StatsCard";
import RecentContentList from "@/components/admin/RecentContentList";
import ActivityFeed from "@/components/admin/ActivityFeed";
import { getMockDashboardStats, getMockRecentCourses, getMockRecentActivities } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  // In a real app, you would fetch this data from an API
  // For now, we'll use our mock data service
  const stats = getMockDashboardStats();
  const recentCourses = getMockRecentCourses();
  const recentActivities = getMockRecentActivities();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Link
          href="/admin/new-course"
          className="flex items-center justify-center sm:justify-start gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          <Plus size={18} />
          <span>New Course</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatsCard 
          title="Total Courses"
          value={stats.totalCourses.toString()}
          change={`+${stats.newCourses} new this week`}
          icon={<BookOpen className="h-6 w-6" />}
        />
        <StatsCard 
          title="Total Users"
          value={stats.totalUsers.toString()}
          change={`+${stats.newUsers} new this week`}
          icon={<Users className="h-6 w-6" />}
        />
        <StatsCard 
          title="Total Enrollments"
          value={stats.totalEnrollments.toString()}
          change={`${stats.completionRate}% completion`}
          icon={<Calendar className="h-6 w-6" />}
          showProgress
          progressValue={stats.completionRate}
        />
        <StatsCard 
          title="Pending Approvals"
          value={stats.pendingApprovals.toString()}
          change="Review now"
          icon={<Clock className="h-6 w-6" />}
          isAction
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
          <RecentContentList courses={recentCourses} />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
          <ActivityFeed activities={recentActivities} />
        </div>
      </div>
    </div>
  );
}

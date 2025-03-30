// lib/mock-data.ts

// Course Data
export interface Course {
    id: string;
    title: string;
    description: string;
    level: 'Basic' | 'Medium' | 'Advanced';
    author: string;
    status: 'draft' | 'published' | 'archived' | 'review';
    created: string;
    updated: string;
    duration: number; // in minutes
    topics: string[];
    enrollments: number;
    completionRate: number;
    thumbnail: string;
  }
  
  // User Data
  export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'instructor' | 'admin';
    joined: string;
    lastActive: string;
    enrolledCourses: number;
    completedCourses: number;
    profileImage: string;
  }
  
  // Activity Data
  export interface Activity {
    id: string;
    userId: string;
    userName: string;
    activityType: 'enrolled' | 'completed' | 'created' | 'comment' | 'update';
    targetId: string;
    targetName: string;
    targetType: 'course' | 'module' | 'lesson';
    timestamp: string;
  }
  
  // Dashboard Stats
  export interface DashboardStats {
    totalCourses: number;
    newCourses: number;
    totalUsers: number;
    newUsers: number;
    totalEnrollments: number;
    completionRate: number;
    pendingApprovals: number;
  }
  
  // Mock Data Service
  export const getMockDashboardStats = (): DashboardStats => {
    return {
      totalCourses: 120,
      newCourses: 8,
      totalUsers: 4500,
      newUsers: 145,
      totalEnrollments: 12500,
      completionRate: 68,
      pendingApprovals: 5
    };
  };
  
  export const getMockRecentCourses = (): Course[] => {
    return [
      {
        id: '1',
        title: 'Introduction to Trading',
        description: 'Learn the fundamentals of trading in financial markets.',
        level: 'Basic',
        author: 'Admin',
        status: 'published',
        created: '2024-10-20T10:00:00Z',
        updated: '2024-10-25T15:30:00Z',
        duration: 180,
        topics: ['Trading', 'Finance', 'Investment'],
        enrollments: 250,
        completionRate: 65,
        thumbnail: '/placeholder.jpg'
      },
      {
        id: '2',
        title: 'Risk Management',
        description: 'Advanced strategies for managing risk in trading.',
        level: 'Medium',
        author: 'Admin',
        status: 'published',
        created: '2024-10-18T14:20:00Z',
        updated: '2024-10-24T11:45:00Z',
        duration: 240,
        topics: ['Risk', 'Trading', 'Strategy'],
        enrollments: 180,
        completionRate: 58,
        thumbnail: '/placeholder.jpg'
      },
      {
        id: '3',
        title: 'how Management',
        description: 'Advanced strategies for managing risk in trading.',
        level: 'Medium',
        author: 'Admin',
        status: 'published',
        created: '2024-10-18T14:20:00Z',
        updated: '2024-10-24T11:45:00Z',
        duration: 240,
        topics: ['Risk', 'Trading', 'Strategy'],
        enrollments: 180,
        completionRate: 58,
        thumbnail: '/placeholder.jpg'
      }
    ];
  };
  
  export const getMockRecentActivities = (): Activity[] => {
    return [
      {
        id: '1',
        userId: 'user1',
        userName: 'Alex Johnson',
        activityType: 'enrolled',
        targetId: 'course1',
        targetName: 'Introduction to Trading',
        targetType: 'course',
        timestamp: '2024-10-26T11:30:00Z'
      },
      {
        id: '2',
        userId: 'user2',
        userName: 'Samantha Brown',
        activityType: 'completed',
        targetId: 'course3',
        targetName: 'Cybersecurity Essentials',
        targetType: 'course',
        timestamp: '2024-10-26T10:15:00Z'
      },
      {
        id: '3',
        userId: 'user3',
        userName: 'John Doe',
        activityType: 'created',
        targetId: 'course4',
        targetName: 'UX Design Fundamentals',
        targetType: 'course',
        timestamp: '2024-10-25T13:45:00Z'
      },
      {
        id: '4',
        userId: 'user1',
        userName: 'Alex Johnson',
        activityType: 'comment',
        targetId: 'module3',
        targetName: 'Module 3 Advanced JavaScript Concepts',
        targetType: 'module',
        timestamp: '2024-10-25T12:20:00Z'
      }
    ];
  };
// components/admin/Sidebar.tsx

"use client";

import Link from "next/link";
import { 
  BookOpen, 
  Users, 
  Settings, 
  BarChart2, 
  FileText, 
  Clock, 
  CheckSquare,
  Calendar,
  Plus,
  Layers,
  ChevronDown,
  X
} from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps = {}) => {
  return (
    <div className="w-full md:w-64 bg-white border-r border-gray-200 h-full flex flex-col text-black">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold uppercase text-black">Tradoxus</h1>
        {onClose && (
          <button 
            onClick={onClose}
            className="md:hidden rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X size={24} />
          </button>
        )}
      </div>
      
      <div className="p-4">
        <Link 
          href="/admin/new-content"
          className="flex items-center gap-2 bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition duration-200"
          onClick={onClose}
        >
          <Plus size={20} />
          <span>New Content</span>
        </Link>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          <li>
            <Link
              href="/admin"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 font-medium"
              onClick={onClose}
            >
              <Layers size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          
          <li className="pt-4">
            <div className="flex items-center justify-between p-2 text-sm font-medium text-gray-500">
              <span>Content Management</span>
              <ChevronDown size={16} />
            </div>
            <ul className="pl-2 mt-1 space-y-1">
              <li>
                <Link
                  href="/admin/content"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  onClick={onClose}
                >
                  <BookOpen size={20} />
                  <span>All Content</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/drafts"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  onClick={onClose}
                >
                  <FileText size={20} />
                  <span>Drafts</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/approval-queue"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  onClick={onClose}
                >
                  <CheckSquare size={20} />
                  <span>Approval Queue</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/scheduled"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  onClick={onClose}
                >
                  <Clock size={20} />
                  <span>Scheduled</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="pt-4">
            <div className="flex items-center justify-between p-2 text-sm font-medium text-gray-500">
              <span>User Management</span>
              <ChevronDown size={16} />
            </div>
            <ul className="pl-2 mt-1 space-y-1">
              <li>
                <Link
                  href="/admin/users"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  onClick={onClose}
                >
                  <Users size={20} />
                  <span>All Users</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="pt-4">
            <div className="flex items-center justify-between p-2 text-sm font-medium text-gray-500">
              <span>System Configuration</span>
              <ChevronDown size={16} />
            </div>
            <ul className="pl-2 mt-1 space-y-1">
              <li>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  onClick={onClose}
                >
                  <Settings size={20} />
                  <span>General Settings</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="pt-4">
            <div className="flex items-center justify-between p-2 text-sm font-medium text-gray-500">
              <span>Reporting</span>
              <ChevronDown size={16} />
            </div>
            <ul className="pl-2 mt-1 space-y-1">
              <li>
                <Link
                  href="/admin/analytics"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  onClick={onClose}
                >
                  <BarChart2 size={20} />
                  <span>Analytics</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
            A
          </div>
          <div>
            <div className="font-medium">Admin User</div>
            <div className="text-xs text-gray-500">admin@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

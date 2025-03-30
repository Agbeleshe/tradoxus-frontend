// components/admin/Header.tsx
"use client";

import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  onMenuButtonClick?: () => void;
}

const Header = ({ onMenuButtonClick }: HeaderProps = {}) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-4 md:px-6 sticky top-0 z-10">
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
        onClick={onMenuButtonClick}
      >
        <Menu className="h-6 w-6" />
      </button>
      
      <div className="flex-1 relative mx-4 md:mx-0">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Search..."
          className="w-full max-w-md pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;

import { CheckCircle, XCircle, Eye, MoreHorizontal, Search } from "lucide-react";

interface QueueItem {
  id: string;
  title: string;
  level: string;
  author: string;
  submittedDate: string;
  status: "pending";
}

const mockQueue: QueueItem[] = [
  { id: "1", title: "Cryptocurrency Trading Fundamentals", level: "Medium", author: "Admin", submittedDate: "Oct 24, 2024", status: "pending" },
  { id: "2", title: "Financial Market Analysis", level: "Advanced", author: "Alex Johnson", submittedDate: "Oct 23, 2024", status: "pending" },
  { id: "3", title: "Options Trading Strategies", level: "Advanced", author: "Samantha Brown", submittedDate: "Oct 23, 2024", status: "pending" },
  { id: "4", title: "Web Programming Basics", level: "Basic", author: "John Doe", submittedDate: "Oct 22, 2024", status: "pending" },
  { id: "5", title: "Advanced JavaScript Concepts", level: "Advanced", author: "Alex Johnson", submittedDate: "Oct 21, 2024", status: "pending" },
];

export default function ApprovalQueuePage() {
  return (
    <div className="space-y-6 text-black p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Approval Queue</h1>
        <div className="text-sm text-gray-500">5 courses pending approval</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search queue..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left font-medium text-gray-500 border-b hidden sm:table-row">
                <th className="pb-3 pl-4">Course</th>
                <th className="pb-3">Level</th>
                <th className="pb-3">Author</th>
                <th className="pb-3">Submitted</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right pr-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockQueue.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 block sm:table-row border-b sm:border-none p-4 sm:p-0">
                  <td className="py-4 pl-4 block sm:table-cell font-medium">{item.title}</td>
                  <td className="py-4 block sm:table-cell">{item.level}</td>
                  <td className="py-4 block sm:table-cell">{item.author}</td>
                  <td className="py-4 block sm:table-cell">{item.submittedDate}</td>
                  <td className="py-4 block sm:table-cell">
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                  </td>
                  <td className="py-4 pr-4 text-right block sm:table-cell">
                    <div className="flex items-center justify-start sm:justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="View">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-green-100 text-green-600 rounded-lg" title="Approve">
                        <CheckCircle size={18} />
                      </button>
                      <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg" title="Reject">
                        <XCircle size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="More">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-sm gap-4">
          <div className="text-gray-500">Showing 1-5 of 5 items</div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

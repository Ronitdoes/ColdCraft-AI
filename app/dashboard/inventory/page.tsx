import { Database, Search, Filter, MoreHorizontal, Download, Plus } from 'lucide-react';

export default function InventoryPage() {
  return (
    <div className="px-12 pb-24 pt-10 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-serif italic text-6xl text-black mb-2">Lead Inventory</h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500">Master database of all processed prospects</p>
        </div>
        <div className="flex space-x-4">
          <button className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors flex items-center">
            <Download className="w-3 h-3 mr-2" />
            Export
          </button>
          <button className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-black bg-black text-white hover:bg-gray-800 transition-colors flex items-center">
            <Plus className="w-3 h-3 mr-2" />
            Add Leads
          </button>
        </div>
      </div>

      {/* Database Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-200 p-6 bg-white flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#f7f7f5] flex items-center justify-center">
            <Database className="w-5 h-5 text-black" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Total Records</div>
            <div className="text-2xl font-serif italic">142,850</div>
          </div>
        </div>
        <div className="border border-gray-200 p-6 bg-white flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-50 flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div>
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Verified Active</div>
            <div className="text-2xl font-serif italic">98,421</div>
          </div>
        </div>
        <div className="border border-gray-200 p-6 bg-white flex items-center space-x-4">
          <div className="w-12 h-12 bg-yellow-50 flex items-center justify-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Enrichment Queue</div>
            <div className="text-2xl font-serif italic">4,205</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name, company, or domain..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 font-mono text-[11px] focus:outline-none focus:border-black"
          />
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center">
            <Filter className="w-3 h-3 mr-2" />
            Filter
          </button>
          <select className="flex-1 md:flex-none font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors focus:outline-none appearance-none bg-white">
            <option>Sort: Newest</option>
            <option>Sort: Score (High-Low)</option>
            <option>Sort: Company A-Z</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-[#f7f7f5]">
                <th className="p-4 w-8">
                  <input type="checkbox" className="border-gray-300 rounded-none" />
                </th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Prospect</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Company</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Status</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">AI Score</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Last Contact</th>
                <th className="p-4 w-8"></th>
              </tr>
            </thead>
            <tbody className="font-mono text-[11px]">
              {[
                { name: 'Sarah Jenkins', title: 'VP Engineering', company: 'TechFlow Inc.', domain: 'techflow.io', status: 'Verified', score: '94', date: '2 days ago' },
                { name: 'Michael Chen', title: 'CTO', company: 'Nexus Data', domain: 'nexusdata.com', status: 'In Campaign', score: '88', date: 'Just now' },
                { name: 'Emily Rodriguez', title: 'Head of Growth', company: 'ScaleUp Partners', domain: 'scaleup.vc', status: 'Verified', score: '91', date: '1 week ago' },
                { name: 'David Kim', title: 'Director of Sales', company: 'CloudSync', domain: 'cloudsync.net', status: 'Bounced', score: '42', date: '1 month ago' },
                { name: 'Jessica Walsh', title: 'CEO', company: 'Innovate AI', domain: 'innovate.ai', status: 'Replied', score: '99', date: '3 hours ago' },
                { name: 'Robert Fox', title: 'VP Marketing', company: 'Global Reach', domain: 'globalreach.co', status: 'Verified', score: '76', date: '5 days ago' },
                { name: 'Amanda Cooper', title: 'Founder', company: 'NextGen Solutions', domain: 'nextgen.io', status: 'Enriching', score: '--', date: 'Never' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                  <td className="p-4">
                    <input type="checkbox" className="border-gray-300 rounded-none" />
                  </td>
                  <td className="p-4">
                    <div className="text-black font-bold">{row.name}</div>
                    <div className="text-gray-500 text-[9px]">{row.title}</div>
                  </td>
                  <td className="p-4">
                    <div className="text-black">{row.company}</div>
                    <div className="text-gray-400 text-[9px]">{row.domain}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 ${
                      row.status === 'Verified' ? 'bg-green-50 text-green-600' :
                      row.status === 'In Campaign' ? 'bg-blue-50 text-blue-600' :
                      row.status === 'Replied' ? 'bg-purple-50 text-purple-600' :
                      row.status === 'Bounced' ? 'bg-red-50 text-red-600' :
                      'bg-yellow-50 text-yellow-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-1 bg-gray-200">
                        {row.score !== '--' && (
                          <div className="h-full bg-black" style={{ width: `${row.score}%` }}></div>
                        )}
                      </div>
                      <span className="text-black">{row.score}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-500">{row.date}</td>
                  <td className="p-4">
                    <button className="text-gray-400 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-[#f7f7f5]">
          <div className="font-mono text-[10px] text-gray-500">Showing 1-7 of 142,850 records</div>
          <div className="flex space-x-2">
            <button className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-gray-200 bg-white hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

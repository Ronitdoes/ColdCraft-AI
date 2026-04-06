import { BarChart2, TrendingUp, Users, Mail, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-serif text-4xl font-bold tracking-tight italic mb-2">Analytics Engine</h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500">Real-time performance telemetry</p>
        </div>
        <div className="flex space-x-4">
          <button className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors">Last 7 Days</button>
          <button className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-black bg-black text-white hover:bg-gray-800 transition-colors">Last 30 Days</button>
        </div>
      </div>

      {/* Top Level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="border border-gray-200 p-6 bg-white">
          <div className="flex justify-between items-start mb-4">
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Total Sent</div>
            <Mail className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-3xl font-serif italic mb-2">45,281</div>
          <div className="flex items-center text-[10px] font-mono text-green-600">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            <span>+12.4% vs last period</span>
          </div>
        </div>

        <div className="border border-gray-200 p-6 bg-white">
          <div className="flex justify-between items-start mb-4">
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Open Rate</div>
            <Activity className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-3xl font-serif italic mb-2">68.2%</div>
          <div className="flex items-center text-[10px] font-mono text-green-600">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            <span>+4.1% vs last period</span>
          </div>
        </div>

        <div className="border border-gray-200 p-6 bg-white">
          <div className="flex justify-between items-start mb-4">
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Reply Rate</div>
            <Users className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-3xl font-serif italic mb-2">14.5%</div>
          <div className="flex items-center text-[10px] font-mono text-red-600">
            <ArrowDownRight className="w-3 h-3 mr-1" />
            <span>-1.2% vs last period</span>
          </div>
        </div>

        <div className="border border-gray-200 p-6 bg-white">
          <div className="flex justify-between items-start mb-4">
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Meetings Booked</div>
            <TrendingUp className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-3xl font-serif italic mb-2">142</div>
          <div className="flex items-center text-[10px] font-mono text-green-600">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            <span>+22.8% vs last period</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Chart Area (Placeholder) */}
        <div className="lg:col-span-2 border border-gray-200 bg-white p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-black">Conversion Funnel</div>
            <BarChart2 className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="h-64 flex items-end justify-between space-x-2 pb-4 border-b border-gray-100">
            {/* Fake Chart Bars */}
            {[40, 65, 45, 80, 55, 90, 75, 60, 85, 50, 70, 95, 80, 60].map((height, i) => (
              <div key={i} className="w-full bg-gray-100 hover:bg-black transition-colors relative group cursor-pointer" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-mono px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {height * 120}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 font-mono text-[9px] text-gray-400 uppercase">
            <span>Oct 01</span>
            <span>Oct 15</span>
            <span>Oct 31</span>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="border border-gray-200 bg-white p-6">
          <div className="font-mono text-[11px] uppercase tracking-widest text-black mb-8">Reply Sentiment</div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between font-mono text-[10px] mb-2">
                <span className="text-green-600">Positive / Interested</span>
                <span>45%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100">
                <div className="h-full bg-green-500 w-[45%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between font-mono text-[10px] mb-2">
                <span className="text-gray-600">Neutral / Questions</span>
                <span>35%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100">
                <div className="h-full bg-gray-400 w-[35%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between font-mono text-[10px] mb-2">
                <span className="text-red-600">Negative / Unsubscribe</span>
                <span>20%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100">
                <div className="h-full bg-red-500 w-[20%]"></div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <div className="font-mono text-[9px] uppercase tracking-widest text-gray-400 mb-4">Top Objections Detected</div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-black">"Timing not right"</span>
                <span className="bg-gray-100 px-2 py-0.5">42%</span>
              </li>
              <li className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-black">"Using competitor"</span>
                <span className="bg-gray-100 px-2 py-0.5">28%</span>
              </li>
              <li className="flex justify-between items-center font-mono text-[10px]">
                <span className="text-black">"No budget"</span>
                <span className="bg-gray-100 px-2 py-0.5">15%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Campaign Performance Table */}
      <div className="border border-gray-200 bg-white">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="font-mono text-[11px] uppercase tracking-widest text-black">Campaign Performance</div>
          <button className="font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-black">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-[#f7f7f5]">
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Campaign Name</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Status</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Sent</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Open Rate</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Reply Rate</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-normal">Meetings</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[11px]">
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-black">Q4_Enterprise_SaaS_Outbound</td>
                <td className="p-4"><span className="text-green-600 bg-green-50 px-2 py-1">Active</span></td>
                <td className="p-4 text-gray-600">12,450</td>
                <td className="p-4 text-gray-600">72.4%</td>
                <td className="p-4 text-gray-600">18.2%</td>
                <td className="p-4 text-black font-bold">45</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-black">Series_A_Founders_Intro</td>
                <td className="p-4"><span className="text-green-600 bg-green-50 px-2 py-1">Active</span></td>
                <td className="p-4 text-gray-600">3,200</td>
                <td className="p-4 text-gray-600">81.5%</td>
                <td className="p-4 text-gray-600">24.1%</td>
                <td className="p-4 text-black font-bold">32</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-black">Agency_Partnership_Q3</td>
                <td className="p-4"><span className="text-gray-500 bg-gray-100 px-2 py-1">Completed</span></td>
                <td className="p-4 text-gray-600">8,900</td>
                <td className="p-4 text-gray-600">64.2%</td>
                <td className="p-4 text-gray-600">11.5%</td>
                <td className="p-4 text-black font-bold">28</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-black">Cold_Re-engagement_List_B</td>
                <td className="p-4"><span className="text-yellow-600 bg-yellow-50 px-2 py-1">Paused</span></td>
                <td className="p-4 text-gray-600">5,120</td>
                <td className="p-4 text-gray-600">45.8%</td>
                <td className="p-4 text-gray-600">4.2%</td>
                <td className="p-4 text-black font-bold">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

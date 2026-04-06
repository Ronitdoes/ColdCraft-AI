import { Search, History } from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="px-12 pb-24 pt-10">
      {/* Header Section */}
      <header className="mb-16 flex justify-between items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-2">Operational Overview</p>
          <h2 className="font-serif italic text-6xl text-black">Dashboard</h2>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500">Active Connections</p>
            <p className="font-bold text-xl">1,240 <span className="text-green-600 text-sm ml-1 font-mono">+12%</span></p>
          </div>
          <div className="h-10 w-10 border border-black flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* PERFORMANCE OVERVIEW */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-gray-200 mb-20">
        <div className="p-8 bg-[#F7F7F5] border-r border-b border-gray-200">
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-8">TOTAL OUTREACH</p>
          <h3 className="font-serif text-6xl text-black mb-2">42.8k</h3>
          <div className="h-[1px] w-full bg-gray-200 my-6"></div>
          <p className="font-mono text-[10px] text-green-600 uppercase tracking-widest">+14.2% FROM LAST MO.</p>
        </div>
        <div className="p-8 bg-[#F7F7F5] border-r border-b border-gray-200">
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-8">CONVERSION RATE</p>
          <h3 className="font-serif text-6xl text-black mb-2">8.4<span className="text-3xl">%</span></h3>
          <div className="h-[1px] w-full bg-gray-200 my-6"></div>
          <p className="font-mono text-[10px] text-green-600 uppercase tracking-widest">+0.8% FROM LAST MO.</p>
        </div>
        <div className="p-8 bg-[#F7F7F5] border-r border-b border-gray-200">
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-8">REVENUE IMPACT</p>
          <h3 className="font-serif text-6xl text-black mb-2">$124k</h3>
          <div className="h-[1px] w-full bg-gray-200 my-6"></div>
          <p className="font-mono text-[10px] text-black uppercase tracking-widest">ON TARGET FOR Q2</p>
        </div>
        <div className="p-8 bg-[#F7F7F5] border-r border-b border-gray-200">
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-8">AI EFFICIENCY</p>
          <h3 className="font-serif text-6xl text-black mb-2">96<span className="text-3xl">%</span></h3>
          <div className="h-[1px] w-full bg-gray-200 my-6"></div>
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">AUTONOMOUS MODE ACTIVE</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* RECENT CAMPAIGNS */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-black font-bold">RECENT CAMPAIGNS</h4>
            <a href="#" className="font-mono text-[10px] uppercase underline tracking-widest">View Archives</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-4 font-mono text-[11px] uppercase tracking-widest text-gray-500">Campaign Name</th>
                  <th className="py-4 font-mono text-[11px] uppercase tracking-widest text-gray-500">Status</th>
                  <th className="py-4 font-mono text-[11px] uppercase tracking-widest text-gray-500">Reach</th>
                  <th className="py-4 font-mono text-[11px] uppercase tracking-widest text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-6 pr-4">
                    <p className="font-bold text-black uppercase text-sm tracking-tight">Enterprise Scaling Q4</p>
                    <p className="text-[11px] text-gray-500 font-mono">ID: CC-9921-A</p>
                  </td>
                  <td className="py-6">
                    <span className="inline-flex items-center px-3 py-1 border border-black text-[10px] font-mono uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-black mr-2"></span> Active
                    </span>
                  </td>
                  <td className="py-6 font-serif italic text-lg">12,402</td>
                  <td className="py-6 text-right">
                    <button className="font-mono text-[11px] underline">MANAGE</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 pr-4">
                    <p className="font-bold text-black uppercase text-sm tracking-tight">SaaS Retention Pilot</p>
                    <p className="text-[11px] text-gray-500 font-mono">ID: CC-8812-B</p>
                  </td>
                  <td className="py-6">
                    <span className="inline-flex items-center px-3 py-1 text-gray-500 border border-gray-500 text-[10px] font-mono uppercase tracking-widest">
                      Scheduled
                    </span>
                  </td>
                  <td className="py-6 font-serif italic text-lg">4,200</td>
                  <td className="py-6 text-right">
                    <button className="font-mono text-[11px] underline">EDIT</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 pr-4">
                    <p className="font-bold text-black uppercase text-sm tracking-tight">Legacy Cleanup V2</p>
                    <p className="text-[11px] text-gray-500 font-mono">ID: CC-7734-C</p>
                  </td>
                  <td className="py-6">
                    <span className="inline-flex items-center px-3 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-widest">
                      Completed
                    </span>
                  </td>
                  <td className="py-6 font-serif italic text-lg">28,510</td>
                  <td className="py-6 text-right">
                    <button className="font-mono text-[11px] underline">REPORT</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AI INSIGHTS PANEL */}
        <aside className="space-y-8">
          <div className="border border-black p-8 bg-[#F7F7F5]">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-black font-bold mb-8">AI NEURAL INSIGHTS</h4>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-3 items-end">
                  <p className="font-mono text-[10px] uppercase text-gray-500">Processing Capacity</p>
                  <p className="font-serif italic text-lg">82%</p>
                </div>
                <div className="h-[1px] w-full bg-gray-200">
                  <div className="h-[1px] bg-black w-[82%]"></div>
                </div>
                <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                  Neural cluster <span className="font-mono text-black font-medium">BETA-09</span> is operating at peak efficiency. Recommendation: scale vertical threads by +12%.
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-3 items-end">
                  <p className="font-mono text-[10px] uppercase text-gray-500">Response Quality</p>
                  <p className="font-serif italic text-lg">94%</p>
                </div>
                <div className="h-[1px] w-full bg-gray-200">
                  <div className="h-[1px] bg-black w-[94%]"></div>
                </div>
                <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                  Sentiment analysis indicates 94% positive resonance across the active <span className="font-mono text-black font-medium">Q4_ENTERPRISE</span> segment.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <button className="w-full border border-black py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                OPTIMIZE ENGINE
              </button>
            </div>
          </div>

          {/* Secondary Data Module */}
          <div className="border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <History className="w-4 h-4" />
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-black">System Logs</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-start border-b border-gray-200 pb-3">
                <div>
                  <p className="text-[11px] font-bold">DB_SYNC_SUCCESS</p>
                  <p className="font-mono text-[9px] text-gray-500">02:14:05</p>
                </div>
                <span className="w-1.5 h-1.5 bg-black"></span>
              </li>
              <li className="flex justify-between items-start border-b border-gray-200 pb-3 opacity-60">
                <div>
                  <p className="text-[11px] font-bold">NODE_04_RESTART</p>
                  <p className="font-mono text-[9px] text-gray-500">01:55:12</p>
                </div>
                <span className="w-1.5 h-1.5 bg-black"></span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* System Image Section */}
      <section className="mt-24">
        <div className="relative h-[400px] w-full overflow-hidden grayscale">
          <Image 
            src="https://picsum.photos/seed/network/1200/400?grayscale" 
            alt="Global data network" 
            width={1200} 
            height={400} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-8 left-8 bg-white p-8 max-w-md border border-black">
            <p className="font-serif italic text-2xl mb-4">"Precision is not just a metric, it is the fundamental architecture of modern intelligence."</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">— Coldcraft Strategic Core</p>
          </div>
        </div>
      </section>
    </div>
  );
}

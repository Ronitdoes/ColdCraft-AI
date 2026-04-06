import { Filter, Bold, Italic, Link as LinkIcon, BrainCircuit, Sparkles, Activity, Share2, Globe, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ReviewAndEdit() {
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Panel 1: Queue List */}
      <section className="w-1/4 border-r border-gray-200 flex flex-col bg-white">
        <header className="p-8 border-b border-gray-100">
          <div className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-2">Campaign Queue</div>
          <h2 className="font-serif text-2xl italic font-semibold text-black leading-tight">Review Leads</h2>
          <div className="mt-4 flex items-center text-[10px] font-mono text-gray-400">
            <Filter className="w-3 h-3 mr-1" />
            SORT: RELEVANCE
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">
          {/* Lead Item Active */}
          <div className="p-6 border-b border-gray-100 bg-[#f4f4f2] relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] text-black bg-white px-1.5 py-0.5 border border-black">ACTIVE</span>
              <span className="font-mono text-[10px] text-gray-400">01</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-black">Sarah Chen</h3>
            <p className="font-mono text-[11px] text-gray-500 mb-4 uppercase">Director of Product @ Vesper</p>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <div className="h-2 w-2 rounded-full bg-gray-200"></div>
              <div className="h-2 w-2 rounded-full bg-gray-200"></div>
            </div>
          </div>
          {/* Lead Item */}
          <div className="p-6 border-b border-gray-100 hover:bg-[#f9f9f7] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] text-gray-400">QUEUED</span>
              <span className="font-mono text-[10px] text-gray-400">02</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-800 group-hover:text-black">Marcus Thorne</h3>
            <p className="font-mono text-[11px] text-gray-500 uppercase">Head of Growth @ Solis</p>
          </div>
          {/* Lead Item */}
          <div className="p-6 border-b border-gray-100 hover:bg-[#f9f9f7] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] text-gray-400">QUEUED</span>
              <span className="font-mono text-[10px] text-gray-400">03</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-800 group-hover:text-black">Elena Rodriguez</h3>
            <p className="font-mono text-[11px] text-gray-500 uppercase">Founder @ Origin Lab</p>
          </div>
        </div>
      </section>

      {/* Panel 2: Editor */}
      <section className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Editor Toolbar */}
        <header className="h-16 border-b border-gray-200 px-8 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center space-x-6">
            <button className="font-mono text-[11px] uppercase tracking-widest text-black flex items-center">
              <Bold className="w-4 h-4 mr-2" /> BOLD
            </button>
            <button className="font-mono text-[11px] uppercase tracking-widest text-black flex items-center">
              <Italic className="w-4 h-4 mr-2" /> ITALIC
            </button>
            <button className="font-mono text-[11px] uppercase tracking-widest text-black flex items-center">
              <LinkIcon className="w-4 h-4 mr-2" /> LINK
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-[10px] text-gray-400">SAVED 2M AGO</span>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-12 lg:p-20 max-w-4xl mx-auto w-full">
          <div className="mb-12">
            <label className="font-mono text-[11px] uppercase tracking-widest text-gray-400 block mb-4">Subject Line</label>
            <input 
              className="w-full border-b border-gray-200 focus:border-black focus:ring-0 px-0 py-2 font-serif text-2xl font-semibold outline-none text-black rounded-none" 
              type="text" 
              defaultValue="Quick question regarding Vesper's Q4 roadmap" 
            />
          </div>
          <div className="prose prose-neutral max-w-none">
            <label className="font-mono text-[11px] uppercase tracking-widest text-gray-400 block mb-6">Email Body</label>
            <div className="font-sans text-[17px] leading-relaxed text-gray-800 space-y-8 outline-none" contentEditable="true" suppressContentEditableWarning>
              <p>Hi Sarah,</p>
              <p>I caught your recent talk at the Product Summit about the shift toward <strong>asynchronous collaboration</strong> in distributed teams. Your point about "meeting debt" resonated quite a bit with what we're building at Coldcraft.</p>
              <p>Given Vesper's current expansion into the European market, I was curious how you're managing the translation of these internal workflows across time zones. We've developed a way to automate the context-gathering phase that usually eats up the first 15 minutes of those syncs.</p>
              <p>Would you be open to a 10-minute brief on how we could streamline this for your new Berlin hub?</p>
              <p>Best,<br />James</p>
            </div>
          </div>
        </div>
        {/* Editor Actions */}
        <footer className="p-8 border-t border-gray-200 bg-white flex justify-end items-center space-x-4">
          <button className="px-8 py-3 bg-white border border-black font-mono text-[11px] uppercase tracking-widest text-black hover:bg-gray-50 transition-colors">
            APPROVE
          </button>
          <button className="px-10 py-3 bg-black border border-black font-mono text-[11px] uppercase tracking-widest text-white hover:bg-gray-800 transition-colors">
            SEND NOW
          </button>
        </footer>
      </section>

      {/* Panel 3: AI Insights Sidebar */}
      <aside className="w-1/4 bg-[#f4f4f2] border-l border-gray-200 overflow-y-auto flex flex-col">
        <div className="p-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-6">Intelligence Panel</div>
          {/* Insight Card 1 */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            <div className="flex items-center mb-4">
              <BrainCircuit className="w-5 h-5 text-black mr-2" />
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest">Lead Persona</h4>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Decision Power</span>
                <span className="font-sans text-sm font-medium">High - Direct Budget Control</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block">Tone Preference</span>
                <span className="font-sans text-sm font-medium">Analytical & Direct</span>
              </div>
            </div>
          </div>
          {/* Insight Card 2 */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            <div className="flex items-center mb-4">
              <Sparkles className="w-5 h-5 text-black mr-2" />
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest">AI Context</h4>
            </div>
            <p className="text-xs leading-relaxed text-gray-600 mb-4 italic">"Referenced the Product Summit 2024 speech to establish immediate authority. Adjusted the CTA to focus on the Berlin expansion as per recent LinkedIn activity."</p>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-[#eeeeec] text-[9px] font-mono border border-gray-200 uppercase">Context Hook</span>
              <span className="px-2 py-1 bg-[#eeeeec] text-[9px] font-mono border border-gray-200 uppercase">Geo-Target</span>
            </div>
          </div>
          {/* Insight Card 3 */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Activity className="w-5 h-5 text-black mr-2" />
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest">Success Probability</h4>
              </div>
              <span className="font-serif italic font-bold text-xl">84%</span>
            </div>
            <div className="w-full bg-gray-100 h-1">
              <div className="bg-black h-full w-[84%]"></div>
            </div>
          </div>
        </div>
        {/* Lead Social Preview */}
        <div className="mt-auto p-8 border-t border-gray-200 bg-[#f9f9f7]">
          <div className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-4">Lead Profile</div>
          <div className="flex items-center mb-4">
            <Image 
              src="https://picsum.photos/seed/portrait/100/100?grayscale" 
              alt="Sarah Chen" 
              width={48} 
              height={48} 
              className="w-12 h-12 grayscale border border-black p-0.5"
              referrerPolicy="no-referrer"
            />
            <div className="ml-4">
              <div className="font-serif font-bold text-sm">Sarah Chen</div>
              <div className="flex space-x-2 mt-1">
                <Share2 className="w-4 h-4 text-gray-400" />
                <Globe className="w-4 h-4 text-gray-400" />
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="text-[11px] font-mono text-gray-400 leading-tight">
            PREVIOUSLY: PRODUCT @ STRIPE, GROWTH @ META. STANFORD GSB ALUMNA.
          </div>
        </div>
      </aside>
    </div>
  );
}

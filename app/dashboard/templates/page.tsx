"use client";
import { Search, Sparkles, TrendingUp, MessageCircle, Flame, PenTool, ArrowRight, MousePointer2 } from 'lucide-react';
import Image from 'next/image';

const templates = [
  {
    id: "COL-001",
    title: "Executive Intro",
    description: "Minimalist high-authority outreach for C-suite decision makers. Focus on direct value and brevity.",
    tags: ["Direct", "Executive"],
    icon: Sparkles
  },
  {
    id: "COL-002",
    title: "Data-First Audit",
    description: "Technical audit approach using cold data to provoke curiosity and urgency. Best for SaaS tools.",
    tags: ["Audit", "Technical"],
    icon: TrendingUp
  },
  {
    featured: true,
    title: "The Curator's Choice",
    description: "OUR MOST SUCCESSFUL FRAMEWORK FOR SERIES-B STARTUPS SEEKING PARTNERSHIPS.",
    cta: "EXPLORE CASE STUDY",
    image: "https://picsum.photos/seed/tech/800/800?grayscale"
  },
  {
    id: "COL-004",
    title: "Soft Follow-Up",
    description: "Non-intrusive re-engagement sequence designed to provide value without friction.",
    tags: ["Nurture", "Follow-up"],
    icon: MessageCircle
  },
  {
    id: "COL-005",
    title: "Scarcity Engine",
    description: "Psychological framework utilizing time-limited offers and exclusive beta access loops.",
    tags: ["Conversion", "Urgency"],
    icon: Flame
  },
  {
    id: "COL-006",
    title: "Founders Note",
    description: "Personalized narrative-driven template from founder to founder. Highly authentic tone.",
    tags: ["Story", "Personal"],
    icon: PenTool
  }
];

export default function TemplatesPage() {
  return (
    <div className="flex-grow flex flex-col bg-white overflow-y-auto">
      <div className="px-12 pb-24 pt-10 max-w-7xl mx-auto w-full">
        {/* Editorial Header Section */}
        <div className="grid grid-cols-12 gap-8 mb-20 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif italic text-6xl text-black leading-tight mb-6">Template Library</h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              A curated collection of precision-engineered messaging structures. Each template is rigorously tested against real-world conversion metrics.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <div className="pl-8 border-l border-black py-4 text-left">
              <blockquote className="font-serif italic text-2xl leading-snug">
                "The design of communication is as critical as the message itself."
              </blockquote>
              <cite className="font-mono text-[10px] uppercase tracking-widest mt-4 block text-gray-400">— Editorial Board</cite>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {["ALL TEMPLATES", "OUTREACH", "CONVERSION", "FOLLOW-UP", "RETENTION"].map((tab, i) => (
            <button 
              key={tab} 
              className={`px-6 py-2 border font-mono text-[11px] tracking-widest transition-all ${i === 0 ? 'border-black bg-white text-black' : 'border-transparent text-gray-400 hover:text-black hover:border-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {templates.map((template, idx) => {
            if (template.featured) {
              return (
                <div key={idx} className="bg-black border-r border-b border-gray-200 p-8 flex flex-col justify-center text-white relative overflow-hidden h-full min-h-[400px]">
                  <div className="relative z-10">
                    <h4 className="font-serif text-3xl italic mb-6">{template.title}</h4>
                    <p className="font-mono text-[11px] leading-relaxed mb-8 text-gray-400 uppercase tracking-widest">{template.description}</p>
                    <button className="bg-white text-black font-mono text-[11px] px-8 py-4 tracking-widest hover:opacity-90 transition-all">
                      {template.cta}
                    </button>
                  </div>
                  <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40">
                    <Image 
                      src={template.image || ""} 
                      alt="Featured Background" 
                      fill 
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
              );
            }

            const Icon = template.icon || Sparkles;
            return (
              <div key={idx} className="bg-[#F9F9F7] border-r border-b border-gray-200 p-8 flex flex-col group hover:bg-white transition-colors duration-300">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] text-black border border-black px-2 py-1">ID: {template.id}</span>
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" strokeWidth={1} />
                </div>
                <div className="mb-12">
                  <h3 className="font-serif text-2xl font-semibold italic mb-3">{template.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{template.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {template.tags?.map(tag => (
                      <span key={tag} className="font-mono text-[9px] uppercase bg-[#E8E8E6] text-gray-600 px-2 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto space-y-3">
                  <button className="w-full bg-black text-white font-mono text-[11px] py-4 tracking-widest transition-all hover:bg-[#474646]">
                    USE TEMPLATE
                  </button>
                  <button className="w-full border border-black bg-transparent text-black font-mono text-[11px] py-4 tracking-widest transition-all hover:bg-gray-50">
                    EDIT IN EDITOR
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="w-full py-8 px-12 flex justify-between items-center border-t border-gray-200 bg-white mt-24">
        <span className="font-mono text-[10px] tracking-widest text-gray-400">© 2024 COLDCRAFT AI. ALL RIGHTS RESERVED.</span>
        <div className="flex space-x-8">
          <a href="#" className="font-mono text-[10px] tracking-widest text-gray-600 hover:text-black font-bold transition-all underline decoration-2 underline-offset-4">TERMINAL</a>
          <a href="#" className="font-mono text-[10px] tracking-widest text-gray-600 hover:text-black transition-all">SYSTEM_LOGS</a>
          <a href="#" className="font-mono text-[10px] tracking-widest text-gray-600 hover:text-black transition-all">LEGAL</a>
        </div>
      </footer>
    </div>
  );
}

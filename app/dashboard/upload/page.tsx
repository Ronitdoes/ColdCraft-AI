import { Upload as UploadIcon, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function UploadLeads() {
  return (
    <div className="flex-grow flex flex-col">
      <section className="p-12 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="font-serif text-6xl italic">Define Your Foundation</h2>
          <div className="mt-6 flex items-center gap-4 text-gray-500">
            <span className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-3 py-1">PHASE_A</span>
            <span className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-3 py-1">STRUCTURAL_INPUT</span>
            <span className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-3 py-1">CONTEXT_MAPPING</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {/* Left Column: Primary Actions */}
          <div className="col-span-8 space-y-12">
            {/* Upload Zone */}
            <div className="border border-gray-200 p-12 flex flex-col items-center justify-center bg-white min-h-[320px]">
              <div className="mb-8">
                <UploadIcon className="w-12 h-12 text-black" strokeWidth={1} />
              </div>
              <h3 className="font-mono text-lg mb-2">Import Knowledge Base</h3>
              <p className="text-sm text-gray-500 mb-8 max-w-md text-center">Drag and drop your project briefs, research documents, or product specifications here to initialize the AI model.</p>
              <button className="bg-black text-white px-12 py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-[#474747] transition-colors">
                Select Files
              </button>
              <p className="mt-6 font-mono text-[10px] text-gray-400">SUPPORTED_FORMATS: PDF, DOCX, TXT (MAX 50MB)</p>
            </div>

            {/* File Status Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7F7F5] border border-gray-200 p-6 flex justify-between items-center">
                <div>
                  <p className="font-mono text-[10px] text-gray-400 mb-1">FILE_NAME</p>
                  <p className="font-medium text-sm">Product_Specification_V2.pdf</p>
                </div>
                <CheckCircle2 className="text-green-600 w-5 h-5" />
              </div>
              <div className="bg-[#F7F7F5] border border-gray-200 p-6 flex justify-between items-center">
                <div>
                  <p className="font-mono text-[10px] text-gray-400 mb-1">STATUS</p>
                  <p className="font-medium text-sm">Processing Meta-Data...</p>
                </div>
                <Loader2 className="w-5 h-5 animate-spin text-black" />
              </div>
            </div>

            {/* Form Input Section */}
            <div className="space-y-8">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest mb-3 block text-gray-500">Core Outreach Goal</label>
                <input 
                  type="text" 
                  placeholder="e.g., Enterprise Lead Generation for Q3 Logistics" 
                  className="w-full border border-gray-200 p-4 focus:border-black outline-none transition-colors font-sans" 
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-widest mb-3 block text-gray-500">Target Persona</label>
                  <input 
                    type="text" 
                    placeholder="CTO / Head of Engineering" 
                    className="w-full border border-gray-200 p-4 focus:border-black outline-none transition-colors font-sans" 
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-widest mb-3 block text-gray-500">Tone Profile</label>
                  <select className="w-full border border-gray-200 p-4 focus:border-black outline-none transition-colors bg-white appearance-none font-sans">
                    <option>Technical Authority</option>
                    <option>Casual Innovative</option>
                    <option>Direct Professional</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Panels */}
          <div className="col-span-4 space-y-8">
            {/* Outreach Context Panel */}
            <div className="bg-[#F7F7F5] border border-gray-200 p-8">
              <h4 className="font-mono text-[11px] uppercase tracking-widest border-b border-gray-200 pb-4 mb-6">Outreach Context</h4>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-[10px] text-gray-400 mb-1 italic">Knowledge Vector</p>
                  <p className="text-sm leading-relaxed text-gray-600">The AI uses these documents to understand the nuance of your product. Higher density uploads lead to higher conversion rates in outbound messaging.</p>
                </div>
                <div className="bg-[#F4F4F2] p-4">
                  <Image 
                    src="https://picsum.photos/seed/architecture/400/200?grayscale" 
                    alt="Concept Mapping" 
                    width={400} 
                    height={200} 
                    className="w-full h-32 object-cover grayscale mb-4"
                    referrerPolicy="no-referrer"
                  />
                  <p className="font-mono text-[9px] text-gray-500">IMG_REF: CONCEPT_MAPPING_01</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-black font-mono">01.</span>
                    <span>Ensure PDFs are text-searchable.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-black font-mono">02.</span>
                    <span>Define USP clearly in the foundation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* System Controls */}
            <div className="p-8 border border-gray-200">
              <h4 className="font-mono text-[11px] uppercase tracking-widest border-b border-gray-200 pb-4 mb-6">Finalize Input</h4>
              <button className="w-full bg-black text-white py-4 font-mono text-[11px] uppercase tracking-widest mb-4 hover:bg-[#474747] transition-colors">
                Continue to Logic
              </button>
              <button className="w-full border border-black py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-[#F7F7F5] transition-colors">
                Save Draft
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Terminal, Check } from 'lucide-react';

export default function LandingPage() {
  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo('#pricing', { duration: 2 });
    } else {
      document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlatformClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const plans = [
    {
      id: "PROTOCOL_01",
      name: "Starter",
      price: "29",
      description: "Foundational outreach framework for solo operators and small teams.",
      features: [
        "1,000 AI-Synthesized Messages",
        "Basic Neural Personalization",
        "3 Tracking Domains",
        "Real-time Dashboard Access",
        "Standard SMTP Integration",
        "72h Response Support"
      ],
      cta: "Initialize Protocol",
      variant: "basic"
    },
    {
      id: "NEURAL_02",
      name: "Professional",
      price: "79",
      description: "Scale your revenue operations with advanced sentiment analysis and dynamic warming.",
      features: [
        "10,000 AI-Synthesized Messages",
        "Advanced Neural Personalization",
        "10 Tracking Domains",
        "Sentiment Signal Analysis",
        "Dynamic Domain Warming",
        "CRM Bi-Sync Integration",
        "24h Technical Support"
      ],
      cta: "Launch Neural Engine",
      variant: "premium"
    },
    {
      id: "NEXUS_03",
      name: "Enterprise",
      price: "Custom",
      description: "Custom-engineered infrastructure for high-volume sales organizations.",
      features: [
        "Unlimited Message Volume",
        "Custom Training Data Fine-tuning",
        "Unlimited Tracking Domains",
        "Dedicated Server Instance",
        "SOC2 Compliance Exports",
        "Direct Engineering Slack Channel",
        "SLA Implementation"
      ],
      cta: "Contact Operations",
      variant: "enterprise"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">


      {/* TopNavBar */}
      <nav className="bg-white border-b border-gray-200 flex justify-between items-center w-full px-12 h-16 sticky top-0 z-50">
        <Link href="/" className="text-3xl font-bold font-serif text-black italic">
          Coldcraft AI
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            onClick={handlePlatformClick}
            className="font-mono text-[11px] uppercase tracking-widest text-black border-b-2 border-black pb-1"
          >
            Platform
          </a>
          <Link href="#" className="font-mono text-[11px] uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Resources</Link>
          <a 
            href="#pricing" 
            onClick={handlePricingClick}
            className="font-mono text-[11px] uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            Pricing
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:block relative">
            <input className="font-mono text-[10px] border border-gray-200 px-3 py-1.5 focus:outline-none focus:border-black w-48" placeholder="SEARCH_DATABASE" type="text" />
          </div>
          <Link href="/dashboard" className="bg-black text-white px-6 py-2 font-mono text-[11px] uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-[0.98]">
            Start for free
          </Link>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-12 w-full">
        {/* Hero Section */}
        <section className="py-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-8 text-gray-500">AI-POWERED REVENUE GENERATION</p>
            <h1 className="font-serif text-7xl font-bold tracking-[-0.03em] leading-[1.1] mb-10 italic">
              Cold Outreach, <br />Perfected by AI.
            </h1>
            <p className="text-lg leading-[1.7] text-gray-600 max-w-xl mb-12">
              Stop guessing :) Coldcraft uses deep intelligence to draft, sequence, and dispatch hyper-personalized outreach that actually gets replies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="bg-black text-white px-10 py-4 font-mono text-[11px] uppercase tracking-widest border border-black hover:bg-[#474747] transition-colors">
                Launch Campaign
              </Link>
              <button className="bg-white text-black px-10 py-4 font-mono text-[11px] uppercase tracking-widest border border-black hover:bg-[#f7f7f5] transition-colors">
                View Demo
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 flex items-center justify-end">
            <div className="w-full aspect-[4/5] border border-black p-2">
              <Image 
                src="https://picsum.photos/seed/tech/800/1000?grayscale" 
                alt="Technical Precision" 
                width={800} 
                height={1000} 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Metrics Data Ribbon */}
        <div className="py-12 grid grid-cols-12 gap-6">
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] text-gray-500 mb-1">DATA_POINT_01</div>
            <div className="text-4xl font-serif tracking-tighter italic">98.4%</div>
            <div className="font-mono text-[10px] text-gray-400 mt-2 uppercase">Deliverability Rating</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] text-gray-500 mb-1">DATA_POINT_02</div>
            <div className="text-4xl font-serif tracking-tighter italic">12.5k</div>
            <div className="font-mono text-[10px] text-gray-400 mt-2 uppercase">Monthly Sequences</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] text-gray-500 mb-1">DATA_POINT_03</div>
            <div className="text-4xl font-serif tracking-tighter italic">4.2x</div>
            <div className="font-mono text-[10px] text-gray-400 mt-2 uppercase">Avg. ROI Increase</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] text-gray-500 mb-1">DATA_POINT_04</div>
            <div className="text-4xl font-serif tracking-tighter italic">0.0ms</div>
            <div className="font-mono text-[10px] text-gray-400 mt-2 uppercase">Latency on LLM</div>
          </div>
        </div>

        <hr className="border-t border-gray-200" />
        
        {/* Features Grid */}
        <section className="py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-4">Core Infrastructure</p>
              <h2 className="font-serif text-4xl font-bold tracking-tight italic">Engineered for Results.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-gray-200">
            {/* Card 1 */}
            <div className="p-12 border-r border-b border-gray-200 bg-[#f7f7f5] hover:bg-white transition-colors group relative overflow-hidden">
              <div className="mb-12">
                <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-6">Prompt-to-sequence</h3>
              <p className="text-gray-600 leading-[1.7] mb-8">
                Describe your value proposition in natural language and watch Coldcraft architect a 6-step touchpoint strategy in seconds.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
            {/* Card 2 */}
            <div className="p-12 border-r border-b border-gray-200 bg-[#f7f7f5] hover:bg-white transition-colors group relative overflow-hidden">
              <div className="mb-12">
                <div className="w-8 h-8 border-2 border-black flex items-end justify-between p-1">
                  <div className="w-1.5 h-3 bg-black"></div>
                  <div className="w-1.5 h-5 bg-black"></div>
                  <div className="w-1.5 h-4 bg-black"></div>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-6">Personalization Scoring</h3>
              <p className="text-gray-600 leading-[1.7] mb-8">
                Real-time verification of your emails. If it sounds like a template, our AI makes it for manual review to protect your reputation.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
            {/* Card 3 */}
            <div className="p-12 border-r border-b border-gray-200 bg-[#f7f7f5] hover:bg-white transition-colors group relative overflow-hidden">
              <div className="mb-12">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-black"></div>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-6">Automated Dispatch</h3>
              <p className="text-gray-600 leading-[1.7] mb-8">
                Smart scheduling that respects timezones and inbox warm-up protocols to ensure 99.9% deliverability rates.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          </div>
        </section>

        {/* Asymmetric Layout Section */}
        <section className="py-24 bg-[#f7f7f5] -mx-12 px-12 grid grid-cols-12 gap-6 border-y border-gray-200">
          <div className="col-span-12 lg:col-span-5 py-12">
            <h2 className="font-serif text-5xl font-bold tracking-tight italic leading-tight mb-8">The Terminal <br />Dashboard.</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-black pl-6">
                <p className="font-mono text-[11px] text-black mb-2 uppercase">Verification Protocol</p>
                <p className="text-sm text-gray-600">Every email is verified through a 3-step handshake protocol before dispatch.</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <p className="font-mono text-[11px] text-gray-400 mb-2 uppercase">Dynamic Warming</p>
                <p className="text-sm text-gray-600">Automated domain warming that scales naturally with your campaign volume.</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <p className="font-mono text-[11px] text-gray-400 mb-2 uppercase">CRM Bi-Sync</p>
                <p className="text-sm text-gray-600">Instant synchronization with Salesforce, HubSpot, and Pipedrive.</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center p-8">
            <div className="w-full bg-white border border-black aspect-video relative overflow-hidden flex flex-col">
              <div className="h-10 border-b border-black flex items-center px-4 justify-between bg-white">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-black"></div>
                  <div className="w-2.5 h-2.5 bg-black"></div>
                  <div className="w-2.5 h-2.5 bg-black"></div>
                </div>
                <div className="font-mono text-[9px] tracking-widest text-black">TERMINAL_INSTANCE_01</div>
              </div>
              <div className="flex-1 p-6 font-mono text-[10px] text-gray-600 leading-relaxed bg-white">
                <div className="text-black mb-2">&gt; INITIALIZING_COLDCRAFT_SEQ...</div>
                <div className="mb-1">[OK] PROSPECT_LIST_LOADED (N=4281)</div>
                <div className="mb-1">[OK] NEURAL_ENGINE_ONLINE</div>
                <div className="mb-1">[OK] SENTIMENT_FILTERS_ACTIVE</div>
                <div className="mb-4 text-black italic">&gt; RUNNING_SIMULATION_V4.2</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-3">
                    <div className="text-gray-400 mb-1">PROXIMITY_MATCH</div>
                    <div className="text-xl text-black">0.94</div>
                  </div>
                  <div className="border border-gray-200 p-3">
                    <div className="text-gray-400 mb-1">INTENT_SCORE</div>
                    <div className="text-xl text-black">A+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 border-b border-gray-200">
          <div className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4 text-gray-500 text-center">DEPLOYMENT TIERS</p>
            <h2 className="font-serif text-5xl font-bold tracking-tight italic text-center mb-8">Engineered for Scale.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-t border-gray-200">
            {plans.map((plan) => (
              <div key={plan.id} className={`p-12 border-r border-b border-gray-200 flex flex-col ${plan.variant === 'premium' ? 'bg-white' : 'bg-[#f7f7f5]'} group relative overflow-hidden transition-all hover:bg-white`}>
                <div className="mb-12">
                  <h2 className="font-serif text-3xl font-bold italic mb-4">{plan.name}</h2>
                  <div className="flex items-baseline gap-1">
                    {plan.price !== 'Custom' && <span className="text-sm font-mono text-gray-500">$</span>}
                    <span className="text-5xl font-serif tracking-tighter italic">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-sm font-mono text-gray-500">/mo</span>}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-12 h-14">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-16 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-black mt-0.5 shrink-0" strokeWidth={3} />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/dashboard" 
                  className={`w-full py-4 font-mono text-[11px] uppercase tracking-widest text-center transition-all block ${
                    plan.variant === 'premium' 
                      ? 'bg-black text-white hover:bg-[#474747]' 
                      : 'border border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>

                {plan.variant === 'premium' && (
                  <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-mono text-[8px] uppercase tracking-[0.2em] transform rotate-0 translate-y-0">
                    Recommended
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="space-y-4">
            <div className="text-2xl font-bold font-serif text-black italic">Coldcraft AI</div>
            <div className="font-mono text-[10px] tracking-tighter text-gray-600">
              © 2026 COLDCRAFT AI. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="h-10 w-10 border border-black flex items-center justify-center grayscale opacity-60 hover:opacity-100 cursor-pointer">
              <Globe className="w-4 h-4" />
            </div>
            <div className="h-10 w-10 border border-black flex items-center justify-center grayscale opacity-60 hover:opacity-100 cursor-pointer">
              <Terminal className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

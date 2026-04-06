"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Terminal, Check } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function DashboardShowcase() {
  const [activeDashboardPoint, setActiveDashboardPoint] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dashboardRef = useRef(null);
  const isInView = useInView(dashboardRef, { amount: 0 });

  useEffect(() => {
    if (isPaused || !isInView) return;

    const timer = setInterval(() => {
      setActiveDashboardPoint((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, isInView]);

  return (
    <section id="dashboard" ref={dashboardRef} className="py-24 bg-[#f7f7f5] -mx-12 px-12 grid grid-cols-12 gap-6 border-y border-gray-200 overflow-hidden transform-gpu">
      <div className="col-span-12 lg:col-span-5 py-12">
        <div className="h-[180px] mb-8 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={activeDashboardPoint}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-serif italic text-6xl text-black leading-tight will-change-transform pb-4"
            >
              {activeDashboardPoint === 0 && <>The <br />Dashboard.</>}
              {activeDashboardPoint === 1 && <>Review <br />Leads Patterns.</>}
              {activeDashboardPoint === 2 && <>Library <br />Templates Engine.</>}
            </motion.h2>
          </AnimatePresence>
        </div>
        
        <div className="space-y-8">
          {[
            { title: "The engine that never sleeps.", content: "Coldcraft processes millions of data points to understand exactly what triggers a positive response in your industry." },
            { title: "Deep vetting in seconds.", content: "Analyze entire lead lists for behavioral signals, company health, and sentiment before sending a single byte." },
            { title: "Modular Architecture.", content: "Access a repository of high-converting, AI-optimized templates designed for every vertical." }
          ].map((point, index) => (
            <div 
              key={index} 
              className="relative pl-6 py-1 cursor-pointer group"
              onClick={() => {
                setActiveDashboardPoint(index);
                setIsPaused(true);
              }}
            >
              {/* Base Gray Line */}
              <div className="absolute left-0 top-0 w-[2px] h-full bg-gray-200" />
              
              {/* Animated Black Line */}
              {activeDashboardPoint === index && (
                <motion.div 
                  layoutId="activeDashboardBar"
                  className="absolute left-0 top-0 w-[2px] h-full bg-black z-10 will-change-transform"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <p className={`font-mono text-[11px] mb-2 uppercase transition-all duration-700 ${activeDashboardPoint === index ? 'text-black translate-x-1' : 'text-gray-400'}`}>
                {point.title}
              </p>
              <p className={`text-sm transition-all duration-700 leading-relaxed ${activeDashboardPoint === index ? 'text-gray-600 translate-x-1' : 'text-gray-400'}`}>
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 flex items-center justify-center p-8">
        <div className="w-full bg-[#f7f7f5] p-2 relative aspect-[16/10] overflow-hidden border border-black shadow-2xl">
          <AnimatePresence>
            <motion.div
              key={activeDashboardPoint}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              <Image 
                src={activeDashboardPoint === 0 ? "/screen.webp" : activeDashboardPoint === 1 ? "/review.webp" : "/template.webp"} 
                alt={activeDashboardPoint === 0 ? "Dashboard Interface" : activeDashboardPoint === 1 ? "Review Leads Interface" : "Templates Interface"} 
                fill
                className="object-cover object-top grayscale"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('platform');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let handleScrollInProgress = false;

    const handleScroll = () => {
      if (handleScrollInProgress) return;
      handleScrollInProgress = true;

      window.requestAnimationFrame(() => {
        const dashboardSection = document.getElementById('dashboard');
        const pricingSection = document.getElementById('pricing');
        const scrollPosition = window.scrollY + 200;

        if (pricingSection && scrollPosition >= pricingSection.offsetTop) {
          setActiveTab('pricing');
        } else if (dashboardSection && scrollPosition >= dashboardSection.offsetTop) {
          setActiveTab('resources');
        } else {
          setActiveTab('platform');
        }
        handleScrollInProgress = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="preloader"
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center relative">
            <div className="flex items-center text-8xl font-serif italic text-black tracking-tighter">
              <motion.span
                initial={{ scale: 0.8, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >C</motion.span>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden whitespace-nowrap inline-flex"
              >
                <span className="ml-1 tracking-tighter pr-16 block">OLDCRAFT</span>
              </motion.div>
            </div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120%" }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-black mt-4 opacity-20" 
            />
          </div>
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="min-h-screen flex flex-col bg-white"
        >
          {/* TopNavBar */}
          <nav className="bg-white border-b border-gray-200 flex justify-between items-center w-full px-12 h-16 sticky top-0 z-50">
            <Link href="/" className="text-3xl font-bold font-serif text-black italic">
              COLDCRAFT
            </Link>
            <div className="hidden md:flex items-center space-x-12 relative">
              {[
                { id: 'platform', label: 'Platform', onClick: handlePlatformClick },
                { id: 'resources', label: 'Resources', onClick: (e: any) => {
                  e.preventDefault();
                  const lenis = (window as any).lenis;
                  if (lenis) lenis.scrollTo('#dashboard', { duration: 2 });
                  else document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' });
                }},
                { id: 'pricing', label: 'Pricing', onClick: handlePricingClick },
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={item.onClick}
                  className={`font-mono text-[11px] uppercase tracking-widest transition-colors relative pb-1 ${
                    activeTab === item.id ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-black will-change-transform"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="bg-black text-white px-8 py-2.5 font-mono text-[11px] uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-[0.98]">
                Start for free
              </Link>
            </div>
          </nav>

          <main className="max-w-[1440px] mx-auto px-12 w-full">
            {/* Hero Section */}
            <section className="py-24 grid grid-cols-12 gap-6 overflow-hidden">
              <div className="col-span-12 lg:col-span-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-8 text-gray-500">AI-POWERED REVENUE GENERATION</p>
                <h1 className="font-serif italic text-6xl text-black leading-tight mb-10">
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
                <div className="w-full aspect-[4/5] border border-black p-2 bg-white">
                  <Image 
                    src="https://picsum.photos/seed/tech/800/1000?grayscale" 
                    alt="Technical Precision" 
                    width={800} 
                    height={1000} 
                    className="w-full h-full object-cover grayscale"
                    priority
                  />
                </div>
              </div>
            </section>

            <hr className="border-t border-gray-200" />

            {/* Metrics Data Ribbon */}
            <div className="py-12 grid grid-cols-12 gap-6 relative overflow-hidden">
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
            
            <DashboardShowcase />

            {/* Features Grid - Core Infrastructure */}
            <section className="py-24">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mb-4">Core Infrastructure</p>
                  <h2 className="font-serif italic text-6xl text-black leading-tight">Engineered for Results.</h2>
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

            {/* Pricing Section */}
            <section id="pricing" className="py-24 border-b border-gray-200">
              <div className="mb-16">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4 text-gray-500 text-center">DEPLOYMENT TIERS</p>
                <h2 className="font-serif italic text-6xl text-black leading-tight text-center mb-8">Engineered for Scale.</h2>
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
                <div className="text-2xl font-bold font-serif text-black italic">COLDCRAFT</div>
                <div className="font-mono text-[10px] tracking-tighter text-gray-600">
                  © 2026 COLDCRAFT. ALL RIGHTS RESERVED.
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
        </motion.div>
      )}
    </AnimatePresence>

  );
}

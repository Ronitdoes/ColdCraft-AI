"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Upload, BarChart2, Package, Settings, FileText, ArrowLeft } from 'lucide-react';

import { motion } from 'framer-motion';

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'DASHBOARD', href: '/dashboard', icon: LayoutDashboard },
    { name: 'UPLOAD LEADS', href: '/dashboard/upload', icon: Upload },
    { name: 'TEMPLATES', href: '/dashboard/templates', icon: FileText },
    { name: 'ANALYTICS', href: '/dashboard/analytics', icon: BarChart2 },
    { name: 'INVENTORY', href: '/dashboard/inventory', icon: Package },
    { name: 'SETTINGS', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col pt-8 z-40">
      <div className="px-8 mb-12">
        <h1 className="text-2xl font-bold font-serif italic tracking-tight text-black">COLDCRAFT</h1>
      </div>
      <nav className="flex-grow px-4 space-y-1 relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 transition-colors group relative ${
                isActive ? 'text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-black z-0"
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    mass: 0.8
                  }}
                />
              )}
              <Icon className={`relative z-10 mr-3 w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`} strokeWidth={1.5} />
              <span className="relative z-10 font-mono text-[11px] uppercase tracking-widest">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-6 border-t border-gray-100">
        <Link 
          href="/" 
          className="flex items-center px-4 py-3 text-gray-500 hover:text-black transition-colors group"
        >
          <ArrowLeft className="mr-3 w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
          <span className="font-mono text-[10px] uppercase tracking-widest">Back to Website</span>
        </Link>
      </div>
    </aside>
  );
}

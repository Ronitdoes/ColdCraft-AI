import { Loader2 } from 'lucide-react';

export default function DashboardLoading() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in duration-500">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-t-2 border-b-2 border-black rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-black animate-pulse"></div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black font-bold">Initializing Node</p>
          <div className="flex items-center space-x-1">
            <span className="w-1 h-1 bg-gray-300 animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1 h-1 bg-gray-300 animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1 h-1 bg-gray-300 animate-bounce"></span>
          </div>
        </div>
        <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">Coldcraft Strategic Core v4.0.2</p>
      </div>
    </div>
  );
}

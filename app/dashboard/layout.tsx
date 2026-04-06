import { Sidebar } from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Sidebar />
      <main className="ml-64 flex-grow flex flex-col">
        {children}
      </main>
    </div>
  );
}

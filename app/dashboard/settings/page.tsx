import { User, Mail, Shield, Key, Bell, CreditCard, Monitor, CheckCircle2 } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="px-12 pb-24 pt-10 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <h1 className="font-serif italic text-6xl text-black mb-2">System Configuration</h1>
        <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500">Manage account, billing, and API preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Settings Navigation */}
        <div className="md:col-span-3 space-y-1">
          <button className="w-full text-left px-4 py-3 bg-black text-white font-mono text-[11px] uppercase tracking-widest flex items-center space-x-3">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-mono text-[11px] uppercase tracking-widest flex items-center space-x-3 transition-colors">
            <Mail className="w-4 h-4" />
            <span>Email Accounts</span>
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-mono text-[11px] uppercase tracking-widest flex items-center space-x-3 transition-colors">
            <Shield className="w-4 h-4" />
            <span>Security</span>
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-mono text-[11px] uppercase tracking-widest flex items-center space-x-3 transition-colors">
            <Key className="w-4 h-4" />
            <span>API Keys</span>
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-mono text-[11px] uppercase tracking-widest flex items-center space-x-3 transition-colors">
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-mono text-[11px] uppercase tracking-widest flex items-center space-x-3 transition-colors">
            <CreditCard className="w-4 h-4" />
            <span>Billing</span>
          </button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-9 space-y-8">
          {/* Profile Section */}
          <div className="border border-gray-200 bg-white p-8">
            <h2 className="font-serif text-2xl mb-6">Personal Information</h2>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-[#f7f7f5] border border-gray-200 flex items-center justify-center font-serif text-2xl italic text-gray-400">
                JD
              </div>
              <div>
                <button className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-black bg-black text-white hover:bg-gray-800 transition-colors mb-2 block">
                  Upload Avatar
                </button>
                <p className="font-mono text-[9px] text-gray-500 uppercase">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                <input type="text" defaultValue="John" className="w-full border border-gray-200 px-4 py-2 font-mono text-[11px] focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full border border-gray-200 px-4 py-2 font-mono text-[11px] focus:outline-none focus:border-black" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input type="email" defaultValue="john.doe@example.com" className="w-full border border-gray-200 px-4 py-2 font-mono text-[11px] focus:outline-none focus:border-black" />
            </div>

            <div className="mb-8">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Timezone</label>
              <select className="w-full border border-gray-200 px-4 py-2 font-mono text-[11px] focus:outline-none focus:border-black appearance-none bg-white">
                <option>(UTC-08:00) Pacific Time (US & Canada)</option>
                <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                <option>(UTC+00:00) Greenwich Mean Time</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button className="font-mono text-[11px] uppercase tracking-widest px-6 py-3 border border-black bg-black text-white hover:bg-gray-800 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Connected Accounts Section */}
          <div className="border border-gray-200 bg-white p-8">
            <h2 className="font-serif text-2xl mb-2">Connected Accounts</h2>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-6">Manage your sending infrastructure</p>

            <div className="space-y-4">
              <div className="border border-gray-200 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#f7f7f5] flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-black font-bold mb-1">Google Workspace</div>
                    <div className="font-mono text-[9px] text-gray-500">john@company.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-green-600 font-mono text-[9px] uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Connected
                  </div>
                  <button className="font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-black">Disconnect</button>
                </div>
              </div>

              <div className="border border-gray-200 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#f7f7f5] flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-black font-bold mb-1">Microsoft 365</div>
                    <div className="font-mono text-[9px] text-gray-500">Not connected</div>
                  </div>
                </div>
                <button className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

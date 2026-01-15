
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, WifiOff } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left side: Content */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-12 border-r border-slate-100 z-10">
        <div className="flex items-center space-x-3 mb-8">
          <div className="px-2 py-1 bg-blue-600 text-[10px] font-black text-white rounded uppercase tracking-tighter">System Status: Active</div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Deployment ID: CCC-2025-01</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-6 tracking-tight">
          Community <br />
          <span className="text-blue-600">Cold Chain</span>
        </h1>
        
        <p className="text-xl text-slate-500 mb-10 max-w-md font-medium leading-relaxed">
          Autonomous, solar-powered modular refrigeration units providing high-performance cold storage for rural agriculture and healthcare.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/monitoring"
            className="flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-blue-900/10 group"
          >
            Live Monitoring
            <Activity className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
          <Link
            to="/assistant"
            className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20"
          >
            Farmer Assistant
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Technical Capabilities */}
        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100">
          <div className="flex items-center space-x-3 text-slate-600">
            <WifiOff className="w-5 h-5 text-indigo-500" />
            <span className="text-xs font-bold uppercase tracking-tight">Edge Computing</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-tight">Solar Autonomous</span>
          </div>
        </div>
      </div>

      {/* Right side: Hardware Image - Visualizing the White Modular Unit with Solar */}
      <div className="flex-[1.2] relative bg-slate-100 group">
        <img
          src="https://images.unsplash.com/photo-1591193680689-dc0808c10567?auto=format&fit=crop&q=80&w=1600"
          alt="White Modular Solar-Powered Cold Storage Unit"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Visual Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-90 md:opacity-100"></div>
        <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
        
        {/* Floating Spec Panel */}
        <div className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 max-w-sm ring-1 ring-slate-900/5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Telemetry Stream</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">#ALPHA-88</div>
          </div>
          <div className="space-y-5">
            <div className="flex justify-between items-end border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Internal Temp</span>
              <span className="text-2xl font-mono font-bold text-slate-900 tracking-tighter">3.8°C</span>
            </div>
            <div className="flex justify-between items-end border-b border-slate-100 pb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Solar Harvest</span>
              <span className="text-2xl font-mono font-bold text-slate-900 tracking-tighter">342.5 W</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Comm Buffer</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[9px] font-black rounded uppercase">Standby</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

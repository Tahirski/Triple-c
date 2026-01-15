
import React, { useState } from 'react';
import { WifiOff, Database, SignalHigh, CheckCircle, ToggleLeft, ToggleRight, List, Cpu } from 'lucide-react';

const OfflineMode: React.FC = () => {
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  const mockLogs = [
    { time: "2024-05-15 08:42:01", event: "SENSOR_READ", data: "TEMP: 3.8C, HUM: 82%", status: "CACHED" },
    { time: "2024-05-15 08:45:12", event: "ARDUINO_HB", data: "CORE_01_OK", status: "CACHED" },
    { time: "2024-05-15 08:50:00", event: "AI_DIAG", data: "TOMATO_EST_12D", status: "BUFFERED" },
    { time: "2024-05-15 09:00:22", event: "POWER_POLL", data: "PV: 340W, BAT: 92%", status: "BUFFERED" },
    { time: "2024-05-15 09:15:05", event: "LORA_PING", data: "P2P_MESH_SEARCH", status: "WAITING" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="flex-1">
          <div className="flex items-center space-x-2 text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">
            <WifiOff className="w-5 h-5" />
            <span>Edge Resilience</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight uppercase">
            Offline Operations
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Manage your unit when network signal is unavailable. The local Edge system continues to monitor and buffer data for later synchronization.
          </p>

          <div className={`p-8 rounded-[2rem] shadow-xl transition-all duration-500 ${isOfflineMode ? 'bg-indigo-900 text-white ring-4 ring-indigo-500/20' : 'bg-white border border-slate-200 text-slate-900'}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-2xl ${isOfflineMode ? 'bg-indigo-500' : 'bg-slate-100 text-slate-500'}`}>
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className={`font-bold text-lg ${isOfflineMode ? 'text-white' : 'text-slate-900'}`}>Offline Mode</div>
                  <div className={`text-sm ${isOfflineMode ? 'text-indigo-200' : 'text-slate-500'}`}>{isOfflineMode ? 'Enabled (Edge Sync Active)' : 'Disabled (Cloud Sync Active)'}</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOfflineMode(!isOfflineMode)}
                className="focus:outline-none transition-transform active:scale-95"
                aria-label="Toggle Offline Mode"
              >
                {isOfflineMode ? (
                  <ToggleRight className="w-14 h-14 text-emerald-400" />
                ) : (
                  <ToggleLeft className="w-14 h-14 text-slate-300" />
                )}
              </button>
            </div>
            
            <p className={`text-sm leading-relaxed ${isOfflineMode ? 'text-indigo-100' : 'text-slate-500'}`}>
              {isOfflineMode 
                ? "Offline Mode is currently ON. The system is operating independently and writing all telemetry to local non-volatile storage." 
                : "Offline Mode is currently OFF. The unit is attempting real-time streaming to the cloud dashboard. Toggle this to enter autonomous mode."}
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Database className="w-20 h-20" />
            </div>
            <div className="flex items-end justify-between mb-2">
              <div className="font-black text-slate-900 uppercase text-xs tracking-widest">Local SSD Buffer</div>
              <div className="text-emerald-500 font-bold text-sm">94.2% Available</div>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[5.8%] transition-all duration-1000"></div>
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-mono font-bold text-slate-400">
              <span>USED: 7.42 GB</span>
              <span>TOTAL: 128 GB</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <SignalHigh className="w-6 h-6 text-indigo-500 mb-3" />
              <div className="font-bold text-slate-900">Mesh Sync</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">POLLING...</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-500 mb-3" />
              <div className="font-bold text-slate-900">Integrity</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">MD5_VERIFIED</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-50 border border-slate-200 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg">
            <List className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-slate-900">Edge Log Explorer</div>
            <div className="text-sm text-slate-500">View real-time cached telemetry packets currently in the unit's local buffer.</div>
          </div>
        </div>
        <button 
          onClick={() => setShowLogs(!showLogs)}
          className={`px-8 py-3 rounded-xl font-bold transition-all shadow-sm ${showLogs ? 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100' : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-900'}`}
        >
          {showLogs ? 'Hide Explorer' : 'View Local Logs'}
        </button>
      </div>

      {showLogs && (
        <div className="mt-8 bg-slate-950 rounded-[2.5rem] border border-slate-800 shadow-2xl p-8 animate-in slide-in-from-top-4 duration-500 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-white font-mono text-sm uppercase tracking-[0.3em]">LOCAL_STORAGE_RAW_STREAM</h4>
            <div className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20 rounded">ENCRYPTION: AES-256</div>
          </div>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-800">
            {mockLogs.map((log, i) => (
              <div key={i} className="group flex items-start space-x-6 py-4 border-b border-white/5 hover:bg-white/5 transition-colors px-4 rounded-xl">
                <span className="text-slate-500 font-mono text-[10px] w-32 shrink-0">{log.time}</span>
                <span className="text-indigo-400 font-bold font-mono text-[11px] w-28 uppercase shrink-0">[{log.event}]</span>
                <span className="text-slate-300 font-mono text-[11px] flex-1">data:// {log.data}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${log.status === 'CACHED' ? 'bg-blue-500/10 text-blue-400' : 'bg-amber-500/10 text-amber-400'}`}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Ready for mesh batch-sync
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfflineMode;

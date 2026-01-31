"use client";
import { Bell, User, Settings } from 'lucide-react';

interface TopBarProps {
  userName: string;
}

export function TopBar({ userName }: TopBarProps) {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm z-40">
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-slate-800">Bienvenido</h2>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-slate-600 hover:text-slate-900 transition-colors">
          <Bell size={20} />
        </button>
        <button className="text-slate-600 hover:text-slate-900 transition-colors">
          <Settings size={20} />
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-900">{userName}</p>
            <p className="text-xs text-slate-500">Administrador</p>
          </div>
          <button className="text-slate-600 hover:text-slate-900 transition-colors">
            <User size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

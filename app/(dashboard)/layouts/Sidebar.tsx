"use client";
import { 
  LayoutDashboard, 
  DollarSign, 
  ChefHat, 
  Package, 
  TrendingUp, 
  Utensils, 
  GraduationCap, 
  MessageSquare,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'financial', icon: DollarSign, label: 'Finanzas' },
    { id: 'recipes', icon: ChefHat, label: 'Recetas & Costos' },
    { id: 'inventory', icon: Package, label: 'Inventario' },
    { id: 'consulting', icon: TrendingUp, label: 'Consultoría 360' },
    { id: 'catering', icon: Utensils, label: 'Catering Lab' },
    { id: 'education', icon: GraduationCap, label: 'Educación' },
    { id: 'support', icon: MessageSquare, label: 'Soporte' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6 shadow-lg overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">MetriQ 360</h1>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              currentPage === item.id
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-slate-700">
        <button
          onClick={() => onNavigate('login')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
        >
          <LogOut size={20} />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}

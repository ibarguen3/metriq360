"use client";

import { KPICard } from '@components/common/KPICard';
import { StatusBadge } from '@components/common/StatusBadge';
import { DollarSign, TrendingUp, Wallet, Percent, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
type StatusType = 'success' | 'warning' | 'critical' | 'info';

interface Dish {
  name: string;
  sales: number;
  margin: number;
  profitability: StatusType;
  label: string;
}

const salesData = [
  { month: 'Jul', ventas: 45000, costos: 28000 },
  { month: 'Ago', ventas: 52000, costos: 31000 },
  { month: 'Sep', ventas: 48000, costos: 29000 },
  { month: 'Oct', ventas: 61000, costos: 35000 },
  { month: 'Nov', ventas: 58000, costos: 33000 },
  { month: 'Dic', ventas: 67000, costos: 38000 },
];

const costDistribution = [
  { name: 'Ingredientes', value: 38, color: '#3B82F6' },
  { name: 'Personal', value: 32, color: '#10B981' },
  { name: 'Alquiler', value: 15, color: '#F59E0B' },
  { name: 'Servicios', value: 10, color: '#8B5CF6' },
  { name: 'Otros', value: 5, color: '#EC4899' },
];

const topDishes: Dish[] = [
  { name: 'Salmón a la Parrilla', sales: 156, margin: 68, profitability: 'success', label: 'Alta' },
  { name: 'Risotto de Hongos', sales: 134, margin: 72, profitability: 'success', label: 'Alta' },
  { name: 'Hamburguesa Premium', sales: 178, margin: 58, profitability: 'warning', label: 'Media' },
  { name: 'Ensalada César', sales: 142, margin: 75, profitability: 'success', label: 'Alta' },
  { name: 'Pasta Carbonara', sales: 98, margin: 65, profitability: 'warning', label: 'Media' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Resumen financiero y operacional del negocio</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Ingresos Totales"
          value="$285,000"
          change="+12.5%"
          icon={DollarSign}
          trend="up"
        />
        <KPICard
          title="Rentabilidad"
          value="38%"
          change="+2.3%"
          icon={TrendingUp}
          trend="up"
        />
        <KPICard
          title="Costo de Ventas"
          value="$112,000"
          change="-5.2%"
          icon={Wallet}
          trend="down"
        />
        <KPICard
          title="Margen Neto"
          value="42%"
          change="+1.8%"
          icon={Percent}
          trend="up"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Ventas vs Costos (Últimos 6 meses)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ventas" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="costos" stroke="#EF4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Distribución de Costos</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {costDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Dishes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Platos Más Rentables</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-slate-700 font-semibold">Plato</th>
                <th className="text-right py-3 px-4 text-slate-700 font-semibold">Ventas</th>
                <th className="text-right py-3 px-4 text-slate-700 font-semibold">Margen %</th>
                <th className="text-center py-3 px-4 text-slate-700 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {topDishes.map((dish, index) => (
                <tr key={index} className="border-b hover:bg-slate-50">
                  <td className="py-3 px-4 text-slate-900">{dish.name}</td>
                  <td className="text-right py-3 px-4 text-slate-900">{dish.sales}</td>
                  <td className="text-right py-3 px-4 text-slate-900">{dish.margin}%</td>
                  <td className="text-center py-3 px-4">
                    <StatusBadge status={dish.profitability} label={dish.label} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

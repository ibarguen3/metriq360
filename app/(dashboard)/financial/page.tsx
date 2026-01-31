"use client";

import { useState } from "react";
import { Button } from "@components/ui/button";
import {Download, Filter, Calendar} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";


const plData = [
  { category: 'Ingresos', subcategory: 'Ventas de Productos', oct: 120000000, nov: 150000000, dec: 130000000, total: 400000000 },
  { category: 'Ingresos', subcategory: 'Servicios', oct: 80000000, nov: 90000000, dec: 85000000, total: 255000000 },
  { category: 'Gastos', subcategory: 'Coste de Ventas', oct: -60000000, nov: -75000000, dec: -70000000, total: -205000000 },
  { category: 'Gastos', subcategory: 'Marketing', oct: -20000000, nov: -25000000, dec: -22000000, total: -67000000 },
  { category: 'Gastos', subcategory: 'Operaciones', oct: -15000000, nov: -18000000, dec: -16000000, total: -49000000 },
];

const cashFlowData = [
  { concept: 'Ingresos por Ventas', amount: 255000000, type: 'income' },
  { concept: 'Ingresos por Servicios', amount: 8500000, type: 'income' },
  { concept: 'Coste de Ventas', amount: -75555555, type: 'expense' },
  { concept: 'Marketing', amount: -22222222, type: 'expense' },
  { concept: 'Operaciones', amount: -16666666, type: 'expense' },
  { concept: 'Flujo de Caja Neto', amount: 139999999, type: 'balance' },
];

const kpiData = [
  { metric: 'Margen de Beneficio', value: '34%', target: '>35%', status: 'warning' },
  { metric: 'Crecimiento de Ventas', value: '+18%', target: '+25%', status: 'warning' },
  { metric: 'Rentabilidad Operativa', value: '+12%', target: '+18%', status:'critical'},
];

export default function FinancialPage() {
    const [selectedPeriod, setSelectedPeriod] = useState('Q4 2025');

  return (
   <div className="space-y-6">
    <div className="flex items-center justify-between">
        <div>
         <h1>Gestión Financiera</h1>
         <p className="text-muted-foreground mt-1">analisis detallado de tus finanzas</p>
         </div>
         <div className=" flex gap-3">
           <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4"/>
            {selectedPeriod}
           </Button>
           <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4"/>
            filtros
            </Button>
            <Button className="gap-2 bg-secondary hover:bg-secondary/90">
            <Download className="w-4 h-4"/>
            Exportar
            </Button>

         </div>
        </div>

         <Tabs defaultValue="pl" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="pl">P&L</TabsTrigger>
          <TabsTrigger value="cashflow">Flujo de Caja</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
        </TabsList>


        <TabsContent value="pl" className="mt-6">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left">Categoría</th>
                    <th className="px-6 py-4 text-left">Subcategoría</th>
                    <th className="px-6 py-4 text-right">Octubre</th>
                    <th className="px-6 py-4 text-right">Noviembre</th>
                    <th className="px-6 py-4 text-right">Diciembre</th>
                    <th className="px-6 py-4 text-right font-semibold">Total Q4</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {plData.map((row, index) => (
                    <tr key={index} className="hover:bg-accent/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.category}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.subcategory}</td>
                      <td className={`px-6 py-4 text-right ${row.oct < 0 ? 'text-critical' : 'text-success'}`}>
                        ${(Math.abs(row.oct) / 1000000).toFixed(0)}M
                      </td>
                      <td className={`px-6 py-4 text-right ${row.nov < 0 ? 'text-critical' : 'text-success'}`}>
                        ${(Math.abs(row.nov) / 1000000).toFixed(0)}M
                      </td>
                      <td className={`px-6 py-4 text-right ${row.dec < 0 ? 'text-critical' : 'text-success'}`}>
                        ${(Math.abs(row.dec) / 1000000).toFixed(0)}M
                      </td>
                      <td className={`px-6 py-4 text-right font-semibold ${row.total < 0 ? 'text-critical' : 'text-success'}`}>
                        ${(Math.abs(row.total) / 1000000).toFixed(0)}M
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-muted font-semibold">
                    <td className="px-6 py-4" colSpan={2}>Beneficio Neto</td>
                    <td className="px-6 py-4 text-right text-success">$52M</td>
                    <td className="px-6 py-4 text-right text-success">$77M</td>
                    <td className="px-6 py-4 text-right text-success">$68M</td>
                    <td className="px-6 py-4 text-right text-success">$198M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>


        <TabsContent value="cashflow" className="mt-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="mb-6">Flujo de Caja - Diciembre 2025</h3>
            <div className="space-y-3">
              {cashFlowData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    item.type === 'balance'
                      ? 'bg-primary/5 border-2 border-primary/20'
                      : 'bg-accent/50 hover:bg-accent transition-colors'
                  }`}
                >
                  <span className={item.type === 'balance' ? 'font-semibold' : ''}>{item.concept}</span>
                  <span
                    className={`font-semibold ${
                      item.type === 'balance'
                        ? 'text-primary text-xl'
                        : item.type === 'income'
                        ? 'text-success'
                        : 'text-critical'
                    }`}
                  >
                    {item.amount >= 0 ? '+' : ''}${(item.amount / 1000000).toFixed(0)}M
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="kpis" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpiData.map((kpi, index) => {
              const statusColors = {
                success: 'border-l-success bg-success/5',
                warning: 'border-l-warning bg-warning/5',
                critical: 'border-l-critical bg-critical/5',
              };

              return (
                <div
                  key={index}
                  className={`bg-card p-6 rounded-lg border border-border border-l-4 ${statusColors[kpi.status as keyof typeof statusColors]}`}
                >
                  <p className="text-sm text-muted-foreground mb-2">{kpi.metric}</p>
                  <p className="text-3xl font-semibold mb-3">{kpi.value}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Objetivo:</span>
                    <span className="font-medium">{kpi.target}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

       
    </div>

  );
}

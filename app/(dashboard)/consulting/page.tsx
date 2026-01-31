"use client";

import { StatusBadge } from '@components/common/StatusBadge';
import { CheckCircle, Clock, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@components/ui/button';
import { Progress } from '@components/ui/progress';

const consultingTimeline = [
  {
    phase: 'Diagnóstico Inicial',
    status: 'success' as const,
    date: '15 Dic 2025',
    completedTasks: 8,
    totalTasks: 8,
    progress: 100,
    findings: [
      'Margen bruto por debajo del estándar de la industria (38% vs 45%)',
      'Alto desperdicio en ingredientes frescos (15% mensual)',
      'Falta de sistema de control de costos por platillo',
      'Oportunidad de optimización en menú (20% de items generan 5% de ventas)',
    ],
  },
  {
    phase: 'Plan de Acción',
    status: 'success' as const,
    date: '20 Dic 2025',
    completedTasks: 12,
    totalTasks: 12,
    progress: 100,
    actions: [
      'Implementación de sistema de costeo por receta',
      'Capacitación de personal en control de porciones',
      'Rediseño de menú enfocado en platillos rentables',
      'Establecimiento de KPIs semanales',
      'Negociación con proveedores principales',
    ],
  },
  {
    phase: 'Implementación',
    status: 'warning' as const,
    date: 'En progreso',
    completedTasks: 7,
    totalTasks: 10,
    progress: 70,
    actions: [
      '✅ Sistema de costeo implementado en METRIQ 360',
      '✅ Capacitación completada - Fase 1',
      '✅ Nuevo menú diseñado y aprobado',
      '⏳ Pruebas piloto del nuevo menú (En curso)',
      '⏳ Optimización de procesos de compra',
      '⏳ Implementación de alertas automáticas',
    ],
  },
  {
    phase: 'Seguimiento',
    status: 'info' as const,
    date: 'Próximo',
    completedTasks: 0,
    totalTasks: 6,
    progress: 0,
    actions: [
      'Monitoreo de KPIs mensuales',
      'Reuniones de revisión quincenal',
      'Ajustes basados en resultados',
      'Capacitación continua del equipo',
    ],
  },
];

const results = [
  { metric: 'Margen Bruto', before: '38%', after: '43.2%', improvement: '+5.2%', status: 'success' as const },
  { metric: 'Desperdicio', before: '15%', after: '8%', improvement: '-7%', status: 'success' as const },
  { metric: 'Costo por Platillo', before: '$50.000', after: '$40.800', improvement: '-18.4%', status: 'success' as const },
  { metric: 'Tiempo de Preparación', before: '25 min', after: '20 min', improvement: '-20%', status: 'success' as const },
];

export default function ConsultingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Consultoría 360</h1>
          <p className="text-muted-foreground mt-1">Tu plan personalizado de transformación</p>
        </div>
        <Button className="bg-secondary hover:bg-secondary/90">Agendar Sesión</Button>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-white/80 text-sm mb-1">Progreso General</p>
            <p className="text-4xl font-bold">68%</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Fases Completadas</p>
            <p className="text-4xl font-bold">2/4</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Tareas Completadas</p>
            <p className="text-4xl font-bold">27/36</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Próxima Revisión</p>
            <p className="text-xl font-semibold mt-3">20 Jun 2024</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h2>Plan de Acción</h2>
        {consultingTimeline.map((phase, index) => (
          <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    phase.status === 'success' ? 'bg-success/10 text-success' :
                    phase.status === 'warning' ? 'bg-warning/10 text-warning' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {phase.status === 'success' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : phase.status === 'warning' ? (
                      <Clock className="w-6 h-6" />
                    ) : (
                      <FileText className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3>{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground">{phase.date}</p>
                  </div>
                </div>
                <StatusBadge
                  status={phase.status}
                  label={
                    phase.status === 'success' ? 'Completado' :
                    phase.status === 'warning' ? 'En Progreso' :
                    'Pendiente'
                  }
                />
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progreso</span>
                  <span className="font-medium">{phase.completedTasks}/{phase.totalTasks} tareas</span>
                </div>
                <Progress value={phase.progress} className="h-2" />
              </div>

              {/* Content */}
              {phase.findings && (
                <div className="space-y-2">
                  <p className="text-sm font-medium mb-2">Hallazgos Principales:</p>
                  {phase.findings.map((finding, idx) => (
                    <div key={idx} className="flex gap-2 text-sm">
                      <span className="text-muted-foreground">•</span>
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              )}

              {phase.actions && (
                <div className="space-y-2">
                  <p className="text-sm font-medium mb-2">Acciones:</p>
                  {phase.actions.map((action, idx) => (
                    <div key={idx} className="flex gap-2 text-sm p-2 bg-accent/50 rounded">
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6 text-success" />
          <h2>Resultados Obtenidos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div key={index} className="p-4 bg-accent/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-3">{result.metric}</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-xl line-through text-muted-foreground">{result.before}</span>
                <span className="text-2xl font-bold text-success">→ {result.after}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-success">{result.improvement}</span>
                <span className="text-xs text-muted-foreground">mejora</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

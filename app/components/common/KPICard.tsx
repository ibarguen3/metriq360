import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  status?: 'success' | 'warning' | 'critical';
}

export function KPICard({ title, value, change, trend, icon: Icon, status }: KPICardProps) {
  const trendColor = trend === 'up' ? 'text-success' : trend === 'down' ? 'text-critical' : 'text-muted-foreground';
  
  const statusColors = {
    success: 'border-l-success',
    warning: 'border-l-warning',
    critical: 'border-l-critical',
  };

  return (
    <div className={`bg-card p-6 rounded-lg border border-border ${status ? `border-l-4 ${statusColors[status]}` : ''} hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-semibold mt-2">{value}</p>
          {change && (
            <div className={`flex items-center gap-1 mt-3 ${trendColor}`}>
              {trend === 'up' && <TrendingUp className="w-4 h-4" />}
              {trend === 'down' && <TrendingDown className="w-4 h-4" />}
              <span className="text-sm">{change}</span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

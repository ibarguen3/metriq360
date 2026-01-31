interface StatusBadgeProps {
  status: 'success' | 'warning' | 'critical' | 'info';
  label: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const styles = {
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    critical: 'bg-critical/10 text-critical border-critical/20',
    info: 'bg-primary/10 text-primary border-primary/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {label}
    </span>
  );
}

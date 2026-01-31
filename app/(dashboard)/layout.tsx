"use client";
import '../../styles/global.css';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Sidebar } from './layouts/Sidebar';
import { TopBar } from './layouts/TopBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '/dashboard';
  const router = useRouter();
  const segments = pathname.split('/').filter(Boolean);
  const currentPage = segments[0] || 'dashboard';

  const onNavigate = useCallback(
    (page: string) => {
      if (page === 'login') {
        router.push('/login');
        return;
      }
      router.push(`/${page}`);
    },
    [router]
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <TopBar userName="Admin" />

      <main className="ml-64 pt-16">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

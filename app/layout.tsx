import type { Metadata } from 'next';
import '../styles/global.css';


export const metadata: Metadata = {
  title: 'MetriQ 360',
  description: 'Sistema de Gestión Integral para Restaurantes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

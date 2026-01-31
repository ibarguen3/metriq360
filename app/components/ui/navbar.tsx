"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <Link
            href="/"
            className="text-xl font-bold text-slate-900 tracking-tight"
          >
            Metrq<span className="text-blue-600">360</span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            
            {/* PRODUCTOS */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("productos")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="hover:text-blue-600 transition">
                Productos
              </button>

              {openMenu === "productos" && (
                <ul className="absolute top-full left-0 mt-3 w-80 rounded-xl border bg-white shadow-lg p-4 space-y-2">
                  <li className="hover:bg-slate-50 p-2 rounded">Software POS para PYMES</li>
                  <li className="hover:bg-slate-50 p-2 rounded">POS para bares y restaurantes</li>
                  <li className="hover:bg-slate-50 p-2 rounded">Software para hoteles y alojamientos</li>
                  <li className="hover:bg-slate-50 p-2 rounded">Software administrativo para PYMES</li>
                  <li className="hover:bg-slate-50 p-2 rounded">Software de nómina</li>
                  <li className="hover:bg-slate-50 p-2 rounded">ERP para grandes empresas</li>
                </ul>
              )}
            </li>

            {/* CONTADORES */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("contadores")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="hover:text-blue-600 transition">
                Contadores
              </button>

              {openMenu === "contadores" && (
                <ul className="absolute top-full left-0 mt-3 w-64 rounded-xl border bg-white shadow-lg p-4 space-y-2">
                  <li>
                    <Link
                      href="/software-contadores"
                      className="block hover:bg-slate-50 p-2 rounded"
                    >
                      Software para contadores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contadores-aliados"
                      className="block hover:bg-slate-50 p-2 rounded"
                    >
                      Contadores aliados
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><Link href="/servicio-soporte" className="hover:text-blue-600">Servicio y soporte</Link></li>
            <li><Link href="/contacto" className="hover:text-blue-600">Contacto</Link></li>
            <li><Link href="/nosotros" className="hover:text-blue-600">Nosotros</Link></li>
            <li><Link href="/comunidad" className="hover:text-blue-600">Comunidad</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          </ul>

          {/* SEARCH + ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-48 rounded-full border px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1.5 text-slate-400">🔍</span>
            </div>

            <Link href="/login">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition cursor-pointer">
                Ingresar
              </span>
            </Link>

            <Link
              href="/prueba"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Prueba ahora
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden border-t py-4 space-y-3 text-sm">
            <span className="block">Productos</span>
            <span className="block">Contadores</span>
            <Link href="/servicio-soporte" className="block">Servicio y soporte</Link>
            <Link href="/contacto" className="block">Contacto</Link>
            <Link href="/nosotros" className="block">Nosotros</Link>
            <Link href="/comunidad" className="block">Comunidad</Link>
            <Link href="/blog" className="block">Blog</Link>

            <div className="pt-4 flex gap-3">
              <Link href="/LoginPage">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
                  Ingresar
                </span>
              </Link>

              <Link
                href="/prueba"
                className="bg-blue-600 text-white px-4 py-2 rounded-full"
              >
                Prueba ahora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

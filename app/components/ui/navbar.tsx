"use client";


import { useState } from "react";
import Link from "next/link";
import { productsMenu } from "@components/ui/productsmenu";
import Dropdown from "@components/ui/Dropdown";


  const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/Logo_metriq_slogan-03.png"
              alt="Metrq360"
              className="w-40"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">

            {/* PRODUCTOS – MEGA MENU */}
            <li className="relative group">
             
              <span className="cursor-pointer px-4 py-2 text-slate-800 hover:text-blue-600">
              Productos
               </span>

              <div
                className="
                     invisible opacity-0 absolute left-1/2 top-full mt-4 w-[800px] max-h-[70vh] overflow-y-auto -translate-x-1/2 rounded-xl border bg-white shadow-lg p-6 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                
              
                <div className="grid grid-cols-3 gap-8">
                  {productsMenu.map((section) => (
                    <div key={section.title}>
                      <h4 className="mb-3 text-sm font-semibold text-slate-900">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="#"
                              className="block text-sm leading-relaxed text-slate-600 hover:text-blue-600"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {/* CONTADORES */}
            <Dropdown
              title="Contadores"
              items={[
                "Software para Contadores",
                "Plan de Contadores y Aliados",
              ]}
            />

            <li>
              <Link href="/servicio-soporte" className="hover:text-blue-600">
                Servicio y Soporte
              </Link>
            </li>

            <li>
              <Link href="/contacto" className="hover:text-blue-600">
                Contacto
              </Link>
            </li>

            {/* NOSOTROS */}
            <Dropdown
              title="Nosotros"
              items={[
                "Nuestra trayectoria",
                "Trabaja con nosotros",
              ]}
            />

            {/* COMUNIDAD */}
            <Dropdown
              title="Comunidad"
              items={[
                "Promociones",
                "Plan de Referidos",
                "Webinars",
                "Aliados",
                "Servicios API",
                "Universidad Loggro",
                "Comunidad Enterprise",
              ]}
            />

            {/* BLOG */}
            <Dropdown
              title="Blog"
              items={[
                "Nómina y Nómina Electrónica",
                "Facturación Electrónica",
                "Software Contable",
                "Régimen Simple",
                "Sistema POS",
                "Software de Inventarios",
                "Software ERP",
                "Software para hoteles",
              ]}
            />
          </ul>

          {/* ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium hover:text-blue-600">
              Ingresar
            </Link>
            <Link
              href="/prueba"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Prueba ahora
            </Link>
          </div>

          {/* MOBILE */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden py-4 space-y-3 text-sm">
            {[
              "Productos",
              "Contadores",
              "Servicio y Soporte",
              "Contacto",
              "Nosotros",
              "Comunidad",
              "Blog",
            ].map((item) => (
              <div key={item} className="border-b py-2">
                {item}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
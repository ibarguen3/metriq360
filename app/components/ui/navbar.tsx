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
        <div className="flex h-18 items-center justify-between">
          
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

         {/* seach*/}
         
<div className="hidden lg:flex items-center ml-6">
  <form className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64 shadow-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
    <input
      type="text"
      placeholder="Buscar..."
      id="caja-busqueda"
      className="w-full bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
    />
  </form>
</div>



         {/* ACTIONS */}
    <div className="hidden lg:flex items-center space-x-4 ml-8">
      <Link
        href="/login"
        className="text-sm font-medium text-slate-700 hover:text-blue-600"
        >
        Ingresar
       </Link>
       <Link
       href="/registro"
       className="rounded-full bg-[#029281] px-4 py-2 text-sm font-semibold text-white hover:bg-[#027a6c] transition-colors duration-200"
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
        
       {/* MOBILE MENU */}
{mobileOpen && (
  <div className="lg:hidden bg-white border-t shadow-md">
    <div className="px-6 py-6 space-y-6">

      {/* SEARCH MOBILE */}
      <form className="flex items-center bg-gray-100 rounded-xl px-4 py-3 shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>

        <input
          type="text"
          placeholder="Buscar..."
          className="w-full bg-transparent focus:outline-none text-base text-gray-700 placeholder-gray-400"
        />
      </form>

      {/* MENU ITEMS */}
      <div className="space-y-4">
        {[
          
          "Productos",
          "Contadores",
          "Servicio y Soporte",
          "Contacto",
          "Nosotros",
          "Comunidad",
          "Blog",
        ].map((item) => (
          <div
            key={item}
            className="
              py-3
              text-base
              sm:text-lg
              font-medium
              text-slate-800
              border-b border-gray-100
              hover:text-blue-600
              transition
              cursor-pointer
            "
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  </div>
)}

      </nav>
    </header>
  );
};

export default Navbar;
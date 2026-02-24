"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { productsMenu } from "@components/ui/productsmenu";
import Dropdown from "@components/ui/Dropdown";

interface MobileDropdownProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: () => void;
}

const MobileDropdown = ({
  title,
  items,
  isOpen,
  onToggle,
  onItemClick,
}: MobileDropdownProps) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 font-semibold text-slate-800"
      >
        {title}
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pl-4 pb-4 space-y-3 text-slate-600">
          {items.map((item) => (
            <li key={item}>
              <Link
                href="#"
                onClick={onItemClick}
                className="hover:text-blue-600 block"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  /* 🔒 BLOQUEAR SCROLL */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  /*  CERRAR SI CAMBIA A DESKTOP */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/Logo_metriq_slogan-03.png"
              alt="Metriq360"
              className="w-40"
            />
          </Link>

          {/* DESKTOP MENU  */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <li className="relative group">
              <span className="cursor-pointer px-4 py-2 hover:text-blue-600">
                Productos
              </span>

              <div className="invisible opacity-0 absolute left-1/2 top-full mt-4 w-[900px] max-h-[70vh] overflow-y-auto -translate-x-1/2 rounded-2xl border bg-white shadow-xl p-8 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-3 gap-10">
                  {productsMenu.map((section) => (
                    <div key={section.title}>
                      <h4 className="mb-4 text-sm font-semibold text-slate-900">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="#"
                              className="block text-sm text-slate-600 hover:text-blue-600"
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

            <Dropdown
              title="Nosotros"
              items={["Nuestra trayectoria", "Trabaja con nosotros"]}
            />

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

          {/* SEARCH DESKTOP */}
          <div className="hidden lg:flex items-center ml-6">
            <form className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-64 shadow-sm">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-transparent focus:outline-none text-sm"
              />
            </form>
          </div>

          {/* ACTIONS DESKTOP */}
          <div className="hidden lg:flex items-center space-x-4 ml-8">
            <Link href="/login" className="hover:text-blue-600">
              Ingresar
            </Link>
            <Link
              href="/registro"
              className="rounded-full bg-[#029281] px-5 py-2 text-white font-semibold hover:bg-[#027a6c] transition"
            >
              Prueba ahora
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="lg:hidden text-3xl"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Menú</span>
            <button onClick={closeMenu}>✕</button>
          </div>

          {/* SEARCH MOBILE */}
          <form className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full bg-transparent focus:outline-none text-sm"
            />
          </form>

          {/* PRODUCTOS */}
          <MobileDropdown
            title="Productos"
            items={productsMenu.flatMap((section) => section.items)}
            isOpen={activeDropdown === "Productos"}
            onToggle={() =>
              setActiveDropdown(
                activeDropdown === "Productos" ? null : "Productos"
              )
            }
            onItemClick={closeMenu}
          />

          {/* CONTADORES */}
          <MobileDropdown
            title="Contadores"
            items={[
              "Software para Contadores",
              "Plan de Contadores y Aliados",
            ]}
            isOpen={activeDropdown === "Contadores"}
            onToggle={() =>
              setActiveDropdown(
                activeDropdown === "Contadores" ? null : "Contadores"
              )
            }
            onItemClick={closeMenu}
          />

          <MobileDropdown
          title="Comunidad"
          items={[
               "promociones",
               "Plan de Referidos",
               "Webinars",
               "Aliados",
               "Servicios API",
               "Comunidad Enterprite" 
          ]}
          isOpen={activeDropdown === "Comunidad" }
          onToggle={()=>
              setActiveDropdown(
                activeDropdown === " Comunidad" ? null : " Comunidad"
              )
          }
             onItemClick={closeMenu}
          />

          <MobileDropdown
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
          isOpen={activeDropdown === "Comunidad" }
          onToggle={()=>
              setActiveDropdown(
                activeDropdown === " Comunidad" ? null : " Comunidad"
              )
          }
             onItemClick={closeMenu}
          />

          
{/* MENU ITEMS MOBILE */}
<ul className="space-y-4 text-sm font-medium text-slate-700">
  {/* LINKS SIMPLES */}
  <li>
    <Link href="/servicio-soporte" onClick={() => setMobileOpen(false)}>
      Servicio y Soporte
    </Link>
  </li>
  <li>
    <Link href="/contacto" onClick={() => setMobileOpen(false)}>
      Contacto
    </Link>
  </li>
  <li>
    <Link href="/login" onClick={() => setMobileOpen(false)}>
      Ingresar
    </Link>
  </li>
  <li>
    <Link
      href="/registro"
      onClick={() => setMobileOpen(false)}
      className="rounded-full bg-[#029281] px-4 py-2 text-sm font-semibold text-white hover:bg-[#027a6c] transition-colors duration-200"
    >
      Prueba ahora
    </Link>
  </li>
</ul>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
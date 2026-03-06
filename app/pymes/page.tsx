"use client";
import React from "react";
import Navbar from "../components/ui/navbar";
import { useState, useEffect } from "react";


export default function PlanesPrecio2026() {
 const [visible, setvisible] = useState(true);
// Función para gestionar el scroll (efecto de ocultar/mostrar el header)
 useEffect(() => {
  let ultimo_scroll =0;
  const gestionarecroll = () => {
    const scroll_actual = window.scrollY;
    if(scroll_actual>ultimo_scroll){
      setvisible(false); //  ocultar al bajar
    }else{
      setvisible(true); // mostrar al subir
    }
    ultimo_scroll = scroll_actual;
  };

  window.addEventListener("scroll", gestionarecroll);
  return () => {
    window.removeEventListener("scroll", gestionarecroll);
  };
}, []);

  return (
      <div>
      <Navbar />
      < header className={`fixed top-0 w-full h-16 bg-blue-600 text-white transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
          }`}
>
    <nav className="">
        <a href="">
            <span className="">
            <img src="/images/planes-precio-2026.png"
                alt="Planes de Precio 2026"
                className="w-full h-auto object-cover" />
        </span>
        </a>

        
    </nav>
    </header>
          
          <section className="pricing-section">
            <div className="container mx-auto px-4 py-12">
              <div className="pricing-header">
                <h1  className="title">planes y precios del software para pymes</h1>
                <h2 className="subtitle">Elige entre nuestros planes de Software para Pymes y aprovecha la flexibilidad
                  de precios para encontrar la opción que mejor se adapte a tu negocio.</h2>
              </div>
            </div>
          </section>

          <section className="">
            <div className="container mx-auto px-4 py-12">
              <div className="pricing-cards grid grid-cols-1 md:grid-cols-3 gap-8">
              </div>
              <ul
          role="tablist"
          className="flex justify-center gap-4 list-none p-0 border-b border-gray-300 pb-4"
          >
  <li className="cursor-pointer px-6 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-[#00225e] hover:text-white transition">
    <a href="#">
      POS Electrónico
    </a>
  </li>

  <li className="cursor-pointer px-6 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-[#00225e] hover:text-white transition">
    <a href="#">
      POS Restaurantes y bares
    </a>
  </li>

  <li className="cursor-pointer px-6 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-[#00225e] hover:text-white transition">
    <a href="#">
      Facturación Electrónica
    </a>
  </li>

      <li className="cursor-pointer px-6 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-[#00225e] hover:text-white transition">
      <a href="#">
      Software Administrativo y Contable
     </a>
     </li>

       <li className="cursor-pointer px-6 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-[#00225e] hover:text-white transition">
        <a href="#">
        Nómina
              </a>
         </li>
        </ul>

        <div className="mt-8">
          <div className="max-w-sm bg-white rounded-xl shadow-md p-6 relative border">

  {/* BADGE */}
  <span className="absolute -top-3 left-6 bg-cyan-600 text-white text-xs px-3 py-1 rounded-md font-semibold">
    ACTUALIZADO 2026
  </span>

  {/* TITULO */}
  <h3 className="text-xl font-bold text-[#00225e] mt-4">
    POS Tienda
  </h3>

  <p className="text-gray-500 text-sm mt-1">
    Plan Básico y económico para los que buscan cumplir con la DIAN
  </p>

     {/* PRECIO */}
    <div className="mt-4">
      <p className="text-3xl font-bold text-[#00225e]">
        $54.990 <span className="text-sm font-normal text-gray-500">/ mes</span>
        </p>
      <p className="text-gray-500 text-sm">
        $659.880 / año
        </p>
      </div>
       {/* BOTON */}
        <button className="mt-4 bg-[#00225e] text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
        Comprar
      </button>
      {/* DIVISOR */}
      <hr className="my-6 border-dashed" />
       {/* CARACTERISTICAS */}
      <h4 className="font-semibold text-[#00225e] mb-3">
          Características
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
        <li>✔ Facturas electrónicas: <b>350 FE</b> (ILIMITADA OPCIONAL)</li>
      <li>✔ 1 Usuario</li>
      <li>✔ 1 Caja</li>
      <li>✔ POS Electrónico (Con Facturación Electrónica)</li>
      <li>✔ Soporte completo (correo, chat, whatsapp y atención telefónica personalizada)</li>
      <li>✔ Implantación personalizada</li>
      <li>✔ Manejo de caja y medios de pago</li>
      <li>
        ✔ Manejo de inventarios 
        <span className="line-through text-gray-400">300 items</span> 
        <span className="text-red-500 font-semibold">ILIMITADOS POR LANZAMIENTO</span>
      </li>
      <li>✔ App móvil</li>
    </ul>
    

</div>
        </div>

            </div>
          </section>
    </div>
  );
}

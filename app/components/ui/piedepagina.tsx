"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";


function Piedepagina() {
  return (
    <footer className="bg-white-100 text-white-700 pt-16">
      

      {/* = INFORMACIÓN  */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">
        
        {/* Sobre */}
        <div>
          <h3 className="font-semibold mb-4">Sobre Metriq 360</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Metriq 360 es una plataforma 100% colombiana que ofrece soluciones
            empresariales para la gestión administrativa, financiera y comercial.
          </p>
          <p className="mt-4 text-sm">🇨🇴 Colombia</p>
        </div>

        {/* Alcance */}
        <div>
          <h3 className="font-semibold mb-4">Alcance</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-[#00225e] hover:underline cursor-pointer">Sistema administrativo (ERP)</li>
            <li className="text-[#00225e-500 hover:underline cursor-pointer">Software de Nómina</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Sistema POS</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Facturación electrónica</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Software contable</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Sistema de inventario</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Programa para contadores</li>
          </ul>
        </div>

        {/* Conoce más */}
        <div>
          <h3 className="font-semibold mb-4">Conoce más</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Servicios API</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Metriq360 Pagos</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Planes Pymes</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Planes Restobar</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Planes Nómina</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Trabaja con nosotros</li>
            <li className="text-[#00225e]-500 hover:underline cursor-pointer">Contacto</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li> WhatsApp Comercial: <span className="text-[#00225e]-500">304 385 4956</span></li>
            <li> WhatsApp Servicio: <span className="text-[#00225e]-500">310 242 9665</span></li>
            <li> Servicio al Cliente: +57 (604) 604 3120</li>
            <li>  soporte@metriq360.com</li>
          </ul>
        </div>

      </div>

      {/*  BARRA INFERIOR  */}
<div className="border-t border-gray-300 py-6 text-center text-xs text-gray-500">
     <p>
        © 2026 Metriq 360 S.A.S — Todos los derechos reservados
      </p>
      <p className="mt-2">
       Política de privacidad · Términos y condiciones
      </p>

      {/* Íconos de redes sociales */}
       <div className="flex justify-center gap-4 mt-4 text-gray-600">
       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
       <FaFacebookF className="text-xl" />
        </a>
       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-xl" />
        </a>
         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <FaLinkedinIn className="text-xl" />
        </a>
      </div>
   </div>   

    </footer>
  );
}

export default Piedepagina;

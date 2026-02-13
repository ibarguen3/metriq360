"use client";

function Piedepagina() {
  return (
    <footer className="bg-white-100 text-white-700 pt-16">
      
      {/* ================= CERTIFICADOS ================= */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-2xl font-semibold text-orange-500 mb-10">
          Certificados <span className="text-gray-600 font-normal">con</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          <div className="flex flex-col items-center">
            <img src="/dian.png" alt="DIAN" className="h-14 mb-4" />
            <p className="text-xs text-gray-500 max-w-xs">
              Proveedor tecnológico autorizado por la DIAN para operaciones electrónicas obligatorias.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/icontec.png" alt="Icontec" className="h-14 mb-4" />
            <p className="text-xs text-gray-500 max-w-xs">
              Desplegamos productos siguiendo lineamientos de normas ISO.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/credibanco.png" alt="Credibanco" className="h-14 mb-4" />
            <p className="text-xs text-gray-500 max-w-xs">
              Certificados y aliados para integrar tecnología de pagos.
            </p>
          </div>

        </div>
      </div>

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
            <li className="text-orange-500 hover:underline cursor-pointer">Sistema administrativo (ERP)</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Software de Nómina</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Sistema POS</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Facturación electrónica</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Software contable</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Sistema de inventario</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Programa para contadores</li>
          </ul>
        </div>

        {/* Conoce más */}
        <div>
          <h3 className="font-semibold mb-4">Conoce más</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-orange-500 hover:underline cursor-pointer">Servicios API</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Metriq360 Pagos</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Planes Pymes</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Planes Restobar</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Planes Nómina</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Trabaja con nosotros</li>
            <li className="text-orange-500 hover:underline cursor-pointer">Contacto</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>📱 WhatsApp Comercial: <span className="text-orange-500">304 385 4956</span></li>
            <li>📱 WhatsApp Servicio: <span className="text-orange-500">310 242 9665</span></li>
            <li>☎ Servicio al Cliente: +57 (604) 604 3120</li>
            <li>✉ soporte@metriq360.com</li>
          </ul>
        </div>

      </div>

      {/* ================= BARRA INFERIOR ================= */}
      <div className="border-t border-gray-300 py-6 text-center text-xs text-gray-500">
        <p>
          © 2026 Metriq 360 S.A.S — Todos los derechos reservados
        </p>
        <p className="mt-2">
          Política de privacidad · Términos y condiciones
        </p>
      </div>

    </footer>
  );
}

export default Piedepagina;

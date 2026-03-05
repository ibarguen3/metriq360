"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function ContactoYPie() {
  return (
    <>
      {/* ================= SECCIÓN CONTACTO ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* TÍTULO */}
          <h2 className="text-center text-3xl font-bold text-[#00225e] mb-16">
            Contáctanos
          </h2>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* CARD IZQUIERDA - INFO */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md">
                
                <p className="text-sm text-[#00225e] font-semibold mb-2">
                  Servicio al Cliente:
                </p>
                <p className="text-gray-700 mb-4">+57 (604) 604 3120</p>

                <p className="text-sm text-[#00225e] font-semibold mb-2">
                  E-mail:
                </p>
                <p className="text-gray-700 mb-4 underline">
                  comercial.matriq360@gmail.com
                </p>

                <p className="text-sm text-[#00225e] font-semibold mb-2">
                  Soporte:
                </p>
                <p className="text-gray-700 mb-4 underline">
                  soporte@matriq360.com
                </p>

                <p className="text-sm text-[#00225e] font-semibold mb-2">
                  WhatsApp Comercial:
                </p>
                <p className="text-gray-700 mb-4">304 385 4956</p>

                <p className="text-sm text-[#00225e] font-semibold mb-2">
                  WhatsApp Servicio:
                </p>
                <p className="text-gray-700">310 242 9665</p>
              </div>

              <img
                src="/persona.png"
                alt="Asesor"
                className="absolute -bottom-24 -left-10 w-56 hidden lg:block"
              />
            </div>

            {/* CARD DERECHA - FORM */}
            <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md mx-auto w-full">
              <form className="space-y-4">
                
                <input
                  type="text"
                  placeholder="* Nombre completo"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#029281]"
                />

                <input
                  type="email"
                  placeholder="* Correo electrónico"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#029281]"
                />

                {/* TELÉFONO */}
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 border rounded-lg px-3 text-sm">
                    🇨🇴 <span className="text-gray-500">+57</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="flex-1 rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#029281]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="* Nombre empresa"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-[#029281]"
                />

                <select
                  defaultValue=""
                  className="w-full rounded-lg border px-4 py-3 text-sm text-gray-500 focus:ring-2 focus:ring-[#029281]"
                >
                  <option value="" disabled>
                    * Tipo de empresa
                  </option>
                  <option>Pequeña empresa</option>
                  <option>Mediana empresa</option>
                  <option>Gran empresa</option>
                  <option>Startup</option>
                </select>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#029281] py-3 text-sm font-semibold text-white hover:bg-[#029281]/80 transition"
                >
                  Enviar
                </button>

                <p className="text-[11px] text-center text-gray-500 mt-4 leading-snug">
                  Al enviar su información, autoriza a Matriq360 a tratar sus datos
                  personales conforme a nuestra{" "}
                  <span className="text-[#029281] underline cursor-pointer">
                    Política de Privacidad
                  </span>.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white pt-16">
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">
          
          <div>
            <h3 className="font-semibold mb-4">Sobre Metriq 360</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Metriq 360 es una plataforma 100% colombiana que ofrece soluciones
              empresariales para la gestión administrativa, financiera y comercial.
            </p>
            <p className="mt-4 text-sm">🇨🇴 Colombia</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Alcance</h3>
            <ul className="space-y-2 text-sm text-[#00225e]">
              <li className="hover:underline cursor-pointer">Sistema administrativo (ERP)</li>
              <li className="hover:underline cursor-pointer">Software de Nómina</li>
              <li className="hover:underline cursor-pointer">Sistema POS</li>
              <li className="hover:underline cursor-pointer">Facturación electrónica</li>
              <li className="hover:underline cursor-pointer">Software contable</li>
              <li className="hover:underline cursor-pointer">Sistema de inventario</li>
              <li className="hover:underline cursor-pointer">Programa para contadores</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Conoce más</h3>
            <ul className="space-y-2 text-sm text-[#00225e]">
              <li className="hover:underline cursor-pointer">Servicios API</li>
              <li className="hover:underline cursor-pointer">Metriq360 Pagos</li>
              <li className="hover:underline cursor-pointer">Planes Pymes</li>
              <li className="hover:underline cursor-pointer">Planes Restobar</li>
              <li className="hover:underline cursor-pointer">Planes Nómina</li>
              <li className="hover:underline cursor-pointer">Trabaja con nosotros</li>
              <li className="hover:underline cursor-pointer">Contacto</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>WhatsApp Comercial: <span className="text-[#00225e]">304 385 4956</span></li>
              <li>WhatsApp Servicio: <span className="text-[#00225e]">310 242 9665</span></li>
              <li>Servicio al Cliente: +57 (604) 604 3120</li>
              <li>soporte@metriq360.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-300 py-6 text-center text-xs text-gray-500">
          <p>© 2026 Metriq 360 S.A.S — Todos los derechos reservados</p>
          <p className="mt-2">
            Política de privacidad · Términos y condiciones
          </p>

          <div className="flex justify-center gap-4 mt-4 text-gray-600">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>

      </footer>
    </>
  );
}

export default ContactoYPie;
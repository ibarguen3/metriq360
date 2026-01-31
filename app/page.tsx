"use client";

import Navbar from '@components/ui/navbar';

export default function Home() {
  const productos = [
    {
      nombre: "metrq360 Pymes",
      descripcion: [
        "Software 100% en la nube para hacer crecer tu PYME.",
        "Gestiona la facturación POS, cartera, inventario y mucho más.",
        "Cúmplele a la DIAN con la facturación electrónica y todo lo requerido por ley.",
        "Diseñado para que los empresarios y sus contadores colaboren a través de la tecnología.",
      ],
      link: "/metrq360-pymes",
    },
    {
      nombre: "metrq360 Nómina",
      descripcion: [
        "Software Nómina 100% web para negocios de todos los tamaños.",
        "Potente motor de cálculos automáticos, te ahorra tiempo y errores.",
        "Automatiza tus pagos a bancos, PILA y los reportes de nómina electrónica.",
        "Incorpora portal para que tus empleados se autogestionen.",
      ],
      link: "/metrq360-nomina",
    },
    {
      nombre: "metrq360 Contabilidad",
      descripcion: [
        "Sistema contable integral con cierre fiscal automático.",
        "Reportes financieros en tiempo real para tomar decisiones.",
        "Cumple con normativas contables y fiscales colombianas.",
        "Integración con tus sistemas bancarios y empresariales.",
      ],
      link: "/metrq360-contabilidad",
    },
    {
      nombre: "metrq360 Inventario",
      descripcion: [
        "Gestión de inventario con control de stock en tiempo real.",
        "Alertas automáticas para reabastecer productos.",
        "Códigos de barras y trazabilidad de movimientos.",
        "Valúa tu inventario con diferentes métodos.",
      ],
      link: "/metrq360-inventario",
    },
    {
      nombre: "metrq360 CRM",
      descripcion: [
        "Gestiona tus clientes y relaciones comerciales eficientemente.",
        "Registro completo de contactos, historial de ventas y seguimiento.",
        "Automatiza tu proceso de ventas y mejora la conversión.",
        "Aumenta la satisfacción y lealtad de tus clientes.",
      ],
      link: "/metrq360-crm",
    },
    {
      nombre: "metrq360 Facturación",
      descripcion: [
        "Facturación electrónica completa según normas DIAN.",
        "Genera facturas, remisiones y notas crédito al instante.",
        "Descuentos, impuestos y retenciones configurables.",
        "Histórico completo de facturas y reportes de venta.",
      ],
      link: "/metrq360-facturacion",
    },
  ];

  return (
    <div>
      <Navbar />

      <section className='bg-gray-100 py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>Software administrativo y contable de gestion empresarial</h2>
          <p className='text-center text-gray-700 mb-8'>
            Software agil y robusto{' '}
            <span className='text-blue-600 font-semibold'>
              para hacer{' '}
              <span className='text-green-600 font-semibold'>
                mas eficiente tu negocio
              </span>
            </span>
          </p>
        </div>
      </section>

      <div className='bg-white py-12'>
        <div className='container mx-auto px-4'>
          <span className='block mb-8'>
            <img src='/features.png' alt='Características del software' className='mx-auto' />
          </span>
        </div>
      </div>

      <div className='py-12'>
        <h3 className='text-2xl font-bold text-center mb-12'>¿Por qué elegir nuestro software?</h3>
        
        <div className="container mx-auto px-4 py-10">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 font-sans">
    Lo que hacemos - Nuestros productos
  </h2>

  {/* Grid para alinear horizontalmente */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {productos.map((producto, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <h3 className="text-lg font-semibold text-white font-sans text-center">
            {producto.nombre}
          </h3>
        </div>

        {/* contenido */}
        <div className="p-4 flex flex-col h-full">
          <ul className="space-y-2 text-sm text-gray-700 font-sans mb-4">
            {producto.descripcion &&
              Array.isArray(producto.descripcion) &&
              producto.descripcion.map((linea, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✓</span>
                  <span>{linea}</span>
                </li>
              ))}
          </ul>

          {/* Botón */}
          <div className="mt-auto pt-4">
            <a
              href={producto.link}
              className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold text-sm"
            >
              Conocer más
            </a>
          </div>
        </div>
       </div>
     ))}
   </div>
  </div>
 </div>

 <section className='bg-gray-100 py-12'>
        <div className='container mx-auto px-4'>
        

        </div>

 </section>
     



   </div>
  );
}

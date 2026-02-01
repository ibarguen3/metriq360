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

    <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-8 px-4">
  {/* Sección izquierda: Quiénes somos */}
  <div className="md:w-1/2">
    <h4 className="text-center md:text-left text-gray-800 font-sans">Quiénes somos</h4>
    <span className="block mt-4 text-center md:text-left text-gray-600">Nuestra Experiencia</span>
    <p className="mt-2 text-center md:text-left text-gray-600">
      Con más de 10 años de experiencia en el desarrollo de software administrativo y contable, hemos ayudado a numerosas empresas a
      optimizar sus procesos y mejorar su eficiencia operativa. Nuestro equipo de expertos está comprometido con la innovación y la excelencia,
      brindando soluciones tecnológicas que se adaptan a las necesidades cambiantes del mercado.
    </p>
  </div>

  {/* Imagen al centro/derecha */}
  <div className="md:w-1/2">
    <img src="/experiencia.png" alt="Nuestra experiencia" className="mx-auto md:mx-0 mt-6 w-full max-w-md" />
  </div>
</div>

{/* Sección inferior: Cómo lo hacemos */}
<div className="mt-12 px-4">
  <h4 className="text-center text-gray-800 font-sans">Cómo lo hacemos</h4>
  <span className="block mt-4 text-center text-gray-600">La mejor tecnología</span>
  <ul className="list-disc list-inside mt-4 text-gray-600">
    <li>Aplicaciones 100% web para que operes tu negocio desde Colombia o desde cualquier lugar.</li>
    <li>Software parametrizable a tus necesidades y procesos.</li>
    <li>Servicio al cliente comprometido y conocedor. Todos nuestros asesores son colaboradores directos expertamente entrenados.</li>
  </ul>
</div>

  <div className=' my-12 px-4'>
    <div className=" carousel slide relative" data-te-carousel-init data-te-carousel-slide>
  <div className="relative w-full overflow-hidden">
    <div className="hidden" data-te-carousel-item>
      <img src="/img1.jpg" className="block w-full" />
    </div>
    <div className="hidden" data-te-carousel-item>
      <img src="/img2.jpg" className="block w-full" />
    </div>
  </div>
  <button data-te-slide="prev">‹</button>
  <button data-te-slide="next">›</button>
</div>

    </div>


        <section className='bg-gray-100 py-12'>
      <h2 className='text-2xl font-bold text-center mb-8'>Contáctanos</h2>
      <div className='container mx-auto px-4 text-center'>
        <form className="max-w-md mx-auto">
      <input
       type="text"
        placeholder="Nombre completo"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
       />

      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
       />

       <input
        type="tel"
        placeholder="Teléfono"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
       />

       <input
       type="text"
       placeholder="Nombre de la empresa"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

       {/*  Tipo de empresa */}
     <select
      className="w-full mb-4 p-2 border border-gray-300 rounded"
       defaultValue=""
       >
        <option value="" disabled>
         Selecciona el tipo de empresa
        </option>
        <option value="pequena">Pequeña empresa</option>
        <option value="mediana">Mediana empresa</option>
        <option value="grande">Gran empresa</option>
        <option value="startup">Startup</option>
        </select>

          <button
          type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
      >
          Enviar
          </button>
           </form>

        </div>


         <div className="max-w-md mx-auto mt-12 p-6 border border-gray-200 rounded-lg shadow">
  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
    Servicio al Cliente
  </h3>

  {/* Teléfono */}
  <div className="flex items-center mb-3">
    <span className="font-medium text-gray-700 w-40">Teléfono:</span>
    <a href="tel:+576046043120" className="text-blue-600 hover:underline">
      +57 (332) 604 312
    </a>
  </div>

  {/* Correo comercial */}
  <div className="flex items-center mb-3">
    <span className="font-medium text-gray-700 w-40">E-mail:</span>
    <a
      href="mailto:comercial.pyme@loggro.com"
      className="text-blue-600 hover:underline"
    >
      comercial.matriq360@gmail.com
    </a>
  </div>

  {/* Soporte */}
  <div className="flex items-center">
    <span className="font-medium text-gray-700 w-40">Servicio al Cliente (Colombia):</span>
    <span className="text-gray-600">soporte</span>
  </div>
</div>
  <div className="text-center mt-6 text-gray-600">
    <img src="/logo.png" alt="Logo de la empresa" className="mx-auto w-24" />
    </div>


     </section>



   </div>
  );
}

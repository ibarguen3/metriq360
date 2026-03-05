"use client";

import Navbar from '@components/ui/navbar';
import Piedepagina from '@components/ui/piedepagina';

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

      <section className=" section-hero">
      {/* Imagen que ocupa todo el ancho */}
      <img
      src="image1.1.png"
       alt="Características del software"
       className="w-full h-screen object-cover"
       />

         {/* Texto superpuesto */}
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
         <h2 className="text-[#029281] text-4xl font-bold mb-4 drop-shadow-lg ">
         Software administrativo y contable de gestión empresarial
         </h2>
         <p className="text-[#029281] text-4xl font-bold mb-4 drop-shadow-lg">
          Software ágil y robusto{" "}
          <span className="text-[#00225e] -300 font-semibold">
            para hacer{" "}
            <span className="text-[#029281] font-semibold">
              más eficiente tu negocio
           </span>
          </span>
       </p>
  </div>
</section>



    <div className='py-12'>
        <h3 className=' text-[#00225e] text-2xl font-bold text-center mb-1'>¿Por qué elegir nuestro software?</h3>
        
      <div className="container mx-auto px-4 py-1">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#00225e] font-sans">
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
              <div className="bg-gradient-to-r   from-[#00225e] to-[#029281] rounded-t-lg p-4 ">
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
              className="block text-center bg-[#029281] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold text-sm"
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

    <section className="max-w-7xl mx-auto px-6 py-10 mt-1 ">
  {/* Encabezado */}
  <div className=" text-center max-w-4xl mx-auto space-y-4">
    <span className="text-sm uppercase tracking-wide text-[#00225e]">
      Quiénes somos
    </span>
    <h2 className="text-4xl font-bold text-gray-800">
      Nuestra <span className="text-[#00225e]">Experiencia</span>
    </h2>
    <p className="text-gray-600 leading-relaxed">
      <strong>Más de 30 años de experiencia</strong> en el desarrollo de aplicaciones para tu negocio.  
      <strong> Más de 200 colaboradores</strong> comprometidos con el éxito de la pequeña, mediana y gran empresa en Colombia.  
      <strong>Más de 15.000 empresas</strong> satisfechas en  
      <strong> más de 200 municipios</strong> a lo largo y ancho del país.
    </p>
  </div>

  {/* Contenido inferior */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    {/* Texto izquierdo */}
    <div className="space-y-4">
      <span className="text-sm text-gray-500">Cómo lo hacemos</span>
      <h3 className="text-3xl font-semibold text-gray-800">
        La mejor <span className="text-[#00225e]">tecnología</span>
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Aplicaciones 100% web para que operes tu negocio desde Colombia o desde cualquier lugar.</li>
        <li>Software parametrizable a tus necesidades y procesos.</li>
        <li>Servicio al cliente comprometido y conocedor, con asesores directos expertamente entrenados.</li>
      </ul>
    </div>

    {/* Imagen derecha */}
    <div className="flex justify-center ">
      <img
        src="/12rbhp9.jpg"
        alt="Plataforma en dispositivos"
        className="w-full max-w-xl object-contain rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

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
    
  
   <Piedepagina/>

   </div>
  );
}

// data/menu.ts

interface ProductMenu {
  label: string;
  href: string;
}
 
interface ProductsMenu {
  title: string;
  items: ProductMenu[];
}
 

export const productsMenu = [
  {
    title: "Software administrativo para Pymes",
    items: [
      {
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        label: "Ventas y Recaudo",
        href: "/ventas-y-recaudo",
      },
      {
        label: "Contabilidad",
        href: "/contabilidad",
      },
      {
        label: "Facturación y Documentos Electrónicos",
        href: "/facturacion-y-documentos-electronicos",
      },
      {
        label: "Inventarios",
        href: "/inventarios",
      },
      {
        label: "Compras y Pagos",
        href: "/compras-y-pagos",
      },
      {
        label: "Impuestos y Retenciones",
        href: "/impuestos-y-retenciones",
      },
      {
        label: "Sistema de Gestión Empresarial (ERP)",
        href: "/sistema-de-gestion-empresarial-erp",
      },
    ],
  },
  {
    title: "Software de Nómina",
    items: [

      {
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        label: "Empleados, Beneficios y Novedades",
        href: "/empleados-beneficios-y-novedades",
      },
      {
        label: "Pagos de Nómina",
        href: "/pagos-de-nomina",
      },
      {
        label: "Incapacidades y Seguridad Social (PILA)",
        href: "/incapacidades-y-seguridad-social-pila",
      },
      {
        label: "Vacaciones y Prestaciones Sociales",
        href: "/vacaciones-y-prestaciones-sociales",
      },
      {
        label: "Retención en la Fuente (DIAN)",
        href: "/retencion-en-la-fuente-dian",
      },
      {
        label: "Nómina Electrónica (DIAN)",
        href: "/nomina-electronica-dian",
      },
      {
        label: "Ecosistema e Integraciones",
        href: "/ecosistema-e-integraciones",
      },
      {
        label: "Portal Transaccional para Empleados",
        href: "/portal-transaccional-para-empleados",
      },
    ],
  },
  {
    title: "POS para bares y restaurantes",
    items: [
      
      {
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        label: "Sistema POS",
        href: "/sistema-pos",
      },
      {
        label: "Menú Digital",
        href: "/menu-digital",
      },
      {
        label: "Delivery Apps",
        href: "/delivery-apps",
      },
      {
        label: "Inventarios",
        href: "/inventarios",
      },
      {
        label: "Facturación Electrónica",
        href: "/facturacion-electronica",
      },
    ],
  },
  {
    title: "Software para Hoteles y Alojamientos",
    items: [

      {
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        label: "Hoteles",
        href: "/hoteles",
      },
      {
        label: "Hostales",
        href: "/hostales",
      },
      {
        label: "Glampings",
        href: "/glampings",
      },
      {
        label: "Apartamentos",
        href: "/apartamentos",
      },
      {
        label: "Cabañas",
        href: "/cabañas",
      },
    ],
  },
  {
    title: "Software POS para Pymes",
    items: [
      {
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        label: "Supermercados",
        href: "/supermercados",
      },
      {
        label: "Farmacias",
        href: "/farmacias",
      },
      {
        label: "Ferreterías",
        href: "/ferreterias",
      },
      {
        label: "Tiendas de ropa",
        href: "/tiendas-de-ropa",
      },
      {
        label: "Tiendas de mascotas",
        href: "/tiendas-de-mascotas",
      },
      {
        label: "Peluquerías",
        href: "/peluquerias",
      },
    ],
  },
  {
    title: "ERP para grandes empresas",
    items: [

      {
        label: "Solicita una cotización",
        href: "/solicita-una-cotizacion",
      },
      {
        label: "Sistema integral ERP",
        href: "/sistema-integral-erp",
      },
      {
        label: "Financiera",
        href: "/financiera",
      },
      {
        label: "Logística",
        href: "/logistica",
      },
      {
        label: "Compras",
        href: "/compras",
      },
      {
        label: "Ventas",
        href: "/ventas",
      },
      {
        label: "POS",
        href: "/pos",
      },
      {
        label: "Producción (Manufactura)",
        href: "/produccion-manufactura",
      },
      {
        label: "Nómina",
        href: "/nomina",
      },
    ],
  },
];

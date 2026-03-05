// data/menu.ts
import Link from "next/link";

interface ProductMenu {
  id: string;
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
        id: "pymes-planes",
        label: "Planes y Precios 2026",
        href: "/pymes",
      },
      {
        id: "ventas-recaudo",
        label: "Ventas y Recaudo",
        href: "/ventas-y-recaudo",
      },
      {
        id: "contabilidad",
        label: "Contabilidad",
        href: "/contabilidad",
      },
      {
        id: "facturacion-documentos-electronicos",
        label: "Facturación y Documentos Electrónicos",
        href: "/facturacion-y-documentos-electronicos",
      },
      {
        id: "inventarios",
        label: "Inventarios",
        href: "/inventarios",
      },
      {
        id: "compras-pagos",
        label: "Compras y Pagos",
        href: "/compras-y-pagos",
      },
      {
        id: "impuestos-retenciones",
        label: "Impuestos y Retenciones",
        href: "/impuestos-y-retenciones",
      },
      {
        id: "sistema-gestion-empresarial-erp",
        label: "Sistema de Gestión Empresarial (ERP)",
        href: "/sistema-de-gestion-empresarial-erp",
      },
    ],
  },
  {
    title: "Software de Nómina",
    items: [

      {
        id: "nomina-planes",
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        id: "empleados-beneficios-novedades",
        label: "Empleados, Beneficios y Novedades",
        href: "/empleados-beneficios-y-novedades",
      },
      {
        id: "pagos-nomina",
        label: "Pagos de Nómina",
        href: "/pagos-de-nomina",
      },
      {
        id: "incapacidades-seguridad-social-pila",
        label: "Incapacidades y Seguridad Social (PILA)",
        href: "/incapacidades-y-seguridad-social-pila",
      },
      {
        id: "vacaciones-prestaciones-sociales",
        label: "Vacaciones y Prestaciones Sociales",
        href: "/vacaciones-y-prestaciones-sociales",
      },
      {
        id: "retencion-fuente-dian",
        label: "Retención en la Fuente (DIAN)",
        href: "/retencion-en-la-fuente-dian",
      },
      {
        id: "nomina-electronica-dian",
        label: "Nómina Electrónica (DIAN)",
        href: "/nomina-electronica-dian",
      },
      {
        id: "ecosistema-integraciones",
        label: "Ecosistema e Integraciones",
        href: "/ecosistema-e-integraciones",
      },
      {
        id: "portal-transaccional-empleados",
        label: "Portal Transaccional para Empleados",
        href: "/portal-transaccional-para-empleados",
      },
    ],
  },
  {
    title: "POS para bares y restaurantes",
    items: [
      
      {
        id: "pos-bares-planes",
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        id: "sistema-pos",
        label: "Sistema POS",
        href: "/sistema-pos",
      },
      {
        id: "menu-digital",
        label: "Menú Digital",
        href: "/menu-digital",
      },
      {
        id: "delivery-apps",
        label: "Delivery Apps",
        href: "/delivery-apps",
      },
      {
        id: "pos-inventarios",
        label: "Inventarios",
        href: "/inventarios",
      },
      {
        id: "facturacion-electronica",
        label: "Facturación Electrónica",
        href: "/facturacion-electronica",
      },
    ],
  },
  {
    title: "Software para Hoteles y Alojamientos",
    items: [

      {
        id: "hoteles-planes",
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        id: "hoteles",
        label: "Hoteles",
        href: "/hoteles",
      },
      {
        id: "hostales",
        label: "Hostales",
        href: "/hostales",
      },
      {
        id: "glampings",
        label: "Glampings",
        href: "/glampings",
      },
      {
        id: "apartamentos",
        label: "Apartamentos",
        href: "/apartamentos",
      },
      {
        id: "cabanas",
        label: "Cabañas",
        href: "/cabanas",
      },
    ],
  },
  {
    title: "Software POS para Pymes",
    items: [
      {
        id: "pos-pymes-planes",
        label: "Planes y Precios 2026",
        href: "/planes-y-precios-2026",
      },
      {
        id: "supermercados",
        label: "Supermercados",
        href: "/supermercados",
      },
      {
        id: "farmacias",
        label: "Farmacias",
        href: "/farmacias",
      },
      {
        id: "ferreterias",
        label: "Ferreterías",
        href: "/ferreterias",
      },
      {
        id: "tiendas-ropa",
        label: "Tiendas de ropa",
        href: "/tiendas-de-ropa",
      },
      {
        id: "tiendas-mascotas",
        label: "Tiendas de mascotas",
        href: "/tiendas-de-mascotas",
      },
      {
        id: "peluquerias",
        label: "Peluquerías",
        href: "/peluquerias",
      },
    ],
  },
  {
    title: "ERP para grandes empresas",
    items: [

      {
        id: "solicita-cotizacion",
        label: "Solicita una cotización",
        href: "/solicita-una-cotizacion",
      },
      {
        id: "sistema-integral-erp",
        label: "Sistema integral ERP",
        href: "/sistema-integral-erp",
      },
      {
        id: "financiera",
        label: "Financiera",
        href: "/financiera",
      },
      {
        id: "logistica",
        label: "Logística",
        href: "/logistica",
      },
      {
        id: "compras",
        label: "Compras",
        href: "/compras",
      },
      {
        id: "ventas",
        label: "Ventas",
        href: "/ventas",
      },
      {
        id: "pos",
        label: "POS",
        href: "/pos",
      },
      {
        id: "produccion-manufactura",
        label: "Producción (Manufactura)",
        href: "/produccion-manufactura",
      },
      {
        id: "nomina",
        label: "Nómina",
        href: "/nomina",
      },
    ],
  },
];

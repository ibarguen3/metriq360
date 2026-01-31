# Estructura del Proyecto MetriQ 360

## 📁 Organización de Carpetas

```
proyecto metriq360/
├── app/                          # Núcleo de la aplicación
│   ├── components/               # Componentes reutilizables
│   │   ├── common/              # Componentes comunes (KPICard, StatusBadge, etc.)
│   │   ├── ui/                  # Componentes UI base (button, input, card, etc.)
│   │   └── figma/               # Componentes de integración con Figma
│   ├── pages/                    # Vistas completas de la aplicación
│   │   ├── DashboardPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── FinancialPage.tsx
│   │   ├── RecipesPage.tsx
│   │   ├── InventoryPage.tsx
│   │   ├── ConsultingPage.tsx
│   │   ├── CateringPage.tsx
│   │   ├── EducationPage.tsx
│   │   └── SupportPage.tsx
│   ├── layouts/                  # Plantillas de diseño compartidas
│   │   ├── Sidebar.tsx          # Barra lateral de navegación
│   │   └── TopBar.tsx           # Barra superior
│   └── hooks/                    # Custom hooks React
│       └── useAuth.ts            # Hook para autenticación
├── lib/                          # Lógica reutilizable y utilidades
│   ├── financial-engine.ts
│   ├── pos-mock.ts
│   └── utils.ts
├── public/                       # Archivos estáticos
├── styles/                       # Estilos globales
│   └── global.css
├── App.tsx                       # Componente raíz
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Guía de Uso

### Componentes (`app/components/`)
- **common/**: Componentes compartidos en toda la app (KPICard, StatusBadge)
- **ui/**: Sistema de diseño base (Radix UI + Tailwind)
- **figma/**: Componentes específicos de Figma

### Páginas (`app/pages/`)
Vistas completas que representan pantallas de la aplicación. Cada página:
- Importa componentes necesarios
- Gestiona su propio estado local
- Se renderiza en el componente principal App.tsx

### Layouts (`app/layouts/`)
Estructuras compartidas entre páginas (Sidebar, TopBar). Contiene componentes de navegación y estructura general.

### Hooks (`app/hooks/`)
Custom hooks React para lógica reutilizable:
- `useAuth`: Gestión de autenticación
- Pueden agregarse más según las necesidades

## 📍 Importaciones con Alias

Se han configurado alias en `tsconfig.json` para simplificar importaciones:

```typescript
// ❌ Antes (rutas relativas complicadas)
import { KPICard } from '../../../components/common/KPICard';

// ✅ Después (alias limpio)
import { KPICard } from '@components/common/KPICard';
```

### Alias Disponibles
- `@components/*` → `./app/components/*`
- `@pages/*` → `./app/pages/*`
- `@layouts/*` → `./app/layouts/*`
- `@hooks/*` → `./app/hooks/*`
- `@lib/*` → `./lib/*`
- `@styles/*` → `./styles/*`
- `@/*` → `./` (raíz)

## 🔄 Flujo de Datos

```
App.tsx (Componente Principal)
├── Sidebar (Layout) → Navegación
├── TopBar (Layout) → Información del usuario
└── Página Activa (pages/)
    └── Componentes internos (components/)
        └── Custom Hooks (@hooks/)
```

## ✅ Checklist de Validación

- ✅ Estructura de carpetas organizada
- ✅ Alias de importación configurados
- ✅ Layouts separados de páginas
- ✅ Componentes reutilizables en `common/`
- ✅ Carpeta `hooks/` creada para lógica compartida
- ✅ tsconfig.json actualizado

## 📝 Próximos Pasos

1. Completar las páginas vacías con contenido real
2. Agregar más custom hooks según sea necesario
3. Implementar enrutamiento si es necesario (considerar Next.js o React Router)
4. Agregar gestión de estado global (Context API, Zustand, etc.)

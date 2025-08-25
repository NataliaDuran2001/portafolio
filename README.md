<<<<<<< HEAD
# portalofio
my portafolio 2025
=======
# 💼 Natalia Duran - Portfolio

<div align="center">

![Portfolio Banner](https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=300&fit=crop&crop=center)

**Un portafolio moderno y elegante construido con las mejores tecnologías web**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000?style=for-the-badge)](https://ui.shadcn.com/)

[🌐 Ver Demo](https://natalia-portfolio.vercel.app) | [📧 Contacto](mailto:nataliaduran.dev@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/natalia-duran-oliva/)

</div>

---

## ✨ Características

🎨 **Diseño Moderno** - Interfaz elegante con tema azul y rosado  
📱 **Totalmente Responsive** - Perfecto en móviles, tablets y desktop  
⚡ **Alto Rendimiento** - Optimizado con Next.js 14 y App Router  
🎭 **Animaciones Suaves** - Transiciones y efectos visuales atractivos  
🧩 **Componentes Reutilizables** - Arquitectura modular con shadcn/ui  
♿ **Accesible** - Cumple con estándares de accesibilidad web  
🔍 **SEO Optimizado** - Meta tags y estructura semántica  

## 🚀 Demo en Vivo

Visita el portafolio en acción: **[natalia-portfolio.vercel.app](https://natalia-portfolio.vercel.app)**

## 🛠️ Stack Tecnológico

<div align="center">

| Frontend | Styling | Components | Tools |
|----------|---------|------------|-------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat) | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) |
| Next.js 14 | Tailwind CSS 3 | shadcn/ui | TypeScript 5 |
| App Router | CSS Grid/Flexbox | Radix UI | ESLint |
| Server Components | Custom Animations | Lucide Icons | Prettier |

</div>

### 📦 Librerías Principales

```json
{
  "next": "14.0.0",
  "react": "18.0.0",
  "typescript": "5.0.0",
  "tailwindcss": "3.4.0",
  "@radix-ui/react-*": "latest",
  "lucide-react": "latest",
  "framer-motion": "latest"
}
```

## 🏗️ Arquitectura del Proyecto

```
📁 natalia-portfolio/
├── 📁 src/
│   ├── 📁 app/                    # App Router (Next.js 14)
│   │   ├── 📄 layout.tsx         # Layout principal
│   │   ├── 📄 page.tsx           # Página home
│   │   └── 📄 globals.css        # Estilos globales
│   │
│   └── 📁 components/
│       ├── 📁 layout/            # Componentes de layout
│       │   ├── 📄 Navbar.tsx     # Navegación principal
│       │   └── 📄 Footer.tsx     # Pie de página
│       │
│       ├── 📁 sections/          # Secciones del portafolio
│       │   ├── 📄 HeroSection.tsx        # Hero principal
│       │   ├── 📄 AboutSection.tsx       # Sobre mí
│       │   ├── 📄 ExperienceSection.tsx  # Experiencia
│       │   ├── 📄 ProjectsSection.tsx    # Proyectos
│       │   ├── 📄 SkillsSection.tsx      # Habilidades
│       │   ├── 📄 EducationSection.tsx   # Educación
│       │   └── 📄 ContactSection.tsx     # Contacto
│       │
│       └── 📁 ui/                # Componentes de shadcn/ui
│           ├── 📄 button.tsx     # Botones
│           ├── 📄 card.tsx       # Tarjetas
│           ├── 📄 badge.tsx      # Badges
│           └── 📄 ...            # Otros componentes
│
├── 📁 public/                    # Assets estáticos
│   ├── 🖼️ avatar.jpg            # Avatar personal
│   └── 📄 cv-natalia-duran.pdf  # CV descargable
│
├── 📄 tailwind.config.js         # Configuración Tailwind
├── 📄 next.config.js            # Configuración Next.js
└── 📄 package.json              # Dependencias
```

## 🚀 Instalación y Configuración

### Prerequisitos

- **Node.js** 18.17 o superior
- **npm** 9.0 o superior (o yarn/pnpm)
- **Git**

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/natalia-portfolio.git
cd natalia-portfolio
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Configurar shadcn/ui

```bash
npx shadcn-ui@latest init
```

Responde a las preguntas de configuración:
- ✅ TypeScript: **Yes**
- 🎨 Style: **Default**
- 🎯 Base color: **Blue**
- 📁 Global CSS: **src/app/globals.css**
- 🎨 CSS variables: **Yes**
- 📁 Tailwind config: **tailwind.config.js**
- 📦 Components alias: **src/components**
- 🔧 Utils alias: **src/lib/utils**

### 4. Instalar componentes de shadcn/ui

```bash
npx shadcn@latest add card button badge avatar separator tabs progress sheet navigation-menu
```

### 5. Ejecutar en modo desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

🎉 **¡Listo!** Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización

### Colores del Tema

El portafolio usa un esquema de colores azul y rosado personalizable en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Azul principal
    600: '#0284c7',
  },
  secondary: {
    500: '#ec4899', // Rosa principal
    600: '#db2777',
  }
}
```

### Contenido Personal

1. **Avatar**: Reemplaza `/public/placeholder-avatar.jpg` con tu foto
2. **CV**: Sube tu CV a `/public/cv-natalia-duran.pdf`
3. **Información**: Edita los datos personales en cada sección
4. **Proyectos**: Reemplaza las imágenes de Unsplash con capturas reales
5. **Links**: Actualiza URLs de GitHub, LinkedIn y redes sociales

### Imágenes de Proyectos

Las imágenes actuales son de Unsplash. Para usar tus propias imágenes:

```typescript
// En ProjectsSection.tsx
const projects = [
  {
    title: "Tu Proyecto",
    image: "/images/proyecto-1.jpg", // Tu imagen local
    // ... resto de la configuración
  }
];
```

## 📱 Secciones del Portafolio

| Sección | Descripción | Características |
|---------|-------------|-----------------|
| 🏠 **Hero** | Presentación principal | Avatar, CTA, badges de tecnologías |
| 👨‍💻 **Sobre mí** | Información personal | Logros destacados, filosofía de trabajo |
| 💼 **Experiencia** | Historia profesional | Timeline interactivo, logros cuantificados |
| 🚀 **Proyectos** | Portafolio de trabajos | Cards con imágenes, tecnologías, links |
| ⚡ **Habilidades** | Stack tecnológico | Progress bars, categorías, herramientas |
| 🎓 **Educación** | Formación académica | Títulos, certificaciones, idiomas |
| 📞 **Contacto** | Información de contacto | Formulario funcional, disponibilidad |

## 🚀 Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Deploy automático ✨

### Netlify

```bash
npm run build
npm run export
# Sube la carpeta 'out' a Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter ESLint
npm run type-check # Verificación de tipos TypeScript
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ en todas las métricas
- 🎯 **Core Web Vitals**: Optimizado para LCP, FID, CLS
- 📦 **Bundle Size**: < 100KB gzipped
- 🖼️ **Image Optimization**: Next.js Image component
- ♿ **Accessibility**: WCAG 2.1 compliant

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar algo:

1. Fork el proyecto
2. Crea tu rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Natalia Duran** - Full Stack Developer

- 📧 Email: [nataliaduran.dev@gmail.com](mailto:nataliaduran.dev@gmail.com)
- 💼 LinkedIn: [natalia-duran-oliva](https://www.linkedin.com/in/natalia-duran-oliva/)
- 📱 Teléfono: (+591) 78482245
- 📍 Ubicación: Santa Cruz de la Sierra, Bolivia

---

<div align="center">

**¿Te gustó este portafolio? ¡Dale una ⭐ al repositorio!**

Hecho con ❤️ y ☕ en Santa Cruz, Bolivia

</div>
>>>>>>> c68899d9e4b69e893fac5fb6a8eb1588625d6139

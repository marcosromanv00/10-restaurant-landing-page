# Brasa & Oliva - Landing Page

Landing page premium para un restaurante ficticio especializado en cocina a la brasa.

## 🚀 Tecnologías

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Formularios**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Tests**: [Vitest](https://vitest.dev/)

## 🛠️ Instalación y Uso

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Correr pruebas de lógica:

   ```bash
   npm run test
   ```

4. Generar build de producción:
   ```bash
   npm run build
   ```

## 📂 Estructura del Proyecto

- `src/app/`: Rutas y layouts principales.
- `src/components/ui/`: Biblioteca de componentes base (Button, Card, Input, etc.).
- `src/components/sections/`: Secciones de la landing page (Hero, Menu, Footer, etc.).
- `src/content/`: Archivos de datos locales (site.ts, menu.ts, reviews.ts).
- `src/context/`: Gestión de estado (Pedido/Carrito).
- `src/lib/`: Utilidades, validaciones y wrappers de storage.

## 🎨 Decisiones de Diseño

- **Estilo**: "Cálido Premium". Uso de colores tierra y una tipografía serif elegante para evocar la tradición de la brasa.
- **Interacción**: Micro-animaciones en botones y transiciones suaves en modales/filtros para mejorar el engagement.
- **Rendimiento**: Aprovechamiento de Server Components para secciones estáticas y Client Components solo donde es estrictamente necesario.

## ✅ Accesibilidad y SEO

- Contraste WCAG AA en la paleta de colores.
- Etiquetas ARIA en elementos interactivos.
- Marcado JSON-LD (Schema.org) para optimización en motores de búsqueda.
- `sitemap.xml` y `robots.txt` generados dinámicamente.

## 🔮 Mejoras Futuras

1. **Integración Real de WhatsApp**: Conexión con la API de WhatsApp para envío directo de reservas y pedidos.
2. **Mapa Real**: Sustituir el placeholder por Google Maps API o Mapbox.
3. **Backend de Reservas**: Conexión con un CMS o base de datos para gestión real de disponibilidad.
4. **Analytics**: Implementación de Google Analytics o Vercel Analytics para medir conversiones.
5. **Dashboard**: Panel de administración para que el restaurante edite el menú y horarios sin tocar código.

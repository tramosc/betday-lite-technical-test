# BetDay Lite

Mini aplicación web desarrollada como parte de una prueba técnica Frontend Senior.

Permite visualizar eventos deportivos del día, realizar apuestas simuladas del mercado 1X2 y consultar el historial de apuestas del usuario.

---

## Tecnologías

- Next.js 15 (App Router)
- React 18
- TypeScript
- NextAuth
- Tailwind CSS
- Sonner (Toast)

---

## Funcionalidades

### Home

- Timeline de partidos agrupados por hora.
- Visualización de:
  - Liga
  - Equipos
  - Mercado 1X2
  - Cuotas
- Simulación de apuestas.
- Toast de confirmación.

### Perfil

- Ruta protegida mediante NextAuth.
- Listado de apuestas realizadas.
- Estados:
  - Pending
  - Won
  - Lost
- Empty State.

### Detalle

- Visualización del detalle de una apuesta.

---

## Arquitectura

El proyecto está organizado siguiendo una estructura modular.

```
app/
components/
services/
types/
utils/
lib/
data/
```

Se separó la lógica de negocio en Services para facilitar su mantenimiento.

---

## Instalación

```bash
npm install
```

---

## Variables de entorno

Crear un archivo `.env.local`

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

---

## Ejecutar

```bash
npm run dev
```

Abrir:

```
http://localhost:3000
```

---

## Cuenta Demo

Email

```
demo@betday.com
```

Password

```
demo123
```

---

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

---

## Decisiones Técnicas

- Uso de Server Components para las páginas.
- Consumo de datos mediante API Routes.
- Protección de rutas con NextAuth.
- Persistencia temporal de apuestas mediante LocalStorage.
- Componentes reutilizables para mantener una arquitectura limpia.

---

## Mejoras Futuras

- Integración con una API real de apuestas.
- Base de datos.
- Gestión de usuarios.
- Historial persistente.
- Filtros por liga.
- Búsqueda de partidos.
- Favoritos.
- Dashboard de estadísticas.

---

## Autor

Toni Ramos

GitHub

https://github.com/tramosc
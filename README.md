# BetDay Lite

Mini aplicación web desarrollada como parte de una prueba técnica para una posición **Frontend Senior**.

La aplicación permite visualizar eventos deportivos del día organizados en un timeline por horas, realizar apuestas simuladas del mercado **1X2** y consultar el historial de apuestas del usuario mediante una interfaz moderna construida con **Next.js 15**, **React 18** y **TypeScript**.

---

## Tecnologías

* Next.js 15 (App Router)
* React 18
* TypeScript
* NextAuth
* Tailwind CSS
* Sonner (Toast)

---

## Funcionalidades

### Home

* Timeline de partidos agrupados por hora.
* Visualización de:

  * Liga
  * Equipos
  * Mercado 1X2
  * Cuotas
* Simulación de apuestas.
* Feedback visual mediante Toast.

### Perfil

* Ruta protegida mediante NextAuth.
* Listado de apuestas realizadas por el usuario.
* Visualización de:

  * Equipos
  * Selección realizada.
  * Cuota.
  * Estado de la apuesta (Pending, Won o Lost).
* Empty State cuando no existen apuestas.

### Detalle de apuesta

* Visualización del detalle completo de una apuesta seleccionada.

---

## Arquitectura

El proyecto está organizado siguiendo una estructura modular para facilitar el mantenimiento y la escalabilidad.

```
app/
components/
services/
types/
utils/
lib/
data/
```

### Organización

* **app/** → Rutas y páginas utilizando App Router.
* **components/** → Componentes reutilizables de la interfaz.
* **services/** → Lógica de acceso a datos y comunicación con las API Routes.
* **types/** → Interfaces y tipos TypeScript.
* **utils/** → Funciones auxiliares reutilizables.
* **lib/** → Configuración compartida (NextAuth y utilidades globales).
* **data/** → Datos JSON proporcionados para la prueba técnica.

---

## Características técnicas

* Server Components.
* API Routes.
* Loading UI.
* NextAuth para autenticación.
* Responsive Design.
* Arquitectura modular.
* Componentes reutilizables.
* TypeScript con tipado fuerte.

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
NEXTAUTH_SECRET=betday_lite_super_secret_key_123456
```

---

## Ejecutar el proyecto

```bash
npm run dev
```

Abrir:

```
http://localhost:3000
```

---

## Cuenta Demo

**Email**

```
demo@betday.com
```

**Password**

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

* Uso de **Server Components** para el renderizado de páginas.
* Consumo de información mediante **API Routes**.
* Protección de rutas utilizando **NextAuth**.
* Separación de responsabilidades mediante una arquitectura modular.
* Componentes reutilizables para favorecer el mantenimiento y la escalabilidad.

---

## Limitación conocida

Las nuevas apuestas se simulan mediante una **API Route** utilizando almacenamiento temporal en memoria. En entornos **Serverless** como Vercel, este almacenamiento puede reiniciarse entre ejecuciones, por lo que las apuestas simuladas no son persistentes de manera permanente.

En un entorno de producción esta implementación sería reemplazada por una base de datos para garantizar la persistencia de la información.

---

## Mejoras Futuras

* Integración con una API real de eventos deportivos.
* Persistencia mediante base de datos.
* Gestión de usuarios.
* Historial completo de apuestas.
* Filtros por liga.
* Búsqueda de partidos.
* Favoritos.
* Dashboard de estadísticas.

---

## Autor

**Toni Ramos**

GitHub:

https://github.com/tramosc

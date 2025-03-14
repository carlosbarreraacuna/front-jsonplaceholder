# JSONPlaceholder App

Una aplicación Next.js que consume datos de la API JSONPlaceholder. Esta aplicación demuestra el uso del App Router de Next.js, Server Components y TanStack Query para la gestión de peticiones.

## Características

### Página principal de usuarios (/users)
- Lista todos los usuarios obtenidos de /users
- Muestra nombre, username y email
- Permite filtrar la lista por nombre o username
- Implementado como Server Component para mejor rendimiento

### Detalle de usuario (/users/[id])
- Muestra información adicional del usuario (teléfono, website, dirección, etc.)
- Incluye botón para volver a la lista
- Implementado como Server Component para mejor SEO

### Página de publicaciones (/posts)
- Lista todas las publicaciones de JSONPlaceholder
- Permite ordenar por título (ascendente/descendente)
- Permite filtrar por texto parcial en el título
- Implementado como Server Component con interactividad cliente

### Detalle de publicación (/posts/[id])
- Muestra el detalle completo de una publicación
- Incluye los comentarios asociados
- Implementa un formulario para añadir comentarios (almacenados localmente)
- Utiliza una combinación de Server y Client Components

## Tecnologías utilizadas

- **Next.js 14**: Utilizando App Router y Server Components
- **React**: Para construir la interfaz de usuario
- **Tailwind CSS**: Para estilos
- **shadcn/ui**: Para componentes de UI
- **TanStack Query**: Para la gestión de peticiones en el cliente


## Requisitos previos

- Node.js 18.17.0 o superior
- npm, yarn o pnpm

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/carlosbarreraacuna/front-jsonplaceholder
cd jsonplaceholder-app

npm install
# o
yarn install
# o
pnpm install

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

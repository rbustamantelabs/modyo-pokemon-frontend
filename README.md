## Resumen

## Proyecto
Author  : Rene Bustamante
Empresa : MODYO
App     : https://modyo-pokemon-frontend.herokuapp.com/
Fuentes : https://github.com/rbustamantelabs/modyo-pokemon-frontend

Este es un proyecto implementado en Heroku, es un proyecto desarrollado con react next, contiene las siguientes funcionalidades:
    1: Listado de las 120 primeros Pokémon, el cual getStaticProps: es una función asíncrona que exportamos desde el componente de la página, utilizada para generar datos sobre el tiempo de compilación. Obtiene los datos y genera las páginas HTML en nuestro servidor y las almacena en caché. Entonces, cuando navegamos a esta página en nuestro lado del cliente, la página HTML almacenada en caché se nos entrega directamente, lo cual es muy útil para la optimización de motores de búsqueda (SEO).
    
    2: Tarjeta o ficha con información del Pokemon seleccionado

## Más información
Este es un proyecto [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Empezando

Primero, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Puede comenzar a editar la página modificando `pages/index.tsx`. La página se actualiza automáticamente a medida que edita el archivo.

## Aprende más

Para obtener más información sobre Next.js, eche un vistazo a los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



## Deploy Heroku

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

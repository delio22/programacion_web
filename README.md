# Programación Web

Repositorio con los ejercicios y prácticas de la materia de programación web.

## Contenido

| Carpeta | Tema |
| --- | --- |
| [`6-2-funciones`](./6-2-funciones) | Funciones |
| [`6-3-objetos`](./6-3-objetos) | Objetos |
| [`6-4-objetos-estandar`](./6-4-objetos-estandar) | Objetos estándar |
| [`6-5-eventos`](./6-5-eventos) | Eventos |
| [`6-6-depuracion`](./6-6-depuracion) | Depuración |
| [`practicas-del-video`](./practicas-del-video) | Prácticas del video *JavaScript para aprender React* |

## Prácticas del video

La carpeta [`practicas-del-video`](./practicas-del-video) reúne dos cosas:

- **Laboratorio interactivo** (`index.html`, `styles.css`, `app.js`): una página con demos ejecutables de funciones flecha, destructuring, DOM y eventos, métodos de arreglos (`map`, `filter`, `find`, spread), optional chaining y consumo de API con `fetch` y `async/await`.
- **Proyecto de ejemplo** (`ejemplo/`): los archivos `index.html`, `index.css`, `index.js` y `add.js` que muestran ES Modules (`import`/`export`) y una petición a JSONPlaceholder.

### Cómo ejecutarlo

- El laboratorio funciona abriendo `practicas-del-video/index.html` en el navegador (necesita internet para Tailwind, las fuentes e íconos).
- La carpeta `ejemplo/` usa módulos ES, así que hay que servirla con un servidor local. Con Node:

  ```bash
  cd practicas-del-video/ejemplo
  npx serve
  ```

  También sirve la extensión **Live Server** de VS Code.

## Tecnologías

HTML, CSS, JavaScript (ES Modules) y Tailwind CSS por CDN.

## Autor

[delio22](https://github.com/delio22)

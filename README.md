# 🧩 Puzzle

Juego interactivo de rompecabezas con React, TypeScript y SCSS, desarrollado con estructura modular y Vite. Permite seleccionar imagen, nivel (número de piezas) y armar el puzzle mediante drag & drop. Incluye confetti al completar el puzzle, botón para volver a jugar y diseño responsive.

<img alt="Puzzle" src="https://github.com/micazoyolli/puzzle/blob/main/public/assets/screenshot.png" width="500" />

## 🌐 Demo

👉 [Puzzle Demo](https://micazoyolli.github.io/puzzle/)

## 🚀 Tecnologías usadas

- React + TypeScript (ES6+)
- SCSS modular
- Vite 8
- @dnd-kit/core + @dnd-kit/sortable
- canvas-confetti
- Node 24
- @micazoyolli/foundation para SEO/build y reduced motion

## 📦 Estructura del proyecto

```
puzzle/
├── public/
│   ├── assets/
│   ├── icons/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── meta.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ModalSelector/
│   │   └── PuzzleBoard/
│   ├── styles/
│   │   ├── _global.scss
│   │   └── _variables.scss
│   ├── App.tsx
│   └── main.tsx
├── .editorconfig
├── .gitignore
├── .nvmrc
├── index.html
├── LICENSE
├── package.json
├── tsconfig.json
└── vite.config.js
```

## ▶️ Uso

```bash
yarn install
yarn dev
yarn lint
yarn typecheck
yarn build
```

Abre `http://localhost:5173/puzzle/` para jugar.

## Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La configuración `base` de Vite debe conservar la subruta del repositorio: `/puzzle/`.

## 🧠 Funcionalidad

- Selección de imagen y nivel de dificultad
- Drag & drop con @dnd-kit
- Confetti al completar el puzzle
- Botón para volver a seleccionar imagen y nivel
- Diseño responsive (desktop + mobile)

---

## Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)

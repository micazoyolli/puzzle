# 🧩 Puzzle

Juego interactivo de rompecabezas con selección de imagen, nivel de dificultad y armado mediante drag & drop.

<img alt="Puzzle" src="https://github.com/micazoyolli/puzzle/blob/main/public/assets/screenshot.png" width="500" />

## 🌐 Demo

[Puzzle Demo](https://micazoyolli.github.io/puzzle/)

## 🛠️ Tecnologías

- React
- TypeScript
- SCSS
- Vite
- @dnd-kit
- canvas-confetti
- Node 24
- Micazoyolli Foundation para SEO/build y reduced motion

## 📦 Instalación

```bash
yarn install
```

## 🚀 Scripts

```bash
yarn dev
yarn lint
yarn typecheck
yarn build
yarn preview
yarn deploy
```

Abre `http://localhost:5173/puzzle/` para jugar en local.

## 🗂️ Estructura del proyecto

```txt
public/
scripts/
src/
├── assets/
├── components/
├── styles/
├── App.tsx
└── main.tsx
```

## 🚢 Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La configuración `base` de Vite debe conservar la subruta del repositorio: `/puzzle/`.

## 🧠 Funcionalidad

- Selección de imagen y nivel de dificultad.
- Drag & drop con @dnd-kit.
- Confetti al completar el puzzle.
- Reinicio para elegir otra imagen o dificultad.
- Diseño responsive para desktop y mobile.

## 🧩 Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)

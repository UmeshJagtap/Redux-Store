# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

REF :-
https://www.youtube.com/watch?v=1i04-A7kfFI&t=4s
https://github.com/hiteshchoudhary?tab=repositories
https://github.com/hiteshchoudhary/chai-aur-react
https://github.com/hiteshchoudhary/chai-aur-react/tree/main/reduxToolkitTodo

Tailwind Installation :-
https://tailwindcss.com/docs/installation
https://tailwindcss.com/docs/guides/vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
In tailwind.config.js, replace as below
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
In index.css file add below,
@tailwind base;
@tailwind components;
@tailwind utilities;

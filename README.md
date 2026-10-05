# Education Platform

Учебная платформа с лекторами.

## Стек и версии
- React 19
- Vite 8
- Node.js 20+
- CSS Modules
- Без сторонних библиотек

## Установка и запуск
\`\`\`bash
npm install
npm run dev -- --host 0.0.0.0
\`\`\`
Открыть: http://localhost:5173/

## Структура папок
\`\`\`
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Partners/
│   └── Lecturers/
├── data/
│   └── lecturers.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
\`\`\`

## Данные и роутинг
- **Данные:** \`src/data/lecturers.js\` — массив лекторов (id, name, photo, subject, education, experience, degree, tariffs)
- **Роутинг:** через \`useState\` в \`App.jsx\` (openLecturerId). Без react-router-dom.
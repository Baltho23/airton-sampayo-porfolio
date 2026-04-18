/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  important: true,
  theme: {
    extend: {
      colors: {
        ink:     '#0F172A',   // slate-900  — fondo oscuro / texto principal
        surface: '#1E293B',   // slate-800  — cards oscuras
        indigo:  '#6366F1',   // índigo     — acento primario
        violet:  '#818CF8',   // índigo suave — gradientes
        mist:    '#E0E7FF',   // índigo-100 — backgrounds claros
        snow:    '#F8FAFC',   // slate-50   — secciones alternas
        muted:   '#64748B',   // slate-500  — texto secundario
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

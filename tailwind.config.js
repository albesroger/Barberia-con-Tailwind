/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        fondo: "url('/IMGS/tipa.jpeg')",
        fondoSer: "url('/IMGS/mozaico.png')",
        fondotest: "url('/IMGS/Testimonios/backtest.jpeg')",
        fondoAdmi: "url('/IMGS/Salones/Salon5.jpg')",
      },
    },
  },
  plugins: [],
};

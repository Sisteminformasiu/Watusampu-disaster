// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Path untuk komponen dan halaman dalam proyek Anda
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Path untuk Next UI
  ],
  theme: {
    extend: {
      // Anda bisa menambahkan penyesuaian tema di sini jika diperlukan
    },
  },
  darkMode: "class", // Aktifkan mode gelap dengan kelas
  plugins: [nextui()], // Tambahkan plugin Next UI
};

export default config;

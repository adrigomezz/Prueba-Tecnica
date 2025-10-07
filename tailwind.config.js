/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          500: "#334155",
          600: "#1e293b",
          700: "#0f172a",
        },
        accent: {
          100: "#f9fafb",
          200: "#f3f4f6",
          300: "#e5e7eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        soft: "0 1px 4px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

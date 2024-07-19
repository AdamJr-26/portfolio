/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
const plugin = require('tailwindcss/plugin');
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ['Roboto', ...fontFamily.serif],
      body: ['Roboto Slab']
    },

    extend: {
      boxShadow: {
        'hexa': '0 35px 60px -15px rgba(30, 30, 30, 0.3)',
      },
      textColor: {
        light: colors.neutral[300],
        dark: colors.neutral[900],
      },
      borderColor: {
        light: colors.neutral[200],
        dark: colors.neutral[800],
      },
      colors: {
        primary: '#39FF14',
        dark: "#0A0A0A",
        dim: "#1E1E1E",
        black: '#000000',
        gray: {
          700: '#3F3F3F',
        },

      },

    },
  },
  plugins: [
  ],
}

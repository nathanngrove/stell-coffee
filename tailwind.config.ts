import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        orange: {
          550: "#ff5a00",
        },
        cyan: {
          350: "#00deff",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

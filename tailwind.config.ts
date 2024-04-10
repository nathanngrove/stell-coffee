import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        layout: "23ch, 1fr ",
      },
      gridTemplateRows: {
        layout: "fit-content 1fr",
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

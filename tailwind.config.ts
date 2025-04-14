import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("daisyui")({
      themes: ["dark"],
    }),
  ],
};

export default config;

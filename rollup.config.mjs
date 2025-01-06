import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  external: ["react", "react-icons/pi", "react-icons/bi", "react-icons/go", "react-easy-crop", "react-toastify"],
  plugins: [
    typescript(),
    postcss({
      plugins: [tailwindcss("./tailwind.config.js")],
      extract: true,
      minimize: true,
    }),
  ],
};

import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  external: [
    "react",
    "react-icons/pi",
    "react-icons/bi",
    "react-icons/go",
    "react-easy-crop",
    "react-toastify",
    "react-quill-new",
  ],
  plugins: [
    typescript(),
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
      inject: true,
      minimize: true,
    }),
  ],
};

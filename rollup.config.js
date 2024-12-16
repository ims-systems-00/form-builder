import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
export default [
  {
    input: "src/index.ts",
    external: ['react', 'react-dom'],
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.lib.json",
        jsx: "react",
      }),
      resolve({ extensions: [".js", ".ts", ".tsx"] }),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        presets: [
          ["@babel/preset-react", { runtime: "automatic" }], // Use automatic runtime
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [dts()],
  },
];

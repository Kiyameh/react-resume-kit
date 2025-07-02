import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el package.json principal
const mainPackagePath = path.join(__dirname, "..", "package.json");
const mainPackage = JSON.parse(fs.readFileSync(mainPackagePath, "utf8"));

// Crear el package.json para dist
const distPackage = {
  name: mainPackage.name,
  version: mainPackage.version,
  license: mainPackage.license,
  author: mainPackage.author,
  description: mainPackage.description,
  keywords: mainPackage.keywords,
  type: "module",
  main: "./index.umd.cjs",
  module: "./index.js",
  types: "./index.d.ts",
  exports: {
    ".": {
      types: "./index.d.ts",
      import: "./index.js",
      require: "./index.umd.cjs",
    },
  },
  peerDependencies: mainPackage.peerDependencies,
};

// Escribir el package.json en dist
const distPackagePath = path.join(__dirname, "..", "dist", "package.json");
fs.writeFileSync(distPackagePath, JSON.stringify(distPackage, null, 2));

console.log("✅ package.json generado en dist/");

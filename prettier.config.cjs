/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  useTabs: true,
  arrowParens: "avoid",
  jsxSingleQuote: true,
  semi:false,
  singleQuote:true,
  trailingComma:"none",
  singleAttributePerLine:true,
};

module.exports = config;

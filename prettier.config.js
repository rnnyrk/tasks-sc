/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: true,
  singleAttributePerLine: true,
  printWidth: 100,
  importOrder: [
    '^@types$',
    '^(react|react-dom)$',
    '^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@src|@env|@vectors|@images|@utils|@hooks|@queries|@store|@styles|@server|@config|@navigators|@screens|@static)(/.*|$)',
    '^(@layouts|@modules|@common)(/.*|$)',
    '',
    '^[./]',
  ],
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
};

export default config;

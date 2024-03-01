/** @type {import('prettier').Config} */
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
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

export default config;

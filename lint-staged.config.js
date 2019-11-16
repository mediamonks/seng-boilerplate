module.exports = {
  'src/**/*.{js,ts,json}': ['yarn prettify', 'git add'],
  'src/**/*.ts': ['yarn lint:ts'],
};

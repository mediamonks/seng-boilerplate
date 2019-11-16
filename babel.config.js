module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['last 2 versions'],
          node: '10',
        },
        loose: true,
        useBuiltIns: false,
      },
    ],
    '@babel/typescript',
  ],
  plugins: ['@babel/proposal-class-properties'],
};

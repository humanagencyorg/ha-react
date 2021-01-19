module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: ['inline-react-svg', '@babel/plugin-transform-react-jsx'],
};

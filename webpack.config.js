const path = require('path');

module.exports = {
  entry: './interchained.js',
  mode: production,
  output: {
  filename: 'interchained-webpack.js',
  path: path.resolve(__dirname, 'dist'),
  },
};

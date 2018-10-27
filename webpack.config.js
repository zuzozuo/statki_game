const path = require('path');
module.exports = {
  entry: {
    script: ['./src/script.ts', './src/board.ts', './src/ships.ts',
      './src/user.ts', './src/computer.ts', './src/player.ts',
      './src/game.ts', './src/enums.ts', './src/ship.ts'],

  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  watch: true
};
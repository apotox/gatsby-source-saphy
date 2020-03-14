
const path = require("path")



module.exports = {
  entry: './src/gatsby-node.js',

  output: {
    path: path.resolve('./'),
    filename: 'gatsby-node.js',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
    
  },
  plugins: []
};
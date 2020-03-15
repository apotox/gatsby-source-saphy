
const path = require("path")



module.exports = {
  optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
  entry: './src/gatsby-node.js',
  target: 'node',
  output: {
    path: path.resolve('./'),
    filename: 'gatsby-node.js',
    //libraryTarget: 'commonjs2'
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
};
var path = require("path");
 
module.exports = {
  entry: "./index.jsx",
  output: { filename: "out.js", path: path.resolve(__dirname, "js") },
  devtool: 'source-map',
  mode: "development", watch: true,
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-2", "react"]
        }
      }
      }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, 
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      }]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
            loader: 'url-loader',
              options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
              }
      }]
      }]
    }
  }
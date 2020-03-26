// webpack uses this to work with directories
const path = require('path');

// to extract all transformed css into seperate file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// this is the main configuration object
// here you write different options to tell webpack what to do
module.exports = {

  // path to entry point. from this file, webpack will begin its work
  entry: './src/js/index.js',

  // not to be used for production because it slows down build and rebuild.
  // comment the line when production building
  devtool: 'inline-source-map',

  //production source maps
  //devtool: 'source-map',

  devServer: {
    contentBase: './dist',
  },

  // path to filename of result bundle
  // webpack will bundle all javascript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // default mode for webpack is production
  // depending on mode, webpack will apply different things
  // on final bundle. for now we don't need production's javascript
  // minifying and other things so lets set mode to development
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // apply rule for .sass, scss or .css files
        test: /\.(sa|sc|c)ss$/,

        // set loaders to transform files.
        // loaders are applied from right to left(bottom to top)
        // the first loader will be applied after the others
        use: [
          {
            // after all css loaders we use plugins to do this work
            // it gets all transformed css and extracts it into a single bundled file
            loader: MiniCssExtractPlugin.loader
          },
          {
            // this loader resolves url() and @imports inside css
            loader: "css-loader",
          },
          {
            // then we apply postcss fixes like autoprefixer and minifying
            loader: "postcss-loader"
          },
          {
            // first we transform sass to standard css
            loader: "sass-loader",
            options : {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        // now we apply rules for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // using file-loader for these files
            loader: "file-loader",

            // in options, we can set different things like format and directory to save
            options: {
              outputPath: "images"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
  ]

};

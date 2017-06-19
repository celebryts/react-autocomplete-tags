const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const postCssLoaderOptions = [ autoprefixer({ browsers: ['last 25 versions', '> 3%', 'iOS 7'] }) ]

const LibraryName = 'ReactAutocompleteTags'

module.exports = {

    entry: {
        index: __dirname + '/src/index.js'
    },
    
    output: {
      filename: '[name].js',
      path: __dirname + '/lib',
      libraryTarget: 'umd',
      library: LibraryName
    },

    module: {
      rules: [{
        test: /\.css/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMaps: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:3]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: ()=> postCssLoaderOptions
            }
          }
        ],
      },
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/, }
    ]
  },

  resolve: {
      extensions: ['css', '.js', '.jsx'],
      modules: [path.join(__dirname, "src"), 'node_modules']
  },

  plugins: [
		new webpack.ProvidePlugin({ 'React': 'react' }),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new ExtractTextPlugin({ filename: '[name]-app.css', disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     minChunks: Infinity
    // }),
		autoprefixer
	]
  
};
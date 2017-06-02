const webpack = require('webpack')
const path = require('path')

module.exports = {

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
          }
        ],
      }
    ]
  }
  
};
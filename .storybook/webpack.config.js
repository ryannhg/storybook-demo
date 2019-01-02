const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
          { loader: 'postcss-loader', options: {
            plugins: [
              require('autoprefixer')({ grid: 'autoplace' })
            ]
          } }
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}

const path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ]
      }
    ]
  },
	resolve: {
		modules: [
			path.resolve('./app'),
			path.resolve('node_modules')
		]
	},
  devServer: {
    contentBase: 'dist',
    hot: true,
    inline: true
  }
};

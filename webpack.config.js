/**
 * Created by yqtang on 17/3/3.
 */
var webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]

    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by tang')
    ]
}
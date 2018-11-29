const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(require('./webpack.base.config'), {
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'main.js',
        publicPath: '/build',
    },
    mode: 'development',
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '../src/index.js'),
    ],
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                            sourceMap: true
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
});

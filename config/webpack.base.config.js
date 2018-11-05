const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const conf = {
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'main.js',
        publicPath: '/build',
    },
    resolve: {
        extensions: ['.js', '.jsx', 'scss'],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            {
                test: /\.(ico|png|jpg|gif|svg|woff(2)?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/build',
                            context: 'src/',
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new HtmlWebpackPlugin({
            title: 'Homework part 1',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};
module.exports = conf;

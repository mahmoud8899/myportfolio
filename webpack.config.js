const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {

                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /.webp$/, /.ico$/],
                loader: "file-loader",
                options: {
                    name: "./image/[name].[contenthash].[ext]",
                    publicPath: url => url.replace(/build/, "")
                }

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    },
    optimization: {
        usedExports: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })

    ],

    devServer: {
        // compress: true,
        port: 3000,
        // open: true,
        historyApiFallback: true,
    },
}
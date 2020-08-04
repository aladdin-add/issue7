const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const { resolveApp } = require('../utils/path')
// const { userConfig, getLessLoaders } = require('./utils')
const ReactRefreshPlugin = require('@webhotelier/webpack-fast-refresh')

const htmlPluginOpts = {
    inject: true,
    template: path.join(__dirname, './public/index.html'),
    favicon: path.join(__dirname, './public/favicon.ico'),
}

const config = {
    mode: 'development',
    devtool: 'hidden-source-map',
    devServer: {
        port: 8888,
        hot: true,
        open: true,
        // hotOnly: true,
        compress: true,
        publicPath: '/',
        quiet: true,
        disableHostCheck: true,
        historyApiFallback: true,
        proxy: {},
    },
    resolve: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                include: path.join(__dirname, './src'),
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    { loader: require.resolve('@webhotelier/webpack-fast-refresh/loader.js') }

                ]
            },

            {
                test: /\.png$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['url-loader'],
            },
        ],
    },

    plugins: [
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin(htmlPluginOpts),
        new ReactRefreshPlugin(), // refs: https://github.com/WebHotelier/webpack-fast-refresh
        // new ErrorOverlayPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}

module.exports = config

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputDir = './dist';
const entry = './src/styles/css.js';
const cssOutput = 'site.css';

module.exports = (env) => {    
    return [{
        entry: entry,
        output: {
            path: path.join(__dirname, outputDir),
            filename: 'css.js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader' ],
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin(cssOutput)
        ]
    }]
};
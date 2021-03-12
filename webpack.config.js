const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    // Source Map: a way to visualise the application original code, even so the bundle.js is so unreadable.
    // Pros: whether there is any error, it will be highlighted with a more direct position (line, column)
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    // Entry file
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    // Output file that will be generated
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // By default, this file reads JS files, but should read JSX files too
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    // To create a hot-reload, to make the "webpack" observe all changes done in the public "folder"
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    // How the application will bahave considering each type of file
    module: {
        rules: [
            // Converting all JS files outside of node_modules using 'babel-loader'
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
};
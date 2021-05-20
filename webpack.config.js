const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/server/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '*']
    },
    // devtool: 'source-map',
    target: 'node',
    externals: [nodeExternals()]
}


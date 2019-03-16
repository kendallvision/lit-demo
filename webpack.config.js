var path = require('path');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    mode: "development",
    module: {
        rules: [{test: /\.ts/, use: 'ts-loader'}]
    }
}

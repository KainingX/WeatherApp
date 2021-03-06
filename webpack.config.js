var path = require('path');

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],

    mode:"development",

    module: {
        rules: [
            {
                test : /\.(js)$/, use:'babel-loader'

            }
        ]
    },


output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
}
}

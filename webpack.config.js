var path = require('path');

module.exports = {
    entry: './src/index.js',

    mode:"development",

    module: {
        rules: [
            {
                test : /\.jsx?/,
                exclude: /node_modules/,
                loader:[
                    {
                        loader:"babel-loader",
                        query:{
                            presets:["@babel/preset-react",
                                    "@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

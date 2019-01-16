const glob = require("glob");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');  

const getFileLists = (...data) => {
    let ret = {};
    for( [i, obj] of Object.entries(data) ){
        let path = `${obj.base}${obj.src}`;
        pathList = glob.sync(path);
        for( [i, p] of Object.entries(pathList) ){
            let key = obj.dest+p.split('/').slice(-1)[0];
            if(typeof obj.ext != "undefined"){
                key = key.replace(obj.src.split('.').slice(-1)[0].trim(),obj.ext);
            }

            if(typeof ret[key] == "undefined"){
                ret[key] = [p];
            }else{
                ret[key].push(p);
            }
        }   
    }

    return ret;
}

const stylesheets = {
    base: './assets/src/scss/',
    src: '*.scss',
    dest:'./assets/build/css/',
    'ext': 'css'
};

const scripts = {
    base: './assets/src/js/',
    src: 'main.js',
    dest:'/assets/build/js/'
};

let filesToTranspile = {};

filesToTranspile = getFileLists(scripts, stylesheets);
module.exports = {
    entry: filesToTranspile,
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: '[name]',
    },
    module: {
    	rules: [
    		{
    			test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
    			options: {
    				presets: ['@babel/preset-env']
    			}
            },  
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        useRelativePath: true,
                        publicPath: '../img/'
                    }
                  }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [  
                            {
                                loader: 'css-loader',
                                options: {sourceMap: true},
                            },
                            {
                                loader: 'sass-loader',
                                options: {sourceMap: true},
                            }, 
                            'postcss-loader'
                        ]
                })
            }
    	],
    },

    plugins: [
        new ExtractTextPlugin({
            filename: getPath => getPath('[name]').replace('js', 'css').replace('scss', 'css'),
            allChunks: true,
        }),

        new CopyWebpackPlugin([
            {   from: './assets/src/img/',
                to: './assets/build/img/' 
            }, 
            {   from: './assets/src/fonts/',
                to: './assets/build/fonts/' 
            }, 
            {   from: './assets/src/svg/',
                to: './assets/build/svg/' 
            } 
        ]),

        new webpack.ProvidePlugin({  
            $: "jquery"
        })
    ],
};

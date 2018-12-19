const glob = require("glob");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const mode = process.env.NODE_ENV || 'development';
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
    src: 'main.scss',
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
	mode: mode,
    entry: filesToTranspile,
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: '[name]',
    },

    watch: true,

    module: {
    	rules: [
    		{
    			test: /\.js$/,
    			loader: 'babel-loader',
    			options: {
    				presets: ['@babel/preset-env']
    			}
    		},  
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
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
            $: "jquery",
            Popper: ["popper.js", "default"],
        }),

        new ConcatPlugin({
            uglify: false,
            name: "vendors.css",
            sourceMap: true,
            outputPath: './assets/build/css/',
            fileName: '[name]',
            filesToConcat: [
                                'bootstrap//dist/css/bootstrap.css',
                                './assets/src/vendor/css/prism.css',
                            ]
        })
        /* new ConcatPlugin({
            uglify: false,
            name: "vendors.js",
            sourceMap: true,
            outputPath: './assets/build/js/',
            fileName: '[name]',
            filesToConcat: [
                                'bootstrap//dist/js/bootstrap.js',
                                './assets/src/js/vendor/prism.js',
                                './assets/src/js/vendor/clipboard.min.js',
                                './assets/src/js/vendor/fontAwesome.js',
                            ] 
        })*/

    ],
};
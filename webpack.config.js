const glob = require("glob");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const mode = 'development';
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
console.log(filesToTranspile);

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
            $: "jquery"
        })/* ,

        new ConcatPlugin({
            uglify: false,
<<<<<<< HEAD
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
=======
>>>>>>> b4b9d34bc631aed2d03c6ef6e580117493a494af
            name: "vendors.js",
            sourceMap: true,
            outputPath: './assets/build/js/',
            fileName: '[name]',
            filesToConcat: [
                                'bootstrap//dist/js/bootstrap.js',
                                './assets/src/js/vendor/prism.js',
                                './assets/src/js/vendor/clipboard.min.js',
                                './assets/src/js/vendor/fontAwesome.js',
<<<<<<< HEAD
                            ] 
        })*/
=======
                            ]
        }) */
>>>>>>> b4b9d34bc631aed2d03c6ef6e580117493a494af

    ],
};
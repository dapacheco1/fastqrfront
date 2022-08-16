//Configuracion de webpack
const path  = require('path'); //permite obtener el directorio actual.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//exportar configuracion
module.exports = {
    entry:'./src/index.js',// el archivo inicial desde donde webpack empezara a 
    //interpretar los módulos para generar los paquetes.
    output:{ //permite definir en donde van a estar los archivos de produccion
        path:path.resolve(__dirname,'dist'),//le digo el path y el nombre del directorio,
        filename:'main.js',//el js compilado se llama main.js
    },
    resolve:{
        extensions:['.js']//extensiones que voy a usar.
    },
    module:{//modulo para reglas
        rules:[
            {
                test:/\.js?$/,//regex para filtrar archivos js
                exclude:'/node_modules/',//excluyo los js que sean dependencias de node
                use:{
                    loader:'babel-loader',//especifico que voy a utilizar babel-loader, 
                    // Encargados de dar soporte a otros tipos de formato(css, img, etc..) 
                    //que no sean javascript ni json. A través de un loader podremos importar 
                    //otros formatos desde js.
                }
            }
        ]
    },
    plugins:[//Los plugins están encargados de generar tarea y esta tarea puede ser un conjunto de procesos
        new HtmlWebpackPlugin(
            {
                inject:true,//le digo que voy a inyectar archivos para html,
                template:'./public/index.html',//especifico el archivo en el que voy a inyectar archivos,
                filename:'./index.html',//especifico el archivo que se creara en dist.
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          })
    ]
};
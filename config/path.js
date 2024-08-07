const pathSrc       = "./src";
const pathDest      = "./dist";
const assets        = pathDest + "/assets";

module.exports = {
    root: pathDest,

    html: {
        src:    pathSrc + "/html/*.html",
        watch:  pathSrc + "/html/**/*.html",
        dest:   pathDest
    },

    pug: {
        src:    pathSrc + "/pug/*.pug",
        watch:  pathSrc + "/pug/**/*.pug",
        dest:   pathDest
    },

    css: {
        src:    pathSrc + "/css/*.css",
        watch:  pathSrc + "/css/**/*.css",
        dest:   assets + "/css"
    },

    scss: {
        src:    pathSrc + "/sass/*.{sass,scss}",
        watch:  pathSrc + "/sass/**/*.{sass,scss}",
        dest:   assets + "/css"
    },

    js: {
        src:    pathSrc + "/js/*.js",
        watch:  pathSrc + "/js/**/*.js",
        dest:   assets + "/js"
    },

    img: {
        src:    pathSrc + "/img/*.{png,jpg,jpeg,gif,svg,ico}",
        watch:  pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico}",
        dest:   assets + "/img"
    },

    font: {
        src:    pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch:  pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest:   assets + "/font"
    },

    libs: {
        // для каждой библиотеки надо подключать только min вариант в src
        // добавление Jquery.min.js и jquery.magnific-popup.min.js
        src:    [pathSrc + "/libs/jquery/dist/jquery.min.js", 
                pathSrc + "/libs/magnific-popup/dist/jquery.magnific-popup.min.js"],
        dest:   assets + "/libs/js"
    },

    libsCss: {
        // добавление jquery.magnific-popup.css
        src:    pathSrc + "/libs/magnific-popup/dist/magnific-popup.css",
        dest:   assets + "/libs/css"
    }
}
const  { src, dest }    = require("gulp");

// Конфигурации
const path              = require("../config/path.js");
const app               = require("../config/app.js");

// Плагины
const cssnano           = require("gulp-cssnano");
const concat            = require("gulp-concat");

// обработка Js библиотек
const libsCss = () => {
    return src(path.libsCss.src, { sourcemaps: app.isDev })
        //Добавление плагинов в проект
        .pipe(concat("libs.min.css"))
        .pipe(cssnano())
        .pipe(dest(path.libsCss.dest));
}

module.exports          = libsCss;
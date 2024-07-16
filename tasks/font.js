const  { src, dest }        = require("gulp");


// Конфигурации
const path                  = require("../config/path.js");
const app                   = require("../config/app.js");


// Плагины
const plumber               = require("gulp-plumber");
const notify                = require("gulp-notify");
const newer                 = require("gulp-newer");
const fonter                = require("gulp-fonter");
const ttf2woff2             = require("gulp-ttf2woff2");



// обработка FONT
const font = () => {

    return src(path.font.src)
        //Добавление плагинов в проект
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Font Error",
                message: error.message
            }))
        }))
        //получение FONT
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest));
}

module.exports              = font;
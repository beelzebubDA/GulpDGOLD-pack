const  { src, dest }        = require("gulp");

// Конфигурации

const path                  = require("../config/path.js");
const app                   = require("../config/app.js");

// Плагины
const plumber               = require("gulp-plumber");
const notify                = require("gulp-notify");
const pugs                  = require('gulp-pug');
const webpHtml              = require('gulp-webp-html');

// обработка PUG
const pug = () => {

    return src(path.pug.src)
        //Добавление плагинов в проект
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "PUG Error",
                message: error.message
            }))
        }))
        .pipe(pugs(app.pug))
        .pipe(webpHtml())
        //получение html
        .pipe(dest(path.pug.dest));
}

module.exports              = pug;
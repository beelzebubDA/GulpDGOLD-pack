const  { src, dest } = require("gulp");


// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");


// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");



// обработка IMG
const img = () => {

    return src(path.img.src)
        //Добавление плагинов в проект
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Image Error",
                message: error.message
            }))
        }))
        //получение IMG
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
        .pipe(dest(path.img.dest));
}

module.exports = img;
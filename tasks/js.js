const  { src, dest } = require("gulp");

// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");


// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const minify = require("gulp-minify");
const rigger = require("gulp-rigger");
// при необходимости чтобы все js работали
// const webpack = require("webpack-stream");


// обработка JavaScript
const js = () => {

    return src(path.js.src)
        //Добавление плагинов в проект
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript Error",
                message: error.message
            }))
        }))
        //получение js
        .pipe(babel())
        .pipe(rigger())
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev}))
        .pipe(minify())
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev}))
}

module.exports = js;
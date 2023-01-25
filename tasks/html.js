const  { src, dest } = require("gulp");

// Конфигурации

const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины

// Глобальный плагин! для замены остальных (но пока что-то не понимаю)
// const plugins = require('gulp-load-plugins')();


const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html');
const rename = require("gulp-rename");

// обработка HTML
const html = () => {

    return src(path.html.src)
        //Добавление плагинов в проект
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML Error",
                message: error.message
            }))
        }))
        .pipe(fileinclude())
        .pipe(webpHtml())
        .pipe(size({ title: "До сжатия"}))
        .pipe(dest(path.html.dest))
        .pipe(rename({ suffix: ".min" }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ title: "После сжатия"}))
        //получение html
        .pipe(dest(path.html.dest));
}

module.exports = html;
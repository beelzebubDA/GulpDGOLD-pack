const  { src, dest }        = require("gulp");


// Конфигурации
const path                  = require("../config/path.js");


// Плагины
const plumber               = require("gulp-plumber");
const notify                = require("gulp-notify");
const concat                = require("gulp-concat");
const cssimport             = require("gulp-cssimport");
const autoprefixer          = require("gulp-autoprefixer");
const csso                  = require("gulp-csso");
const rename                = require("gulp-rename");
const size                  = require("gulp-size");
const cssBeautify           = require("gulp-cssbeautify");
const shorthand             = require("gulp-shorthand");
const groupCssMediaQueries  = require("gulp-group-css-media-queries");
const webpCss               = require("gulp-webp-css");
const app                   = require("../config/app.js");


// обработка CSS
const css = () => {

    return src(path.css.src, { sourcemaps: app.isDev })
        //Добавление плагинов в проект
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "CSS Error",
                message: error.message
            }))
        }))
        //получение css
        .pipe(concat("main.css"))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(autoprefixer())
        .pipe(cssBeautify())
        .pipe(size({
            title: "main.css size"
        }))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev}))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size({
            title: "main.min.css size"
        }))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev}));
}

module.exports              = css;
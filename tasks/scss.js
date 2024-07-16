const  { src, dest }            = require("gulp");


// Конфигурации
const path                      = require("../config/path.js");
const app                       = require("../config/app.js");


// Плагины
const plumber                   = require("gulp-plumber");
const notify                    = require("gulp-notify");
const autoprefixer              = require("gulp-autoprefixer");
const csso                      = require("gulp-csso");
const rename                    = require("gulp-rename");
const size                      = require("gulp-size");
const shorthand                 = require("gulp-shorthand");
const groupCssMediaQueries      = require("gulp-group-css-media-queries");
const sass                      = require("gulp-sass")(require("sass"));
const sassGlob                  = require("gulp-sass-glob");(require("sass"));
const webpCss                   = require("gulp-webp-css");
const cssBeautify               = require("gulp-cssbeautify");

// обработка CSS
const scss = () => {

    return src(path.scss.src, { sourcemaps: app.isDev })
        //Добавление плагинов в проект
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SCSS Error",
                message: error.message
            }))
        }))
        //получение css
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(autoprefixer())
        .pipe(cssBeautify())
        .pipe(size({
            title: "main.css size"
        }))
        .pipe(dest(path.scss.dest, { sourcemaps: app.isDev}))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size({
            title: "main.min.css size"
        }))
        .pipe(dest(path.scss.dest, { sourcemaps: app.isDev}));
}

module.exports                  = scss;
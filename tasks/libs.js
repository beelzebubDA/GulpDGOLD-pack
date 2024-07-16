const  { src, dest } = require("gulp");

// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// обработка библиотек
const libs = () => {
    return src(path.libs.src, { sourcemaps: app.isDev })
        //Добавление плагинов в проект
       .pipe(concat("libs.min.js"))
       .pipe(uglify())
       .pipe(dest(path.libs.dest));
}

module.exports = libs;
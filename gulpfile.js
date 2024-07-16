// подключение GULP 
const  { watch, series, parallel } = require("gulp");

// подключение НАБЛЮДАТЕЛЯ
const browserSync        = require("browser-sync").create();
// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        },
        notify: false
    });
}

// Конфигурации
const path              = require("./config/path.js");
const app               = require("./config/app.js");

// Задачи
// подключение задач
const html              = require("./tasks/html.js");
const scss              = require("./tasks/scss.js");
const js                = require("./tasks/js.js");
const img               = require("./tasks/img.js"); 
const font              = require("./tasks/font.js");
const pug               = require("./tasks/pug.js");
const libs              = require("./tasks/libs.js");
const libsCss           = require("./tasks/libsCss.js");
const clear             = require("./tasks/clear.js");

// Наблюдение за изменениями каждого объекта
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
    // Для подключения наблюдения за PUG
    // watch(path.pug.watch, pug).on("all", browserSync.reload);
}

// Задача Продакшена

const build = series(
    clear,
    parallel(html, libsCss, scss, libs, js, img, font),
);

const dev = series(
    build,
    parallel(watcher, server)
);

// Задачи
// подключение задач для вызова
exports.html            = html;
exports.scss            = scss;
exports.js              = js;
exports.img             = img;
exports.font            = font;
exports.pug             = pug;
exports.clear           = clear;
exports.watch           = watcher;
exports.clear           = clear;
exports.build           = build;
exports.libs            = libs;
exports.dev             = dev;


// Сборка
exports.default         = app.isProd ? build : dev;

// Чтобы выйти из режима наблюдателя нужно нажать Ctrl + C
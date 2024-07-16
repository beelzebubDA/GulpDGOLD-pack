// Удаление ненужных из Директории
const del       = require("del");

// Конфигурации

const path      = require("../config/path.js");

const clear = () => {
    return del(path.root);
}

module.exports  = clear;
const { ListaTareas } = require("./modelo/Tareas.js");
const { iniciarApp } = require("./controlador/Gestor.js");

const lista = new ListaTareas();

iniciarApp(lista);

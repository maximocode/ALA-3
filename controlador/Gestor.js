const prompt = require('prompt-sync')();
const{Tarea} = require("../modelo/Tareas.js");
const{menuPrincipal, menuVerTareas} = require("../vista/Vista.js");

function iniciarApp(lista) {
    let op;
    do {
     menuPrincipal();
     op = parseInt(prompt());

     switch (op) {
         case 1:
            verTareas(lista);
            break;
         case 2:
            agregarTarea(lista);
            break;
         case 3:
            buscarTarea(lista);
            break;
         case 4:
            console.log("Saliendo...");
            break;
         default:
            console.log("Opción no válida");
        }
    } while (op !== 4);
}

function agregarTarea(lista) {
   let titulo = prompt("Ingrese el título de la tarea: ");
    let descripcion = prompt("Ingrese la descripción de la tarea: ");
    let dificultad;
    do{
        console.log("Ingrese la dificultad de la tarea (1-3): \n");
        dificultad = parseInt(prompt());
    }while (dificultad < 1 || dificultad > 3);
    let estado;
    do{
        console.log("Ingrese el estado de la tarea ([P]endiente, [E]n curso, [C]ompletada): \n");
        estado = prompt();
    }while (estado !== "P" && estado !== "E" && estado !== "C");
    let vencimiento = prompt("Ingrese la fecha de vencimiento de la tarea (dd/mm/aaaa): ");

    const nuevaTarea = new Tarea(titulo, descripcion, dificultad, estado, vencimiento);
    lista.agregar(nuevaTarea);
}

function verTareas(lista) {
    let idsmostrados = [];
    menuVerTareas();
    let op = parseInt(prompt());
    switch (op) {
        case 1:
            lista.verTodas();
            break;
        case 2:
            idsmostrados.push(...lista.filtrarPorEstado("P"));
            break;
        case 3:
            idsmostrados.push(...lista.filtrarPorEstado("E"));
            break;
        case 4:
            idsmostrados.push(...lista.filtrarPorEstado("C"));
            break;
        case 0:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
    }
}

module.exports = { iniciarApp }
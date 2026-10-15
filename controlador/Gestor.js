const prompt = require('prompt-sync')();
const{Tarea} = require("../modelo/Tareas.js");
const{menuPrincipal, menuVerTareas, preguntarDetalle, detalleTarea} = require("../vista/Vista.js");

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
            for (let tarea of lista.filtrarPorEstado("P")) {
                console.log("ID: " + tarea.ID + ", Título: " + tarea.titulo);
                idsmostrados.push(tarea.ID);
            }
            verDetalles(lista, idsmostrados);
            break;
        case 3:
            for (let tarea of lista.filtrarPorEstado("E")) {
                console.log("ID: " + tarea.ID + ", Título: " + tarea.titulo);
                idsmostrados.push(tarea.ID);
            }
            verDetalles(lista, idsmostrados);
            break;
        case 4:
            for (let tarea of lista.filtrarPorEstado("C")) {
                console.log("ID: " + tarea.ID + ", Título: " + tarea.titulo);
                idsmostrados.push(tarea.ID);
            }
            verDetalles(lista, idsmostrados);
            break;
        case 0:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
    }
}

function verDetalles(lista, idsmostrados) {
    let aux;
    do{
        preguntarDetalle();
        aux = parseInt(prompt());
    }while (aux !== 0 && aux > idsmostrados.length);
    if (aux !== 0) {
        let tarea = lista.buscarPorID(aux);
        detalleTarea(tarea);
    }
    editarTarea(lista, tarea);
}

function editarTarea(lista, tarea) {
    let aux2;
    do{
        console.log("Desea editar algo de la tarea?\n");
        console.log("[1] si" + "[0] no\n");
        aux2 = parseInt(prompt());
    }while (aux2 !== 0 && aux2 !== 1);
    if (aux2 === 1) {
   }
   }    


module.exports = { iniciarApp }
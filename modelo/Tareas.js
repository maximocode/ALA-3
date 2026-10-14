let ID=1;

function Tarea(titulo, descripcion, dificultad, estado, vencimiento) {
    this.ID = ID++;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.dificultad = dificultad;
    this.estado = estado;
    this.creacion = new Date();
    this.vencimiento = vencimiento;   
}

function ListaTareas() {
    this.tareas = [];
} 

ListaTareas.prototype.agregar = function(tarea) {
    this.tareas.push(tarea);
}

ListaTareas.prototype.buscarPorID = function(id) {
    for (let i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].ID === id) {
            return this.tareas[i];
        }
    }
    return null;
}
//el prototype no hace los metodos, se los hereda a otros objetos
ListaTareas.prototype.filtrarPorEstado = function(estado) {
    let tareasFiltradas = [];
    for (let i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].estado === estado) {
            tareasFiltradas.push(this.tareas[i]);
        }
    }
    return tareasFiltradas;
}

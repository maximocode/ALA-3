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

ListaTareas.prototype.verTodas = function() {
    return this.tareas;
}

function conservarOReemplazar(nuevo, viejo) {
    return nuevo === "" ? viejo : nuevo;
}

Tarea.prototype.editar = function(titulo, descripcion, dificultad, estado, vencimiento) {
    this.titulo = conservarOReemplazar(titulo, this.titulo);
    this.descripcion = conservarOReemplazar(descripcion, this.descripcion);
    this.dificultad = conservarOReemplazar(dificultad, this.dificultad);
    this.estado = conservarOReemplazar(estado, this.estado);
    this.vencimiento = conservarOReemplazar(vencimiento, this.vencimiento);
}

module.exports = {
    Tarea: Tarea,
    ListaTareas: ListaTareas
}

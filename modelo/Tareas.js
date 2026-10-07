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

function listaTareas() {
    this.tareas = [];
} 

listaTareas.prototype.agregar = function(tarea) {
    this.tareas.push(tarea);
}
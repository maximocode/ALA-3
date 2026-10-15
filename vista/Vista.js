function menuPrincipal() {
    console.log("---------------------------------------- \n");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver mis Tareas\n"+
        "[2] Agregar una Tarea\n"+
        "[3] Buscar una Tarea\n"+
        "[4] Salir\n"
    );
    console.log("---------------------------------------- \n");
}

function menuVerTareas() {
    console.log("---------------------------------------- \n");
        console.log("Que tareas deseas ver?"); //menu ver tareas
        console.log("[1] Todas\n"+
            "[2] Pendientes\n"+
            "[3] En curso\n"+
            "[4] Completadas\n"+
            "[0] Salir\n"
        );
        console.log("---------------------------------------- \n");
}

module.exports = { menuPrincipal, menuVerTareas }
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para guardar la lista de amigos
let listaAmigos = [];

// funcion para agregar los amigos a la lista
function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingrese un nombre valido");
    }
    
    //Agregar nombre a la lista
    listaAmigos.push(nombre);

    //Limpiar el input
    input.value = "";

    //Actualizar la lista en la pantalla
    mostrarLista();
}

//Funcion para mostrar la lista de amigos
function mostrarLista() {
    const 
}
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

//Funcion para mostrar la lista de amigos en la pagina
function mostrarLista() {
    const mostrarAmigos = document.getElementById("listaAmigos");

    //Limpiar lista antes de actualizar
    mostrarAmigos.innerHTML = "";
    
    //Agregar cada nombre a la lista
    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        mostrarAmigos.appendChild(li);
    });
}

//Funcion sortear amigo aleatorio
function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert("Ingrese por lo menos un amigo");
        return;
    }

    //Elegir un amigo aleatorio en la lista
    const nombreAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[nombreAleatorio];

    //Mostrar resultado
    const resultadoSorteoAmigo = document.getElementById("resultado");
    resultadoSorteoAmigo.innerHTML = `<li> El amigo secreto sorteado es: <strong>${amigoSecreto}<strong><li>`;
}

//Fin del challenge
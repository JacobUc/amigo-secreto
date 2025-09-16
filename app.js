let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.querySelector('#amigo');
    const nuevoAmigo = inputAmigo.value;
    
    // Validar que no sea vacio
    if(nuevoAmigo === ''){
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar el nuevoAmigo en el array
    amigos.push(nuevoAmigo);

    // Mostrar el nuevoAmigo en el HTML
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = nuevoAmigo;
    li.appendChild(p);
    const listaAmigosHTML = document.querySelector('#listaAmigos');
    listaAmigosHTML.appendChild(li);

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

function sortearAmigo(){
    const numeroAmigos = amigos.length;

    // Verificar que el array no este vacio
    if( numeroAmigos === 0 ){
        return
    }

    // Obtener un indice aleatorio
    const indiceRandom = Math.floor( Math.random() * numeroAmigos );
    console.log('Indice:', indiceRandom);
    console.log('Amigo Ganador:', amigos[indiceRandom])
    
    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `El Amigo Ganador es: ${amigos[indiceRandom]}`;
}
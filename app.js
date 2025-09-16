// Array para almacenar la lista de amigos.
let amigos = [];

function agregarAmigo() {
    // Obtener el nombre del campo de entrada.
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim();

    // Validar que el campo no esté vacío.
    if (nombre === '') {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    // Validar que el amigo no esté ya en la lista.
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.");
        nombreInput.value = '';
        return;
    }

    // Agregar el amigo a la lista.
    amigos.push(nombre);

    // Actualizar la lista de amigos en la pantalla.
    actualizarListaAmigos();

    // Limpiar el campo de entrada.
    nombreInput.value = '';
}

function sortearAmigo() {
    // Validar que haya suficientes amigos para el sorteo (mínimo 3).
    if (amigos.length < 3) {
        alert("Debes agregar al menos 3 amigos para realizar el sorteo.");
        return;
    }

    // Mezclar el array de amigos de forma aleatoria.
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // Asignar los amigos secretos y mostrar los resultados.
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpiar resultados anteriores.

    for (let i = 0; i < amigos.length; i++) {
        let regalador = amigos[i];
        // El amigo secreto es el siguiente en la lista mezclada.
        // Si es el último, su amigo secreto es el primero de la lista.
        let amigoSecreto = i === (amigos.length - 1) ? amigos[0] : amigos[i + 1];

        // Crear un elemento de lista para mostrar el resultado.
        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${regalador} --> ${amigoSecreto}`;
        listaResultado.appendChild(resultadoItem);
    }
    
    // Agregar una fecha con formato estándar y automático.
    const fechaSorteo = document.createElement('p');
    fechaSorteo.style.marginTop = '20px';
    const hoy = new Date();
    fechaSorteo.textContent = `Sorteo realizado el: ${hoy.toLocaleDateString()}`;
    listaResultado.appendChild(fechaSorteo);
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpiar la lista actual.

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigosElement.appendChild(item);
    });
}

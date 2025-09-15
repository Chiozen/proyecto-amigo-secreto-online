let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        nombreInput.value = '';
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    nombreInput.value = '';
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debes agregar al menos 3 amigos para realizar el sorteo.");
        return;
    }

    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let regalador = amigos[i];
        let amigoSecreto = i === (amigos.length - 1) ? amigos[0] : amigos[i + 1];
        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${regalador} --> ${amigoSecreto}`;
        listaResultado.appendChild(resultadoItem);
    }

    const fechaSorteo = document.createElement('p');
    fechaSorteo.style.marginTop = '20px';
    fechaSorteo.textContent = `Sorteo realizado el: 15.SEP.025`;
    listaResultado.appendChild(fechaSorteo);
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigosElement.appendChild(item);
    });
}

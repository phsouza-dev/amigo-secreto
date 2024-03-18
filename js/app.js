let listaIncluidos = [];
let listaSorteados = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (listaIncluidos == '') {
        listaIncluidos.push(nome);
    } else {
        listaIncluidos.push(' ' + nome);
    }
    document.getElementById('lista-amigos').innerHTML = listaIncluidos;
}

function sortear() {
    let listaAleatoria = [];
    listaSorteados = [];
    document.getElementById('lista-sorteio').innerHTML = listaSorteados;

    if (listaIncluidos.length % 2 == 0) {
        for (let i = 0; i < listaIncluidos.length; i++) {
            let numeroAleatorio = obterNumeroAleatorio();

            if (listaIncluidos.length != listaAleatoria.length) {
                while (listaAleatoria.includes(numeroAleatorio)) {
                    numeroAleatorio = obterNumeroAleatorio();
                    if (listaIncluidos.length == listaAleatoria.length) {
                        break;
                    }
                }
                listaSorteados.push(listaIncluidos[numeroAleatorio]);
                listaAleatoria.push(numeroAleatorio);
            } else {
                break
            }

        }

        for (let i = 0; i < listaSorteados.length; i += 2) {
            console.log(listaSorteados[i]);
            document.getElementById('lista-sorteio').innerHTML += `<p>${listaSorteados[i]} ➡ ${listaSorteados[i + 1]}</p>`;
        }
    } else {
        alert('O número de participantes do sorteio deve ser PAR!')
    }
}

function obterNumeroAleatorio() {
    return Math.floor(Math.random() * (listaIncluidos.length));
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    listaIncluidos = [];
    listaSorteados = [];
    document.getElementById('lista-amigos').innerHTML = listaIncluidos;
    document.getElementById('lista-sorteio').innerHTML = listaSorteados;
}
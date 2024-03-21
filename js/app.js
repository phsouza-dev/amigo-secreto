let listaIncluidos = [];
let listaSorteadosText = [];
let listaSorteados = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    if (nome.value != '') {
        listaIncluidos.push(`<span style="text-decoration: underline; cursor: pointer;" onclick="remover(this)">${nome.value}</span>`);
        listaSorteadosText.push(nome.value);
        gerarListaIncluidos();
        nome.value = '';
    } else {
        alert('Não é possível adicionar um amigo secreto sem nome (vazio)');
    }
}

function sortear() {
    let listaAleatoria = [];

    if (listaIncluidos.length > 1) {
        listaSorteados = [];
        document.getElementById('lista-sorteio').innerHTML = listaSorteados;

        for (let i = 0; i < listaIncluidos.length; i++) {
            let numeroAleatorio = obterNumeroAleatorio();

            if (listaIncluidos.length != listaAleatoria.length) {
                while (listaAleatoria.includes(numeroAleatorio)) {
                    numeroAleatorio = obterNumeroAleatorio();
                    if (listaIncluidos.length == listaAleatoria.length) {
                        break;
                    }
                }
                listaSorteados.push(listaSorteadosText[numeroAleatorio]);
                listaAleatoria.push(numeroAleatorio);
            } else {
                break
            }

        }

        for (let i = 0; i < listaSorteados.length; i++) {
            if (i + 1 < listaSorteados.length) {
                document.getElementById('lista-sorteio').innerHTML += `<p>${listaSorteadosText[i]} ➡ ${listaSorteadosText[i + 1]}</p>`;
            } else {
                document.getElementById('lista-sorteio').innerHTML += `<p>${listaSorteadosText[i]} ➡ ${listaSorteadosText[0]}</p>`;
            }
        }
    } else {
        alert('O sorteio só pode ser realizado com pelo menos 2 (duas) pessoas.');
    }

}

function obterNumeroAleatorio() {
    return Math.floor(Math.random() * (listaIncluidos.length));
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    listaIncluidos = [];
    listaSorteadosText = [];
    listaSorteados = [];
    document.getElementById('lista-amigos').innerHTML = listaIncluidos;
    document.getElementById('lista-sorteio').innerHTML = listaSorteados;
}

function remover(elementToRemove) {
    let nomeAmigo = elementToRemove.textContent;
    let index = listaIncluidos.indexOf(nomeAmigo);
    listaIncluidos.splice(index, 1);
    listaSorteadosText.splice(index, 1);
    gerarListaIncluidos();
}

function gerarListaIncluidos() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = listaIncluidos.join(', ');
}
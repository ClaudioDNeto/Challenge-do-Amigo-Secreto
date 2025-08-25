// Declarar uma variável do tipo array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const campoNome = document.getElementById('amigo');
    const nomeAmigo = campoNome.value.trim();
    
    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Atualizar o array de amigos
    amigos.push(nomeAmigo);
    
    // Limpar o campo de entrada
    campoNome.value = '';
    
    // Atualizar a exibição da lista
    exibirAmigos();
}

// Função para exibir a lista de amigos
function exibirAmigos() {
    // Obter o elemento da lista
    const lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';
    
    // Verificar se há amigos para exibir
    if (amigos.length === 0) {
        lista.innerHTML = '<li>Nenhum amigo adicionado ainda...</li>';
        return;
    }
    
    //criar elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Gerar um índice aleatório, o nome do sorteado e o Resultado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
}


// 1. Criando Array para armazenar os amigos
let amigos = []

// 2. Função para adicionar amigo
function adicionarAmigo() {
  
  // 3. Capturar o valor do campo de entrada
  const input = document.getElementById('nomeAmigo');
  const nome = input.value.trim(); // trim() remove espaços extras

  // 4. Validar se o campo está vazio
  if (nome === '') {
    // 5. Mostrar alerta se estiver vazio
    alert('Por favor, insira um nome.');
    return; // sai da função se for inválido
  }

  // 6. Adicionar o nome ao array de amigos
  amigos.push(nome);

  // 7. Limpar o campo de entrada
  input.value = '';
}
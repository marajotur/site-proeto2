document.getElementById("roteiro-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Coletando os valores do formulário
  const roteiro = document.getElementById("roteiro").value;
  const tipoTurismo = document.getElementById("tipo-turismo").value;
  const nome = document.getElementById("nome").value;
  const observacoes = document.getElementById("observacoes").value;

  // Gerando a saída personalizada
  const mensagem = `
    Olá, ${nome}! Seu roteiro personalizado foi gerado com sucesso:
    - Destino: ${roteiro.replace("-", " ").toUpperCase()}
    - Tipo de Turismo: ${tipoTurismo.toUpperCase()}
    - Observações: ${observacoes || "Nenhuma observação adicionada."}

    Aproveite sua viagem e entre em contato se precisar de mais informações!
  `;

  // Exibindo o resultado
  document.getElementById("output").innerText = mensagem;
});

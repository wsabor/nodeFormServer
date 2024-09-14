const form = document.getElementById("myForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Coleta os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const dataNascimento = document.getElementById("data_nascimento").value;
  const mensagem = document.getElementById("mensagem").value;

  // Cria um objeto JSON com os dados
  const dadosForm = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    endereco: endereco,
    telefone: telefone,
    dataNascimento: dataNascimento,
    mensagem: mensagem,
  };

  // Envia o objeto JSON para o servidor usando Fetch API
  try {
    const response = await fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosForm),
    });

    if (response.ok) {
      alert("Formulário enviado com sucesso!");
    } else {
      alert("Erro ao enviar o formulário.");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao enviar o formulário.");
  }
});

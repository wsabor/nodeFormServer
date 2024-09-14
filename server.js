const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Configuração para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Middleware para processar dados JSON
app.use(express.json());

// Rota para a página inicial (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota para lidar com o envio do formulário
app.post("/submit-form", (req, res) => {
  const dadosForm = req.body;
  const nomeArquivo = `formulario-${dadosForm.nome}.json`;
  const caminhoArquivo = path.join(__dirname, "formularios", nomeArquivo);

  // Salvar o arquivo JSON na pasta "formularios"
  fs.writeFile(caminhoArquivo, JSON.stringify(dadosForm, null, 2), (err) => {
    if (err) {
      console.error("Erro ao salvar o arquivo:", err);
      return res.status(500).send("Erro ao salvar o formulário.");
    }

    res.status(200).send("Formulário salvo com sucesso.");
  });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, '../')));

// Rota principal para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
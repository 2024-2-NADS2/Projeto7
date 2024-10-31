const express = require("express");
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 5005;

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

app.use(cors());
app.use(express.json());

// Criar tabela de usuários (se não existir)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT
  )`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela:', err.message);
    } else {
      console.log('Tabela de usuários criada ou já existe.');
    }
  });
});

// Rota para adicionar um usuário
app.post('/api/usuarios', (req, res) => {
  const { nome, email } = req.body;
  const stmt = db.prepare(`INSERT INTO usuarios (nome, email) VALUES (?, ?)`);
  stmt.run(nome, email, function(err) {
    if (err) {
      return res.status(400).send('Erro ao criar usuário: ' + err.message);
    }
    res.status(201).send(`Usuário criado com ID: ${this.lastID}`);
  });
  stmt.finalize();
});

// Rota para listar usuários
app.get('/api/usuarios', (req, res) => {
  db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
    if (err) {
      return res.status(500).send('Erro ao consultar usuários: ' + err.message);
    }
    res.json(rows);
  });
});

// Rota para buscar usuários pelo nome
app.get('/api/usuarios/buscar', (req, res) => {
  const { nome } = req.query; // Obtém o parâmetro de consulta 'nome'

  if (!nome) {
    return res.status(400).send('É necessário fornecer um nome para a busca.');
  }

  db.all(`SELECT * FROM usuarios WHERE nome LIKE ?`, [`%${nome}%`], (err, rows) => {
    if (err) {
      return res.status(500).send('Erro ao consultar usuários: ' + err.message);
    }
    res.json(rows);
  });
});

// Serve os arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
  res.send("servidor rodando");
});

// Rota para todas as outras requisições (para o React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Encerrar a conexão com o banco de dados ao encerrar o servidor
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar o banco de dados:', err.message); // Corrigido aqui
    } else {
      console.log('Banco de dados fechado.');
    }
    process.exit(0);
  });
});

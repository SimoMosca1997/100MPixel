const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simuliamo un database in memoria
let data = [];

// API per ottenere i dati
app.get('/api/data', (req, res) => {
    res.json(data);
});

// API per aggiungere dati
app.post('/api/data', (req, res) => {
    const newData = req.body;
    data.push(newData); // Aggiunge i dati
    res.status(201).json(newData);
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

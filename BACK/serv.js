import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'PROJET'
});

db.connect((err) => {
  if (err) {
    console.error('Error am base de données', err);
    return;
  }
  console.log('connecté avec mysql.');
});

app.get('/base', (req, res) => {
  const sql = 'SELECT * FROM base';
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error executing query' });
    return res.json(result);
  });
});

app.post('/base', (req, res) => {
  const { titre, soutitre, expliquer, html, css, js } = req.body;
  const sql = 'INSERT INTO base (titre, soutitre, expliquer, html, css, js) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [titre || 'default_titre', soutitre, expliquer, html, css, js];
  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error inserting code', error: err });
    return res.json({ message: 'envoyer de données au server', result });
  });
});

app.put('/base/:id', (req, res) => {
  const { id } = req.params;
  const { titre, soutitre, expliquer, html, css, js } = req.body;
  const sql = 'UPDATE base SET titre = ?, soutitre = ?, expliquer = ?, html = ?, css = ?, js = ? WHERE id = ?';
  const values = [titre, soutitre, expliquer, html, css, js, id];
  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating code', error: err });
    return res.json({ message: 'modifier', result });
  });
});

app.delete('/base/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM base WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting code', error: err });
    return res.json({ message: 'delete', result });
  });
});

app.listen(8083, () => {
  console.log('Server running on port 8083');
});

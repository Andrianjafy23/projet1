import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à la base de données 'Laza'
const dbLaza = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Laza'
});

dbLaza.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données Laza:', err);
    return;
  }
  console.log('Connecté à la base de données Laza.');
});

// Connexion à la base de données 'PROJET'
const dbProjet = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'PROJET'
});

dbProjet.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données PROJET:', err);
    return;
  }
  console.log('Connecté à la base de données PROJET.');
});

// Routes pour la base de données Laza
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM laz';
  dbLaza.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de l\'exécution de la requête' });
    return res.json(result);
  });
});

app.post('/laz', (req, res) => {
  const { name, email, pwd } = req.body;
  const sql = 'INSERT INTO laz (name, email, pwd) VALUES (?, ?, ?)';
  const values = [name || 'default_name', email, pwd];
  dbLaza.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de l\'insertion de l\'utilisateur', error: err });
    return res.json({ message: 'Votre compte a été créé avec succès. Allez connecter', result });
  });
});

app.post('/login', (req, res) => {
  const { email, pwd } = req.body;
  const sql = 'SELECT * FROM laz WHERE email = ? AND pwd = ?';
  dbLaza.query(sql, [email, pwd], (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de la vérification des identifiants', error: err });
    
    if (result.length > 0) {
      return res.json({ message: 'Connexion réussie. Accès à la page /codeo', redirectUrl: '/codeo' });
    } else {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
  });
});

// Routes pour la base de données PROJET
app.get('/base', (req, res) => {
  const sql = 'SELECT * FROM base';
  dbProjet.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de l\'exécution de la requête' });
    return res.json(result);
  });
});

app.post('/base', (req, res) => {
  const { titre, soutitre, expliquer, html, css, js } = req.body;
  const sql = 'INSERT INTO base (titre, soutitre, expliquer, html, css, js) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [titre || 'default_titre', soutitre, expliquer, html, css, js];
  dbProjet.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de l\'insertion du code', error: err });
    return res.json({ message: 'Données envoyées au serveur', result });
  });
});

app.put('/base/:id', (req, res) => {
  const { id } = req.params;
  const { titre, soutitre, expliquer, html, css, js } = req.body;
  const sql = 'UPDATE base SET titre = ?, soutitre = ?, expliquer = ?, html = ?, css = ?, js = ? WHERE id = ?';
  const values = [titre, soutitre, expliquer, html, css, js, id];
  dbProjet.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de la mise à jour du code', error: err });
    return res.json({ message: 'Modification réussie', result });
  });
});

app.delete('/base/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM base WHERE id = ?';
  dbProjet.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de la suppression du code', error: err });
    return res.json({ message: 'Suppression réussie', result });
  });
});

// Démarrer le serveur sur un seul port
app.listen(8084, () => {
  console.log('Serveur en écoute sur le port 8084');
});

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
  database: 'Laza'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM laz';
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error executing query' });
    return res.json(result);
  });
});


app.post('/laz', (req, res) => {
  const { name, email, pwd } = req.body;
  const sql = 'INSERT INTO laz (name, email, pwd) VALUES (?, ?, ?)';
  const values = [name || 'default_name', email, pwd];
  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error inserting user', error: err });
    return res.json({ message: 'User registered successfully', result });
  });
});
app.listen(8082, () => {
  console.log('Server running on port 8082');
});

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function Connecté() {
  const [values, setValues] = useState({
    titre: '',
    soutitre: '',
    expliquer: '',
    html: '',
    css: '',
    js: ''
  });

  const [data, setData] = useState([]); // État pour stocker les données récupérées

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/code', values)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        // Réinitialiser les valeurs du formulaire après une soumission réussie
        setValues({
          titre: '',
          soutitre: '',
          expliquer: '',
          html: '',
          css: '',
          js: ''
        });
        fetchData(); // Rafraîchir les données après soumission
      })
      .catch(error => {
        console.error('There was an error submitting the data!', error);
      });
  };

  // Fonction pour récupérer les données depuis le serveur
  const fetchData = () => {
    axios.get('http://localhost:8082/code')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  // Utiliser useEffect pour récupérer les données lorsque le composant est monté
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='izy'>
      <form onSubmit={handleSubmit}>
        <div className='text'>
          <div id='aza'>
            <input
              type="text"
              name="titre"
              placeholder='Titre'
              value={values.titre}
              onChange={handleChange}
            />
            <textarea
              name="soutitre"
              id="tete"
              placeholder='Sous titre'
              value={values.soutitre}
              onChange={handleChange}
            ></textarea>
          </div>
          <textarea
            name="expliquer"
            id="expication"
            placeholder='Expliqué'
            value={values.expliquer}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='codeo'>
          <textarea
            name="html"
            id="html"
            placeholder='Code HTML'
            value={values.html}
            onChange={handleChange}
          ></textarea>
          <textarea
            name="css"
            id="css"
            placeholder='Code CSS'
            value={values.css}
            onChange={handleChange}
          ></textarea>
          <textarea
            name="js"
            id="js"
            placeholder='Code JS'
            value={values.js}
            onChange={handleChange}
          ></textarea>
        </div>
        <center><button className='aj' type="submit">Ajouter</button></center>
      </form>

      <div className="data-list">
        <h2>Données récupérées</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h3>{item.titre}</h3>
              <p>{item.soutitre}</p>
              <pre>{item.expliquer}</pre>
              <pre>{item.html}</pre>
              <pre>{item.css}</pre>
              <pre>{item.js}</pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Connecté;

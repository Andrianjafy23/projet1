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

  const [data, setData] = useState([]); // stocker les données 

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8083/base', values)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        // Réinitialiser les valeurs du formulaire 
        setValues({
          titre: '',
          soutitre: '',
          expliquer: '',
          html: '',
          css: '',
          js: ''
        });
        fetchData(); // Rafraîchir les données 
      })
      .catch(error => {
        console.error('There was an error submitting the data!', error);
      });
  };

  // Fonction pour récupérer les données 
  const fetchData = () => {
    axios.get('http://localhost:8083/base')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

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
       <center><h2>LISTES DES DONNÉES</h2></center> 
        <ul>
          {data.map((item, index) => (
              <thead>
                <tr key={index} className='données'>
                  <th scope="col">{item.titre}</th>
                  <th scope="col">{item.soutitre}</th>
                  <th scope="col">{item.expliquer}</th>
                  <th scope="col">{item.html}</th>
                  <th scope="col">{item.css}</th>
                  <th scope="col">{item.js}</th>
                </tr>
                <div className='style'>
                  <button >modifier</button>
                  <button>supprimmer</button>
                </div>
              </thead>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Connecté;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const zavtr = {
  codeo: 'CODEO',
  pref: 'préference',
  js: 'javascript',
  h: 'HTML',
  c: 'CSS',
  search: 'Chercher',
 
};

function Logika() {
  return (
     <div className="laza">
        <nav>
          <ul>
            <li><Link to="/">APROPOS</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><h1>{zavtr.codeo}</h1></li>
          </ul>
        </nav>
        <ul className="lo">
          <li className="la">
            <a href="#">Préference</a>
            <ul className="l">
              <li><a href="#">{zavtr.h}</a></li>
              <li><a href="#">{zavtr.c}</a></li>
              <li><a href="#">{zavtr.js}</a></li>
            </ul>
          </li>
        </ul>
        <div className='search'>
          <a href=""><FontAwesomeIcon icon={faSearch} className="searchicon" /></a>
          <input type="search" placeholder="Search..." className="input" />
        </div> 
      </div>
  )
}

export default Logika;

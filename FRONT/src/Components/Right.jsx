import React, { useState } from 'react';
import './style.css';
import { VscChevronDown } from "react-icons/vsc";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { VscDebugBreakpointData } from "react-icons/vsc";


function Right() {
  
  const [showHTML, setShowHTML] = useState(false);
  const [showCSS, setShowCSS] = useState(false);
  const [showJS, setShowJS] = useState(false);

  
  const HTML = () => setShowHTML(!showHTML);
  const CSS = () => setShowCSS(!showCSS);
  const JS = () => setShowJS(!showJS);

  return (
    <div className='hi'>
      <h2>Option</h2>
      <div className="coucou">
        <h3 onClick={HTML}><VscChevronDown/>HTML</h3>
        {showHTML && (
          <ul className='html'>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Introduction </a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Structure de base</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Éléments de texte</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Liens et ancrages</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Images et médias</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Tableaux</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Formulaires</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Sémantique </a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Métadonnées et SEO</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>HTML avancé</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Bonnes pratiques et validation</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Intégration avec CSS et JavaScript</a></li>
            <li className='x'><a href="#"><VscDebugBreakpointData className='c'/>Ressources supplémentaires</a></li>
          </ul>
        )}
        <h3 onClick={CSS}><VscChevronDown/>CSS</h3>
        {showCSS && (
          <ul className='css'>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Introduction </a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Syntaxe et Sélecteurs</a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Propriétés de Texte</a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Modèle de Boîte </a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Flexbox</a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Grid Layout</a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Couleurs et Fonds</a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Transitions et Animations</a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Responsive Design et Media Queries</a></li>
            <li><a href="#"><VscDebugBreakpointLogUnverified className='icooo'/>Préprocesseurs CSS (Sass, Less)</a></li>
          </ul>
        )}
        <h3 onClick={JS}><VscChevronDown/>JavaScript</h3>
        {showJS && (
          <ul className='js'>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>Introduction au JavaScript</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>Syntaxe de Base et Opérateurs</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>Structures de Contrôle</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>Fonctions</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>Objets et Tableaux</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>DOM (Document Object Model)</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>Événements</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>AJAX et Fetch API</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>ES6+ et Modules JavaScript</a></li>
            <li><a href="#"><VscDebugBreakpointLog className='conn'/>Asynchrone JavaScript (Promises, async/await)</a></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Right;

import React, { useState } from 'react';
import './style.css';
import { VscChevronDown } from "react-icons/vsc";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { IoIosOptions } from "react-icons/io";

function Right() {
  const [option, setOption] = useState(false);
  const [showHTML, setShowHTML] = useState(false);
  const [showCSS, setShowCSS] = useState(false);
  const [showJS, setShowJS] = useState(false);

  const toggleOption = () => setOption(!option);
  const toggleHTML = () => setShowHTML(!showHTML);
  const toggleCSS = () => setShowCSS(!showCSS);
  const toggleJS = () => setShowJS(!showJS);

  return (
    <div className='hi'>
      <IoIosOptions className='option' onClick={toggleOption} />
      {option && (
        <div className="coucou">
          <h3 onClick={toggleHTML}>
            <VscChevronDown /> HTML
          </h3>
          {showHTML && (
            <ul className='html'>
              <li className='x'><VscDebugBreakpointData className='c' />Introduction</li>
              <li className='x'><VscDebugBreakpointData className='c' />Structure de base</li>
              <li className='x'><VscDebugBreakpointData className='c' />Éléments de texte</li>
              <li className='x'><VscDebugBreakpointData className='c' />Liens et ancrages</li>
              <li className='x'><VscDebugBreakpointData className='c' />Images et médias</li>
              <li className='x'><VscDebugBreakpointData className='c' />Tableaux</li>
              <li className='x'><VscDebugBreakpointData className='c' />Formulaires</li>
              <li className='x'><VscDebugBreakpointData className='c' />Sémantique</li>
              <li className='x'><VscDebugBreakpointData className='c' />Métadonnées et SEO</li>
              <li className='x'><VscDebugBreakpointData className='c' />HTML avancé</li>
              <li className='x'><VscDebugBreakpointData className='c' />Bonnes pratiques et validation</li>
              <li className='x'><VscDebugBreakpointData className='c' />Intégration avec CSS et JavaScript</li>
              <li className='x'><VscDebugBreakpointData className='c' />Ressources supplémentaires</li>
            </ul>
          )}
          <h3 onClick={toggleCSS}>
            <VscChevronDown /> CSS
          </h3>
          {showCSS && (
            <ul className='css'>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Introduction</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Syntaxe et Sélecteurs</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Propriétés de Texte</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Modèle de Boîte</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Flexbox</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Grid Layout</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Couleurs et Fonds</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Transitions et Animations</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Responsive Design et Media Queries</li>
              <li><VscDebugBreakpointLogUnverified className='icooo' />Préprocesseurs CSS (Sass, Less)</li>
            </ul>
          )}
          <h3 onClick={toggleJS}>
            <VscChevronDown /> JavaScript
          </h3>
          {showJS && (
            <ul className='js'>
              <li><VscDebugBreakpointLog className='conn' />Introduction au JavaScript</li>
              <li><VscDebugBreakpointLog className='conn' />Syntaxe de Base et Opérateurs</li>
              <li><VscDebugBreakpointLog className='conn' />Structures de Contrôle</li>
              <li><VscDebugBreakpointLog className='conn' />Fonctions</li>
              <li><VscDebugBreakpointLog className='conn' />Objets et Tableaux</li>
              <li><VscDebugBreakpointLog className='conn' />DOM (Document Object Model)</li>
              <li><VscDebugBreakpointLog className='conn' />Événements</li>
              <li><VscDebugBreakpointLog className='conn' />AJAX et Fetch API</li>
              <li><VscDebugBreakpointLog className='conn' />ES6+ et Modules JavaScript</li>
              <li><VscDebugBreakpointLog className='conn' />Asynchrone JavaScript (Promises, async/await)</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Right;

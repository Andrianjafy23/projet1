import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';

library.add(faHtml5, faCss3Alt, faJs);

function Vatany() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcNav, setSrcNav] = useState('');
  const [activeEditor, setActiveEditor] = useState('html');
  const [codeData, setCodeData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcNav(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  useEffect(() => {
    fetchCodeData();
  }, []);

  const fetchCodeData = async () => {
    try {
      const response = await axios.get('http://localhost:8082/code');
      setCodeData(response.data);
    } catch (error) {
      console.error('There was an error fetching the code data!', error);
    }
  };

  const loadCode = (code) => {
    setHtml(code.html);
    setCss(code.css);
    setJs(code.js);
  };

  return (
    <div className="Vatany">
      <div className='tab'>
        <div className="icon-bar">
          <FontAwesomeIcon
            icon={faHtml5}
            size="2x"
            onClick={() => setActiveEditor('html')}
            className={activeEditor === 'html' ? 'active' : ''}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            size="2x"
            onClick={() => setActiveEditor('css')}
            className={activeEditor === 'css' ? 'active' : ''}
          />
          <FontAwesomeIcon
            icon={faJs}
            size="2x"
            onClick={() => setActiveEditor('js')}
            className={activeEditor === 'js' ? 'active' : ''}
          />
        </div>

        <div className="editeur">
          {activeEditor === 'html' && (
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder="HTML code"
            />
          )}
          {activeEditor === 'css' && (
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              placeholder="CSS code"
            />
          )}
          {activeEditor === 'js' && (
            <textarea
              value={js}
              onChange={(e) => setJs(e.target.value)}
              placeholder="JavaScript code"
            />
          )}
        </div>
      </div>

      <iframe
        srcDoc={srcNav}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />

      <div className="data-list">
        <h2>Saved Code Snippets</h2>
        <ul>
          {codeData.map((item, index) => (
            <li key={index} onClick={() => loadCode(item)}>
              <h3>{item.titre}</h3>
              <p>{item.soutitre}</p>
              <pre>{item.expliquer}</pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vatany;

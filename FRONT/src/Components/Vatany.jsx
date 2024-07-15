import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';

library.add(faHtml5, faCss3Alt, faJs);

function Vatany() {
  const [activeEditor, setActiveEditor] = useState('html');
  const [codeData, setCodeData] = useState([]);

  useEffect(() => {
    fetchCodeData();
  }, []);

  const fetchCodeData = async () => {
    try {
      const response = await axios.get('http://localhost:8083/base');
      setCodeData(response.data);
    } catch (error) {
      console.error('There was an error fetching the code data!', error);
    }
  };

  const handleEditorChange = (editor) => {
    setActiveEditor(editor);
  };

  const handleCodeChange = (event, index) => {
    const { name, value } = event.target;
    const updatedCodeData = [...codeData];
    updatedCodeData[index][name] = value;
    setCodeData(updatedCodeData);
  };

  return (
    <div className="Vatany">
      <div className='tab'>
        <ul>
          {codeData.map((item, index) => (
            <li key={index} className='pub'>
              <h3>{item.titre}</h3>
              <p className='flow'>{item.soutitre}</p>
              <p className='flow'>{item.expliquer}</p>
              <div className="icon-bar">
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2x"
                  onClick={() => handleEditorChange('html')}
                  className={activeEditor === 'html' ? 'active' : ''}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  size="2x"
                  onClick={() => handleEditorChange('css')}
                  className={activeEditor === 'css' ? 'active' : ''}
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  onClick={() => handleEditorChange('js')}
                  className={activeEditor === 'js' ? 'active' : ''}
                />
              </div>
              <div className="editeur">
                {activeEditor === 'html' && (
                  <textarea
                    name="html"
                    value={item.html}
                    onChange={(e) => handleCodeChange(e, index)}
                    placeholder="HTML code"
                  />
                )}
                {activeEditor === 'css' && (
                  <textarea
                    name="css"
                    value={item.css}
                    onChange={(e) => handleCodeChange(e, index)}
                    placeholder="CSS code"
                  />
                )}
                {activeEditor === 'js' && (
                  <textarea
                    name="js"
                    value={item.js}
                    onChange={(e) => handleCodeChange(e, index)}
                    placeholder="JavaScript code"
                  />
                )}
              </div>
              <iframe
                key={index}
                srcDoc={`
                  <html>
                    <body>${item.html}</body>
                    <style>${item.css}</style>
                    <script>${item.js}</script>
                  </html>
                `}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vatany;

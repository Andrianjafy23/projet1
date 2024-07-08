import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    pwd: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = isLogin ? 'http://localhost:8082/Login' : 'http://localhost:8082/laz';
    const payload = isLogin ? { email: values.email, pwd: values.pwd } : { name: values.name || 'default_name', email: values.email, pwd: values.pwd };
    
    axios.post(url, payload)
      .then(res => {
        setSuccess(res.data.message);
        setError('');
      })
      .catch(err => {
        setError(err.response ? err.response.data.message : 'Erreur lors de la soumission du formulaire');
        setSuccess('');
      });
  };

  const backgroundImageStyle = {
    backgroundImage: 'url(/devweb.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
    setError('');
    setSuccess('');
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setError('');
    setSuccess('');
  };

  return (
    <div style={backgroundImageStyle} className='connecter'>
      <div className='soratra'>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi rem sint accusantium minima molestias possimus inventore aspernatur quod alias molestiae officiis deserunt tempora nesciunt, fuga quae, veniam voluptate nulla.</h2>
      </div>
      <div className='ka'>
        <div className='b'>
          <button onClick={handleLoginClick} className={isLogin ? 'active' : ''}><LoginIcon />Connexion</button>
          <button onClick={handleSignupClick} className={!isLogin ? 'active' : ''}><HowToRegIcon />Inscription</button>
        </div>
        {isLogin ? (
          <form className='con' onSubmit={handleSubmit}>
            <div className='alahatra'>
              <FontAwesomeIcon icon={faEnvelope} className='icone' />
              <input type="email" placeholder="Email" onChange={e => setValues({ ...values, email: e.target.value })} />
            </div>
            <div className='alahatra'>
              <FontAwesomeIcon icon={faLock} className='icone' />
              <input type="password" placeholder="Mot de passe" onChange={e => setValues({ ...values, pwd: e.target.value })} />
            </div>
            <button className='a' type='submit'>Se connecter</button>
            {error && <p className='error'>{error}</p>}
            {success && <p className='success'>{success}</p>}
          </form>
        ) : (
          <form className='inscri' onSubmit={handleSubmit}>
            <div className='alahatra'>
              <FontAwesomeIcon icon={faUser} className='icone' />
              <input type="text" placeholder="Nom" onChange={e => setValues({ ...values, name: e.target.value })} />
            </div>
            <div className='alahatra'>
              <FontAwesomeIcon icon={faEnvelope} className='icone' />
              <input type="email" placeholder="Email" onChange={e => setValues({ ...values, email: e.target.value })} />
            </div>
            <div className='alahatra'>
              <FontAwesomeIcon icon={faLock} className='icone' />
              <input type="password" placeholder="Mot de passe" onChange={e => setValues({ ...values, pwd: e.target.value })} />
            </div>
            <button className='a' type='submit'>S'inscrire</button>
            {error && <p className='error'>{error}</p>}
            {success && <p className='success'>{success}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;

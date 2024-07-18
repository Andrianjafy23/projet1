import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Vatany from './Components/Vatany';
import Logika from './Components/Logika';
import Right from './Components/Right';
import Login from './Components/Login';
import Connecté from './Components/Connecté';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='vatany'>
      <Logika searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='tab'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/codeo" element={<Vatan searchQuery={searchQuery} />} />
          <Route path="/connecter" element={<Connecté />} />
        </Routes>
      </div>
    </div>
  );
}

const Vatan = ({ searchQuery }) => (
  <div className='va'>
    <Right /> 
    <Vatany searchQuery={searchQuery} />
  </div>
);

export default App;

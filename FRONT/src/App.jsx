import './App.css'
import { Routes, Route } from 'react-router-dom';
import Vatany from './Components/Vatany';
import Logika from './Components/Logika';
import Right from './Components/Right';
import Login from './Components/Login';
import Connecté from './Components/Connecté';


function App () {
return (
  <div className='vatany'>
    <Logika/>
   <div className='tab'>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/codeo" element={<Vatan/>} />
        <Route path="/connecter" element={<Connecté />} />
    </Routes>
    </div>
    
 </div>
);
};
const Vatan = () =>(
  <div className='va'>
    <Right/> 
    <Vatany/>
  </div>
);
export default App;

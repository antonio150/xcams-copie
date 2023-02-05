
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from 'react-router-dom';
import BackOff from './BackOffice/BackOff';
import Home from './Home/Home';
import Formular from './Formular/Formular';

function App() {
  return (
    <Router >
    
    <Routes>
      <Route path='/' element={< Home />}></Route>
      <Route path='/Back' element={< BackOff />}></Route>
      <Route path='/Formular' element={< Formular />}></Route>
    </Routes>
      
     
    </Router>
  );
}

export default App;

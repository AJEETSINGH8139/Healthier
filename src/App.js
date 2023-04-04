import Home from './Home';
import Input from './Input';
import './App.css';

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  return (
    <div className="App">
      <Router>
      <nav>
        <Link className='nav-buttons' to="#">Logo</Link>
        <Link className='nav-buttons' to="#">Home</Link>
        <Link className='nav-buttons' to="#">About</Link>
        <Link className='nav-buttons' to="#">Contact Us</Link>
      </nav>
      
      <Routes>
    
        <Route exact path="/" element={<Input callback = {setAge}/>} />

        <Route exact path="/home" element={<Home age = {age} />} />
 
      </Routes>

    </Router> 
      
    </div>
  );
}

export default App;

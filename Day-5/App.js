import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
// import Dashboard from './Components/Pages/Dashboard';
 

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={< Login /> } />
            <Route exact path='/oct' element={<Signup />} />
            {/* <Route exact path='/opt' element={<Dashboard />} /> */}
          </Routes>
        </BrowserRouter>
               
      </div>
    
  );
}

export default App;
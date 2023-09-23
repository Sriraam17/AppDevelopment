import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Home from './Home.jsx'
import store from './Components/Redux/Store'
import Dashboard from './Components/Pages/Dashboard';
import { Provider } from 'react-redux';
import Footer from './Components/Pages/Footer';
/*import { useUser } from './Components/Context/UserContext';*/  

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route index element={<Footer /> } />
            <Route path='/login' element={< Login /> } />
            <Route path='/oct' element={<Signup />} />
            <Route path='/okk' element={<Dashboard />} />
          </Routes>
        </Provider>
        </BrowserRouter>
               
      </div>
    
  );
}

export default App;
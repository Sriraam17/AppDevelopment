import React from 'react';
import { BrowserRouter , Navigate, Route,Routes } from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Home from './Home.jsx'

import AdminDashboard from './Components/Admin/AdminDashboard';

import Privacy from './Components/Pages/Privacy';
import AdminSide from './Components/NavBar/AdminSide';
import Header from './Components/Pages/Header';
import AboutUs from './Components/Pages/AboutUS';
import AdminLogin from './Components/Admin/AdminLogin';
import TermandConditions from './Components/Pages/TermandConditions';
import AdminUser from './Components/Admin/AdminUser';
import Sidebar from './Components/NavBar/SideBar';
import AdminProduct from './Components/Admin/AdminProduct';
import FAQ from './Components/Pages/FAQ';
import AdminFeedback from './Components/Admin/AdminFeedback';


import { useUser , UserProvider } from './Components/Context/UserContext'; 

function App() {
    const PrivateRoute = ({ children }) => {
      const { isUserLoggedIn } = useUser();
      return isUserLoggedIn ? children : <Navigate to="/login" replace />
    }
  return (
    
      <div className="App">
        <BrowserRouter>
          <UserProvider>
          <Routes>
            <Route index element={<Home /> } />
            <Route path='/login' element={< Login /> } />
            <Route path='/oct' element={<Signup />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path="/adminuser" element={<AdminUser />} /> 
            <Route path="/adminproduct" element={<AdminProduct />} />
            <Route path="/adminfeedback" element={<AdminFeedback />} />
            <Route path='/pripolicy' element={<Privacy />} />
            <Route path="/aside" element={<AdminSide/>}/>
            <Route path="/head" element={<Header/>}/>
            <Route path="/abus" element={<AboutUs />} />
            <Route path="/taq" element={<TermandConditions />} /> 
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/faq" element={<FAQ />} />
            {/* <Route path="/okk" element={<Admindashboard />} />   */}
          </Routes>
        </UserProvider>
        </BrowserRouter>
               
      </div>
    
  );
}

export default App;
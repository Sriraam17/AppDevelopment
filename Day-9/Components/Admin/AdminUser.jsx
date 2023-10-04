import React from 'react'
import '../css/Admin/AdminsUser.css'

import Header from '../Pages/Header';
import AdminSide from '../NavBar/AdminSide';


export default function Adminuser() {

  return (
    <div>
      <div>

        <Header/>
<div className='change'>
        < AdminSide />
        </div>
     
<div className='tu'> 

      <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Auction-ID</th>
          <th>E-mail</th>
          <th>Phone No</th>
          <th>Products Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Saran</td>
            <td>A-601</td>
            <td>727821tucs220@gmail.com</td>
            <td>1234567890</td>
            <td>4</td>
        </tr>
        <tr>
             <td>Saran Kumar</td>
             <td>C-605</td>
            <td>727821tucs219@gmail.com</td>
            <td>0123456789</td>
            <td>6</td>
        </tr>
        <tr>
             <td>Sedhuram</td>
             <td>SS-607</td>
            <td>727821tucs221@gmail.com</td>
            <td>9012345678</td>
            <td>2</td>
        </tr>
        <tr>
             <td>Sriraam Vaithya</td>
            <td>AB-069</td>
            <td>727821tucs236@gmail.com</td>
            <td>9585698439</td>
            <td>8</td>
        </tr>
        <tr>
            <td>Suriyan</td>
            <td>SS-226</td>
            <td>727821tucs238@gmail.com</td>
            <td>9552638339</td>
            <td>6</td>
        </tr>
      </tbody>
      </table>


</div>
       </div>
      
     </div>
      
      )
}
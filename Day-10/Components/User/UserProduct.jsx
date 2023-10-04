import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import "../css/User/UserProduct.css"
import watch from './watch.jpeg'
import iphone from './iphone.jpg'
import mar from '../components/maragatha.jpeg'
import { Link } from 'react-router-dom'
import Footera from '../Pages/Footera'
export default function Page2() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)}
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <div className='details'> */}
      <div className='metric'>
      
<div className='dashboard'>
{/* <AdminSide/> */}
<div className='hell'>

<div className='coin1'>
      <Link to="">
        <img src={watch} alt="loading..." className='cc11'></img> 
        </Link> 
      <div className='txt1'>
        <Link to=''style={{ left:"10%",top:"63%",bottom: "0%"}}>Product Name: Garmin Plus</Link>
        <Link to='' style={{left:"10%",top:"73%",bottom: "0%"}}>Auction State:Closed</Link>
        <Link to='' style={{left:"10%",top:"83%",bottom: "0%"}}>Price:RS 20,000</Link>
      </div>
      </div>
</div>
      <div className='coin2'>
        <Link to=''>
        <img src={iphone} alt="loading..." className='cb2'></img> 
        </Link>
       <div className='txt1'>
          <Link to=''style={{left:"10%",bottom:"0px",color:"black",top:"63%"}}>Product Name: IPhone15 pro</Link>
          <Link to='' style={{left:"10%",top:"73%",bottom: "0%"}}>Auction State:Closed</Link>
        <Link to='' style={{left:"10%",top:"83%",bottom: "0%"}}>Price:RS 1,50,000</Link>
      </div>
      </div>
      <div className='coin3'>
        <Link to=''>
        <img src={mar} alt="loading..." className='cb3'></img> 
        </Link>
      <div className='txt1'>
        <Link to=''style={{left:"10%",bottom:"0px",top:"63%",color:"black"}}>Product Name: Egypt Gem</Link>
        <Link to='' style={{left:"10%",top:"73%",bottom: "0%"}}>Auction State:Closed</Link>
        <Link to='' style={{left:"10%",top:"83%",bottom: "0%"}}>Price:RS 20,00,000</Link>
      </div>
      </div>
       <div className='coin4'> 
        <Link to=''>
        <img src={"https://i.pinimg.com/originals/1a/76/6c/1a766c17da9966a2c0a16a8176310654.jpg"} alt="loading..." className='cb4'></img> 
        </Link>
        <div className='txt1'>
        <Link to=''style={{left:"10%",bottom:"0px",top:"63%",color:"black"}}>Product Name:1978 Mustang</Link>
        <Link to='' style={{left:"10%",top:"73%",bottom: "0%"}}>Auction State:Closed</Link>
        <Link to='' style={{left:"10%",top:"83%",bottom: "0%"}}>Price:RS 40,00,000</Link>
      </div>
      </div>
      <div className='coin5'>
        <Link to=''>
        <img src={("https://cms.saatchiart.com/wp-content/uploads/2023/08/interiors2-1024x683.jpeg")} alt="loading..." className='cb5'></img> 
        </Link>
        <div className='txt1'>
        <Link to=''style={{left:"10%",bottom:"0px",top:"63%",color:"black"}}>Product Name:Blushing Girl</Link>
        <Link to='' style={{left:"10%",top:"73%",bottom: "0%"}}>Auction State:Closed</Link>
        <Link to='' style={{left:"10%",top:"83%",bottom: "0%"}}>Price:RS 4,00,000</Link>
        </div>
      </div>
      <div className='coin6'>
        <Link to=''>
        <img src={("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/20210702055716_Mini-Cooper-JCW-front-static-1.jpg&c=0")} alt="loading..." className='cb6'></img> 
        </Link>
        <div className='txt1'>
        <Link to=''style={{left:"10%",bottom:"0px",top:"63%",color:"black"}}>Product Name:Mini Cooper S</Link>
        <Link to='' style={{left:"10%",top:"73%",bottom: "0%"}}>Auction State:Closed</Link>
        <Link to='' style={{left:"10%",top:"83%",bottom: "0%"}}>Price:RS 30,00,000</Link>
        </div>
      </div>

      {/* <div className='conin7'>
        <Link to='/volvo'>
        <img src={("https://carsales.pxcrush.net/carsales//cars/dealer/3mg1dlvrvnji2sjwr7p21ozw0.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480")} alt="loading..." className='c4'></img> 
        </Link>
      </div>
      <div className='ctxt1'>
        <Link to='/mercedes'style={{left:"100px",top:"1470px"}}>MERCEDES-BENZ C<br></br> CLASS C220d Progressive</Link>
      </div>
      <div className='ctxt1'>
        <Link to='/bmw3'style={{left:"570px",top:"1470px"}}>BMW 320 LD</Link>
      </div>
      <div className='ctxt1'>
        <Link to='/mini'style={{left:"1050px",top:"1470px"}}>MINI(John Cooper Works)</Link>
      </div>
      <div className='ctxt1'>
        <Link to='/volvo'style={{left:"100px",top:"1990px"}}>VOLVO XC60<br></br> D5 Inscription</Link>
      </div>   */}

</div>
</div>
      <Footera/>
</div>
  )
}
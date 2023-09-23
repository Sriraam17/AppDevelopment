import React from 'react'
import { Link } from 'react-router-dom'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import{GrNotes} from 'react-icons/gr'
import "../css/SideBar.css"
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className= "sidebar-responsive">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <GrNotes  className='icon_header'/> ResumeBulider
            </div>
            <span className='close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/landing">
                    <BsGrid1X2Fill className='icon' onClick={openSidebarToggle}/>Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/create">
                    <BsFillArchiveFill className='icon' onClick={OpenSidebar}/>Templates
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/edit">
                    <BsFillGrid3X3GapFill className='icon'onClick={OpenSidebar}/>Cover
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsListCheck className='icon'onClick={OpenSidebar}/>  Saved Templates
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsPeopleFill className='icon'onClick={OpenSidebar}/>
                   Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Help and Support
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
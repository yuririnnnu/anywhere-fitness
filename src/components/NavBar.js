import React from 'react'; 
import img from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Menus } from './Menus'
import { slide as Menu } from 'react-burger-menu'

const NavBar = () => {
    
    return (
        <div className="header">
            <div className="header-left">
                <Menu>
                    { Menus.map((menu, index) => {
                        return (
                            <li key={index} className={menu.cName}>
                                <Link to={menu.path}>
                                    {menu.icon}
                                    <span>{menu.title}</span>
                                </Link>
                            </li>
                        )
                    })}            
                </Menu>    
            </div>
            <div className="header-right">
                <div className="name">
                    <h1>ANYWHERE FITNESS</h1>
                </div>
                <div className="logo">
                    <img 
                    src={img} 
                    width="80" height="80"
                    alt="logo of anywhere fitness"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar
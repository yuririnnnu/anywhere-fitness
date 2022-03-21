import React from 'react'; 
import img from '../images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header">
            <div className="logo">
                <img 
                src={img} 
                width="100" height="100"
                alt="logo of anywhere fitness"
                />
            </div>
            <div>
                <h1>ANYWHERE FITNESS</h1>
            </div>
            <nav className="navigation">
                <Link to='/'>
                    <h2>Home</h2>
                </Link>
                <Link to='login'>
                    <h2>login</h2>
                </Link>

                <Link to='instructorLogin'>
                    <h2>instructorLogin</h2>
                </Link>

                <Link to='signup'>
                    <h2>signup</h2>
                </Link>

                <Link to='client'>
                    <h2>client</h2>
                </Link>

                <Link to='createClass'>
                    <h2>createClass</h2>
                </Link>

                <Link to='instructor'>
                    <h2>instructor</h2>
                </Link>

                <Link to='logout'>
                    <h2>logout</h2>
                </Link>

            </nav>
        </div>
    )
}

export default NavBar; 
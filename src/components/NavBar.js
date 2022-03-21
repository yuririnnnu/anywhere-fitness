import React from 'react'; 
import img from '../images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="logo">
                    <img 
                    src={img} 
                    width="80" height="80"
                    alt="logo of anywhere fitness"
                    />
                </div>
                <div className="name">
                    <h1>ANYWHERE FITNESS</h1>
                </div>
            </div>
            <div className="header-right">
                <nav className="navigation">
                    <Link to='login'>
                        <h2>Login</h2>
                    </Link>

                    <Link to='instructorLogin'>
                        <h2>Instructor Login</h2>
                    </Link>

                    <Link to='signup'>
                        <h2>Sign Up</h2>
                    </Link>

                    <Link to='client'>
                        <h2>User Home</h2>
                    </Link>

                    <Link to='createClass'>
                        <h2>Create Class</h2>
                    </Link>
                    
                    <Link to='client'>
                        <h2>Search Class</h2>
                    </Link>

                    <Link to='instructor'>
                        <h2>Instructor Home</h2>
                    </Link>

                    <Link to='logout'>
                        <h2>Logout</h2>
                    </Link>

                </nav>
            </div>
        </div>
    )
}

export default NavBar; 
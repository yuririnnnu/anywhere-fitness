import React from 'react'; 
import img from '../images/logo.png';
import { Link } from 'react-router-dom';
import useCollapse from 'react-collapsed'

const NavBar = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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
                <nav>                                   
                    <div className="menu" {...getToggleProps()}>
                        <h2>{isExpanded ? 'x' : 'Menu '}</h2>
                    </div>
                    <div {...getCollapseProps()}>
                        <div className="navigation">
                            <h2>- Login</h2>                                
                            <Link to='login'>
                                <h2>Member</h2>
                            </Link>
                            <Link to='instructorLogin'>
                                <h2>Instructor</h2>
                            </Link>                                                                
                            <Link to='signup'>
                                <h2>or Sign Up?</h2>
                            </Link>
                            <h2>- Home</h2>
                            <Link to='client'>
                                <h2>Member</h2>
                            </Link>
                            <Link to='instructor'>
                                <h2>Instructor</h2>
                            </Link>
                            <h2>- About Classes</h2>
                            <Link to='createClass'>
                                <h2>Create Class</h2>
                            </Link>                                
                            <Link to='client'>
                                <h2>Search Class</h2>
                            </Link>

                            <Link to='logout'>
                                <h2>Logout</h2>
                            </Link>
                        </div>
                    </div>                                
                </nav>
            </div>
        </div>
    )
}

export default NavBar; 
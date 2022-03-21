import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
    const [ state, setState ] = useState({
        name: "",
        message: "",    
    })
    
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-buildweek.herokuapp.com/api/clients/register`, state)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setState({
            name: "",
            message: "",
        })
    }
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    return (
    <div className="footer">
        <footer className="contact">
            <h2>Get In Touch!</h2>
            <div className="footerContainer">
                <div className="left">
                    <div className="info">
                        <h3>Find Us Here:</h3>
                        <p>1234 Main Street
                        Somewhere NY
                        12345</p>
                        <div><a href="tel:+1-123-456-7890">123-456-7890</a></div>
                        <div><a href="mailto:info@anywherefitness.com">info@anywherefitness.com</a></div>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>          
                        <h3>Input your full name</h3>
                        <label>
                        <input
                            name="name"
                            type="name"
                            onChange={handleChange}
                            value={state.name}
                            />
                        </label>
                        <h3>Ask us any questions!</h3>
                        <label>
                            <input 
                            name="message"
                            type="text"
                            className="message"
                            onChange={handleChange}
                            value={state.message}
                            />
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </footer>
        <div className="bottom">
            <p>copy copyright Yuriko Takamiya 2022</p>
        </div> 
    </div>
    )
}

export default Footer
{/* <div className="contact">
          <div className="itemContainer">
            <Email className="icon"/>
            <h3>1234@email.com</h3>
          </div>

          <div className="itemContainer">
            <PhoneEnabled className="icon"/>
            <h3>123-456-7890</h3>
          </div>

          <div className="itemContainer">
            <Home className="icon"/>
            <h3>1234 SomeWhere Road #1004 Austin, TX 78744 USA</h3>
        </div>
      </div> */}
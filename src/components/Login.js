import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import LoginHeader from './LoginHeader'
import "./Login.css";

const Login = () => {
    const push = useNavigate(); 
    const [cred, setCred] = useState({
        username: '', 
        password: ''
    }); 

    const handleChange = (e) => {
        setCred({
            ...cred, 
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post("https://anywhere-fitness-buildweek.herokuapp.com/api/clients/login", cred)
            .then(resp => {
                console.log(resp); 
                localStorage.setItem("token",resp.data.token); 
                push('/client')
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div>
            <LoginHeader />
            <div className="ComponentContainer">      
                <div className="ModalContainer">                    
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input onChange={handleChange} name="username" id="username" />
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <input onChange={handleChange} name="password" type="password" id="password" />
                        </div>
                        <button>Login</button>
                    </form>                                
                </div>
            </div>
        </div>
    )
}
export default Login
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import "./Login.css";
import LoginHeader from './LoginHeader';

const InstructorLogin = () => {
    const push = useNavigate(); 
    const [cred, setCred] = useState({
        username: '', 
        password: ''
    }); 

    const handleChange = (e) => {
        setCred({
            ...cred, 
            [e.target.name]:e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post(`https://anywhere-fitness-buildweek.herokuapp.com/api/instructors/login`, cred)
        .then(res => {
            localStorage.setItem("username", cred.username)
            localStorage.setItem("id", res.data.instructor_id)
            localStorage.setItem("token", res.data.token); 
            push('/instructor')
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <div>
            <LoginHeader /> 
            <div className="ComponentContainer">  
                <div className="ModalContainer">                
                    <h1 className="login">Instructor Login</h1>
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

export default InstructorLogin;
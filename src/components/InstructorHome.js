import React from 'react';
import ClassList from './ClassList';

const InstructorHome = () => {
    const username = localStorage.getItem("username")

    return (
        <div className="ComponentContainer">  
            <div className="ModalContainer">
                <h1>Hi, {username}!</h1>
                <h2>Class Lists</h2>
                <ClassList />
            </div>          
        </div>
    )
}

export default InstructorHome;
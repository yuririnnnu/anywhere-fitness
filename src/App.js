import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login"; 
import Logout from "./components/Logout"; 
import NavBar from "./components/NavBar"; 
import SignUp from "./components/SignUp";
import CreateClass from "./components/CreateClass";
import InstructorHome from "./components/InstructorHome";
import InstructorLogin from "./components/InstructorLogin";
import FindClass from "./components/FindClass";
import {Email, PhoneEnabled, Home } from "@material-ui/icons";

function App() {
  return (
    
   <BrowserRouter>
    <NavBar />
   <Routes>
   
    <Route exact path="/" element={<Login />}/>
    <Route exact path="login" element={<Login />}/>
    <Route exact path="instructorLogin" element={<InstructorLogin />}/>
    <Route exact path="signup" element={<SignUp />}/>
    <Route exact path="client" element={<FindClass />}/>
    <Route path="createClass" element={<CreateClass />}/>
    <Route path="instructor" element={<InstructorHome/>}/>
    <Route path="logout" element={<Logout />} />
    </Routes>
   
  <div className="contact">
    <div className="itemContainer">
        <Email className="icon"/>
        <h3>Email: 1234@email.com</h3>
    </div>

    <div className="itemContainer">
        <PhoneEnabled className="icon"/>
        <h3>Phone: 123-456-7890</h3>
    </div>

    <div className="itemContainer">
        <Home className="icon"/>
        <h3>Address: 1234 SomeWhere Road #1004 Austin, TX 78744 USA</h3>
    </div>
  </div>
   </BrowserRouter>

   
  );
}

export default App;

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
import Footer from "./components/Footer";

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;

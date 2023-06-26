// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contatcs";
import Copy from "./components/Copy";
import Prueba from "./components/Prueba";
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"; 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Prueba />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/projects/edit/:projectId" element={<EditProjectPage />} /> */}
          {/*    ADD    */}
          {/* <Route path="/signup" element={<SignupPage />} /> */}
        </Routes>
      </Router>
      {/* <Prueba></Prueba> */}
    </div>
  );
}

export default App;

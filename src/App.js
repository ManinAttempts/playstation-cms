import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./app/components/Home";
import Login from "./app/components/Login";
import Games from "./app/components/Games";
import Accessories from "./app/components/Accessories";
import Nabvar from "./app/components/Navbar";
import Register from "./app/components/Register";

const App = () => {
  return(
   <Router>
     <Nabvar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/games" element={<Games/>} />
       <Route path="/accessories" element={<Accessories/>} />
     </Routes>
   </Router>
  )
}

export default App;
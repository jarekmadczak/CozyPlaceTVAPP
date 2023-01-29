import "./App.scss";
import { Route, Routes } from "react-router-dom"
import Sikorski from "./components/routes/Sikorski";
import Navigation from "./components/routes/Navigation";
import Apartament1 from "./components/routes/Apartament1";
import { useState } from "react";
function App() {
  const [loading,setLoading]= useState(true);
  const spinner =document.getElementById("spinner");
  if(spinner){
    setTimeout(() =>{
      spinner.style.display = "none";
      setLoading(false);
    },4000);
  }
  return (
    !loading && (
    <div>
      
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/Apartament1" element={<Apartament1 />} /> 
        <Route path="/Sikorski" element={<Sikorski />} /> 
        <Route path="/CozyPlaceTVAPP" element={<Navigation />} /> 
        <Route path="/Navigation" element={<Navigation />} /> 
      </Routes>
  
  
    </div>
    )
  );
}

export default App;

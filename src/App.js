import "./App.scss";
import { Route, Routes } from "react-router-dom"
import Sikorski from "./components/routes/Sikorski";
import Navigation from "./components/routes/Navigation";
import Apartament1 from "./components/routes/Apartament1";
import { Suspanse,lazy, Suspense } from "react";
function App() {
  return (
    (
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

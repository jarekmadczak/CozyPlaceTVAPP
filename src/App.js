import "./App.scss";
import { Route, Routes } from "react-router-dom"
import Sikorski from "./components/routes/Sikorski";
import Navigation from "./components/routes/Navigation";

function App() {
  return (
    <div>
      
      
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/Sikorski" element={<Sikorski />} /> 
        <Route path="/CozyPlaceTVAPP" element={<Navigation />} /> 
        <Route path="/Navigation" element={<Navigation />} /> 
      </Routes>
  
  
    </div>
  );
}

export default App;

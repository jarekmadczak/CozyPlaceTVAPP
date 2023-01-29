import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sikorski from "./components/routes/Sikorski";
import Navigation from "./components/routes/Navigation";
function App() {
  return (
    <div>
      cso
    <BrowserRouter>
      <Routes>
        <Route path="navigation" element={<Navigation />} />
        <Route path="sikorski" element={<Sikorski />} /> 
        <Route path="" element={<Navigation />} /> 
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;

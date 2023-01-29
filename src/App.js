import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sikorski from "./components/routes/Sikorski";
import Navigation from "./components/routes/Navigation";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="sikorski" element={<Sikorski />} /> 
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;

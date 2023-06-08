import "./App.scss";
import { Route, Routes } from "react-router-dom"
import Sikorski from "./components/routes/Sikorski";
import Navigation from "./components/routes/Navigation";
import Apartament1 from "./components/routes/Apartament1";
import { Suspanse,lazy, Suspense } from "react";
import Anno from "./components/routes/Anno";
import Sikorski2 from "./components/routes/Sikorski2";
import Redwood from "./components/routes/Redwood";
import Oasis from "./components/routes/Oasis";
import Lazienki from "./components/routes/Lazienki";
import Apartament6 from "./components/routes/Apartament6";
import Apartament5 from "./components/routes/Apartament5";
import Apartament4 from "./components/routes/Apartament4";
import Apartament3 from "./components/routes/Apartament3";
import Apartament2 from "./components/routes/Apartament2";
import IE from "./components/routes/IE";
function App() {
  
  return (
    (
    <div>
      
      <Routes> 
        <Route path="/CozyPlaceTVAPP" element={<Navigation />} /> 
        <Route path="/Navigation" element={<Navigation />} /> 
        <Route path="/" element={<Navigation />} />
        <Route path='/home' element={<Apartament1/>} />
        <Route path="/Apartament1" element={<Apartament1 />} /> 
        <Route path="/Apartament2" element={<Apartament2 />} />
        <Route path="/Apartament3" element={<Apartament3 />} />
        <Route path="/Apartament4" element={<Apartament4 />} />
        <Route path="/Apartament5" element={<Apartament5 />} />
        <Route path="/Apartament6" element={<Apartament6 />} />
        <Route path="/Lazienki" element={<Lazienki />} />
        <Route path="/Oasis" element={<Oasis />} />
        <Route path="/Redwood" element={<Redwood />} />
        <Route path="/Sikorski2" element={<Sikorski2 />} />
        <Route path="/Anno" element={<Anno />} /> 
        <Route path="/Sikorski" element={<Sikorski />} />  
        <Route path="/IE" element={<IE />} />  
      </Routes>
  
  
    </div>
    )
  );
}

export default App;

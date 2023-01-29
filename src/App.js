import "./App.scss";
import Sikorski from "./components/routes/Sikorski";
import Navigation from "./components/routes/Navigation";


function App() {
  let componet
  switch (window.location.pathname) {
      case "/":
        componet= <Navigation />;
      break;
      case "/Sikorski.js":
        componet= <Sikorski />;
      break;
  }
  return (
    <div>      
        <Navigation/>
        {componet}
    </div>
  );
}

export default App;

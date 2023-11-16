import './App.css';
import Home from "./pages/Home";
import Select from "./pages/Select";
import Dronestats from "./pages/Dronestats";
import ForestModel from "./pages/ForestModel";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/Select" component={Select} />
        <Route exact path="/Dronestats" component={Dronestats} />
        <Route exact path="/ForestModel" component={ForestModel} />
      </div>
    </Router>
    
  );
}

export default App;

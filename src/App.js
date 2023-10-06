import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { FindTrains } from './components/findTrains';
import { Home } from './components/home';
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/find" element={<FindTrains/>}/>
        </Routes>
      </Router>
  );
}

export default App;

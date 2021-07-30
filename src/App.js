import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'; 
import Navbar from './Navbar';
import About from './About';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
        <Route path = "/about">
        <About/>
        </Route>
        </Switch>

        </div>

      </div>
    </Router>
  );
}

export default App;

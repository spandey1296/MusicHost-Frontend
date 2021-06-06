import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar2 from "./Navbar2";
import {withRouter} from "react-router-dom";
import MusicData from './MusicData';
import Navbar2 from "./Navbar2";




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar2/>
          <Switch>
            <Route path="/MusicData"><MusicData/></Route>
            <Route path="/logout"></Route>
          </Switch>
      </Router>
    </div>
  );



}

export default withRouter(Route);

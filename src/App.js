import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";

import MusicUploader from "./components/MusicUploader";
import MusicData from "./components/MusicData";

import Footer from "./components/Footer"



function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
        <Route path="/MusicUploader" component={MusicUploader}/>
          <Route path="/MusicData" component={MusicData}/>
          <Route path="/Signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
     
    </div>
    <Footer/>
    </>
  );
}

export default App;

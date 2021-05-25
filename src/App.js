import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MusicData from "./components/MusicData";
import MusicUploader from "./components/MusicUploader";
import CodeLink from "./components/CodeLink";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        
          <Switch>
            <Route path="/Signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
      </Router>
      <CodeLink />

      <Footer />
    </div>
  );



}

export default App;

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
<<<<<<< HEAD
import MusicUploader from "./components/MusicUploader";
import MusicData from "./components/MusicData";
=======
import Footer from "./components/Footer"


>>>>>>> 0cd7a17dc4665f2029eb8b71346604a792c7ba89

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
<<<<<<< HEAD
          <Route path="/MusicData" component={MusicData}/>
          <Route path="/Signup" component={Signup} />
          <Route path="/login" component={Login} />
=======
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup} />
>>>>>>> 0cd7a17dc4665f2029eb8b71346604a792c7ba89
          <Route path="/" component={Home} />
        </Switch>
      </Router>
     
    </div>
    <Footer/>
    </>
  );
<<<<<<< HEAD
=======
  
>>>>>>> 0cd7a17dc4665f2029eb8b71346604a792c7ba89
}

export default App;

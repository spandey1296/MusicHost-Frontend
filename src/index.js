import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import MusicUploader from "./components/MusicUploader";
=======
import MusicHome from "./components/MusicHome";
>>>>>>> 0cd7a17dc4665f2029eb8b71346604a792c7ba89
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path="/uploadmusic" component={MusicUploader} />
=======
        
        <Route path="/uploadmusic" component={MusicHome} />

>>>>>>> 0cd7a17dc4665f2029eb8b71346604a792c7ba89
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

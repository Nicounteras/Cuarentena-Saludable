import React from "react"
import NavBar from "./NavBar"
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
   <NavBar/>
      <Switch>
      <Route path="/Cuarentena-Saludable" exact component={Home}/>
      </Switch>
      </Router>
    </>
  );
}


export default App;

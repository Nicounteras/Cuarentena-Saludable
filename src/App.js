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
        <Route path="/" component={Home}/>
      <Route path="/Cuarentena-Saludable/" component={Home}/>
      </Switch>
      </Router>
    </>
  );
}


export default App;

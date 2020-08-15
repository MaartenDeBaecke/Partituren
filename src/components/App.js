import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import EditCard from "./EditCard";
import CreateCard from "./CreateCard";
import Register from "./Register";
import Login from "./Login";
import Success from "./Success";


function App() {
  return(
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/edit/:id" component={EditCard} />
      <Route path="/create" component={CreateCard} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/success" component={Success} />
    </Router>
  );
}

export default App;

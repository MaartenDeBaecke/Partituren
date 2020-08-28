import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import EditCard from "./EditCard";
import CreateCard from "./CreateCard";
import axios from 'axios';
import NotFound from "./404";


function App() {
  const [permission, setPermission] = useState()

  useEffect(() => {
    axios.get('http://localhost:4000/permission').then(resp => {
      setPermission(resp.data);
    });

  }, [permission]);
  return(

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      {permission ?
        <div>
          <Route path="/edit/:id" component={EditCard} />
          <Route path="/create" component={CreateCard} />

        </div>
      :
        null
      }


    </Router>

  );
}

export default App;

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import EditCard from "./EditCard";
import CreateCard from "./CreateCard";
import axios from 'axios';
=======
import React from 'react';
import Banner from './banner';
import Catalog from './Catalog';
>>>>>>> 7195d7d0097cbdff579cde9af1e25b4f785b0ae3

function App() {
  const [permission, setPermission] = useState()

  useEffect(() => {
    axios.get('http://localhost:4000/permission').then(resp => {
      setPermission(resp.data);
    });

  }, [permission]);
  return(
<<<<<<< HEAD
    <Router>
      <Route path="/" exact component={Home} />
      {permission ?
        <div>
          <Route path="/edit/:id" component={EditCard} />
          <Route path="/create" component={CreateCard} />
        </div>
      :
        null
      }

    </Router>
=======
    <div>
      <Banner />
      <Catalog />
    </div>
>>>>>>> 7195d7d0097cbdff579cde9af1e25b4f785b0ae3
  );
} 

export default App;

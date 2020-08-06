import React, {useState, useEffect} from 'react';
import {Search} from './search';
import Header from './Header';
import Overzicht from './Overzicht';


const Banner = ({ search }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    search(value);
  },[search, value]);

  return(
    <div className="banner">
      <Header />
      <Search searching={value => setValue(value)} />
      <Overzicht />
    </div>
  );
};


export default Banner;

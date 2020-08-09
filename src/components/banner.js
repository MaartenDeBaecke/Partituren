import React, {useState, useEffect} from 'react';
import {Search} from './search';
import Header from './Header';
import Overzicht from './Overzicht';
import Highlight from './Highlight';

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
      <Highlight />
    </div>
  );
};


export default Banner;

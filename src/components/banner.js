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
      <div className="bird-cont ">
        <div className="bird">

        </div>
      </div>
      <br/>
      <Header />
      <div className="bird-cont bird3">
        <div className="bird">

        </div>
      </div>
      <Search searching={value => setValue(value)} />
      <Overzicht />
    </div>
  );
};


export default Banner;

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
      <div class="bird-cont ">
        <div class="bird">

        </div>
      </div>
      <br/>
      <div class="bird-cont bird2">
        <div class="bird">

        </div>
      </div>
      <Header />
      <div class="bird-cont bird3">
        <div class="bird">
        
        </div>
      </div>
      <Search searching={value => setValue(value)} />
      <Overzicht />
    </div>
  );
};


export default Banner;

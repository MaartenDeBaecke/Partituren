import React, {useState} from 'react';
import {Search} from './search';
import Header from './Header';
import Overzicht from './Overzicht';

function Banner() {
  const [value, setValue] = useState("");
  console.log(value);

  return(
    <div className="banner">
      <Header />
      <Search searching={value => setValue(value)} />
      <Overzicht />
    </div>
  );
}


export default Banner;

import React from 'react';
import Search from './search';
import Header from './Header';
import Overzicht from './Overzicht';

function Banner() {
  return(
    <div className="banner">
      <Header />
      <Search />
      <Overzicht />
    </div>
  );
} 


export default Banner;

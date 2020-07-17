import React from 'react';
import Search from './search';


function Banner() {
  return(
    <div className="banner">
      <h1 className="nameTitle">Steven De Baecke</h1>
      <p className="nameSubTitle">partituren</p>
      <Search />
      <div className="btn">
        <span className="noSelect">Overzicht</span><div id="circle">
      </div></div>
    </div>
  );
}


export default Banner;

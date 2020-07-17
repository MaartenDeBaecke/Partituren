import React from 'react';


function Banner() {
  return(
    <div className="banner">
      <h1 className="nameTitle">Steven De Baecke</h1>
      <p className="nameSubTitle">partituren</p>
      <form className="searchForm">
        <input className="search" type="text" name="search" autoComplete="off" placeholder="zoeken" />
      </form>
      <div className="btn">
        <span className="noSelect">Overzicht</span><div id="circle">
      </div></div>
    </div>
  );
}


export default Banner;

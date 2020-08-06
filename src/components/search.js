import React, { useState } from 'react';

let input = "";

function Search() {
  const [value, setValue] = useState(input);

  function onSearch(e) {
    setValue(e.target.value);
    input = value;
  }

  return(
    <form className="searchForm">
      <input className="search" type="text" name="search" autoComplete="off" placeholder="zoeken" value={value} onChange={onSearch}/> </form>
  );
}




export { Search, input };

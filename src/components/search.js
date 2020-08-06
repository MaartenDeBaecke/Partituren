import React, { useState } from 'react';


const Search = ({ searching }) => {
  const [value, setValue] = useState("");

  function submit(e){
    setValue(e.target.value);
    searching(value);
  }

  return (
    <form className="searchForm">
      <input
        className="search"
        type="text" name="search"
        autoComplete="off"
        placeholder="zoeken"
        value={value}
        onChange={submit}
      />
    </form>
  );
};

export { Search };

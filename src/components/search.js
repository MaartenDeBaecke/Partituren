import React, { useState } from 'react';
import { scroller } from 'react-scroll';


const Search = ({ searching }) => {
  const [value, setValue] = useState("");

  function submit(e){
    setValue(e.target.value);
    searching(value);
  }

  function handleSubmit(e){
    e.preventDefault();

    scroller.scrollTo("overzicht", {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: 0
    });


  }

  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <input
        className="search"
        type="text" name="search"
        autoComplete="off"
        placeholder="zoeken"
        onChange={submit}
        value={value}
      />
    </form>
  );
};

export { Search };

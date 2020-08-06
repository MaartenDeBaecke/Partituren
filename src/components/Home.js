import React,  { useState } from "react";
import Banner from './banner';
import {Catalog} from './Catalog';

function Home(){
  const [input, setInput] = useState("");

  return(
    <div>
      <section id="banner">
        <Banner search={input => setInput(input)}/>
      </section>
      <section id="overzicht">
        <Catalog search={input} />
      </section>
    </div>
  );
}

export default Home;

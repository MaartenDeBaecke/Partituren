import React,  { useState } from "react";
import Banner from './banner';
import {Catalog} from './Catalog';
import SubBanner from './SubBanner';

function Home(){
  const [input, setInput] = useState("");

  return(
    <div>
      <section id="banner">
        <Banner search={input => setInput(input)}/>
      </section>
      <section id="subBanner">
        <SubBanner />
      </section>
      <section id="overzicht">
        <Catalog search={input} />
      </section>
    </div>
  );
}

export default Home;

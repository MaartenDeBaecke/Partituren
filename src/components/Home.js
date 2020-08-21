import React,  { useState, useEffect } from "react";
import Banner from './banner';
import {Catalog} from './Catalog';
import SubBanner from './SubBanner';
import {Nav} from "./Nav";


function Home(){
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  let finalInput = input;

  if (input2 !== ""){
    finalInput = input2;
  } 

  return(
    <div>
      <Nav searching={input => setInput2(input)} />

      <section id="banner">
        <Banner search={input => setInput(input)}/>
      </section>
      <section id="subBanner">
        <SubBanner />
      </section>
      <section id="overzicht">
        <Catalog search={finalInput} />
      </section>
    </div>
  );
}

export default Home;

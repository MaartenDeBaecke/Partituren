import React,  { useState, useEffect } from "react";
import Banner from './banner';
import {Catalog} from './Catalog';
import SubBanner from './SubBanner';
import {Nav} from "./Nav";


function Home(){
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const [render, setRender] = useState(false);

  let finalInput = input;

  if (input2 !== ""){
    finalInput = input2;
  }

  useEffect(() => {
    setTimeout(function(){
      setRender(true);
    }, 750);

  }, [render]);


  return(
    <div>
    {render ?
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
    :
      <div className="root">
        <span class="loader">
          <span class="one block"></span>
          <span class="two block"></span>
          <span class="three block"></span>
          <span class="four block"></span>
          <span class="five block"></span>
        </span>
      </div>

    }
    </div>
  );
}

export default Home;

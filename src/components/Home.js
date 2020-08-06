import React from "react";
import Banner from './banner';
import {Catalog} from './Catalog';

function Home(){
  return(
    <div>
      <section id="banner">
        <Banner />
      </section>
      <section id="overzicht">
        <Catalog />
      </section>
    </div>
  );
}

export default Home;

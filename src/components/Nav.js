import React, {useState, useEffect} from "react";
import axios from 'axios';
import PopUp from "./NavPopUp";
import { scroller } from 'react-scroll';

const Nav = ({ searching }) => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState(false);
  const [signIn, setSignIn] = useState()
  function clicking1(){
    setClicked(true);
    setName("Registreren");
  }

  function clicking2(){
    setClicked(true);
    setName("Aanmelden");
  }


  useEffect(() => {
    axios.get('http://localhost:4000/logInfo').then(resp => {
      setSignIn(resp.data);
    });

  }, [signIn]);

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


  return(
    <div>
      {clicked ? <PopUp name={name} popUp={value => setClicked(value)} /> : null }


        {signIn ?
          <div className="navContAf">
          <div>
            <form onSubmit={handleSubmit} className="navEl searchFN searchLogged">
              <input
                className="searchNav searchNL"
                type="text" name="search"
                autoComplete="off"
                placeholder="zoeken"
                onChange={submit}
                value={value}
              />
            </form>
            <form className="inline-block" action="http://localhost:4000/logout">
              <button className="navEl" id="navAF" >Afmelden</button>
            </form>
          </div>
          </div>
        :
          <div className="navContIn">

            <button className="navEl navEl2" onClick={clicking1}>Registreren</button>
            <button className="navEl navEl2" onClick={clicking2} >Aanmelden</button>

            <form onSubmit={handleSubmit} className="navEl navEl2 searchFN">
              <input
                className="searchNav"
                type="text" name="search"
                autoComplete="off"
                placeholder="zoeken"
                onChange={submit}
                value={value}
              />
            </form>

          </div>
        }
      </div>
  );
}

export {Nav};

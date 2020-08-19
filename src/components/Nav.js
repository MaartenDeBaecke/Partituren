import React, {useState, useEffect} from "react";
import axios from 'axios';
import PopUp from "./NavPopUp";

function Nav(){
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


  return(
    <div>
      {clicked ? <PopUp name={name} popUp={value => setClicked(value)} /> : null }

      <div className="navCont">
        {signIn ?
          <form action="http://localhost:4000/logout">
            <button className="navEl" >Afmelden</button>
          </form>
        :
          <div>
            <button className="navEl" onClick={clicking1}>Registreren</button>
            <button className="navEl" onClick={clicking2} >Aanmelden</button>
          </div>
        }
      </div>
    </div>
  );
}

export default Nav;

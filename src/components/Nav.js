import React, {useState} from "react";
import PopUp from "./NavPopUp";

function Nav(){
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");

  function clicking1(){
    setClicked(true);
    setName("Registreren");
  }

  function clicking2(){
    setClicked(true);
    setName("Aanmelden");
  }

  return(
    <div>
      {clicked ? <PopUp name={name} popUp={value => setClicked(value)} /> : null }

      <div className="navCont">
        <button className="navEl" onClick={clicking1}>Registreren</button>
        <button className="navEl" onClick={clicking2} >Aanmelden</button>
      </div>
    </div>
  );
}

export default Nav;

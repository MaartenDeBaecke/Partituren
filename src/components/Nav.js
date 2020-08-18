import React, {useState} from "react";
import PopUp from "./NavPopUp";

function Nav(){
  const [clicked, setClicked] = useState(false);

  function clicking(){
    setClicked(true);
  }

  return(
    <div>
      {clicked ? <PopUp popUp={value => setClicked(value)} /> : null }

      <div className="navCont">
        <button className="navEl" onClick={clicking}>Registreren</button>
        <button className="navEl" >Aanmelden</button>
      </div>
    </div>
  );
}

export default Nav;

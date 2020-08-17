import React, {useState} from "react";
import PopUp from "./NavPopUp";

function Nav(){
  const [clicked, setClicked] = useState("");

  function clicking(){
    setClicked(" popVis");
    setTimeout(function(){
      setClicked(" ");
    }, 4000);
  }

  return(
    <div>
      <PopUp click={clicked}/>
      <div className="navCont">
        <button className="navEl" onClick={clicking}>Registreren</button>
        <button className="navEl" >Aanmelden</button>
      </div>
    </div>
  );
}

export default Nav;

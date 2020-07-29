import React from "react";
import { Link } from "react-scroll";

function Overzicht(){
  return(
    <div className="btn">
        <span className="noSelect">
          <Link activeClass="active" to="overzicht" spy={true}
            smooth={true} offset={0} duration={500}><span className="clickOv">Overzicht</span></Link>
        </span><div id="circle">
    </div></div>
  );
}

export default Overzicht;

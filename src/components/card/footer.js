import React from "react";

function Footer(){
  return(
    <div className="desbtn">
      <span className="shine"><button className="buybtn"><i className="fas fa-file-import icon"></i>Koop nu</button></span>
      <button id="playbtn">&nbsp;<a className="playLink" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9a0KyR_l2tw"><i className="fas fa-play" ></i></a></button>
    </div>
  );
}

export default Footer;

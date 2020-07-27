import React from "react";

function Footer(props){
  return(
    <div className="desbtn">
      <span className="shine"><button className="buybtn"><i className="fas fa-file-import icon"></i>Koop nu</button></span>
      <button id="playbtn">&nbsp;<a className="playLink" target="_blank" rel="noopener noreferrer" href={props.lis}><i className="fas fa-play" ></i></a></button>
    </div>
  );
}

export default Footer;

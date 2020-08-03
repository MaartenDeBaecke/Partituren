import React from "react";

function Footer(props){
  let swapId;
  let swapClass;

  if (props.lis === ""){
    swapId = "disabledPlay";
    swapClass = "disPlayLink playLink";
  } else {
    swapId = "playbtn"
    swapClass = "playLink"
  }

  return(
    <div className="desbtn">
      <a target="_blank" rel="noopener noreferrer" href={props.buy}><span className="shine"><button className="buybtn" ><i className="fas fa-file-import icon"></i>Koop nu</button></span></a>

      <a target="_blank" rel="noopener noreferrer" href={props.lis}>
        <button id="playbtn" className={swapId}>&nbsp;
          <span className={swapClass} >
            <i className="fas fa-play" ></i>
          </span>
        </button>
      </a>

    </div>
  );
}

export default Footer;

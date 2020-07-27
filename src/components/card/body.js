import React from "react";

function Body(props){
  return(
    <div>
      <p className="cardSub">{props.sub}</p>
      <div className="extras">
        <p>{props.des}</p>
      </div>
    </div>
  );
}

export default Body;

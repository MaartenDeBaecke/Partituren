import React from "react";

function Img(props){
  console.log(props.url);
  return(<img className="cardImg" src={props.url} alt="dwarsfluit" />);
}

export default Img;

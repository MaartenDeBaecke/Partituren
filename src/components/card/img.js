import React from "react";

function Img(props){
  let url = props.url;

  if (props.url === ""){
    url = "https://static.wixstatic.com/media/299c16_9dd9a16c108542d48849edc401169d3c~mv2.png/v1/fill/w_339,h_465,al_c,q_85,usm_0.66_1.00_0.01/img_not_found.webp";
  }
  return(
    <img id="cardImg" src={url} alt={props.title}/>
  );
}

export default Img;
//props.url

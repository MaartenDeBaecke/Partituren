import React from "react";
import useFitText from "use-fit-text";

function Header(props){
  const { fontSize, ref } = useFitText({maxFontSize: 240, minFontSize: 181});

  return (
    <div ref={ref} style={{ fontSize, height: 72, width: 240 }}>
      <div id="cardHeader">{props.head}</div>
    </div>
  );
}

export default Header;

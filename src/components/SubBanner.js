import React, { useState } from "react";
import {Highlight, buyLink} from "./Highlight";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SubBanner(){

  const [buyUrl, setURl] = useState("");
  for (var i = 0; i < 2; i++){
    setInterval(function(){setURl(buyLink)}, 200);
  }


  return(
    <div className="subBanCont">
      <Row>
      <Col className="highDes" xl={6}>
        <h2 className="subBanTitle">Verkrijg een gratis kopie</h2>
        <p className="subBanDes">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco
        </p>
        <div className="desbtn subBanBtn">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={buyUrl}>
            <span className="shine">
              <button className="buybtn" >
                <i className="fas fa-file-import icon"></i>Gratis
              </button>
            </span>
          </a>
        </div>
      </Col>
      <Col xl={6}>
        <Highlight />
      </Col>
      </Row>
    </div>
  );
}

export default SubBanner;

import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function Element(){
  return(
    <Container className="cardContainer">
      <Jumbotron className="card">
        <img className="cardImg" src="https://www.euprint.be/sites/default/files_production/styles/cover_list/public/covers/9790365412648-00_0.jpg?itok=Zu_ZRVaf" alt="dwarsfluit" />
        <div className="description">
          <h2 className="cardHeader">Morning Blue</h2>
          <p className="cardSub">For Flute Solo</p>
          <div className="extras">
            <p>Telt 5 pagina’s,</p>
            <p>Gepubliceerd in 2003</p>
          </div>
          <div className="desbtn">
            <button className="buybtn"><i class="fas fa-file-import icon"></i>Koop nu</button>

            <button className="playbtn">&nbsp;<i class="fas fa-play" ></i></button>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
}


export default Element;

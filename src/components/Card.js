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

            <span className="shine"><button className="buybtn"><i class="fas fa-file-import icon"></i>Koop nu</button></span>


            <button className="playbtn">&nbsp;<a className="playLink" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9a0KyR_l2tw"><i class="fas fa-play" ></i></a></button>

          </div>
        </div>
      </Jumbotron>
    </Container>
  );
}


export default Element;

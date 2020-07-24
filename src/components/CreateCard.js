import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateCard(props){
  const [card, setCard] = useState({
    title: "",
    subTitle: "",
    img: "",
    description: "",
    listen: "",
    buy: ""
  })

  function handleChange(event){
    const {name, value} = event.target;

    setCard(prevCard => {
      return {
        ...prevCard,
        [name]: value
      }
    })
  }


  return(
    <div className="create">
      <div class="formCard">
      <h1 className="ccTitle">Nieuw</h1>
        <form className="createFrom">

          <Row>
            <Col xs={6}>
              <p className="flabel">Titel</p>
              <input className="cInput" type="text" placeholder="Morning Blue" />

              <p className="flabel">Ondertitel</p>
              <input className="cInput" type="text" placeholder="For Flute Solo" />

              <p className="flabel">Luisteren</p>
              <input className="cInput" type="text" placeholder="https://www.youtube.com/ochtendblauw" />

              <p className="flabel">Kopen</p>
              <input className="cInput cKopen" type="text" placeholder="https://www.euprint.be/nl/ochtendblauw-morning-blue" />
            </Col>
            <Col xs={6}>
              <p className="flabel">Beschrijving</p>
              <textarea className="textarea" placeholder="Telt 5 pagina’s, Gepubliceerd in 2003" />

              <p className="flabel cKaft">Kaft</p>
              <input className="cInput" type="text" placeholder="https://www.euprint.be/ochtentblauw.jpg" />
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default CreateCard;

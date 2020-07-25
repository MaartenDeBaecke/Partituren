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
  });

  function handleChange(event){
    const {name, value} = event.target;

    setCard(prevCard => {
      return {
        ...prevCard,
        [name]: value
      }
    });
  }


  return(
    <div className="create">
      <div className="formCard">
      <h1 className="ccTitle">Nieuw</h1>
        <form className="createFrom" >

          <Row>
            <Col md={6}>
              <p className="flabel">Titel</p>
              <input onChange={handleChange} name="title" className="cInput" type="text" placeholder="Morning Blue" />

              <p className="flabel">Ondertitel</p>
              <input onChange={handleChange} name="subTitle" className="cInput" type="text" placeholder="For Flute Solo" />

              <p className="flabel">Luisteren</p>
              <input onChange={handleChange} name="listen" className="cInput" type="text" placeholder="https://www.youtube.com/ochtendblauw" />

              <p className="flabel">Kopen</p>
              <input onChange={handleChange} name="buy" className="cInput cKopen" type="text" placeholder="https://www.euprint.be/nl/ochtendblauw-morning-blue" />
            </Col>
            <Col md={6} className="cscol">
              <p className="flabel">Beschrijving</p>
              <textarea onChange={handleChange} name="description" className="textarea" placeholder="Telt 5 pagina’s, Gepubliceerd in 2003" />

              <p className="flabel cKaft">Kaft</p>
              <input onChange={handleChange} name="img" className="cInput" type="text" placeholder="https://www.euprint.be/ochtentblauw.jpg" />
            </Col>
            <button className="saveBtn">Toevoegen</button>
          </Row>

        </form>
      </div>
    </div>
  );
}

export default CreateCard;

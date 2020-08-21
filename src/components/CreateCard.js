import React, { useState } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './card/Card';




function CreateCard(props){
  const [card, setCard] = useState({
    title: "Titel",
    subTitle: "SubTitel",
    img: "https://static.wixstatic.com/media/299c16_9dd9a16c108542d48849edc401169d3c~mv2.png/v1/fill/w_339,h_465,al_c,q_85,usm_0.66_1.00_0.01/img_not_found.webp",
    description: "Telt x paginas...",
    listen: "",
    buy: "",
    section: "1Nieuw",
    free: "true"
  });

  const [check, setCheck] = useState("false");

  function handleChange(event){
    const {name, value} = event.target;
    setCard(prevCard => {
      return {
        ...prevCard,
        [name]: value
      }
    });
  }

  function submit(event){
    axios.post('http://localhost:4000/cards/create', card)
        .then(res => console.log(res.data));
    event.preventDefault();
    props.history.push('/');
    window.location.reload(false);
  }

  function toggle(e){
    const value = e.target.value
    value === "true" ? setCheck("false") : setCheck("true");

    setCard(prevCard => {
      return {
        ...prevCard,
        free: check
      }
    });
  }

  return(
    <div className="create">
    <Row className="cRow">
      <Col className="ccolTwo" xl={7}>
        <div className="formCard">
          <h1 className="ccTitle">Nieuw</h1>
          <form className="createFrom" >

            <Row>
              <Col md={6}>
                <p className="flabel">Titel</p>
                <input autoComplete="off" onChange={handleChange} name="title" className="cInput" type="text" placeholder="Morning Blue" />

                <p className="flabel">Ondertitel</p>
                <input autoComplete="off" onChange={handleChange} name="subTitle" className="cInput" type="text" placeholder="For Flute Solo" />

                <p className="flabel">Luisteren</p>
                <input autoComplete="off" onChange={handleChange} name="listen" className="cInput" type="text" placeholder="https://www.youtube.com/ochtendblauw" />

                <p className="flabel">Kopen, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gratis ?<input type="checkbox" onChange={toggle} className="ccheckbox" name="free" value={check}/></p>

                <input autoComplete="off" onChange={handleChange} name="buy" className="cInput" type="text" placeholder="https://www.euprint.be/nl/ochtendblauw-morning-blue" />
              </Col>
              <Col md={6} className="cscol">
                <p className="flabel">Beschrijving</p>
                <textarea autoComplete="off" onChange={handleChange} name="description" className="textarea" placeholder="Telt 5 pagina’s, Gepubliceerd in 2003" />

                <p className="flabel cKaft">Kaft</p>
                <input autoComplete="off" onChange={handleChange} name="img" className="cInput" type="text" placeholder="https://www.euprint.be/ochtentblauw.jpg" />

                <p className="flabel">Index + Collectie</p>
                <input autoComplete="on" onChange={handleChange} name="section" className="cInput" type="text" placeholder="1Nieuw" />
              </Col>
              <button className="saveBtn" onClick={submit}>Toevoegen</button>
            </Row>
          </form>
        </div>
      </Col>
      <Col className="ccolOne" xl={5} >
        <Card listen={card.listen} title={card.title} img={card.img} subTitle={card.subTitle} description={card.description} buy={card.buy} free={card.free}/>
      </Col>

      </Row>
    </div>
  );
}

export default CreateCard;

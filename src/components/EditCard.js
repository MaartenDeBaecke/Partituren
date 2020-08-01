import React, { useState, useEffect } from 'react';
import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './card/Card';

function EditCard(props){
  const [card, setCard] = useState({
    title: "",
    subTitle: "",
    img: "",
    description: "",
    listen: "",
    buy: "",
  });
  const apiUrl = 'http://localhost:4000/cards/' + props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setCard(result.data);
    };

    fetchData();
  }, []);


  console.log(card);

  function handleChange(event){
    const {name, value} = event.target;
    setCard(prevCard => {
      return {
        ...prevCard,
        [name]: value
      }
    });

    console.log(card);
  }

  function submit(event){
    event.preventDefault();
    axios.post('http://localhost:4000/cards/edit/'+ props.match.params.id, card)
      .then(res => console.log(res.data));
    props.history.push('/');

  }


  return(
    <div className="create">
      <Row className="cRow">
        <Col className="ccolTwo" xl={7}>
          <div className="formCard">
            <h1 className="ccTitle">Bewerken</h1>
            <form className="createFrom" >

              <Row>
                <Col md={6}>
                  <p className="flabel">Titel</p>
                  <input autoComplete="off" onChange={handleChange} name="title" className="cInput" type="text" value={card.title} />

                  <p className="flabel">Ondertitel</p>
                  <input autoComplete="off" onChange={handleChange} name="subTitle" className="cInput" type="text" value={card.subTitle} />

                  <p className="flabel">Luisteren</p>
                  <input autoComplete="off" onChange={handleChange} name="listen" className="cInput" type="text" value={card.listen} />

                  <p className="flabel">Kopen</p>
                  <input autoComplete="off" onChange={handleChange} name="buy" className="cInput cKopen" type="text" value={card.buy} />
                </Col>
                <Col md={6} className="cscol">
                  <p className="flabel">Beschrijving</p>
                  <textarea autoComplete="off" onChange={handleChange} name="description" className="textarea" value={card.description} />

                  <p className="flabel cKaft">Kaft</p>
                  <input autoComplete="off" onChange={handleChange} name="img" className="cInput" type="text" value={card.img} />
                </Col>
                <button className="saveBtn" onClick={submit}>Aanpassen</button>
              </Row>
            </form>
          </div>
        </Col>
        <Col className="ccolOne" xl={5} >
          <Card listen={card.listen} title={card.title} img={card.img} subTitle={card.subTitle} description={card.description}/>
        </Col>
      </Row>
    </div>
  );
}

export default EditCard;

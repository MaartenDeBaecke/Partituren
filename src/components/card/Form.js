import React from "react";

function Form(){
  return(
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

            <p className="flabel">Kopen</p>
            <input autoComplete="off" onChange={handleChange} name="buy" className="cInput cKopen" type="text" placeholder="https://www.euprint.be/nl/ochtendblauw-morning-blue" />
          </Col>
          <Col md={6} className="cscol">
            <p className="flabel">Beschrijving</p>
            <textarea autoComplete="off" onChange={handleChange} name="description" className="textarea" placeholder="Telt 5 pagina’s, Gepubliceerd in 2003" />

            <p className="flabel cKaft">Kaft</p>
            <input autoComplete="off" onChange={handleChange} name="img" className="cInput" type="text" placeholder="https://www.euprint.be/ochtentblauw.jpg" />
          </Col>
          <button className="saveBtn" onClick={submit}>Toevoegen</button>
        </Row>
      </form>
    </div>
  );
}

export default Form;

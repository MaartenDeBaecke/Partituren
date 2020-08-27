import React from 'react';


const NotFound = () => {
  return (
    <div className="banner notFound">
      <div className="bird-cont ">
        <div className="bird">
        </div>
      </div>
      <br/>

      <h1 className="nameTitle errorTitle">404 Deze pagina bestaat niet meer</h1>
      <p className="errorSubTitle">Terug naar de catalogus </p>


      <div className="bird-cont bird3">
        <div className="bird">
        </div>
      </div>

      <form action="/" className="errorForm">
        <div className="btn">
            <span className="noSelect">
              <button className="errorBtn" action="submit" activeClass="active"><span className="clickOv">Catalogus </span></button>
            </span><div id="circle">
        </div></div>
      </form>

    </div>
  );
}

export default NotFound;

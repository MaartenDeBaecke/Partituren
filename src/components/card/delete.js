import React from "react";
import axios from "axios";

function Delete(props){

  function onDelete(e){
    e.preventDefault();
    axios.post('http://localhost:4000/cards/delete/'+ props.id, props.id)
      .then(res => console.log(res.data));
      window.location.reload(false);

  }

  return(
    <div>
      <div className="edit delete">
        <a href={"/delete/" + props.id} onClick={onDelete} className="editBtn"><i className="fas fa-trash fa-2x"></i></a>
      </div>
    </div>
  );
}

export default Delete;

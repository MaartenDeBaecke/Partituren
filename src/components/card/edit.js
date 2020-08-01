import React from "react";

function Edit(props){
  return(
    <div>
      <div className="edit">
        <a href="/" className="editBtn"><i class="far fa-edit fa-2x"></i></a>
      </div>
      <p>{props.id}</p>
    </div>
  );
}

export default Edit;

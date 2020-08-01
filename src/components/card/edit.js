import React from "react";

function Edit(props){
  return(
    <div>
      <div className="edit">
        <a href={"/edit/" + props.id} className="editBtn"><i className="far fa-edit fa-2x"></i></a>
      </div>
      <p>{props.id}</p>
    </div>
  );
}

export default Edit;

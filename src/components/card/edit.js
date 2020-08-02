import React from "react";

function Edit(props){
  return(
    <div>
      <div className="edit">
        <a href={"/edit/" + props.id} className="editBtn"><i className="far fa-edit fa-2x"></i></a>
      </div>
    </div>
  );
}

export default Edit;

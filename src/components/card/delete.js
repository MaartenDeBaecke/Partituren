import React from "react";

function Delete(props){
  return(
    <div>
      <div className="edit delete">
        <a href={"/edit/" + props.id} className="editBtn"><i className="fas fa-trash fa-2x"></i></a>
      </div>
    </div>
  );
}

export default Delete;

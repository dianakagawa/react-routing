import React from "react";
import {useParams} from "react-router-dom";

function Id() {
  const {id} = useParams();
  if (isNaN(id)) {
    return (
      <div>
        <h1>La palabra es: {id}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>El numero es: {id}</h1>
      </div>
    );
  }
}

export default Id;

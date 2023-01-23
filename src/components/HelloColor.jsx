import React from "react";
import {useParams} from "react-router-dom";

function HelloColor() {
  const {hello, color, background} = useParams();
  return (
    <div>
      <h1 style={{color: color, backgroundColor: background}}>{hello}</h1>
    </div>
  );
}

export default HelloColor;

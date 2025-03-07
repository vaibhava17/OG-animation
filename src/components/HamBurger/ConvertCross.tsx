import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles/convert-cross.css";
import "./styles/common.css";
import "./styles/animations.css";

function ConvertCross(): JSX.Element {
  const [classForActive, setClassForActive] = useState(false);

  const setActive = () => {
    setClassForActive((classForActive: Boolean) => !classForActive);
  };
  return (
    <div
      className={`box ${classForActive ? "active" : "not-active"}`}
      onClick={setActive}
    >
      <div className="convertcross firstChild"></div>
      <div className="convertcross secondChild"></div>
      <div className="convertcross thirdChild"></div>
    </div>
  );
}

export default ConvertCross;

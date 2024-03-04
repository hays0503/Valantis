import React, { useState } from "react";
import style from "./Expander.module.css";
import Up from "@img/Up.svg";
import Down from "@img/Down.svg";

const Expander = (props) => {
  const { Header, children } = props;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={style.expander}>
      <div
        className={style.expanderHeader}
        onClick={() => setIsVisible(!isVisible)}
      >
        <img src={isVisible ? Up : Down} />
        <h4>{Header}</h4>
      </div>
      {isVisible && <>{children}</>}
    </div>
  );
};

export default Expander;

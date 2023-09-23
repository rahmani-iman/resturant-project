import React from "react";

//Style
import style from "./Loader.module.css";

//Gif
import loading from "../../assets/images/loading.gif";

const Loader = () => {
  return (
    <div className={style.container}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loader;

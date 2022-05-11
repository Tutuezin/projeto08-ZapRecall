import React from "react";
import "./styles.css";

export default function Welcome() {
  const [next, setNext] = React.useState("welcome");

  function NextScreen() {
    setNext("invisible");
  }

  return (
    <div className={next}>
      <img src="/Assets/logo.svg" alt="" width="136" height="161"></img>
      <h1>ZapRecall </h1>
      <button onClick={() => NextScreen()}> Inicar Recall!</button>
    </div>
  );
}

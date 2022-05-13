import "./styles.css";
import logo from "../../assets/img/logo.svg";

export default function Welcome({ ChangeScreen, next }) {
  return (
    <div className={next}>
      <img src={logo} alt="logo" width="136" height="161"></img>
      <h1>ZapRecall </h1>
      <button onClick={ChangeScreen}>Inicar Recall!</button>
    </div>
  );
}

import "./styles.css";
import logopequena from "../../../../assets/img/logopequena.svg";

export default function Header({ OpenScreen, open }) {
  return (
    <header>
      <img width={52} height={60} src={logopequena} alt="logo pequena" />
      <h2>ZAPRECALL</h2>
    </header>
  );
}

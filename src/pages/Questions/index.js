import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import correct from "../../assets/img/correct.svg";

export default function ZapRecall({ open }) {
  return (
    <div className={open}>
      <Header />
      <Container />
      <Footer>
        <h3> /8 CONCLUÍDOS</h3>
        <div className="icons">
          <img src={correct} alt="" />
          <img src={correct} alt="" />
          <img src={correct} alt="" />
          <img src={correct} alt="" />
          <img src={correct} alt="" />
          <img src={correct} alt="" />
          <img src={correct} alt="" />
          <img src={correct} alt="" />
        </div>
      </Footer>
    </div>
  );
}

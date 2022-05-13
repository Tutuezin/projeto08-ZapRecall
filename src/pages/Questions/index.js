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
        <h3>1/8 CONCLUÍDOS</h3>
        <img src={correct} alt="" />
      </Footer>
    </div>
  );
}

import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

export default function ZapRecall({ open }) {
  return (
    <div className={open}>
      <Header />
      <Container />
      <Footer></Footer>
    </div>
  );
}

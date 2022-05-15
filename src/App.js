import "./assets/css/App.css";
import React from "react";
import Welcome from "./pages/Welcome";
import Questions from "./pages/Questions";
function App() {
  const [next, setNext] = React.useState("welcome");
  const [open, setOpen] = React.useState("invisible");
  const [dados, setDados] = React.useState("");

  const ChangeScreen = () => {
    setNext("invisible");
    setOpen("questions");
  };

  return (
    <div className="App">
      <Welcome ChangeScreen={ChangeScreen} next={next} />
      <Questions open={open} />
    </div>
  );
}

export default App;

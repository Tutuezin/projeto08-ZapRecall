import { useState } from "react";
import "./styles.css";
import vector from "../../../../assets/img/vector.svg";
import turn from "../../../../assets/img/turn.svg";

function Question({ title, alt, question }) {
  const [classQuestion, setClassQuestion] = useState("closedQuestion");

  const ToggleQuestion = () => {
    setClassQuestion(
      classQuestion === "openedQuestion" ? "closedQuestion" : "openedQuestion"
    );
  };

  return classQuestion === "closedQuestion" ? (
    <div className={classQuestion}>
      <h3>{title}</h3>
      <img onClick={ToggleQuestion} src={vector} alt={alt} />
    </div>
  ) : (
    <div className={classQuestion}>
      <h3>{question}</h3>
      <img width={30} height={20} src={turn} alt="turn" />
    </div>
  );
}

export default function Container() {
  const closeds = [
    {
      title: "Pergunta 1",
      alt: "Pergunta 1",
      question: "O que é  JSX?",
    },
    {
      title: "Pergunta 2",
      alt: "Pergunta 2",
    },
    {
      title: "Pergunta 3",
      alt: "Pergunta 3",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
    },
  ];

  return (
    <div className="container">
      {closeds.map(({ title, alt, question }, index) => (
        <Question key={index} title={title} alt={alt} question={question} />
      ))}
    </div>
  );
}

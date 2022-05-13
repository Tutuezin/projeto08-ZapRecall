import { useState } from "react";
import "./styles.css";
import vector from "../../../../assets/img/vector.svg";
import turn from "../../../../assets/img/turn.svg";
import correct from "../../../../assets/img/correct.svg";
import soso from "../../../../assets/img/soso.svg";
import wrong from "../../../../assets/img/wrong.svg";

function Question({ title, alt, question }) {
  const [classQuestion, setClassQuestion] = useState("closedQuestion");
  const [turned, setTurned] = useState(false);
  const [finished, setFinished] = useState("");
  const [classTitle, setClassTitle] = useState("");

  const ToggleQuestion = () => {
    setClassQuestion(
      classQuestion === "openedQuestion" ? "closedQuestion" : "openedQuestion"
    );
  };

  const TurnQuestion = () => {
    setTurned(!turned);
  };

  const FinishedQuestion = () => {
    switch (finished) {
      case "":
        return classQuestion === "closedQuestion" ? vector : turn;
      case "wrong":
        return wrong;
      case "soso":
        return soso;
      case "correct":
        return correct;
    }
  };
  const AfterFinished = () => {
    if (finished) return () => {};
    return classQuestion === "closedQuestion"
      ? ToggleQuestion()
      : TurnQuestion();
  };

  return (
    <div className={classQuestion}>
      {!turned ? (
        <>
          <h3 className={finished ? "through " + classTitle : ""}>
            {classQuestion === "closedQuestion" ? title : question}
          </h3>
          <img
            onClick={AfterFinished}
            src={FinishedQuestion()}
            alt={classQuestion === "closedQuestion" ? alt : turn}
          />
        </>
      ) : (
        <div className="zap">
          <h4
            onClick={() => {
              setClassTitle("wrong");
              setFinished("wrong");
              setClassQuestion("closedQuestion finished");
              TurnQuestion();
            }}
          >
            Não lembrei
          </h4>
          <h4
            onClick={() => {
              setClassTitle("soso");
              setFinished("soso");
              setClassQuestion("closedQuestion finished");
              TurnQuestion();
            }}
          >
            Quase não lembrei
          </h4>
          <h4
            onClick={() => {
              setClassTitle("correct");
              setFinished("correct");
              setClassQuestion("closedQuestion finished");
              TurnQuestion();
            }}
          >
            Zap!
          </h4>
        </div>
      )}
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
      question: "O React é __",
    },
    {
      title: "Pergunta 3",
      alt: "Pergunta 3",
      question: "Componentes devem iniciar com __",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
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

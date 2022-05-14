import { useState } from "react";
import "./styles.css";
import vector from "../../../../assets/img/vector.svg";
import turn from "../../../../assets/img/turn.svg";
import correct from "../../../../assets/img/correct.svg";
import soso from "../../../../assets/img/soso.svg";
import wrong from "../../../../assets/img/wrong.svg";
import Footer from "../Footer";

function Question({ title, alt, question, answer }) {
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
          <h3
            className={finished ? "closedQuestion through " + classTitle : ""}
          >
            {classQuestion.includes("closedQuestion") ? title : question}
          </h3>
          <img
            width={classQuestion === "closedQuestion" ? 20 : 30}
            height={classQuestion === "closedQuestion" ? 23 : 20}
            onClick={AfterFinished}
            src={FinishedQuestion()}
            alt={classQuestion === "closedQuestion" ? alt : turn}
          />
        </>
      ) : (
        <div className="zap">
          <h3>{answer}</h3>
          <div className="zip">
            <h4
              className="buttonWrong"
              onClick={() => {
                setClassTitle("wrong");
                setFinished("wrong");
                setClassQuestion("closedQuestion finished");
                TurnQuestion();
              }}
            >
              Não <br /> lembrei
            </h4>
            <h4
              className="buttonSoso"
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
              className="buttonCorrect"
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
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      title: "Pergunta 2",
      alt: "Pergunta 2",
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      title: "Pergunta 3",
      alt: "Pergunta 3",
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      title: "Pergunta 4",
      alt: "Pergunta 4",
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      title: "Pergunta 5",
      alt: "Pergunta 5",
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      title: "Pergunta 6",
      alt: "Pergunta 6",
      question: "Usamos o npm para __ ",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      title: "Pergunta 7",
      alt: "Pergunta 7",
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      title: "Pergunta 8",
      alt: "Pergunta 8",
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <div className="container">
      {closeds.map(({ title, alt, question, answer }, index) => (
        <Question
          key={index}
          title={title}
          alt={alt}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
}

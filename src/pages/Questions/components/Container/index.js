import { useState, useEffect } from "react";
import "./styles.css";
import vector from "../../../../assets/img/vector.svg";
import turn from "../../../../assets/img/turn.svg";
import correct from "../../../../assets/img/correct.svg";
import soso from "../../../../assets/img/soso.svg";
import wrong from "../../../../assets/img/wrong.svg";

function Question({ title, alt, question, answer, addQuestion }) {
  const [classQuestion, setClassQuestion] = useState("closedQuestion");
  const [turned, setTurned] = useState(false);
  const [finished, setFinished] = useState("");
  const [classTitle, setClassTitle] = useState("");
  const [response, setResponse] = useState("")
  const ToggleQuestion = () => {
    setClassQuestion(
      classQuestion === "openedQuestion" ? "closedQuestion" : "openedQuestion"
    );
  };

  const TurnQuestion = () => {
    setTurned(!turned);
  };

  useEffect(() => {
    if (response) addQuestion(response)
  }, [response])

  const FinishedQuestion = () => {
    switch (finished) {
      case "":
        return classQuestion === "closedQuestion" ? vector : turn;
      case "wrong":
        setTimeout(() => {
          setResponse("wrong")
        }, 100);
        return wrong;
      case "soso":
        setTimeout(() => {
          setResponse("soso")
        }, 100);
        return soso;
      case "correct":
        setTimeout(() => {
          setResponse("correct")
        }, 100);
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

export default function Container({addQuestion}) {
  const closeds = [
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "O que é  JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "Usamos o npm para __ ",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      title: "Pergunta",
      alt: "Pergunta",
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  closeds.sort(() => {
    return Math.random() - 0.5
  })

  return (
    <div className="container">
      {closeds.map(({ title, alt, question, answer }, index) => (
        <Question
          key={index}
          title={title + ` ${index + 1}`}
          alt={alt}
          question={question}
          answer={answer}
          addQuestion={addQuestion}
        />
      ))}
    </div>
  );
}

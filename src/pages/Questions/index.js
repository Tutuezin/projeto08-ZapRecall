import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import correct from "../../assets/img/correct.svg";
import soso from "../../assets/img/soso.svg";
import wrong from "../../assets/img/wrong.svg";
import sad from "../../assets/img/sad.png";
import party from "../../assets/img/party.png";

import { useState, useEffect } from 'react';

export default function ZapRecall({ open }) {
  const [questions, setQuestions] = useState([])
  const [finishedQuiz, setFinishedQuiz] = useState(false)
  const [classFinished, setClassFinished] = useState("")
  const [positiveScore, setPositiveScore] = useState(true)

  const addQuestion = (question) => {
    setQuestions([...questions, question])
  }

  useEffect(() => {
    if (questions.length === 8) {
      setFinishedQuiz(true)
      setClassFinished("quiz-finished")
      questions.forEach((item) => {
        if (item === "wrong") setPositiveScore(false)
      })
    }
  }, [questions])

  const getImg = (string) => {
    switch (string) {
      case "correct":
        return correct
      case "soso":
        return soso
      case "wrong":
        return wrong
    }
  }

  return (
    <div className={open}>
      <Header />
      <Container addQuestion={addQuestion} />
      <Footer className={classFinished}>
        {
          !finishedQuiz ? 
          <>
            <h3>{`${questions.length}/8`} CONCLUÍDOS</h3>
            <div className="icons">
              {questions.map((item, index) => {
                return <img key={index} src={getImg(item)} alt="" />
              })}
            </div>
          </>
          :
          <div className="container-footer">
          {
            positiveScore ?
            (<>
              <div className='final-message-container'>
                <h2 className='final-message'><img src={party} alt="emoji feliz" width="23" height="23" /> <b>Parabéns</b></h2>
                <p>Você não esqueceu de nenhum flashcard!</p>
              </div>
            </>) : 
            (<>
              <div className='final-message-container'>
                <h2 className='final-message'><img src={sad} alt="emoji triste" width="23" height="23" /> <b>Putz...</b></h2>
                <p>Ainda faltam alguns... Mas não desanime!</p>
              </div>
            </>)
          }
          <h3>{`${questions.length}/8`} CONCLUÍDOS</h3>
          <div className="icons">
            {questions.map((item, index) => {
              return <img key={index} src={getImg(item)} alt="" />
            })}
          </div>
          </div>
        }
      </Footer>
    </div>
  );
}

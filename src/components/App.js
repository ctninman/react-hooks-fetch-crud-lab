import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(questions => setQuestions(questions))
  }, [] )

  function handleDeleteQuestion (deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)
  }

  function handleUpdateAnswer (updatedAnswer) {
    const updatedAnswers = questions.map((question) => {
      if (question.id === updatedAnswer.id) {
        return updatedAnswer;
      } else {
        return question;
      }
    })
    setQuestions(updatedAnswers)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm 
          questions={questions}  
          setQuestions={setQuestions} 
          setPage={setPage}/> 
        : 
        <QuestionList 
          questions={questions} 
          setQuestions={setQuestions} 
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateAnswer={handleUpdateAnswer}/>}
    </main>
  );
}

export default App;

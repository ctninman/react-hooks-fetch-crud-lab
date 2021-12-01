import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({questions, setQuestions, onDeleteQuestion, onUpdateAnswer}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem 
            key={question.id}
            question={question}
            setQuestions={setQuestions}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateAnswer={onUpdateAnswer}
            />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

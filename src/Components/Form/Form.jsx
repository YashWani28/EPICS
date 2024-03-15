import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const questions = [
    "Have you seen any notable adjustments to your sleep patterns, such as trouble falling asleep or excessive sleeping?",
    "Are you enjoying or becoming interested in the things you used to enjoy?",
    "Even after getting enough sleep, do you find yourself easily worn out or lacking in energy?",
    "In recent times, have you felt guilty or unworthy?",
    "Have you been angrier or more easily upset than normal?",
    "Do you consider suicide or self-harm?",
    "How focused and capable of making decisions are you lately?",
    "Do you frequently feel overburdened or struggle to control your stress?",
    "Do you observe yourself avoiding people or withdrawing from social situations?",
    "Are you enjoying or becoming interested in the things you used to enjoy? ",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [formData, setFormData] = useState([]);

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleAnswerChange = (event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const newFormData = questions.map((question, index) => ({
      question: question,
      answer: answers[index],
    }));
    setFormData(newFormData);
    setAnswers(Array(questions.length).fill("")); // Reset answers to empty strings
    console.log(newFormData);
  };

  return (
    <div className="container">
      <p className="question">{questions[currentQuestionIndex]}</p>
      <input
        id="qfield"
        type="text"
        value={answers[currentQuestionIndex]}
        onChange={handleAnswerChange}
        placeholder="Your answer"
      />
      <br />

      <div className="buttons">
        <button class="kformbtn" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        {currentQuestionIndex !== questions.length - 1 && (
          <button class="kformbtn" onClick={handleNext}>Next</button>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <button class="kformbtn" onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Form;

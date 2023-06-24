import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Output from './Output';
import './App.css';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormSubmit = (inputValue) => {
    setUserInput(inputValue);
    setOutput(inputValue.toUpperCase());
  };

  return (
    <div>
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <Output result={output} />
    </div>
  );
};

export default App;

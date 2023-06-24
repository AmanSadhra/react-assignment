import React from 'react';

const Output = ({ result }) => {
  return (
    <div>
      <h2 style={{color: "red",}}>Output:</h2>
      <p>{result}</p>
    </div>
  );
};

export default Output;

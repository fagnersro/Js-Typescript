import React, { useState, ChangeEvent } from 'react';

const State = () => {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>O texto é: {text}</h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;

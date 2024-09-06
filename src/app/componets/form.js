import React, { useState } from 'react';

function Form() {
  const [input, setInput] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="글을 입력하세요"
        />
        <button type="submit">전송</button>
      </form>
      {submittedValue && <p>Submitted: {submittedValue}</p>}
    </div>
  );
}

export default Form;

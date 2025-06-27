// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: input }),
    });

    const result = await response.json();
    navigate('/result', { state: { result } });
  };

  return (
    <div>
      <h1>Enter Something</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default HomePage;

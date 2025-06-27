// src/pages/ResultPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Processed Result</h1>
      <p>{state?.result?.message}</p>
    </div>
  );
}

export default ResultPage;

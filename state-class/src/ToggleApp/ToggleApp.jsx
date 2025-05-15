import React, { useState } from 'react';

const ARRAY = [
  { question: "What is React?", answer: "A JavaScript library for building user interfaces.", opened: false },
  { question: "What is JSX?", answer: "JSX is a syntax extension that looks like HTML.", opened: false },
  { question: "What is a component?", answer: "A reusable piece of UI.", opened: false }
]

function App() {
  const [qaList, setQaList] = useState(ARRAY);


















  const toggleAnswer = (index) => {
    const updatedList = qaList.map((item, i) =>
      i === index ? { ...item, opened: !item.opened } : item
    );
    setQaList(updatedList);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>React Q&A</h2>
      {qaList.map((item, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <div
            onClick={() => toggleAnswer(index)}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            {item.question}
          </div>
          {item.opened && (
            <div style={{ marginTop: '5px', color: 'gray' }}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;

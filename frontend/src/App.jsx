// src/App.jsx
import React from 'react';
import Header from './components/Header';

const App = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 d-flex justify-content-center align-items-start pt-4">
        {children}
      </main>
    </div>
  );
};

export default App;

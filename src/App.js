import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Angel Pena" avatar="https://randomuser.me/api/portraits/men/23.jpg" online />
      <Contact name="Jennie Reid" avatar="https://randomuser.me/api/portraits/women/67.jpg" online />
      <Contact name='Harold Crawford' avatar = 'https://randomuser.me/api/portraits/men/79.jpg' />
    </div>
  );
}

export default App;

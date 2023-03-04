import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <form>
      <input type="text" name="nome" placeholder="nome" />
      <input type="text" name="email" placeholder="email" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;

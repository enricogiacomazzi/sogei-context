import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { One } from './components/One';
import { themes } from './commonProps';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState<themes>('dark');

  const toggleTheme = () => {
      setTheme(s => s === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <One title="A1">
        <h3>prova</h3>
      </One>
      <One title="A2">
        <h3>prova 2</h3>
      </One>
      <button onClick={toggleTheme}>toggle theme</button>
    </ThemeContext.Provider>
  );
}

export default App;

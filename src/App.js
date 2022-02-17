/* eslint-disable no-console */

// App based on Simo Edwin's tutorial:
// https://www.youtube.com/watch?v=pCA4qpQDZD8

import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;

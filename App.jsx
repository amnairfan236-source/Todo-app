import React, { useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState('');

  // Todo add karne ka function
  const addTodo = (e) => {
    e.preventDefault();
    if (inputVal.trim() === '') return;
    setTodos([...todos, inputVal]);
    setInputVal('');
  };

  // Todo delete karne ka function
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>My Todo App</h1>
        <TodoInput 
          inputVal={inputVal} 
          setInputVal={setInputVal} 
          addTodo={addTodo} 
        />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff0f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(255, 182, 193, 0.3)',
    width: '400px',
  },
  heading: {
    color: '#d81b60',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
  },
};

export default App;
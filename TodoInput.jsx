import React from 'react';

function TodoInput({ inputVal, setInputVal, addTodo }) {
  return (
    <form onSubmit={addTodo} style={styles.inputContainer}>
      <input 
        type="text" 
        placeholder="Add a new todo..." 
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

const styles = {
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px 14px',
    borderRadius: '8px',
    border: '2px solid #f8bbd0',
    outline: 'none',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#e91e63',
    color: '#ffffff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default TodoInput;
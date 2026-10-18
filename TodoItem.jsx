import React from 'react';

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <li style={styles.item}>
      <span style={styles.text}>{todo}</span>
      <button onClick={() => deleteTodo(index)} style={styles.deleteBtn}>Delete</button>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff5f8',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #fce4ec',
  },
  text: {
    color: '#4a4a4a',
    fontSize: '14px',
  },
  deleteBtn: {
    backgroundColor: '#ff4081',
    color: '#ffffff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
  },
};

export default TodoItem;
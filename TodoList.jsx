import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul style={styles.list}>
      {todos.length === 0 ? (
        <p style={styles.emptyText}>No todos added yet.</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            index={index} 
            todo={todo} 
            deleteTodo={deleteTodo} 
          />
        ))
      )}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: '14px',
  },
};

export default TodoList;
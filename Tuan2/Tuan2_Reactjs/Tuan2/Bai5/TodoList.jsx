import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text: text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Danh sách công việc</h2>
      
      <TodoInput onAdd={addTodo} />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={deleteTodo} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
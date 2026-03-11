function TodoItem({ todo, onDelete }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Xóa</button>
    </li>
  );
}
export default TodoItem;
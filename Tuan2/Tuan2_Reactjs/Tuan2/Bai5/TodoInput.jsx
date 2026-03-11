import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder="Thêm việc mới..."
      />
      <button onClick={() => { onAdd(value); setValue(""); }}>Thêm</button>
    </div>
  );
}
export default TodoInput;
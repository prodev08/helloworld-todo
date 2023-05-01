import { useState } from "react";

const TodoCreate = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <input onChange={handleTitleChange} />
      <button
        onClick={() => {
          addTodo(title);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoCreate;
import { useState, useEffect } from "react";

const TodoListItem = ({ id, title, isDone, toggleTodoStatus, deleteTodo }) => {
  const [todoStatus, setTodoStatus] = useState();

  useEffect(() => {
    setTodoStatus(isDone);
  }, [isDone]);

  const handleChangeTodoStatus = () => {
    toggleTodoStatus(id, !todoStatus);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <div>
      {id}
      &nbsp;&nbsp;&nbsp;
      {title}
      <input
        type="checkbox"
        checked={todoStatus}
        onChange={handleChangeTodoStatus}
      />
      <button onClick={handleDeleteTodo}>Delete </button>
    </div>
  );
};

export default TodoListItem;
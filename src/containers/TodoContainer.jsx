import {useState} from 'react'
import TodoCreate from '../components/TodoCreate';
import TodoListItem from '../components/TodoListItem';

const initialTodos = [
  {
    id: 1,
    title: "todo1",
    isDone: true,
  },
  {
    id: 2,
    title: "todo2",
    isDone: true,
  },
];

let startIndex = 100;

const TodoContainer = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: startIndex,
        title,
        isDone: false,
      },
    ]);

    startIndex++;
  };

  const toggleTodoStatus = (id, todoStatus) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: todoStatus };
      }
      return todo;
    });

    setTodos(editedTodos);
  };

  const deleteTodo = (id) => {
    const editedTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }

      return true;
    });

    setTodos(editedTodos);
  };

  const renderTodoItems = () => {
    return todos.map((todo, index) => {
      return (
        <TodoListItem
          key={index}
          id={todo.id}
          title={todo.title}
          isDone={todo.isDone}
          toggleTodoStatus={toggleTodoStatus}
          deleteTodo={deleteTodo}
        />
      );
    });
  };

  return (
    <div>
      <TodoCreate addTodo={addTodo} />
      {renderTodoItems()}
    </div>
  );
};

export default TodoContainer;

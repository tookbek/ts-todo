import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './store/todo';
import { RootState } from './store/store';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const id = useRef<number | null>(null);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const saveTodo = () => {
    if (id.current !== null) {
      const newTodo = {
        text: inputValue,
        id: id.current,
      };
      dispatch(editTodo(newTodo));
      id.current = null;
    } else {
      dispatch(addTodo(inputValue));
    }
    setInputValue('');
  };

  const deleteHandler = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  const editHandle = (todoId: number) => {
    const todoToEdit = todos.find((todo) => todo.id === todoId);
    if (todoToEdit) {
      setInputValue(todoToEdit.text);
      id.current = todoId;
    }
  };

  return (
    <>
    <div className=" todo-content">
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={saveTodo}>Save</button>
      <ul>
        <div className="todo">
        {todos.map((todo) => (
            <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            <button onClick={() => editHandle(todo.id)}>Edit</button>
          </li>
          
        ))}
        </div>
       
       
      </ul>
 
       </div>
    
    </>
  );
};

export default App;

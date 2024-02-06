import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; status: string }[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = () => {
    if (newTodoText.trim() === '') {
      return;
    }

    const newTodo = { id: Date.now(), text: newTodoText, status: 'In Progress' };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    saveTodosToStorage([...todos, newTodo]);
    setNewTodoText(''); // Очистити поле вводу після додавання справи
  };

  const handleUpdateStatus = (id: number, status: string) => {
    const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
    saveTodosToStorage(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    saveTodosToStorage(filteredTodos);
  };

  const saveTodosToStorage = (updatedTodos: { id: number; text: string; status: string }[]) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
      <main>
        <h1>Todo List</h1>
        <TodoList todos={todos} onUpdateStatus={handleUpdateStatus} onDelete={handleDeleteTodo} />
        <div>
          <input
              type="text"
              placeholder="Add Todo"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </main>
  );
};

export default App;
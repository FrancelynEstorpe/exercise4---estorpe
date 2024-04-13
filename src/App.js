import React from 'react';
import AddTodo from './components/todoadd';
import TodoList from './components/todolist';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#89cff0', minHeight: '100vh', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;

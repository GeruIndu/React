import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoName, todoDueData) => {
    let NewTodoItems = [...todoItems, {name: todoName, dueDate: todoDueData}];
    setTodoItems(NewTodoItems);
  }

  const deleteItem = (todoName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems)
  }

  return (
    <TodoItemsContext.Provider value={{
            todoItems : todoItems,
            addNewItem: addNewItem,
            deleteItem: deleteItem,
          }}>
      <center className="todo-container">
        <AddTodo/>
        <ErrorMessage/>
        <TodoItems/>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
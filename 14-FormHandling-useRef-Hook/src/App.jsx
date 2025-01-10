import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handlenewTodoItems = (todoName, todoDueData) => {
    setTodoItems((prev) => [
      ...prev, {name: todoName, dueDate: todoDueData}
    ]);
  }

  const handleDeleteButton = (todoName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AddTodo onNewItem = {handlenewTodoItems}/>
      {todoItems.length == 0 && <ErrorMessage todoItems={todoItems} />}
      <TodoItems todoItems={todoItems} onDeleteButton = {handleDeleteButton}/>
    </center>
  );
}

export default App;
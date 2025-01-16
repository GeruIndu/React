import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


function ErrorMessage() {

    const {todoItems} =  useContext(TodoItemsContext)

    return !todoItems.length && <h2>Empty Bucket</h2>
}

export default ErrorMessage;
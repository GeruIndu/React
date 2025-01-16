import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([
  {
    todoItems: {},
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);

const TodoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.todoDueData },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoName
    );
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(TodoItemsReducer, []);

  const addNewItem = (todoName, todoDueData) => {
    const NewItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDueData,
      },
    };
    dispatchTodoItems(NewItemAction);
  };

  const deleteItem = (todoName) => {
    const NewItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(NewItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

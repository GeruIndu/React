import { useRef, useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo( {onNewItem} ) {

    const todoNameElement = useRef();
    const dueDateElement = useRef();

    
    const handleAddClick = (event) => {
      event.preventDefault()
      const todoName = todoNameElement.current.value;
      const todoDate = dueDateElement.current.value;

      todoNameElement.current.value = '';
      dueDateElement.current.value = '';
      
      onNewItem(todoName, todoDate);
    }

    return (
      <div className="container text-center">
        <form className="row kg-row"
          onSubmit={handleAddClick}>
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" 
                ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" 
                ref={dueDateElement}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-success kg-button"
            >
              <MdAssignmentAdd />
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default AddTodo;